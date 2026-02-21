import React from 'react';
import { ArrowRight } from 'lucide-react';

const guides = [
    {
        title: "How to Wash Clothes Properly",
        desc: "Master the art of laundry with our step-by-step 101 guide for long-lasting freshness.",
        tag: "Essential",
        image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "How to Protect Colours",
        desc: "Keep your favorite brights looking new for longer with these specialized care tips.",
        tag: "Fabric Care",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Washing Machine Dos & Don’ts",
        desc: "Extend the life of your machine and your clothes with proper maintenance.",
        tag: "Appliance Care",
        image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Understanding Fabric Labels",
        desc: "Decode those mysterious symbols on your clothing tags for professional results.",
        tag: "Tips",
        image: "https://images.unsplash.com/photo-1582733732697-b8303e21239c?auto=format&fit=crop&q=80&w=800"
    },
];

const LaundryEducation = () => {
    return (
        <section id="how-to-wash" className="py-24 bg-blue-50/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-blue-900 uppercase tracking-tight">Laundry Tips & How-To Guides</h2>
                    <div className="h-1.5 w-24 bg-[var(--color-brand-primary)] mx-auto mt-4 rounded-full"></div>
                    <p className="text-gray-600 mt-6 max-w-2xl mx-auto">Become a laundry pro with our expert advice on fabric care, stain removal, and garment longevity.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {guides.map((guide, idx) => (
                        <div key={idx} className="bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden group flex flex-col h-full border border-gray-100 hover:-translate-y-2">
                            {/* Image Section */}
                            <div className="h-48 w-full relative overflow-hidden">
                                <img
                                    src={guide.image}
                                    alt={guide.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-black text-blue-900 uppercase tracking-widest rounded-full shadow-sm">
                                        {guide.tag}
                                    </span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            <div className="p-8 flex flex-col flex-1">
                                <h3 className="text-xl font-extrabold text-blue-900 mb-3 leading-tight group-hover:text-[var(--color-brand-primary)] transition-colors">
                                    {guide.title}
                                </h3>
                                <p className="text-sm text-gray-500 mb-6 flex-1 leading-relaxed">
                                    {guide.desc}
                                </p>
                                <a href="#" className="inline-flex items-center text-xs font-black uppercase tracking-widest text-[var(--color-brand-primary)] group/link pt-4 border-t border-gray-50">
                                    Read Guide <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LaundryEducation;
