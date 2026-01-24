import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Phone, Boxes, Rocket, ShieldCheck, Zap, Star } from 'lucide-react';
import { productsData } from '../../data/products';
import { useNavigate } from 'react-router-dom';

const MegaMenu = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const navigate = useNavigate();

    return (
        <nav className="flex items-center gap-10" onMouseLeave={() => setActiveMenu(null)}>
            {/* Products Menu */}
            <div
                className="relative group"
                onMouseEnter={() => setActiveMenu('products')}
            >
                <button
                    onClick={() => navigate('/catalog')}
                    className={`flex items-center gap-2 font-semibold text-[15px] tracking-tight transition-all py-4
                        ${activeMenu === 'products' ? 'text-brand-indigo' : 'text-slate-600 hover:text-brand-indigo'}`}
                >
                    Products
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMenu === 'products' ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                    {activeMenu === 'products' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.98 }}
                            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                            className="absolute top-full -left-64 w-[1100px] bg-white rounded-[32px] shadow-[0_30px_100px_-15px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden z-50 p-10"
                        >
                            <div className="grid grid-cols-12 gap-10">
                                {/* Left Section - Featured Card */}
                                <div className="col-span-3">
                                    <div className="h-full bg-slate-900 rounded-[28px] p-8 text-white relative overflow-hidden group/featured">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-indigo/20 blur-3xl -mr-16 -mt-16 group-hover/featured:bg-brand-indigo/40 transition-colors"></div>
                                        <div className="relative z-10 space-y-6">
                                            <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center">
                                                <Zap className="w-6 h-6 text-brand-indigo" />
                                            </div>
                                            <div className="space-y-2">
                                                <h4 className="text-xl font-bold leading-tight">Wadha <br />Enterprise</h4>
                                                <p className="text-sm text-slate-400">High-performance cleaning industrial solutions for large scale units.</p>
                                            </div>
                                            <button
                                                onClick={() => {
                                                    navigate('/catalog');
                                                    setActiveMenu(null);
                                                }}
                                                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-indigo hover:text-white transition-colors group/btn"
                                            >
                                                Explore Series <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                            </button>
                                        </div>
                                        <div className="mt-12 pt-8 border-t border-white/5 space-y-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                                                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                                                </div>
                                                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300">ISO Certified</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Main Categories */}
                                <div className="col-span-9 grid grid-cols-3 gap-x-10 gap-y-12">
                                    {productsData.map((cat, idx) => (
                                        <div key={idx} className="space-y-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-brand-indigo group-hover:text-white transition-all">
                                                    <cat.icon className="w-5 h-5 transition-colors" />
                                                </div>
                                                <h3 className="font-bold text-slate-900 text-sm tracking-tight">{cat.category}</h3>
                                            </div>
                                            <ul className="space-y-4">
                                                {cat.products.slice(0, 3).map((product, pIdx) => (
                                                    <li key={pIdx}>
                                                        <button
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                navigate(`/catalog?cat=${cat.id}`);
                                                                setActiveMenu(null);
                                                            }}
                                                            className="flex items-center gap-2 text-[13px] text-slate-500 hover:text-brand-indigo transition-all group/item text-left"
                                                        >
                                                            <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover/item:bg-brand-indigo transition-colors flex-shrink-0" />
                                                            {product.name}
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Bottom Bar */}
                            <div className="mt-12 pt-8 border-t border-slate-50 flex items-center justify-between">
                                <div className="flex items-center gap-8">
                                    <div className="flex items-center gap-3 px-4 py-2 bg-slate-50 rounded-xl">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                        <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">Pan-India Delivery Active</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                                        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Top Rated Solutions</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-slate-400">
                                    <span className="text-xs">Need Bulk Pricing?</span>
                                    <button
                                        onClick={() => {
                                            navigate('/contact');
                                            setActiveMenu(null);
                                        }}
                                        className="px-5 py-2.5 bg-brand-indigo text-white text-xs font-bold rounded-xl hover:bg-slate-900 transition-colors shadow-lg shadow-brand-indigo/20"
                                    >
                                        Contact Sales
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default MegaMenu;
