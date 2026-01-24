import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const CompanyBrief = () => {
    return (
        <section id="about" className="py-32 bg-white relative overflow-hidden scroll-mt-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="lg:grid lg:grid-cols-2 gap-24 items-center">

                    {/* Image / Visual Column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                        className="relative"
                    >
                        <div className="relative z-10 p-6">
                            <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl border-[16px] border-slate-50 relative group">
                                <img
                                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop"
                                    alt="R&D Laboratory"
                                    className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply"></div>
                            </div>

                            {/* Stats Card */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="absolute -bottom-8 -right-8 bg-slate-900 p-10 rounded-[48px] shadow-2xl text-white z-20 hidden md:block"
                            >
                                <div className="text-6xl font-bold mb-1 leading-none tracking-tighter">12+</div>
                                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Production Units</div>
                                <div className="w-12 h-1.5 bg-brand-indigo rounded-full mt-6"></div>
                            </motion.div>
                        </div>

                        {/* Decorative background element */}
                        <div className="absolute top-0 right-0 w-full h-full bg-slate-50 rounded-[60px] -z-10 translate-x-4 translate-y-4"></div>
                    </motion.div>

                    {/* Content Column */}
                    <div className="mt-20 lg:mt-0">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <span className="text-brand-indigo font-bold text-[10px] uppercase tracking-[0.3em]">Institutional Heritage</span>
                            </div>

                            <h3 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-10 leading-[1.05] tracking-tight">
                                Intelligence in <br />
                                <span className="text-slate-400 italic">Chemistry</span>.
                            </h3>

                            <div className="space-y-6 mb-12">
                                <p className="text-xl text-slate-900 font-semibold leading-relaxed">
                                    Founded in 2014, Wadha Industries has evolved into a powerhouse of industrial chemical innovation.
                                </p>
                                <p className="text-lg text-slate-500 leading-relaxed font-medium">
                                    Our facilities are optimized for precision engineering and high-volume output. Beyond surface cleaning, we create molecular formulations renowned for high purity and extreme stability. Every batch is a testament to our technical rigor.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-10 mb-16">
                                <div className="space-y-4">
                                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900">
                                        <Award className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-bold text-slate-900 text-sm tracking-tight">High Purity Grades</h4>
                                    <p className="text-xs text-slate-400 font-medium leading-relaxed">Lab-verified molecular consistency across every batch.</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="w-12 h-12 rounded-2xl bg-brand-indigo/5 flex items-center justify-center text-brand-indigo">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-bold text-slate-900 text-sm tracking-tight">Stability Matrix</h4>
                                    <p className="text-xs text-slate-400 font-medium leading-relaxed">Extended shelf life engineered for logistics cycles.</p>
                                </div>
                            </div>

                            <Link
                                to="/about"
                                className="inline-flex items-center gap-6 bg-slate-900 text-white px-10 py-5 rounded-full font-bold text-sm tracking-wide hover:bg-brand-indigo transition-all shadow-xl shadow-slate-900/10 group"
                            >
                                Operational Factsheet
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CompanyBrief;
