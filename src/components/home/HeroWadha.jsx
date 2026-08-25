import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

// ─── Config ───────────────────────────────────────────────────────────────────
const TOTAL_FRAMES = 121;

// Portrait (mobile) → /900/   |   Landscape (desktop) → /400/
const getImgPath = (n, portrait) =>
  `/${portrait ? '900' : '400'}/${String(n).padStart(5, '0')}.jpg`;

// Cap DPR at 2 — phones with dpr=3/4 would create massive canvases
const getDpr = () => Math.min(window.devicePixelRatio || 1, 2);

// Dynamically measure the actual fixed navbar height
const getNavbarHeight = () => {
  const nav = document.querySelector('nav');
  return nav ? nav.getBoundingClientRect().height : 72;
};

// Use the real visible viewport height (avoids the mobile 100vh bug)
const getViewportH = () =>
  window.visualViewport ? window.visualViewport.height : window.innerHeight;

// Reliable portrait check
const isPortraitScreen = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(orientation: portrait)').matches;

// ─── Module-level frame cache ─────────────────────────────────────────────────
// Persists across React mounts/unmounts for the lifetime of the browser tab.
// Key: 'landscape' | 'portrait'
// Value: { images: Image[], fullyLoaded: boolean, firstFrameReady: boolean }
const frameCache = {};

// ─── Progressive Loader ───────────────────────────────────────────────────────
// • firstFramePromise resolves after just frame 1 (~150 KB) → canvas shows NOW
// • remaining 120 frames trickle in via batched background requests
// • writes into both imagesArray AND frameCache so re-mounts reuse results
function startProgressiveLoad(portrait, imagesArray, onProgress) {
  const cacheKey = portrait ? 'portrait' : 'landscape';
  let cancelled = false;

  const loadOne = (i) =>
    new Promise((resolve) => {
      const img = new Image();
      img.src = getImgPath(i, portrait);
      img.onload = () => {
        if (!cancelled) {
          imagesArray[i - 1] = img;
          frameCache[cacheKey].images[i - 1] = img; // write to cache
        }
        resolve();
      };
      img.onerror = () => resolve();
    });

  const firstFramePromise = loadOne(1).then(() => {
    if (!cancelled) frameCache[cacheKey].firstFrameReady = true;
  });

  firstFramePromise.then(() => {
    if (cancelled) return;
    onProgress(1 / TOTAL_FRAMES);

    let loaded = 1;
    const BATCH = 8;

    const loadBatch = async (start) => {
      if (cancelled || start > TOTAL_FRAMES) return;
      const end = Math.min(start + BATCH - 1, TOTAL_FRAMES);
      const batch = [];
      for (let i = start; i <= end; i++) batch.push(loadOne(i));
      await Promise.all(batch);
      if (!cancelled) {
        loaded += batch.length;
        const ratio = Math.min(loaded / TOTAL_FRAMES, 1);
        onProgress(ratio);
        if (ratio >= 1) frameCache[cacheKey].fullyLoaded = true;
        loadBatch(end + 1);
      }
    };

    loadBatch(2);
  });

  return {
    firstFramePromise,
    cancelAll: () => { cancelled = true; },
  };
}

