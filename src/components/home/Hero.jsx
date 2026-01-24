import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, ShieldCheck, Truck, BadgeCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-28 pb-32 overflow-hidden bg-[#fafafa]">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-pure-blue/10 rounded-full blur-[140px]"></div>
                <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-fresh-mint/10 rounded-full blur-[120px]"></div>

                {/* Modern Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
                <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">

                    {/* Left Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2.5 px-4 py-2 bg-white rounded-full border border-slate-100 shadow-sm mb-10"
                        >
                            <div className="p-1 px-2.5 bg-brand-indigo/10 rounded-full">
                                <Sparkles className="w-3.5 h-3.5 text-brand-indigo" />
                            </div>
                            <span className="text-slate-500 font-bold text-[10px] tracking-[0.2em] uppercase">The Future of Industrial Hygiene</span>
                        </motion.div>

                        <h1 className="text-7xl lg:text-[100px] font-bold text-slate-900 mb-8 leading-[0.95] tracking-tight">
                            Smart Tech. <br />
                            <span className="text-gradient-clean">Pure Power.</span>
                        </h1>

                        <p className="text-xl text-slate-500 mb-12 leading-relaxed max-w-xl font-medium">
                            Wadha Industries redefines professional cleaning with high-precision chemistry. From enterprise-scale degreasers to sustainable detergents.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 mb-16">
                            <Link to="/catalog">
                                <motion.button
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-slate-900 text-white px-10 py-5 rounded-full font-bold text-base shadow-2xl shadow-slate-900/20 flex items-center justify-center gap-3 group w-full sm:w-auto transition-all hover:bg-brand-indigo hover:shadow-brand-indigo/30"
                                >
                                    View Collection
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </Link>
                            <Link to="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-full font-bold text-base hover:border-slate-900 w-full sm:w-auto transition-all shadow-sm"
                                >
                                    Bulk Sales
                                </motion.button>
                            </Link>
                        </div>

                        {/* Social Proof */}
                        <div className="flex items-center gap-8">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-11 h-11 rounded-full border-4 border-white shadow-sm overflow-hidden ring-1 ring-slate-100">
                                        <img src={`https://i.pravatar.cc/150?u=${i + 20}`} alt="Client" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col">
                                <div className="flex text-amber-400 gap-0.5 mb-1">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                                </div>
                                <p className="text-xs font-bold text-slate-900 leading-none tracking-tight">Trusted by 2,000+ Business Units</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Visual Column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        {/* Featured Image Frame */}
                        <div className="relative z-10 p-6">
                            <div className="rounded-[40px] overflow-hidden shadow-2xl shadow-slate-200 aspect-[4/5] bg-white border-[12px] border-white relative group">
                                <img
                                    src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
                                    alt="Wadha Product Line"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-40"></div>
                            </div>
                        </div>

                        {/* Floating Status Card */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-xl p-5 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white/50 z-20 flex items-center gap-4"
                        >
                            <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-slate-900/20">
                                <Truck className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Supply Status</p>
                                <p className="text-sm font-bold text-slate-900">National Delivery active</p>
                            </div>
                        </motion.div>

                        {/* Floating Badge */}
                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-xl p-5 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white/50 z-20 flex items-center gap-4"
                        >
                            <div className="w-12 h-12 bg-brand-indigo rounded-2xl flex items-center justify-center text-white shadow-xl shadow-brand-indigo/30">
                                <BadgeCheck className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Quality Control</p>
                                <p className="text-sm font-bold text-slate-900">ISO 9001:2015 Certified</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
