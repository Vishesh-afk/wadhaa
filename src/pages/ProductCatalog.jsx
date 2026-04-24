import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ArrowRight, Package, Sparkles, ChevronRight, ShieldCheck, Box, Info } from 'lucide-react';
import { productsData } from '../data/products';
import { useSearchParams } from 'react-router-dom';
import NavbarWadha from '../components/layout/NavbarWadha';
import FooterWadha from '../components/layout/FooterWadha';
import SocialProofWadha from '../components/home/SocialProofWadha';

// Product Images
import imgPowder from '../assets/wadha powder.jpeg';
import imgBar from '../assets/wadha bar.jpeg';
import imgMatic from '../assets/IMG_2192.PNG';
import img5Kg from '../assets/WhatsApp Image 2026-01-17 at 5.05.56 PM.jpeg';
import imgToto from '../assets/WhatsApp Image 2026-01-17 at 5.05.55 PM.jpeg';
import imgDishwash from '../assets/dishwash.jpeg';
import imgTikiya from '../assets/tikiya.jpeg';
import imgCake from '../assets/cake.jpeg';
import imgPhenyl1L from '../assets/phenyl/hf_20260221_125455_8617201f-82c2-402a-9c97-5506a6a14d97.png';
import imgPhenyl5L from '../assets/phenyl/hf_20260221_130847_98686629-861c-44fd-84a8-c08598b441d2.jpeg';

const ProductCatalog = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState(searchParams.get('cat') || 'all');

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
                                            <div className="md:w-1/3 relative bg-white flex items-center justify-center p-8 lg:p-12 overflow-hidden border-b md:border-b-0 md:border-r border-slate-100 aspect-[3/4] md:aspect-auto">
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

                                                <div className="w-full h-full flex items-center justify-center mt-12 md:mt-0">
                                                    {(() => {
                                                        const name = product.name.toLowerCase();
                                                        const brand = (product.specs.Brand || "").toLowerCase();
                                                        const isWadha = name.includes('wadha') || brand.includes('wadha');

                                                        let imgSrc = null;
                                                        if (name.includes('5 kg') && name.includes('powder')) imgSrc = img5Kg;
                                                        else if (name.includes('powder') && isWadha) imgSrc = imgPowder;
                                                        else if (name.includes('mahabar') || name.includes('mahabase')) imgSrc = imgBar;
                                                        else if (name.includes('dishwash')) imgSrc = imgDishwash;
                                                        else if (name.includes('liquid') && isWadha) imgSrc = imgMatic;
                                                        else if (name.includes('matic')) imgSrc = imgMatic;
                                                        else if (name.includes('toto')) imgSrc = imgToto;
                                                        else if (name.includes('tikiya')) imgSrc = imgTikiya;
                                                        else if (name.includes('cake')) imgSrc = imgCake;
                                                        else if (name.includes('phenyl') && name.includes('5 l')) imgSrc = imgPhenyl5L;
                                                        else if (name.includes('phenyl')) imgSrc = imgPhenyl1L;

                                                        if (imgSrc) {
                                                            return (
                                                                <img
                                                                    src={imgSrc}
                                                                    alt={product.name}
                                                                    className="max-w-full max-h-full md:max-h-[85%] object-contain group-hover:scale-105 transition-transform duration-700 drop-shadow-sm"
                                                                />
                                                            );
                                                        }
                                                        return (
                                                            <div className="w-full h-full flex items-center justify-center">
                                                                <Sparkles className="w-12 h-12 text-slate-200 group-hover:text-green-500/30 transition-colors" />
                                                            </div>
                                                        );
                                                    })()}
                                                </div>
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
                                                    <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-3 hover:bg-blue-700 transition-all group/btn">
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
        </div>
    );
};

export default ProductCatalog;
