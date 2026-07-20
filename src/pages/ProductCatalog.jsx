import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Search, Filter, Sparkles, ChevronRight, ShieldCheck, Box,
    X, Phone, ChevronLeft, ArrowRight, Package, Tag, Layers
} from 'lucide-react';
import { productsData } from '../data/products';
import { useSearchParams } from 'react-router-dom';
import NavbarWadha from '../components/layout/NavbarWadha';
import FooterWadha from '../components/layout/FooterWadha';
import SocialProofWadha from '../components/home/SocialProofWadha';

// Product Images
import imgPowder from '../assets/wadha powder new.jpg';
import imgBar from '../assets/wadha bar.jpeg';
import imgMatic from '../assets/IMG_2192.jpeg';
import img5Kg from '../assets/WhatsApp Image 2026-01-17 at 5.05.56 PM.jpeg';
import imgDishwash from '../assets/dishwash.jpeg';
import imgTikiya from '../assets/tikiya.jpeg';
import imgCake from '../assets/cake.jpeg';
import imgPhenyl1L from '../assets/phenyl/hf_20260221_125455_8617201f-82c2-402a-9c97-5506a6a14d97.jpeg';
import imgPhenyl5L from '../assets/phenyl/hf_20260221_130847_98686629-861c-44fd-84a8-c08598b441d2.jpeg';
import imgToiletCleaner from '../assets/toilet cleaner.jpg';
import imgTotoNew from '../assets/toto new.jpg';

// Helper function to get product thumbnail image
const getProductThumbnail = (product) => {
    const name = product.name.toLowerCase();
    const brand = (product.specs?.Brand || "").toLowerCase();
    const isWadha = name.includes('wadha') || brand.includes('wadha');

    if (name.includes('5 kg') && name.includes('powder')) return img5Kg;
    if (name.includes('powder') && isWadha) return imgPowder;
    if (name.includes('toilet cleaner') || name.includes('toilet')) return imgToiletCleaner;
    if (name.includes('mahabar') || name.includes('mahabase')) return imgBar;
    if (name.includes('dishwash')) return imgDishwash;
    if (name.includes('liquid') && isWadha) return imgMatic;
    if (name.includes('matic')) return imgMatic;
    if (name.includes('toto')) return imgTotoNew;
    if (name.includes('tikiya')) return imgTikiya;
    if (name.includes('cake')) return imgCake;
    if (name.includes('phenyl') && name.includes('5 l')) return imgPhenyl5L;
    if (name.includes('phenyl')) return imgPhenyl1L;

    return product.images?.[0] || null;
};

