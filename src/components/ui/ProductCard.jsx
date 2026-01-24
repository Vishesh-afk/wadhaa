import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, Package } from 'lucide-react';

const ProductCard = ({ title, category, price, moq, image }) => {
    return (
        <motion.div
            whileHover={{ y: -12 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="group bg-white rounded-[40px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all flex flex-col h-full"
        >
            {/* Image Preview Container */}
            <div className="relative aspect-[4/5] overflow-hidden bg-slate-50">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-indigo/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Status Badges */}
                <div className="absolute top-6 left-6 flex flex-col gap-2 z-20">
                    <span className="bg-slate-900 text-white px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest shadow-lg">
                        {category}
                    </span>
                    {moq && (
                        <div className="bg-white/90 backdrop-blur-md text-brand-indigo px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest flex items-center gap-2 border border-brand-indigo/10 shadow-sm">
                            <Package className="w-3 h-3" />
                            MOQ: {moq}
                        </div>
                    )}
                </div>

                <div className="w-full h-full flex items-center justify-center p-12">
                    {image ? (
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-1000"
                        />
                    ) : (
                        <div className="w-full h-full relative flex items-center justify-center">
                            <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                    rotate: [0, 2, 0]
                                }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="w-24 h-44 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl flex items-center justify-center relative border border-white overflow-hidden group-hover:rotate-6 transition-transform duration-700"
                            >
                                <div className="absolute top-0 left-0 w-full h-2 bg-brand-indigo/40" />
                                <Zap className="w-8 h-8 text-slate-200 group-hover:text-brand-indigo/40 transition-colors" />
                            </motion.div>

                            {/* Decorative particles */}
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-indigo/5 rounded-full blur-3xl group-hover:bg-brand-indigo/10 transition-colors"></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Product Meta Section */}
            <div className="p-10 pt-8 flex flex-col flex-grow bg-white">
                <div className="space-y-3 mb-10">
                    <h4 className="text-[24px] font-bold text-slate-900 leading-tight tracking-tight group-hover:text-brand-indigo transition-colors italic">
                        {title}
                    </h4>
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">Institutional Series PV-4</p>
                    </div>
                </div>

                <div className="flex justify-between items-end mt-auto">
                    <div className="flex flex-col">
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">Standard Valuation</span>
                        <span className="text-3xl font-bold text-slate-900 group-hover:text-brand-indigo transition-colors tracking-tight">{price}</span>
                    </div>
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center hover:bg-brand-indigo transition-all shadow-xl shadow-slate-900/10 group/btn"
                    >
                        <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
