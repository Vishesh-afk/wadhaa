import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
    const reviews = [
        {
            text: "Wadha's industrial formulations have significantly optimized our facility maintenance overheads. The consistency in pH balance across batches is exceptional for large-scale operations.",
            author: "Marquee Hospitality",
            role: "Operations Director",
            rating: 5
        },
        {
            text: "Reliable distribution and high-purity chemicals. Swami Industries (Wadha) has established the benchmark for industrial hygiene in Central India. Their supply chain reliability is commendable.",
            author: "Technical Logistics",
            role: "Procurement Head",
            rating: 5
        },
        {
            text: "The Pro-Series line delivers surgical-grade purity. Under the Wadha brand, we've found a partner that understands the rigorous demands of institutional sanitation.",
            author: "Corporate Wellness",
            role: "Facility Lead",
            rating: 5
        }
    ];

    return (
        <section className="py-40 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 mb-8 bg-slate-50 px-4 py-1.5 rounded-full border border-slate-100"
                    >
                        <span className="text-brand-indigo font-bold text-[10px] uppercase tracking-[0.4em]">Institutional Validation</span>
                    </motion.div>
                    <h3 className="text-5xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1]">
                        Global <span className="text-slate-400 italic">Benchmarks</span>.
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {reviews.map((review, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, ease: [0.23, 1, 0.32, 1] }}
                            className="bg-slate-50 p-12 lg:p-14 rounded-[60px] border border-slate-100 hover:bg-white hover:border-brand-indigo/20 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.06)] transition-all duration-500 flex flex-col group relative"
                        >
                            <Quote className="absolute top-12 right-12 w-12 h-12 text-slate-200 group-hover:text-brand-indigo/10 transition-colors" />

                            <div className="flex text-brand-indigo mb-10">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                            </div>

                            <p className="text-xl text-slate-500 italic leading-relaxed mb-12 flex-grow font-medium">
                                "{review.text}"
                            </p>

                            <div className="flex items-center gap-6 pt-10 border-t border-slate-100">
                                <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white font-bold text-lg group-hover:bg-brand-indigo transition-colors">
                                    {review.author[0]}
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-bold text-slate-900 text-sm tracking-tight">{review.author}</h4>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{review.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-50/50 rounded-full blur-[120px] -mr-[300px] -mt-[300px]"></div>
        </section>
    );
};

export default Testimonials;
