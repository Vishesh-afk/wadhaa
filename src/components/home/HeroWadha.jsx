import React, { useEffect, useRef, useState, useCallback } from 'react';

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

// Use the real visible viewport height (avoids the mobile 100vh bug where
// mobile browser chrome is included in 100vh)
const getViewportH = () =>
  window.visualViewport ? window.visualViewport.height : window.innerHeight;

// Reliable portrait check — use matchMedia so it works immediately after mount
const isPortraitScreen = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(orientation: portrait)').matches;

// ─── Preloader ────────────────────────────────────────────────────────────────
function preloadImages(portrait, onProgress) {
  const images = new Array(TOTAL_FRAMES);
  let loaded = 0;

  return new Promise((resolve) => {
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getImgPath(i, portrait);
      img.onload = img.onerror = () => {
        loaded++;
        onProgress(loaded / TOTAL_FRAMES);
        if (loaded === TOTAL_FRAMES) resolve(images);
      };
      images[i - 1] = img;
    }
  });
}

// ─── Component ────────────────────────────────────────────────────────────────
const HeroWadha = () => {
  const sectionRef     = useRef(null);
  const stickyRef      = useRef(null);
  const canvasRef      = useRef(null);
  const imagesRef      = useRef([]);
  const frameRef       = useRef(0);
  const rafRef         = useRef(null);
  const navHRef        = useRef(72);    // live navbar height in px
  const viewHRef       = useRef(600);   // live visible viewport height
  const portraitRef    = useRef(isPortraitScreen()); // which sequence is loaded

  const [loadProgress, setLoadProgress] = useState(0);
  const [ready, setReady]               = useState(false);

  // ── Draw frame (all dimensions in physical pixels — NO ctx.scale) ─────────
  const drawFrame = useCallback((index) => {
    const canvas = canvasRef.current;
    const img    = imagesRef.current[index];
    if (!canvas || !img || !img.complete || !img.naturalWidth) return;

    const ctx = canvas.getContext('2d');
    const W = canvas.width;
    const H = canvas.height;

    // Always use cover — the correct aspect-ratio sequence is loaded per
    // orientation (/900/ for portrait, /400/ for landscape) so there is
    // no mismatch and the image fills edge-to-edge on every device.
    const scale = Math.max(W / img.naturalWidth, H / img.naturalHeight);
    const sw = img.naturalWidth  * scale;
    const sh = img.naturalHeight * scale;
    const sx = (W - sw) / 2;
    const sy = (H - sh) / 2;

    ctx.clearRect(0, 0, W, H);
    ctx.drawImage(img, sx, sy, sw, sh);
  }, []);

  // ── Resize canvas (correct HiDPI — no ctx.scale) ─────────────────────────
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const sticky = stickyRef.current;
    if (!canvas || !sticky) return;

    const navH   = getNavbarHeight();
    const viewH  = getViewportH();
    const dpr    = getDpr();

    // Store live values for scroll handler
    navHRef.current  = navH;
    viewHRef.current = viewH;

    // Use the container's actual rendered width to avoid any mismatch with
    // window.innerWidth on mobile (e.g. scrollbar offset, sub-pixel rounding)
    const displayW = sticky.clientWidth || window.innerWidth;
    const displayH = viewH - navH;

    // Physical pixel canvas size (setting .width resets the context transform)
    canvas.width  = Math.round(displayW * dpr);
    canvas.height = Math.round(displayH * dpr);

    // CSS display size — fill the container exactly, no overflow
    canvas.style.width  = '100%';
    canvas.style.height = `${displayH}px`;

    // Update sticky container dimensions inline to match real viewport
    sticky.style.top    = `${navH}px`;
    sticky.style.height = `${displayH}px`;

    // Redraw at current frame with the fresh canvas size
    drawFrame(frameRef.current);
  }, [drawFrame]);

  // ── Preload images (pick correct sequence for current orientation) ─────────
  useEffect(() => {
    const portrait = isPortraitScreen();
    portraitRef.current = portrait;
    setReady(false);
    setLoadProgress(0);
    imagesRef.current = [];
    preloadImages(portrait, (p) => setLoadProgress(p)).then((imgs) => {
      imagesRef.current = imgs;
      setReady(true);
    });
  }, []);

  // ── Attach resize / orientation listeners ─────────────────────────────────
  useEffect(() => {
    resizeCanvas();

    const onResize = () => {
      const nowPortrait = isPortraitScreen();

      // If orientation flipped, reload the correct image sequence
      if (nowPortrait !== portraitRef.current) {
        portraitRef.current = nowPortrait;
        setReady(false);
        setLoadProgress(0);
        imagesRef.current = [];
        frameRef.current = 0;
        preloadImages(nowPortrait, (p) => setLoadProgress(p)).then((imgs) => {
          imagesRef.current = imgs;
          setReady(true);
        });
      }

      resizeCanvas();
    };

    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResize);

    // visualViewport fires when mobile browser chrome shows/hides
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', onResize);
    }

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('orientationchange', onResize);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', onResize);
      }
    };
  }, [resizeCanvas]);

  // ── Redraw first frame once images are loaded ─────────────────────────────
  useEffect(() => {
    if (ready) {
      resizeCanvas();
      drawFrame(0);
    }
  }, [ready, resizeCanvas, drawFrame]);

  // ── Scroll driver ─────────────────────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section || !ready) return;

      const rect            = section.getBoundingClientRect();
      // scrollable distance = section height minus the visible window height
      const scrollableH     = section.offsetHeight - window.innerHeight;
      const scrolled        = -rect.top;
      const progress        = Math.max(0, Math.min(1, scrolled / scrollableH));
      const targetFrame     = Math.round(progress * (TOTAL_FRAMES - 1));

      if (targetFrame !== frameRef.current) {
        frameRef.current = targetFrame;
        cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => drawFrame(targetFrame));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Also listen on visual-viewport scroll for some mobile browsers
    if (window.visualViewport) {
      window.visualViewport.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('scroll', handleScroll);
      }
      cancelAnimationFrame(rafRef.current);
    };
  }, [ready, drawFrame]);

  return (
    /*
     * Section height drives how long the user scrolls through the animation.
     * 620vh → ~23 frames per 100vh scrolled (sweet spot between 500 and 800).
     */
    <section
      ref={sectionRef}
      style={{ height: '620vh' }}
      className="relative w-full"
    >
      {/*
       * Sticky container — dimensions are set inline by resizeCanvas()
       * so they always match the real visible area on every device.
       * Initial inline values are sensible defaults before JS runs.
       */}
      <div
        ref={stickyRef}
        className="sticky left-0 w-full overflow-hidden bg-black"
        style={{ top: '72px', height: 'calc(100vh - 72px)', marginTop: 0 }}
      >
        {/* Loading overlay */}
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

        {/* Canvas — sized by resizeCanvas(), crisp on all pixel densities */}
        <canvas
          ref={canvasRef}
          className="block"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            width: '100%',
            opacity: ready ? 1 : 0,
            transition: 'opacity 0.6s ease',
          }}
        />

        {/* Scroll hint */}
        {ready && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-10">
            <span className="text-white/50 text-[9px] tracking-[0.4em] uppercase font-semibold">
              Scroll
            </span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroWadha;
