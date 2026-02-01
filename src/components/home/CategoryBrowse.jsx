import React from 'react';
import { Package, Droplet, Layers, Hand, ArrowRight } from 'lucide-react';

const categories = [
    { name: "Detergent Powder", icon: Package, desc: "Deep cleaning power for everyday loads", color: "text-blue-600", bg: "bg-blue-100", border: "hover:border-blue-300" },
    { name: "Liquid Detergent", icon: Droplet, desc: "Gentle care for delicate fabrics", color: "text-cyan-600", bg: "bg-cyan-100", border: "hover:border-cyan-300" },
    { name: "Detergent Pods", icon: Layers, desc: "Pre-measured for perfect results", color: "text-purple-600", bg: "bg-purple-100", border: "hover:border-purple-300" },
    { name: "Hand Wash", icon: Hand, desc: "Tough on germs, soft on hands", color: "text-pink-600", bg: "bg-pink-100", border: "hover:border-pink-300" }
];

const CategoryBrowse = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-white to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10">
                    <div>
                        <span className="text-[var(--color-brand-secondary)] font-bold text-sm uppercase tracking-wider">Our Range</span>
                        <h2 className="text-3xl font-bold font-heading text-[var(--color-brand-blue-dark)] mt-2">Browse by Category</h2>
                    </div>
                    <a href="/catalog" className="text-[var(--color-brand-primary)] font-semibold hover:underline flex items-center mt-4 md:mt-0">
                        View All Products <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat, idx) => (
                        <a key={idx} href="#" className={`flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-floating transition-all duration-300 border border-gray-100 ${cat.border} group relative overflow-hidden`}>
                            {/* Decorative background blob */}
                            <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full ${cat.bg} opacity-50 group-hover:scale-150 transition-transform duration-500 ease-out`}></div>

                            <div className={`relative z-10 w-20 h-20 rounded-2xl ${cat.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner`}>
                                <cat.icon className={`w-10 h-10 ${cat.color}`} />
                            </div>

                            <div className="relative z-10 text-center">
                                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[var(--color-brand-primary)] transition-colors">{cat.name}</h3>
                                <p className="text-sm text-gray-500 mt-2">{cat.desc}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryBrowse;
