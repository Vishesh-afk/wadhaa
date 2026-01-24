import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ArrowRight, Package, Zap, ChevronRight, Globe, ShieldCheck, Box, Info } from 'lucide-react';
import { productsData } from '../data/products';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const ProductCatalog = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState(searchParams.get('cat') || 'all');

    // Sync category with URL
    useEffect(() => {
        const cat = searchParams.get('cat');
        if (cat) setActiveCategory(cat);
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
        <div className="min-h-screen bg-white">
            <Navbar />
            <main className="pt-32 pb-24 bg-slate-50 min-h-screen">
                <div className="max-w-[1400px] mx-auto px-6">
                    {/* Header Section */}
                    <div className="mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
                        >
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-brand-indigo font-bold tracking-widest uppercase text-[10px] bg-brand-indigo/5 w-fit px-4 py-1.5 rounded-full border border-brand-indigo/10">
                                    <Globe className="w-3 h-3" />
                                    Wadha Enterprise Portfolio
                                </div>
                                <h1 className="text-5xl font-black text-slate-900 tracking-tight leading-none italic">
                                    Industrial <span className="text-gradient-clean">Catalog.</span>
                                </h1>
                                <p className="text-slate-500 max-w-xl text-lg font-medium">
                                    Comprehensive technical specifications and bulk ordering information for our entire range.
                                </p>
                            </div>

                            <div className="flex items-center gap-4 bg-white p-2 rounded-[24px] shadow-sm border border-slate-100">
                                <div className="relative">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                    <input
                                        type="text"
                                        placeholder="Search products..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="pl-11 pr-6 py-3 bg-slate-50 border-none rounded-2xl text-sm font-semibold w-full md:w-[300px] focus:ring-2 focus:ring-brand-indigo/20 transition-all outline-none"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-12 gap-10">
                        {/* Sidebar Filters */}
                        <div className="col-span-12 lg:col-span-3 space-y-8">
                            <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm sticky top-32">
                                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-8 flex items-center gap-3">
                                    <Filter className="w-4 h-4 text-brand-indigo" />
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
                                            className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all group ${activeCategory === cat.id
                                                ? 'bg-brand-indigo text-white shadow-lg shadow-brand-indigo/20'
                                                : 'text-slate-500 hover:bg-slate-50'
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <cat.icon className={`w-4 h-4 ${activeCategory === cat.id ? 'text-white' : 'text-slate-400 group-hover:text-brand-indigo'}`} />
                                                <span className="text-sm font-bold">{cat.name}</span>
                                            </div>
                                            <ChevronRight className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ${activeCategory === cat.id ? 'opacity-100' : ''}`} />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Main Grid - Now List View for B2B Clarity */}
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
                                            whileHover={{ x: 10 }}
                                            className="group bg-white rounded-[40px] overflow-hidden border border-slate-100 hover:border-brand-indigo/20 shadow-sm hover:shadow-[0_45px_100px_-20px_rgba(0,0,0,0.08)] transition-all flex flex-col md:flex-row min-h-[400px]"
                                        >
                                            {/* Product Image Area - 1/3 Width */}
                                            <div className="md:w-1/3 relative bg-slate-50 flex items-center justify-center p-12 overflow-hidden border-b md:border-b-0 md:border-r border-slate-100">
                                                <div className="absolute inset-0 bg-gradient-to-br from-brand-indigo/5 via-transparent to-transparent"></div>

                                                {/* Status Badges */}
                                                <div className="absolute top-8 left-8 flex flex-col gap-2 z-10">
                                                    <span className="bg-slate-900 text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                                                        {product.categoryName}
                                                    </span>
                                                    {product.moq && (
                                                        <div className="bg-white/90 backdrop-blur-md text-brand-indigo px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 border border-brand-indigo/10 shadow-sm">
                                                            <Package className="w-3.5 h-3.5" />
                                                            MOQ: {product.moq}
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Visual Placeholder */}
                                                <motion.div
                                                    animate={{
                                                        y: [0, -8, 0],
                                                        rotate: [0, 1, 0]
                                                    }}
                                                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                                                    className="w-32 h-52 bg-white rounded-3xl shadow-xl flex items-center justify-center relative border border-white overflow-hidden group-hover:rotate-6 transition-transform duration-700"
                                                >
                                                    <div className="absolute top-0 left-0 w-full h-2.5 bg-brand-indigo/30" />
                                                    <Zap className="w-10 h-10 text-slate-100 group-hover:text-brand-indigo/20 transition-colors" />
                                                </motion.div>
                                            </div>

                                            {/* Content Area - 2/3 Width */}
                                            <div className="md:w-2/3 p-12 flex flex-col justify-between">
                                                <div>
                                                    <div className="flex justify-between items-start mb-6">
                                                        <div className="space-y-2">
                                                            <h3 className="text-3xl font-bold text-slate-900 leading-tight group-hover:text-brand-indigo transition-colors italic">
                                                                {product.name}
                                                            </h3>
                                                            <div className="flex items-center gap-3">
                                                                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                                                                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Quality Assured Selection</span>
                                                            </div>
                                                        </div>
                                                        <div className="text-right">
                                                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block mb-1">Standard B2B Pricing</span>
                                                            <p className="text-3xl font-black text-brand-indigo tracking-tighter">{product.price}</p>
                                                        </div>
                                                    </div>

                                                    <p className="text-slate-500 font-medium leading-relaxed mb-10 text-lg">
                                                        {product.desc}
                                                    </p>

                                                    {/* Specs Grid */}
                                                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 pt-10 border-t border-slate-100">
                                                        {Object.entries(product.specs).map(([key, value]) => (
                                                            <div key={key} className="space-y-1">
                                                                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] block">{key}</span>
                                                                <span className="text-sm font-bold text-slate-800">{value}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="mt-12 flex items-center justify-between pt-8">
                                                    <div className="flex items-center gap-6">
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">In Stock</span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <Info className="w-4 h-4 text-slate-300" />
                                                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Technical Data Sheet Available</span>
                                                        </div>
                                                    </div>
                                                    <button className="flex items-center gap-4 bg-slate-900 text-white px-8 py-4 rounded-2xl hover:bg-brand-indigo transition-all font-bold text-sm group/btn shadow-lg shadow-slate-900/10">
                                                        Request Quotation
                                                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
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
                                    <h3 className="text-lg font-bold text-slate-900">No products found</h3>
                                    <p className="text-slate-500">Try adjusting your search or category filters for matching solutions.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ProductCatalog;
