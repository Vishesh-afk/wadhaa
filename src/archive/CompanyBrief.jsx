import React from 'react';
import { motion } from 'framer-motion';
import { Award, Factory, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const CompanyBrief = () => {
    return (
        <section id="about" className="py-32 bg-white relative overflow-hidden scroll-mt-20">
            {/* Background Decorations */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-sky-blue/5 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-fresh-green/5 rounded-full blur-[100px]"></div>

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
                            <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl border-[16px] border-white relative group">
                                <img
                                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop"
                                    alt="Manufacturing Facility"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/60 via-transparent to-transparent"></div>
                            </div>

                            {/* Stats Card */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="absolute -bottom-8 -right-8 bg-gradient-to-br from-deep-blue to-ocean-blue p-10 rounded-[40px] shadow-2xl text-white z-20 hidden md:block"
                            >
                                <div className="text-6xl font-black mb-1 leading-none tracking-tighter">10+</div>
                                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">Years Experience</div>
                                <div className="w-12 h-1.5 bg-fresh-green rounded-full mt-6"></div>
                            </motion.div>
                        </div>

                        {/* Decorative background element */}
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-sky-blue/10 to-fresh-green/10 rounded-[60px] -z-10 translate-x-4 translate-y-4"></div>
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
                                <div className="p-2 bg-gradient-to-r from-deep-blue/10 to-fresh-green/10 rounded-lg">
                                    <Factory className="w-5 h-5 text-deep-blue" />
                                </div>
                                <span className="text-deep-blue font-bold text-[11px] uppercase tracking-[0.3em]">About Swami</span>
                            </div>

                            <h3 className="text-5xl lg:text-7xl font-black text-deep-blue mb-10 leading-[1.05] tracking-tight">
                                Quality in <br />
                                <span className="text-gradient-green">Every Drop</span>
                            </h3>

                            <div className="space-y-6 mb-12">
                                <p className="text-xl text-deep-blue font-semibold leading-relaxed">
                                    Established in 2014, SWAMI Industries has become a trusted name in professional cleaning solutions across India.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                    From our state-of-the-art manufacturing facility in Gondia, Maharashtra, we produce premium detergents, cleaning agents, and hygiene products. Our commitment to quality and innovation ensures every product delivers exceptional cleaning power while being safe for your family and the environment.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-10 mb-16">
                                <div className="space-y-4">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-deep-blue to-ocean-blue flex items-center justify-center text-white shadow-lg">
                                        <Award className="w-7 h-7" />
                                    </div>
                                    <h4 className="font-bold text-deep-blue text-base tracking-tight">ISO Certified</h4>
                                    <p className="text-sm text-gray-600 font-medium leading-relaxed">Quality assurance in every batch we manufacture.</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-fresh-green to-lime-green flex items-center justify-center text-white shadow-lg">
                                        <Sparkles className="w-7 h-7" />
                                    </div>
                                    <h4 className="font-bold text-deep-blue text-base tracking-tight">Eco-Friendly</h4>
                                    <p className="text-sm text-gray-600 font-medium leading-relaxed">Sustainable formulations for a cleaner tomorrow.</p>
                                </div>
                            </div>

                            <Link
                                to="/about"
                                className="inline-flex items-center gap-4 bg-gradient-to-r from-deep-blue to-ocean-blue text-white px-10 py-5 rounded-xl font-bold text-sm tracking-wide hover:shadow-glow-blue transition-all shadow-lg group hover:scale-105"
                            >
                                Learn More About Us
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