// ─── Image Carousel (used inside detail modal) ────────────────────────────────
const ImageCarousel = ({ images, productName }) => {
    const [currentIdx, setCurrentIdx] = useState(0);
    const [direction, setDirection] = useState(1);
    const timerRef = useRef(null);
    const hasImages = images && images.length > 0;

    const goTo = useCallback((idx, dir) => {
        setDirection(dir);
        setCurrentIdx(idx);
    }, []);

    const next = useCallback(() => {
        if (!hasImages) return;
        const i = (currentIdx + 1) % images.length;
        goTo(i, 1);
    }, [currentIdx, images, hasImages, goTo]);

    const prev = useCallback(() => {
        if (!hasImages) return;
        const i = (currentIdx - 1 + images.length) % images.length;
        goTo(i, -1);
    }, [currentIdx, images, hasImages, goTo]);

    const resetTimer = () => {
        clearInterval(timerRef.current);
        if (hasImages && images.length > 1) {
            timerRef.current = setInterval(() => {
                setCurrentIdx(i => { setDirection(1); return (i + 1) % images.length; });
            }, 3500);
        }
    };

    useEffect(() => {
        setCurrentIdx(0);
        if (!hasImages || images.length <= 1) return;
        timerRef.current = setInterval(() => {
            setCurrentIdx(i => { setDirection(1); return (i + 1) % images.length; });
        }, 3500);
        return () => clearInterval(timerRef.current);
    }, [images, hasImages]);

    const variants = {
        enter: dir => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: dir => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
    };

    if (!hasImages) {
        return (
            <div className="w-full h-full bg-gradient-to-br from-blue-50 to-slate-100 flex items-center justify-center rounded-2xl">
                <Sparkles className="w-14 h-14 text-slate-200" />
            </div>
        );
    }

    return (
        <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50/30 group/carousel">
            <AnimatePresence custom={direction} mode="wait" initial={false}>
                <motion.img
                    key={currentIdx}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    src={images[currentIdx]}
                    alt={`${productName} ${currentIdx + 1}`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-contain p-3"
                />
            </AnimatePresence>

            {images.length > 1 && (
                <>
                    <button onClick={() => { prev(); resetTimer(); }}
                        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-white/90 border border-slate-200 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity">
                        <ChevronLeft className="w-4 h-4 text-blue-900" />
                    </button>
                    <button onClick={() => { next(); resetTimer(); }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-white/90 border border-slate-200 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity">
                        <ChevronRight className="w-4 h-4 text-blue-900" />
                    </button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
                        {images.map((_, i) => (
                            <button key={i} onClick={() => { goTo(i, i > currentIdx ? 1 : -1); resetTimer(); }}
                                className={`rounded-full transition-all duration-300 ${i === currentIdx ? 'w-5 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/80'}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

// ─── Compact Product Card ─────────────────────────────────────────────────────
const ProductCard = ({ product, onClick }) => {
    const thumb = getProductThumbnail(product);
    return (
        <motion.button
            onClick={onClick}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="group w-full text-left bg-white rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl shadow-sm transition-all overflow-hidden flex flex-col cursor-pointer"
        >
            {/* Thumbnail — object-contain so full image is visible, no crop */}
            <div className="relative w-full bg-gradient-to-br from-slate-50 to-blue-50/60 overflow-hidden" style={{ paddingBottom: '100%' }}>
                <div className="absolute inset-0 flex items-center justify-center p-3">
                    {thumb ? (
                        <img
                            src={thumb}
                            alt={product.name}
                            loading="lazy"
                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                    ) : (
                        <Sparkles className="w-10 h-10 text-slate-200" />
                    )}
                </div>
                {/* Category badge */}
                <span className="absolute top-3 left-3 bg-blue-600/90 backdrop-blur-sm text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full shadow">
                    {product.categoryName}
                </span>
            </div>

            {/* Info */}
            <div className="p-4 flex flex-col gap-3 flex-1">
                <h3 className="text-sm font-bold text-blue-900 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                    {product.name}
                </h3>
                <div className="mt-auto flex items-center justify-between">
                    <p className="text-blue-700 font-black text-sm">{product.price}</p>
                    <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100 flex items-center gap-1">
                        View Details <ChevronRight className="w-3 h-3" />
                    </span>
                </div>
            </div>
        </motion.button>
    );
};

// ─── Product Detail Modal ──────────────────────────────────────────────────────
const ProductDetailModal = ({ product, onClose, onQuote }) => {
    // Close on Escape key
    useEffect(() => {
        const handle = (e) => { if (e.key === 'Escape') onClose(); };
        document.addEventListener('keydown', handle);
        document.body.style.overflow = 'hidden';
        return () => { document.removeEventListener('keydown', handle); document.body.style.overflow = ''; };
    }, [onClose]);

    return (
        <AnimatePresence>
            <motion.div
                key="modal-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] flex items-center justify-center p-4"
            >
                <motion.div
                    key="modal-content"
                    initial={{ opacity: 0, scale: 0.94, y: 24 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.94, y: 24 }}
                    transition={{ type: 'spring', damping: 24, stiffness: 280 }}
                    onClick={e => e.stopPropagation()}
                    className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl overflow-hidden flex flex-row"
                    style={{ height: 'min(620px, 85vh)' }}
                >
                    {/* Left — Image Carousel panel, stretches to full height with premium gradient background */}
                    <div className="w-[44%] flex-shrink-0 overflow-hidden rounded-l-3xl bg-gradient-to-br from-slate-50 to-blue-50/40 relative h-full">
                        <ImageCarousel images={product.images || []} productName={product.name} />
                    </div>

                    {/* Right — Details, matches full modal height and scrolls internally */}
                    <div className="flex-1 flex flex-col h-full overflow-hidden">
                        {/* Header bar */}
                        <div className="flex items-start justify-between p-6 pb-4 border-b border-slate-100 sticky top-0 bg-white z-10">
                            <div className="pr-8">
                                <span className="inline-block bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-2">
                                    {product.categoryName}
                                </span>
                                <h2 className="text-xl font-black text-blue-900 leading-tight">{product.name}</h2>
                            </div>
                            <button
                                onClick={onClose}
                                className="w-8 h-8 flex-shrink-0 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors"
                            >
                                <X className="w-4 h-4 text-slate-600" />
                            </button>
                        </div>

                        <div className="overflow-y-auto flex-1 p-6 flex flex-col gap-5">
                            {/* Price & MOQ */}
                            <div className="flex flex-wrap items-center gap-3">
                                <div className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2.5 rounded-xl">
                                    <Tag className="w-4 h-4" />
                                    <span className="font-black text-lg leading-none">{product.price}</span>
                                </div>
                                {product.moq && (
                                    <div className="flex items-center gap-2 bg-green-50 text-green-800 px-4 py-2.5 rounded-xl border border-green-100">
                                        <Package className="w-4 h-4" />
                                        <span className="font-bold text-sm">MOQ: {product.moq}</span>
                                    </div>
                                )}
                                <div className="flex items-center gap-2 text-green-600">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-xs font-bold uppercase tracking-wider">In Stock</span>
                                </div>
                            </div>

                            {/* Description */}
                            <div>
                                <p className="text-sm text-slate-600 leading-relaxed">{product.desc}</p>
                            </div>

                            {/* Specs */}
                            <div className="bg-slate-50 rounded-2xl p-4">
                                <div className="flex items-center gap-2 mb-3">
                                    <Layers className="w-4 h-4 text-blue-600" />
                                    <span className="text-xs font-bold text-blue-900 uppercase tracking-widest">Specifications</span>
                                </div>
                                <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                                    {Object.entries(product.specs).map(([key, val]) => (
                                        <div key={key} className="flex flex-col">
                                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.15em]">{key}</span>
                                            <span className="text-sm font-bold text-blue-900 mt-0.5 leading-snug">{val}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Quality badge */}
                            <div className="flex items-center gap-2 text-slate-500">
                                <ShieldCheck className="w-4 h-4 text-green-600" />
                                <span className="text-xs font-semibold">Quality Assured · Datasheet Available</span>
                            </div>
                        </div>

                        {/* Footer CTA */}
                        <div className="p-6 pt-0 sticky bottom-0 bg-white border-t border-slate-100">
                            <button
                                onClick={() => { onClose(); onQuote(product); }}
                                className="w-full bg-gradient-to-r from-blue-700 to-blue-600 text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-3 hover:from-blue-800 hover:to-blue-700 transition-all shadow-md hover:shadow-lg"
                            >
                                Request a Quote
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

// ─── Quote Modal ───────────────────────────────────────────────────────────────
const QuoteModal = ({ product, onClose }) => {
    const [mobileNumber, setMobileNumber] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const handle = (e) => { if (e.key === 'Escape') onClose(); };
        document.addEventListener('keydown', handle);
        document.body.style.overflow = 'hidden';
        return () => { document.removeEventListener('keydown', handle); document.body.style.overflow = ''; };
    }, [onClose]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (mobileNumber.length < 10) return;
        setLoading(true);
        setError('');
        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    access_key: '68ca5138-578c-47b9-ad97-67e431c0c2f0',
                    subject: `📦 New Quote Request — ${product?.name || 'Product'}`,
                    from_name: 'Wadha Website',
                    message: `A customer has requested a quote.\n\nProduct: ${product?.name}\nMobile: +91 ${mobileNumber}\n\nPlease contact them as soon as possible.`,
                }),
            });
            const result = await res.json();
            if (!result.success) throw new Error(result.message || 'Failed');
            const waText = encodeURIComponent(
                `Hello! I'm interested in *${product?.name}*.\nMy mobile number is: +91 ${mobileNumber}\nPlease share details and pricing. Thank you!`
            );
            window.open(`https://wa.me/917887881694?text=${waText}`, '_blank');
            setSubmitted(true);
        } catch {
            setError('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div
            key="quote-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
        >
            <motion.div
                key="quote-modal"
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                transition={{ type: 'spring', damping: 22, stiffness: 300 }}
                onClick={e => e.stopPropagation()}
                className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative"
            >
                <button onClick={onClose}
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-colors z-10">
                    <X className="w-4 h-4 text-slate-600" />
                </button>
                <div className="p-8">
                    {!submitted ? (
                        <>
                            <p className="text-slate-700 text-base leading-snug mb-6 pr-6">
                                Connect with <strong>"Swami Industries"</strong> and get details on your mobile quickly
                            </p>
                            <form onSubmit={handleSubmit}>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Mobile Number</label>
                                <div className="flex items-center border-2 border-teal-500 rounded-lg overflow-hidden mb-2 focus-within:border-teal-600 transition-colors">
                                    <div className="flex items-center gap-2 px-3 py-3 bg-white border-r border-slate-200 shrink-0">
                                        <span className="text-xl">🇮🇳</span>
                                        <span className="text-sm font-semibold text-slate-700">+91</span>
                                    </div>
                                    <input
                                        type="tel"
                                        maxLength={10}
                                        value={mobileNumber}
                                        onChange={e => setMobileNumber(e.target.value.replace(/\D/g, ''))}
                                        placeholder="Enter your mobile"
                                        className="flex-1 px-4 py-3 text-sm text-slate-800 outline-none bg-white"
                                        required
                                    />
                                </div>
                                <p className="text-xs text-slate-400 mb-6">We will contact you on this number</p>
                                {error && <p className="text-xs text-red-500 font-medium bg-red-50 px-3 py-2 rounded-lg mb-3">⚠️ {error}</p>}
                                <button type="submit" disabled={loading}
                                    className="w-full bg-teal-500 hover:bg-teal-600 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-lg transition-colors text-sm tracking-wide flex items-center justify-center gap-2">
                                    {loading ? (
                                        <><svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                                        </svg>Sending...</>
                                    ) : 'Submit Now'}
                                </button>
                            </form>
                            {product && <p className="text-xs text-center text-slate-400 mt-4">Enquiry for: <span className="font-semibold text-slate-600">{product.name}</span></p>}
                        </>
                    ) : (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center py-8">
                            <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Phone className="w-7 h-7 text-teal-500" />
                            </div>
                            <h3 className="text-xl font-black text-blue-900 mb-2">Thank You!</h3>
                            <p className="text-slate-500 text-sm">Our team will contact you on</p>
                            <p className="text-blue-900 font-bold text-lg mt-1">+91 {mobileNumber}</p>
                            <p className="text-slate-400 text-xs mt-4">Shortly regarding your enquiry.</p>
                            <button onClick={onClose} className="mt-6 text-teal-500 hover:text-teal-600 font-semibold text-sm transition-colors">Close</button>
                        </motion.div>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
};

// ─── Main ProductCatalog Page ─────────────────────────────────────────────────
const ProductCatalog = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState(searchParams.get('cat') || 'all');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [quoteProduct, setQuoteProduct] = useState(null);

    useEffect(() => {
        const cat = searchParams.get('cat');
        setActiveCategory(cat || 'all');
        window.scrollTo(0, 0);
    }, [searchParams]);

    const categories = [
        { id: 'all', name: 'All Products', icon: Box },
        ...productsData.map(cat => ({ id: cat.id, name: cat.category, icon: cat.icon }))
    ];

    const allProducts = productsData.flatMap(cat =>
        cat.products.map(p => ({ ...p, categoryName: cat.category, categoryId: cat.id }))
    );

    const filteredProducts = allProducts.filter(p => {
        const matchesCat = activeCategory === 'all' || p.categoryId === activeCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCat && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-white font-sans">
            <NavbarWadha />

            <main className="pt-32 pb-24 bg-gradient-to-b from-blue-50 to-white min-h-screen">
                <div className="max-w-[1400px] mx-auto px-6">

                    {/* ── Page Header ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
                    >
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-blue-900 font-bold tracking-widest uppercase text-[10px] bg-blue-50 w-fit px-4 py-1.5 rounded-full border border-blue-100">
                                <Sparkles className="w-3 h-3" />
                                Product Catalog
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-blue-900 tracking-tight leading-none">
                                Our <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Products</span>
                            </h1>
                            <p className="text-slate-500 max-w-lg text-base font-medium">
                                Click any product to view full details, specifications & pricing.
                            </p>
                        </div>

                        {/* Search */}
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                                className="pl-11 pr-6 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-semibold w-full sm:w-[300px] focus:ring-2 focus:ring-blue-200 shadow-sm transition-all outline-none text-slate-900"
                            />
                        </div>
                    </motion.div>

                    <div className="flex flex-col lg:flex-row gap-10">

                        {/* ── Sidebar ── */}
                        <aside className="lg:w-60 flex-shrink-0">
                            {/* Mobile dropdown */}
                            <div className="lg:hidden mb-6">
                                <select
                                    value={activeCategory}
                                    onChange={e => {
                                        setActiveCategory(e.target.value);
                                        setSearchParams(e.target.value === 'all' ? {} : { cat: e.target.value });
                                    }}
                                    className="w-full px-4 py-3 bg-white rounded-2xl border border-slate-200 shadow-sm text-sm font-bold text-blue-900 focus:ring-2 focus:ring-blue-200 outline-none"
                                >
                                    {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                                </select>
                            </div>

                            {/* Desktop sidebar */}
                            <div className="hidden lg:block bg-white rounded-3xl p-6 border border-slate-200 shadow-sm sticky top-32">
                                <h3 className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-6 flex items-center gap-2">
                                    <Filter className="w-3.5 h-3.5 text-green-600" />
                                    Categories
                                </h3>
                                <div className="space-y-1.5">
                                    {categories.map(cat => (
                                        <button
                                            key={cat.id}
                                            onClick={() => {
                                                setActiveCategory(cat.id);
                                                setSearchParams(cat.id === 'all' ? {} : { cat: cat.id });
                                            }}
                                            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all group text-left ${activeCategory === cat.id
                                                ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md'
                                                : 'text-slate-600 hover:bg-slate-50'}`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <cat.icon className={`w-4 h-4 ${activeCategory === cat.id ? 'text-white' : 'text-slate-400 group-hover:text-blue-600'}`} />
                                                <span className="text-sm font-bold">{cat.name}</span>
                                            </div>
                                            <ChevronRight className={`w-3.5 h-3.5 transition-opacity ${activeCategory === cat.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'}`} />
                                        </button>
                                    ))}
                                </div>

                                {/* Product count */}
                                <div className="mt-6 pt-4 border-t border-slate-100 text-center">
                                    <span className="text-3xl font-black text-blue-900">{filteredProducts.length}</span>
                                    <p className="text-xs text-slate-400 font-semibold mt-0.5">Products shown</p>
                                </div>
                            </div>
                        </aside>

                        {/* ── Product Grid ── */}
                        <div className="flex-1">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeCategory + searchQuery}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="grid grid-cols-2 md:grid-cols-3 gap-5"
                                >
                                    {filteredProducts.map((product, idx) => (
                                        <ProductCard
                                            key={product.id || idx}
                                            product={product}
                                            onClick={() => setSelectedProduct(product)}
                                        />
                                    ))}
                                </motion.div>
                            </AnimatePresence>

                            {filteredProducts.length === 0 && (
                                <div className="py-24 text-center">
                                    <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                        <Search className="w-8 h-8 text-slate-300" />
                                    </div>
                                    <h3 className="text-lg font-bold text-blue-900 mb-2">No products found</h3>
                                    <p className="text-slate-500">Try adjusting your search or category filter.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            <SocialProofWadha />
            <FooterWadha />

            {/* ── Product Detail Modal ── */}
            <AnimatePresence>
                {selectedProduct && (
                    <ProductDetailModal
                        product={selectedProduct}
                        onClose={() => setSelectedProduct(null)}
                        onQuote={(p) => { setSelectedProduct(null); setQuoteProduct(p); }}
                    />
                )}
            </AnimatePresence>

            {/* ── Quote Modal ── */}
            <AnimatePresence>
                {quoteProduct && (
                    <QuoteModal
                        product={quoteProduct}
                        onClose={() => setQuoteProduct(null)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProductCatalog;
