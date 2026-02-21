import React from 'react';
import { Instagram } from 'lucide-react';

// Family Images
import family1 from '../../assets/family/Screenshot 2026-02-21 181747.png';
import family2 from '../../assets/family/Screenshot 2026-02-21 181803.png';
import family3 from '../../assets/family/Screenshot 2026-02-21 181815.png';
import family4 from '../../assets/family/Screenshot 2026-02-21 181831.png';

const SocialProofWadha = () => {
    const instagramUrl = "https://www.instagram.com/wadhadetergent?igsh=MTB2dGY0emVnZW8wYQ==";

    const socialImages = [
        {
            url: family1,
            alt: "Indian father and son playing with laundry bubbles"
        },
        {
            url: family2,
            alt: "Freshly washed colorful clothes on clothesline"
        },
        {
            url: family3,
            alt: "Happy Indian family sorting clean laundry together"
        },
        {
            url: family4,
            alt: "Mother and daughter folding fresh white laundry"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-heading font-extrabold text-[var(--color-brand-blue-dark)] mb-4 uppercase tracking-tight">Loved by Families Across India</h2>
                <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Join thousands of happy households who trust Wadha for their daily fabric care. Share your clean moments with <span className="text-[var(--color-brand-primary)] font-bold">#WadhaClean</span></p>

                {/* Social Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {socialImages.map((image, index) => (
                        <div key={index} className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500">
                            <img
                                src={image.url}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <Instagram className="text-white transform scale-50 group-hover:scale-100 transition-all duration-300 w-10 h-10" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12">
                    <a
                        href={instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-[var(--color-brand-primary)] text-white font-bold rounded-full hover:bg-blue-700 transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-blue-200 hover:-translate-y-1"
                    >
                        <Instagram className="w-5 h-5 mr-3" />
                        Follow @wadhadetergent
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SocialProofWadha;