// ─── Component ────────────────────────────────────────────────────────────────
const HeroWadha = () => {
  const sectionRef  = useRef(null);
  const stickyRef   = useRef(null);
  const canvasRef   = useRef(null);
  const imagesRef   = useRef([]);
  const frameRef    = useRef(0);
  const rafRef      = useRef(null);
  const navHRef     = useRef(72);
  const viewHRef    = useRef(600);
  const portraitRef = useRef(isPortraitScreen());
  const cancelRef   = useRef(null);

  const [loadProgress, setLoadProgress] = useState(0);
  const [ready, setReady]               = useState(false);
  const [fullyLoaded, setFullyLoaded]   = useState(false);

  // ── Draw frame — falls back to nearest loaded frame if target not yet ready ──
  const drawFrame = useCallback((index) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let img = imagesRef.current[index];
    if (!img || !img.complete || !img.naturalWidth) {
      for (let i = index - 1; i >= 0; i--) {
        const c = imagesRef.current[i];
        if (c && c.complete && c.naturalWidth) { img = c; break; }
      }
    }
    if (!img || !img.complete || !img.naturalWidth) return;

    const ctx = canvas.getContext('2d');
    const W = canvas.width;
    const H = canvas.height;

    const scale = Math.max(W / img.naturalWidth, H / img.naturalHeight);
    const sw = img.naturalWidth  * scale;
    const sh = img.naturalHeight * scale;
    const sx = (W - sw) / 2;
    const sy = (H - sh) / 2;

    ctx.clearRect(0, 0, W, H);
    ctx.drawImage(img, sx, sy, sw, sh);
  }, []);

  // ── Resize canvas (correct HiDPI) ─────────────────────────────────────────
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const sticky = stickyRef.current;
    if (!canvas || !sticky) return;

    const navH = getNavbarHeight();
    const viewH = getViewportH();
    const dpr = getDpr();

    navHRef.current  = navH;
    viewHRef.current = viewH;

    const displayW = sticky.clientWidth || window.innerWidth;
    const displayH = viewH - navH;

    canvas.width  = Math.round(displayW * dpr);
    canvas.height = Math.round(displayH * dpr);
    canvas.style.width  = '100%';
    canvas.style.height = `${displayH}px`;

    sticky.style.top    = `${navH}px`;
    sticky.style.height = `${displayH}px`;

    drawFrame(frameRef.current);
  }, [drawFrame]);

  // ── Start (or restart) progressive load — checks cache first ────────────────
  const startLoad = useCallback((portrait) => {
    if (cancelRef.current) cancelRef.current();

    const cacheKey = portrait ? 'portrait' : 'landscape';
    const cached = frameCache[cacheKey];

    // ✅ Cache hit: frames already in memory — show instantly, no network needed
    if (cached && cached.firstFrameReady) {
      imagesRef.current = cached.images;
      frameRef.current  = 0;
      setLoadProgress(1);
      setReady(true);
      setFullyLoaded(cached.fullyLoaded);

      // If the previous load hadn't fully finished, resume it in background
      if (!cached.fullyLoaded) {
        const { cancelAll } = startProgressiveLoad(
          portrait,
          imagesRef.current,
          (ratio) => {
            setLoadProgress(ratio);
            if (ratio >= 1) setFullyLoaded(true);
          }
        );
        cancelRef.current = cancelAll;
      }
      return;
    }

    // ❌ Cache miss: initialise cache entry and start fresh progressive load
    frameCache[cacheKey] = {
      images: new Array(TOTAL_FRAMES).fill(null),
      firstFrameReady: false,
      fullyLoaded: false,
    };

    setReady(false);
    setFullyLoaded(false);
    setLoadProgress(0);
    imagesRef.current = frameCache[cacheKey].images;
    frameRef.current  = 0;

    const { firstFramePromise, cancelAll } = startProgressiveLoad(
      portrait,
      imagesRef.current,
      (ratio) => {
        setLoadProgress(ratio);
        if (ratio >= 1) setFullyLoaded(true);
      }
    );
    cancelRef.current = cancelAll;

    // Show canvas the moment frame 1 arrives
    firstFramePromise.then(() => setReady(true));
  }, []);

  // ── Initial load ──────────────────────────────────────────────────────────
  useEffect(() => {
    const portrait = isPortraitScreen();
    portraitRef.current = portrait;
    startLoad(portrait);
    return () => { if (cancelRef.current) cancelRef.current(); };
  }, [startLoad]);

  // ── Resize / orientation listeners ───────────────────────────────────────
  useEffect(() => {
    resizeCanvas();

    const onResize = () => {
      const nowPortrait = isPortraitScreen();
      if (nowPortrait !== portraitRef.current) {
        portraitRef.current = nowPortrait;
        startLoad(nowPortrait);
      }
      resizeCanvas();
    };

    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResize);
    if (window.visualViewport) window.visualViewport.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('orientationchange', onResize);
      if (window.visualViewport) window.visualViewport.removeEventListener('resize', onResize);
    };
  }, [resizeCanvas, startLoad]);

  // ── Draw frame 0 as soon as images start arriving ─────────────────────────
  useEffect(() => {
    if (ready) { resizeCanvas(); drawFrame(0); }
  }, [ready, resizeCanvas, drawFrame]);

  // ── Scroll driver ─────────────────────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section || !ready) return;

      const rect        = section.getBoundingClientRect();
      const scrollableH = section.offsetHeight - window.innerHeight;
      const scrolled    = -rect.top;
      const progress    = Math.max(0, Math.min(1, scrolled / scrollableH));
      const targetFrame = Math.round(progress * (TOTAL_FRAMES - 1));

      if (targetFrame !== frameRef.current) {
        frameRef.current = targetFrame;
        cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => drawFrame(targetFrame));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    if (window.visualViewport) window.visualViewport.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (window.visualViewport) window.visualViewport.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [ready, drawFrame]);

  return (
    <section
      ref={sectionRef}
      style={{ height: '620vh' }}
      className="relative w-full"
    >
      <div
        ref={stickyRef}
        className="sticky left-0 w-full overflow-hidden bg-black"
        style={{ top: '72px', height: 'calc(100vh - 72px)', marginTop: 0 }}
      >
        {/* Full-screen overlay — only shown until frame 1 arrives */}
        {!ready && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black gap-6">
            <div className="text-white text-sm font-semibold tracking-[0.3em] uppercase opacity-60">
              Loading
            </div>
            <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-white rounded-full transition-all duration-300"
                style={{ width: `${loadProgress * 100}%` }}
              />
            </div>
            <div className="text-white/40 text-xs font-mono">
              {Math.round(loadProgress * 100)}%
            </div>
          </div>
        )}

        {/* Canvas */}
        <canvas
          ref={canvasRef}
          role="img"
          aria-label="Wadha detergent product animation"
          className="block"
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0,
            width: '100%',
            opacity: ready ? 1 : 0,
            transition: 'opacity 0.6s ease',
          }}
        />

        {/* Thin progress bar — visible after frame 1 while rest stream in */}
        {ready && !fullyLoaded && (
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/10 z-10">
            <div
              className="h-full bg-white/40 transition-all duration-500"
              style={{ width: `${loadProgress * 100}%` }}
            />
          </div>
        )}

        {/* Scroll hint */}
        {ready && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-10">
            <span className="text-white/50 text-[9px] tracking-[0.4em] uppercase font-semibold">
              Scroll
            </span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
          </div>
        )}

        {/* Promo bubble — 1.5 L @ ₹99 offer */}
        {ready && (
          <Link
            to="/catalog?cat=liquid-detergent"
            aria-label="Toto Matic 1.5 litre at Rs. 99 only — shop now"
            className="group absolute z-20 top-4 right-3 sm:top-6 sm:right-6"
          >
            {/* Pop-in wrapper — animation lives here, NOT on the Link, so the Link
                always keeps a stable clickable box even while the pop is mid-flight */}
            <div style={{ animation: 'wadhaBubblePop 0.7s cubic-bezier(0.34,1.56,0.64,1) forwards' }}>
              {/* Floating visual bubble (separate layer → no transform conflict with pop) */}
              <div
                className="relative flex flex-col items-center justify-center text-center rounded-full text-white shadow-2xl ring-2 ring-white/60 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36"
                style={{
                  background: 'radial-gradient(circle at 32% 26%, #38bdf8 0%, #2563eb 55%, #1e3a8a 100%)',
                  animation: 'wadhaBubbleFloat 3.2s ease-in-out infinite',
                }}
              >
                <span className="absolute top-2.5 left-3 sm:top-4 sm:left-5 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white/70 blur-[1px]" />
                <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-cyan-100 leading-none mb-0.5">Toto Matic</span>
                <span className="text-lg sm:text-2xl md:text-3xl font-black leading-none">1.5 L</span>
                <span className="text-[9px] sm:text-xs font-semibold text-cyan-50 leading-tight mt-0.5">@ ₹99 only</span>
                <span className="mt-1 text-[7px] sm:text-[9px] font-bold uppercase tracking-wider bg-white text-blue-700 rounded-full px-1.5 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity">Shop →</span>
              </div>
            </div>
          </Link>
        )}

        <style>{`
          @keyframes wadhaBubblePop {
            0%   { transform: scale(0);    opacity: 0; }
            60%  { transform: scale(1.15); opacity: 1; }
            100% { transform: scale(1);    opacity: 1; }
          }
          @keyframes wadhaBubbleFloat {
            0%, 100% { transform: translateY(0); }
            50%      { transform: translateY(-8px); }
          }
        `}</style>
      </div>
    </section>
  );
};

export default HeroWadha;
