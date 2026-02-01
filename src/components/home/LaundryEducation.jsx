import React from 'react';
import { ArrowRight } from 'lucide-react';

const guides = [
    {
        title: "How to Wash Clothes Properly",
        desc: "Master the art of laundry with our step-by-step 101 guide.",
        tag: "Essential"
    },
    {
        title: "How to Protect Colours",
        desc: "Keep your favorite brights looking new for longer.",
        tag: "Fabric Care"
    },
    {
        title: "Washing Machine Dos & Don’ts",
        desc: "Extend the life of your machine and your clothes.",
        tag: "Appliance Care"
    },
    {
        title: "Understanding Fabric Labels",
        desc: "Decode those mysterious symbols on your clothing tags.",
        tag: "Tips"
    },
];

const LaundryEducation = () => {
    return (
        <section id="how-to-wash" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-heading font-extrabold text-gray-900">Laundry Tips & How-To Guides</h2>
                    <p className="text-gray-600 mt-2">Become a laundry pro with our expert advice.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {guides.map((guide, idx) => (
                        <div key={idx} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group flex flex-col h-full border border-gray-100">
                            {/* Image Placeholder */}
                            <div className="h-40 bg-gray-200 w-full flex items-center justify-center relative overflow-hidden">
                                <div className="text-gray-400 text-xs font-medium">[Guide Image]</div>
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                            </div>

                            <div className="p-6 flex flex-col flex-1">
                                <span className="text-xs font-bold text-[var(--color-brand-secondary)] uppercase tracking-wider mb-2">{guide.tag}</span>
                                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-[var(--color-brand-primary)] transition-colors">
                                    {guide.title}
                                </h3>
                                <p className="text-sm text-gray-500 mb-4 flex-1">
                                    {guide.desc}
                                </p>
                                <a href="#" className="inline-flex items-center text-sm font-bold text-[var(--color-brand-primary)] hover:underline mt-auto">
                                    Read More <ArrowRight className="ml-1 w-3 h-3" />
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
