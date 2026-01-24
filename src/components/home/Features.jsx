import React from 'react';
import { Beaker, Leaf, Truck, ArrowRight } from 'lucide-react';

const Features = () => {
    return (
        <section id="solutions" className="py-32 bg-white relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-indigo/5 rounded-full mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-indigo animate-pulse"></span>
                            <span className="text-[10px] font-bold text-brand-indigo tracking-widest uppercase">The Wadha Edge</span>
                        </div>
                        <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
                            Engineered for <br />
                            <span className="text-slate-400 font-medium italic">Industry Excellence</span>
                        </h2>
                    </div>
                    <p className="text-slate-500 text-lg max-w-md leading-relaxed">
                        We merge high-end chemical engineering with sustainable principles to deliver unmatched cleaning power.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Advanced Bio-Chem",
                            desc: "Next-gen molecular formulations designed for molecular-level soil removal on industrial surfaces.",
                            icon: Beaker,
                        },
                        {
                            title: "Sustainable DNA",
                            desc: "Every product is 100% biodegradable, meeting rigorous ISO 14001:2015 environmental standards.",
                            icon: Leaf,
                        },
                        {
                            title: "Rapid Enterprise Logic",
                            desc: "Integrated supply chain ensures your facility never runs out of essential cleaning inventory.",
                            icon: Truck,
                        }
                    ].map((feature, idx) => (
                        <div key={idx} className="group relative p-10 rounded-[40px] bg-slate-50 border border-slate-100 hover:bg-slate-900 hover:border-slate-900 transition-all duration-500 overflow-hidden">
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-10 group-hover:bg-brand-indigo group-hover:border-brand-indigo transition-all duration-500">
                                    <feature.icon className="w-6 h-6 text-slate-900 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-white transition-colors">{feature.title}</h3>
                                <p className="text-slate-500 leading-relaxed font-medium group-hover:text-slate-400 transition-colors mb-8">{feature.desc}</p>
                                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-indigo group-hover:text-white transition-colors">
                                    Learn More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                            {/* Decorative background number */}
                            <span className="absolute -bottom-8 -right-4 text-[120px] font-black text-slate-200/50 group-hover:text-white/5 transition-colors pointer-events-none">0{idx + 1}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
