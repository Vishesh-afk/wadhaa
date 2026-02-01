import React from 'react';
import { Instagram } from 'lucide-react';

const SocialProofWadha = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-heading font-extrabold text-[var(--color-brand-blue-dark)] mb-4">Loved by Families Across India</h2>
                <p className="text-gray-600 mb-12">Join thousands of happy households. Share your clean moments with <span className="text-[var(--color-brand-primary)] font-bold">#WadhaClean</span></p>

                {/* Carousel Placeholder Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="relative aspect-square bg-gray-100 rounded-xl overflow-hidden group cursor-pointer">
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                                <span className="text-xs text-gray-500 font-medium text-center px-4">
                                    [User-generated Image {item}]<br />Laundry Moment
                                </span>
                            </div>
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                <Instagram className="text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 w-8 h-8" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10">
                    <button className="px-6 py-3 border-2 border-[var(--color-brand-primary)] text-[var(--color-brand-primary)] font-bold rounded-full hover:bg-blue-50 transition-colors inline-flex items-center">
                        <Instagram className="w-5 h-5 mr-2" />
                        Follow us on Instagram
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SocialProofWadha;
