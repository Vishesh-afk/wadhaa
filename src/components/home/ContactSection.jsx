import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Send, Globe, MessageSquare, Clock, User, Building } from 'lucide-react';

const ContactSection = () => {
    const offices = [
        { name: "Nikita", role: "Sales Enquiry", location: "A-3 MIDC, Gondia, India" },
        { name: "Aditya", role: "Head Office", location: "A-3 MIDC Industrial Area, India" },
        { name: "Karan", role: "Head Office", location: "Delhi, India" }
    ];

    return (
        <section id="contact" className="py-32 bg-slate-50 relative overflow-hidden scroll-mt-20">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-indigo/5 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-fresh-mint/5 blur-[120px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="bg-white rounded-[60px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden">
                    <div className="grid lg:grid-cols-2">

                        {/* Information Panel */}
                        <div className="bg-slate-900 p-12 lg:p-20 text-white relative flex flex-col justify-between overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-indigo/20 to-transparent opacity-50"></div>

                            <div className="relative z-10">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 mb-8"
                                >
                                    < Globe className="w-3.5 h-3.5 text-brand-indigo" />
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">Operational Headquarters</span>
                                </motion.div>

                                <motion.h3
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-5xl lg:text-6xl font-black leading-tight mb-8"
                                >
                                    Reach Our <br />
                                    <span className="text-gradient-clean italic">Partners.</span>
                                </motion.h3 >

                                {/* Main Contact Person & Address */}
                                <div className="mb-12 space-y-6">
                                    <div className="flex items-start gap-6 group">
                                        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-indigo transition-all duration-500">
                                            <Building className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1">Company Entity</p>
                                            <p className="text-xl font-bold text-white leading-tight">Swami Industries</p>
                                            <p className="text-slate-400 text-sm mt-2 leading-relaxed max-w-xs">
                                                A-3 MIDC, Tirora Road, Mundipar, Shejgaon, Gondia - 441614, Maharashtra, India
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-6 group">
                                        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-indigo transition-all duration-500">
                                            <User className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1">Contact Person</p>
                                            <p className="text-xl font-bold text-white">Aditya Wadhwa <span className="text-sm font-medium text-slate-500 ml-2">(Partner)</span></p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-6 group">
                                        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-fresh-mint transition-all duration-500">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1">Direct Line</p>
                                            <p className="text-2xl font-black text-white hover:text-fresh-mint transition-colors cursor-pointer">08048976392</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Additional Details Section */}
                                <div className="space-y-6 pt-8 border-t border-white/10">
                                    <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">Network Liaisons</h5>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                                        {offices.map((office, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: idx * 0.1 }}
                                                className="bg-white/5 rounded-2xl p-4 border border-white/5 hover:border-brand-indigo/30 transition-all"
                                            >
                                                <div className="flex justify-between items-start mb-1">
                                                    <p className="text-sm font-bold text-white">{office.name}</p>
                                                    <span className="text-[8px] font-bold text-brand-indigo uppercase tracking-wider bg-brand-indigo/10 px-2 py-0.5 rounded-full">{office.role}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-slate-400">
                                                    <MapPin className="w-3 h-3" />
                                                    <p className="text-[10px]">{office.location}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-20 relative z-10 pt-10 border-t border-white/10 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-fresh-mint animate-pulse" />
                                    <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Enterprise Support Active</p>
                                </div>
                                <button className="text-[10px] font-bold text-slate-300 hover:text-white transition-colors uppercase tracking-widest flex items-center gap-2">
                                    View on Map <MessageSquare className="w-3 h-3" />
                                </button>
                            </div>
                        </div>

                        {/* Simplified Form Panel */}
                        <div className="p-12 lg:p-20 bg-white flex flex-col justify-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-12"
                            >
                                <h4 className="text-3xl font-black text-slate-900 mb-2 italic">Connect Now.</h4>
                                <p className="text-slate-500 text-sm font-medium">Please provide your details for a technical consultation.</p>
                            </motion.div>

                            <form className="space-y-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-4 focus:ring-brand-indigo/5 focus:border-brand-indigo transition-all font-bold text-slate-900 placeholder:text-slate-300"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        placeholder="+91 00000 00000"
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-4 focus:ring-brand-indigo/5 focus:border-brand-indigo transition-all font-bold text-slate-900 placeholder:text-slate-300"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Inquiry Description</label>
                                    <textarea
                                        rows="6"
                                        placeholder="Describe your requirements (MOQ, technical specs...)"
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-4 focus:ring-brand-indigo/5 focus:border-brand-indigo transition-all font-bold text-slate-900 placeholder:text-slate-300 resize-none"
                                    ></textarea>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-slate-900 text-white p-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-4 hover:bg-brand-indigo transition-all shadow-xl shadow-slate-900/10 group"
                                >
                                    Submit Request
                                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform overflow-visible" />
                                </motion.button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
