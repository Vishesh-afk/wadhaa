import React from 'react';
import { ShieldCheck, Droplet, Sun, Zap, Sparkles } from 'lucide-react';

const benefits = [
    { icon: Zap, title: "Deep Stain Fighting", desc: "Penetrates deep into fibers to lift stubborn dirt." },
    { icon: Droplet, title: "Works in Hard Water", desc: "Special formula active even in high TDS water." },
    { icon: ShieldCheck, title: "Gentle on Fabrics", desc: "Tough on stains but safe for your favorites." },
    { icon: Sun, title: "Colour Protection", desc: "Locks in vibrancy so clothes look newer longer." },
    { icon: Sparkles, title: "Long-lasting Freshness", desc: "Fragrance pearls that release scent for days." },
];

const WhyWadha = () => {
    return (
        <section id="why-wadha" className="py-20 bg-[var(--color-brand-blue-dark)] text-white relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500 rounded-full blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="space-y-6">
                        <span className="inline-block bg-blue-800/50 backdrop-blur-sm border border-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold text-blue-100">
                            Science-Backed Cleaning
                        </span>
                        <h2 className="text-4xl md:text-5xl font-heading font-extrabold leading-tight">
                            Why Choose <br /><span className="text-[var(--color-brand-secondary)]">Wadha Power?</span>
                        </h2>
                        <p className="text-blue-100 text-lg max-w-lg leading-relaxed">
                            Wadha leverages advanced enzymatic technology specifically designed for Indian water conditions and cooking stains. Our triple-action formula cleans, protects, and refreshes in a single wash.
                        </p>

                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 mt-8">
                            <p className="italic text-blue-50 font-medium">
                                "We promise a clean that you can see, feel, and smell. No compromise."
                            </p>
                            <div className="mt-4 flex items-center">
                                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                                <div>
                                    <div className="text-sm font-bold text-white">Dr. Rajesh Kumar</div>
                                    <div className="text-xs text-blue-200">Head of R&D, Wadha Labs</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white text-gray-900 rounded-3xl p-8 shadow-2xl relative">
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg transform rotate-12">
                            <div className="text-center leading-none transform -rotate-12">
                                <span className="block font-black text-2xl">#1</span>
                                <span className="text-xs font-bold uppercase">Trusted</span>
                            </div>
                        </div>

                        <div className="space-y-8">
                            {benefits.map((item, idx) => (
                                <div key={idx} className="flex items-start">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mr-4">
                                        <item.icon className="w-6 h-6 text-[var(--color-brand-primary)]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-[var(--color-brand-primary)]">{item.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyWadha;
