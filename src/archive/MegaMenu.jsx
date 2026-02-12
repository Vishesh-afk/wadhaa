import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Sparkles, ShieldCheck, Star } from 'lucide-react';
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
                    className={`flex items-center gap-2 font-semibold text-sm transition-all py-4 hover:scale-105
                        ${activeMenu === 'products' ? 'text-deep-blue' : 'text-gray-600 hover:text-deep-blue'}`}
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
                            className="absolute top-full -left-64 w-[1100px] bg-white rounded-3xl shadow-premium border-2 border-soft-gray overflow-hidden z-50 p-10"
                        >
                            <div className="grid grid-cols-12 gap-10">
                                {/* Left Section - Featured Card */}
                                <div className="col-span-3">
                                    <div className="h-full bg-gradient-to-br from-deep-blue to-ocean-blue rounded-2xl p-8 text-white relative overflow-hidden group/featured">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-fresh-green/20 blur-3xl -mr-16 -mt-16 group-hover/featured:bg-fresh-green/40 transition-colors"></div>
                                        <div className="relative z-10 space-y-6">
                                            <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center">
                                                <Sparkles className="w-6 h-6 text-fresh-green" />
                                            </div>
                                            <div className="space-y-2">
                                                <h4 className="text-xl font-bold leading-tight">Premium <br />Collection</h4>
                                                <p className="text-sm text-white/70">Professional cleaning solutions for businesses of all sizes.</p>
                                            </div>
                                            <button
                                                onClick={() => {
                                                    navigate('/catalog');
                                                    setActiveMenu(null);
                                                }}
                                                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-fresh-green hover:text-white transition-colors group/btn"
                                            >
                                                View All <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                            </button>
                                        </div>
                                        <div className="mt-12 pt-8 border-t border-white/10 space-y-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-fresh-green/20 flex items-center justify-center">
                                                    <ShieldCheck className="w-4 h-4 text-fresh-green" />
                                                </div>
                                                <span className="text-[10px] font-bold uppercase tracking-wider text-white/70">ISO Certified</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Main Categories */}
                                <div className="col-span-9 grid grid-cols-3 gap-x-10 gap-y-12">
                                    {productsData.map((cat, idx) => (
                                        <div key={idx} className="space-y-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-xl bg-light-gray flex items-center justify-center text-deep-blue group-hover:bg-deep-blue group-hover:text-white transition-all">
                                                    <cat.icon className="w-5 h-5 transition-colors" />
                                                </div>
                                                <h3 className="font-bold text-deep-blue text-sm tracking-tight">{cat.category}</h3>
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
                                                            className="flex items-center gap-2 text-[13px] text-gray-600 hover:text-deep-blue transition-all group/item text-left"
                                                        >
                                                            <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover/item:bg-fresh-green transition-colors flex-shrink-0" />
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
                            <div className="mt-12 pt-8 border-t border-soft-gray flex items-center justify-between">
                                <div className="flex items-center gap-8">
                                    <div className="flex items-center gap-3 px-4 py-2 bg-light-gray rounded-xl">
                                        <div className="w-2 h-2 rounded-full bg-fresh-green animate-pulse"></div>
                                        <span className="text-[11px] font-bold text-gray-700 uppercase tracking-wider">Pan-India Delivery</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Star className="w-4 h-4 text-bright-yellow fill-current" />
                                        <span className="text-[11px] font-bold text-gray-600 uppercase tracking-wider">Top Rated</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-gray-600">
                                    <span className="text-xs font-semibold">Need Bulk Pricing?</span>
                                    <button
                                        onClick={() => {
                                            navigate('/contact');
                                            setActiveMenu(null);
                                        }}
                                        className="px-5 py-2.5 bg-gradient-to-r from-deep-blue to-ocean-blue text-white text-xs font-bold rounded-xl hover:shadow-glow-blue transition-all shadow-md"
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
