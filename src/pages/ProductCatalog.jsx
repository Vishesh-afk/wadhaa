import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ArrowRight, Package, Sparkles, ChevronRight, ShieldCheck, Box, Info, X, Phone } from 'lucide-react';
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

const ProductCatalog = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState(searchParams.get('cat') || 'all');
    const [quoteModal, setQuoteModal] = useState({ open: false, product: null });
    const [mobileNumber, setMobileNumber] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [quoteLoading, setQuoteLoading] = useState(false);
    const [quoteError, setQuoteError] = useState('');

    const openQuoteModal = (product) => {
        setQuoteModal({ open: true, product });
        setMobileNumber('');
        setSubmitted(false);
        setQuoteError('');
    };

    const closeQuoteModal = () => {
        setQuoteModal({ open: false, product: null });
        setSubmitted(false);
        setQuoteError('');
    };

    const handleSubmitQuote = async (e) => {
        e.preventDefault();
        if (mobileNumber.length < 10) return;
        setQuoteLoading(true);
        setQuoteError('');

        try {
            const productName = quoteModal.product?.name || 'Product';
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    access_key: '68ca5138-578c-47b9-ad97-67e431c0c2f0',
                    subject: `📦 New Quote Request — ${productName}`,
                    from_name: 'Wadha Website',
                    message: `A customer has requested a quote.\n\nProduct: ${productName}\nMobile: +91 ${mobileNumber}\n\nPlease contact them as soon as possible.`,
                }),
            });
            const result = await res.json();
            if (!result.success) throw new Error(result.message || 'Failed');

            // Open WhatsApp with pre-filled message
            const waText = encodeURIComponent(
                `Hello! I'm interested in *${productName}*.\nMy mobile number is: +91 ${mobileNumber}\nPlease share details and pricing. Thank you!`
            );
            window.open(`https://wa.me/917887881694?text=${waText}`, '_blank');

            setSubmitted(true);
        } catch (err) {
            setQuoteError('Something went wrong. Please try again.');
        } finally {
            setQuoteLoading(false);
        }
    };

    // Sync category with URL
    useEffect(() => {
        const cat = searchParams.get('cat');
        if (cat) {
            setActiveCategory(cat);
        } else {
            setActiveCategory('all');
        }
        window.scrollTo(0, 0);
    }, [searchParams]);

    const categories = [
        { id: 'all', name: 'All Products', icon: Box },
        ...productsData.map(cat => ({
            id: cat.id,
            name: cat.category,
            icon: cat.icon
        }))
    ];

    const filteredProducts = productsData.flatMap(cat =>
        cat.products.map(p => ({ ...p, categoryName: cat.category, categoryId: cat.id }))
    ).filter(product => {
        const matchesCategory = activeCategory === 'all' || product.categoryId === activeCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-white font-sans">
            <NavbarWadha />
            <main className="pt-32 pb-24 bg-gradient-to-b from-blue-50 to-white min-h-screen">
                <div className="max-w-[1400px] mx-auto px-6">
                    {/* Header Section */}
                    <div className="mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
                        >
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-blue-900 font-bold tracking-widest uppercase text-[10px] bg-blue-50 w-fit px-4 py-1.5 rounded-full border border-blue-100">
                                    <Sparkles className="w-3 h-3" />
                                    Product Catalog
                                </div>
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-blue-900 tracking-tight leading-none">
                                    Our <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Products</span>
                                </h1>
                                <p className="text-slate-600 max-w-xl text-lg font-medium">
                                    Browse our complete range of professional cleaning solutions with detailed specifications.
                                </p>
                            </div>

                            <div className="flex items-center gap-4 bg-white p-2 rounded-2xl shadow-sm border border-slate-200">
                                <div className="relative">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                    <input
                                        type="text"
                                        placeholder="Search products..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="pl-11 pr-6 py-3 bg-slate-50 border-none rounded-xl text-sm font-semibold w-full sm:w-[300px] focus:ring-2 focus:ring-blue-200 transition-all outline-none text-slate-900"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-12 gap-10">
                        {/* Mobile Category Filter */}
                        <div className="col-span-12 lg:hidden">
                            <select
                                value={activeCategory}
                                onChange={(e) => {
                                    setActiveCategory(e.target.value);
                                    setSearchParams(e.target.value === 'all' ? {} : { cat: e.target.value });
                                }}
                                className="w-full px-4 py-3 bg-white rounded-2xl border border-slate-200 shadow-sm text-sm font-bold text-blue-900 focus:ring-2 focus:ring-blue-200 outline-none"
                            >
                                {categories.map((cat) => (
                                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                                ))}
                            </select>
                        </div>

                        {/* Sidebar Filters (Desktop) */}
                        <div className="hidden lg:block lg:col-span-3 space-y-8">
                            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm sticky top-32">
                                <h3 className="text-sm font-bold text-blue-900 uppercase tracking-widest mb-8 flex items-center gap-3">
                                    <Filter className="w-4 h-4 text-green-600" />
                                    Categories
                                </h3>
                                <div className="space-y-2">
                                    {categories.map((cat) => (
                                        <button
                                            key={cat.id}
                                            onClick={() => {
                                                setActiveCategory(cat.id);
                                                setSearchParams(cat.id === 'all' ? {} : { cat: cat.id });
                                            }}
                                            className={`w-full flex items-center justify-between p-4 rounded-xl transition-all group ${activeCategory === cat.id
                                                ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md'
                                                : 'text-slate-600 hover:bg-slate-50'
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <cat.icon className={`w-4 h-4 ${activeCategory === cat.id ? 'text-white' : 'text-slate-400 group-hover:text-blue-600'}`} />
                                                <span className="text-sm font-bold">{cat.name}</span>
                                            </div>
                                            <ChevronRight className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ${activeCategory === cat.id ? 'opacity-100' : ''}`} />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Main Grid - Product Cards */}
                        <div className="col-span-12 lg:col-span-9">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeCategory + searchQuery}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex flex-col gap-8"
                                >
                                    {filteredProducts.map((product, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-blue-200 shadow-sm hover:shadow-xl transition-all flex flex-col md:flex-row"
                                        >
                                            {/* Product Image Area */}
                                            <div className="md:w-1/3 relative bg-slate-50 flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-slate-100" style={{ minHeight: '260px' }}>
                                                {/* Status Badges */}
                                                <div className="absolute top-4 left-4 flex flex-col gap-2 z-20">
                                                    <span className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-md">
                                                        {product.categoryName}
                                                    </span>
                                                    {product.moq && (
                                                        <div className="bg-white text-blue-900 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 border border-blue-100 shadow-sm">
                                                            <Package className="w-3.5 h-3.5" />
                                                            MOQ: {product.moq}
                                                        </div>
                                                    )}
                                                </div>

                                                {(() => {
                                                    const name = product.name.toLowerCase();
                                                    const brand = (product.specs.Brand || "").toLowerCase();
                                                    const isWadha = name.includes('wadha') || brand.includes('wadha');

                                                    let imgSrc = null;
                                                    if (name.includes('5 kg') && name.includes('powder')) imgSrc = img5Kg;
                                                    else if (name.includes('powder') && isWadha) imgSrc = imgPowder;
                                                    else if (name.includes('toilet cleaner') || name.includes('toilet')) imgSrc = imgToiletCleaner;
                                                    else if (name.includes('mahabar') || name.includes('mahabase')) imgSrc = imgBar;
                                                    else if (name.includes('dishwash')) imgSrc = imgDishwash;
                                                    else if (name.includes('liquid') && isWadha) imgSrc = imgMatic;
                                                    else if (name.includes('matic')) imgSrc = imgMatic;
                                                    else if (name.includes('toto')) imgSrc = imgTotoNew;
                                                    else if (name.includes('tikiya')) imgSrc = imgTikiya;
                                                    else if (name.includes('cake')) imgSrc = imgCake;
                                                    else if (name.includes('phenyl') && name.includes('5 l')) imgSrc = imgPhenyl5L;
                                                    else if (name.includes('phenyl')) imgSrc = imgPhenyl1L;

                                                    if (imgSrc) {
                                                        return (
                                                            <img
                                                                src={imgSrc}
                                                                alt={product.name}
                                                                loading="lazy"
                                                                className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-700"
                                                                style={{ position: 'absolute', inset: 0 }}
                                                            />
                                                        );
                                                    }
                                                    return (
                                                        <Sparkles className="w-12 h-12 text-slate-200 group-hover:text-green-500/30 transition-colors" />
                                                    );
                                                })()}
                                            </div>

                                            {/* Content Area */}
                                            <div className="md:w-2/3 p-8 lg:p-12 flex flex-col justify-between">
                                                <div>
                                                    <div className="flex justify-between items-start mb-6">
                                                        <div className="space-y-2">
                                                            <h3 className="text-2xl lg:text-3xl font-black text-blue-900 leading-tight group-hover:text-blue-700 transition-colors">
                                                                {product.name}
                                                            </h3>
                                                            <div className="flex items-center gap-3">
                                                                <ShieldCheck className="w-5 h-5 text-green-600" />
                                                                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Quality Assured</span>
                                                            </div>
                                                        </div>
                                                        <div className="text-right">
                                                            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest block mb-1">Price</span>
                                                            <p className="text-3xl font-black text-blue-900 tracking-tighter">{product.price}</p>
                                                        </div>
                                                    </div>

                                                    <p className="text-slate-600 font-medium leading-relaxed mb-8 text-base lg:text-lg">
                                                        {product.desc}
                                                    </p>

                                                    {/* Specs Grid */}
                                                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 pt-8 border-t border-slate-100">
                                                        {Object.entries(product.specs).map(([key, value]) => (
                                                            <div key={key} className="space-y-1">
                                                                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] block">{key}</span>
                                                                <span className="text-sm font-bold text-blue-900">{value}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="mt-8 flex items-center justify-between pt-6 border-t border-slate-100">
                                                    <div className="flex items-center gap-6">
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                                            <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">In Stock</span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <Info className="w-4 h-4 text-slate-300" />
                                                            <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Datasheet Available</span>
                                                        </div>
                                                    </div>
                                                    <button
                                                        onClick={() => openQuoteModal(product)}
                                                        className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-3 hover:bg-blue-700 transition-all group/btn"
                                                    >
                                                        Request Quote
                                                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                                    </button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>

                            {filteredProducts.length === 0 && (
                                <div className="py-24 text-center">
                                    <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                        <Search className="w-8 h-8 text-slate-300" />
                                    </div>
                                    <h3 className="text-lg font-bold text-blue-900 mb-2">No products found</h3>
                                    <p className="text-slate-600">Try adjusting your search or category filters.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <SocialProofWadha />
            <FooterWadha />

            {/* Request Quote Modal */}
            <AnimatePresence>
                {quoteModal.open && (
                    <motion.div
                        key="quote-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeQuoteModal}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
                    >
                        <motion.div
                            key="quote-modal"
                            initial={{ opacity: 0, scale: 0.92, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.92, y: 20 }}
                            transition={{ type: 'spring', damping: 22, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
                        >
                            {/* Close */}
                            <button
                                onClick={closeQuoteModal}
                                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-colors z-10"
                                style={{ position: 'absolute' }}
                            >
                                <X className="w-4 h-4 text-slate-600" />
                            </button>

                            <div className="relative p-8">
                                {!submitted ? (
                                    <>
                                        {/* Header */}
                                        <p className="text-slate-700 text-base leading-snug mb-6 pr-6">
                                            Connect with <strong>"Swami Industries"</strong> and get details on your mobile quickly
                                        </p>

                                        <form onSubmit={handleSubmitQuote}>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                                Mobile Number
                                            </label>

                                            {/* Phone input with flag */}
                                            <div className="flex items-center border-2 border-teal-500 rounded-lg overflow-hidden mb-2 focus-within:border-teal-600 transition-colors">
                                                <div className="flex items-center gap-2 px-3 py-3 bg-white border-r border-slate-200 shrink-0">
                                                    <span className="text-xl">🇮🇳</span>
                                                    <span className="text-sm font-semibold text-slate-700">+91</span>
                                                </div>
                                                <input
                                                    type="tel"
                                                    maxLength={10}
                                                    value={mobileNumber}
                                                    onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))}
                                                    placeholder="Enter your mobile"
                                                    className="flex-1 px-4 py-3 text-sm text-slate-800 outline-none bg-white"
                                                    required
                                                />
                                            </div>
                                            <p className="text-xs text-slate-400 mb-6">We will contact you on this number</p>

                                            {quoteError && (
                                                <p className="text-xs text-red-500 font-medium bg-red-50 px-3 py-2 rounded-lg mb-3">
                                                    ⚠️ {quoteError}
                                                </p>
                                            )}

                                            <button
                                                type="submit"
                                                disabled={quoteLoading}
                                                className="w-full bg-teal-500 hover:bg-teal-600 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-lg transition-colors text-sm tracking-wide flex items-center justify-center gap-2"
                                            >
                                                {quoteLoading ? (
                                                    <>
                                                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                                                        </svg>
                                                        Sending...
                                                    </>
                                                ) : 'Submit Now'}
                                            </button>
                                        </form>

                                        {quoteModal.product && (
                                            <p className="text-xs text-center text-slate-400 mt-4">
                                                Enquiry for: <span className="font-semibold text-slate-600">{quoteModal.product.name}</span>
                                            </p>
                                        )}
                                    </>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-center py-8"
                                    >
                                        <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Phone className="w-7 h-7 text-teal-500" />
                                        </div>
                                        <h3 className="text-xl font-black text-blue-900 mb-2">Thank You!</h3>
                                        <p className="text-slate-500 text-sm">Our team will contact you on</p>
                                        <p className="text-blue-900 font-bold text-lg mt-1">+91 {mobileNumber}</p>
                                        <p className="text-slate-400 text-xs mt-4">Shortly regarding your enquiry.</p>
                                        <button
                                            onClick={closeQuoteModal}
                                            className="mt-6 text-teal-500 hover:text-teal-600 font-semibold text-sm transition-colors"
                                        >
                                            Close
                                        </button>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProductCatalog;
