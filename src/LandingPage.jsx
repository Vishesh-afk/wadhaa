
import React from 'react';

// Use a reliable placeholder or the previously downloaded asset if valid. 
// For now, using Unsplash directly ensures it works immediately.
const heroImage = "https://images.unsplash.com/photo-1585421514284-802c2d74263d?q=80&w=2070&auto=format&fit=crop";

const Navbar = () => (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-xl shadow-lg border-b border-white/20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
                <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                    <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-teal-500/50 shadow-lg">W</div>
                    <span className="text-2xl font-bold text-slate-900 tracking-tight">WADHA</span>
                </div>
                <div className="hidden md:flex space-x-8 items-center">
                    {['Home', 'Products', 'Solutions', 'About Us'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-slate-600 hover:text-teal-600 font-medium transition-colors duration-200">
                            {item}
                        </a>
                    ))}
                    <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-full font-medium transition-all transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal-500/40 active:scale-95">
                        Request Quote
                    </button>
                </div>
            </div>
        </div>
    </nav>
);

const Hero = () => (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100/50 rounded-full blur-3xl filter opacity-60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                <div className="mb-12 lg:mb-0 animate-slide-up">
                    <div className="inline-flex items-center px-4 py-2 bg-teal-50 rounded-full border border-teal-100 mb-8 shadow-sm">
                        <span className="flex h-2 w-2 relative mr-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                        </span>
                        <span className="text-teal-800 font-semibold text-sm tracking-wide uppercase">Premium B2B Cleaning Solutions</span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
                        Industrial Grade <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">Cleanliness</span>
                    </h1>

                    <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
                        Empowering businesses with eco-friendly, high-efficiency formulation. Tailored for hospitals, hotels, and corporate spaces.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-teal-600/20 transform hover:-translate-y-1">
                            Explore Catalog
                        </button>
                        <button className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:border-slate-300 hover:shadow-md">
                            Contact Sales
                        </button>
                    </div>

                    <div className="flex items-center gap-8 border-t border-slate-200 pt-8">
                        <div className="flex -space-x-4">
                            {[1, 2, 3].map(i => (
                                <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden`}>
                                    <img src={`https://randomuser.me/api/portraits/men/${i * 10}.jpg`} alt="User" />
                                </div>
                            ))}
                        </div>
                        <div className="text-sm">
                            <p className="font-bold text-slate-900">Trusted by 500+ Companies</p>
                            <div className="flex text-yellow-400">
                                {'★★★★★'.split('').map(s => <span key={s}>{s}</span>)}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative animate-slide-up animate-delay-200">
                    <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 border-4 border-white transform hover:scale-[1.01] transition-transform duration-500">
                        <img
                            src={heroImage}
                            alt="Wadha Premium Cleaning Products"
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-lg">
                                <p className="text-slate-900 font-bold">Aqua-Pure Professional Series</p>
                                <p className="text-teal-600 text-sm">New generation of eco-solvents</p>
                            </div>
                        </div>
                    </div>

                    {/* Floating elements */}
                    <div className="absolute -top-10 -right-10 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 animate-bounce" style={{ animationDuration: '3s' }}>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase font-semibold">Verified</p>
                                <p className="font-bold text-slate-900">100% Eco-Friendly</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const Features = () => (
    <section id="solutions" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20 max-w-3xl mx-auto animate-slide-up">
                <h2 className="text-sm font-bold text-teal-600 uppercase tracking-wider mb-2">Our Advantage</h2>
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Why Industry Leaders Choose Wadha?</h2>
                <p className="text-slate-600 text-lg">We combine advanced chemical engineering with sustainable practices to deliver superior cleaning power that doesn't compromise on safety.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
                {[
                    {
                        title: "Advanced Formulation",
                        desc: "Proprietary blends designed for maximum efficacy against tough industrial stains and bio-contaminants.",
                        icon: (
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                        ),
                        color: "bg-blue-500"
                    },
                    {
                        title: "Sustainable & Green",
                        desc: "100% biodegradable ingredients. Safe for your staff, your customers, and the planet. ISO 14001 Compliant.",
                        icon: (
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        ),
                        color: "bg-teal-500"
                    },
                    {
                        title: "Bulk B2B Logistics",
                        desc: "Reliable supply chain solutions for wholesale orders with guaranteed on-time delivery across the region.",
                        icon: (
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        ),
                        color: "bg-indigo-500"
                    }
                ].map((feature, idx) => (
                    <div key={idx} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 transform hover:-translate-y-2">
                        <div className={`w-16 h-16 ${feature.color} rounded-2xl shadow-lg shadow-${feature.color.replace('bg-', '')}/40 flex items-center justify-center mb-8 rotate-3 group-hover:rotate-6 transition-transform`}>
                            {feature.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                        <p className="text-slate-600 leading-relaxed font-medium">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const ProductCard = ({ title, category, price }) => (
    <div className="group relative overflow-hidden rounded-3xl bg-white border border-slate-100 hover:border-teal-100 hover:shadow-2xl hover:shadow-teal-900/10 transition-all duration-300">
        <div className="aspect-[4/5] bg-slate-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 opacity-50"></div>
            {/* Mock Product Image using CSS Art for placeholder if needed, essentially just a colored block for now */}
            <div className="absolute inset-0 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-700">
                <div className="w-32 h-64 bg-slate-50 rounded-full shadow-inner border border-white/40 backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute top-10 left-0 right-0 h-40 bg-teal-500/10 rotate-45 transform translate-y-4"></div>
                </div>
            </div>

            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full px-3 py-1 text-xs font-bold text-slate-900 shadow-sm z-10">
                {category}
            </div>
        </div>

        <div className="p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-teal-600 transition-colors">{title}</h3>
            <div className="flex justify-between items-center mt-4">
                <span className="text-slate-500 text-sm">Industrial Size</span>
                <span className="font-bold text-slate-900">{price}</span>
            </div>
            <button className="w-full mt-6 py-3 rounded-xl border border-slate-200 font-semibold text-slate-700 hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-all">
                View Details
            </button>
        </div>
    </div>
);

const Products = () => (
    <section id="products" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                <div>
                    <h2 className="text-sm font-bold text-teal-600 uppercase tracking-wider mb-2">Our Catalogue</h2>
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Professional Grade Solutions</h2>
                </div>
                <a href="#" className="group flex items-center text-teal-600 font-bold hover:text-teal-700 transition-colors bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md border border-slate-100">
                    View Full Catalog
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <ProductCard title="Industrial Degreaser" category="Heavy Duty" price="$85.00" />
                <ProductCard title="Glass Pro 5L" category="Surface Care" price="$42.50" />
                <ProductCard title="Bio-Sanitizer" category="Disinfectants" price="$65.00" />
                <ProductCard title="Floor Shine X" category="Floor Care" price="$120.00" />
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-12 mb-16">
                <div className="col-span-1 md:col-span-2 pr-12">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">W</div>
                        <span className="text-2xl font-bold text-white tracking-tight">WADHA</span>
                    </div>
                    <p className="text-slate-400 leading-relaxed mb-8 max-w-md">
                        Setting the new standard in B2B hygiene solutions. We supply the cleaning power that keeps businesses running safely, efficiently, and sustainably.
                    </p>
                    <div className="flex space-x-4">
                        {['twitter', 'facebook', 'linkedin', 'instagram'].map(social => (
                            <a key={social} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-500 hover:text-white transition-all transform hover:-translate-y-1">
                                <span className="sr-only">{social}</span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /></svg>
                            </a>
                        ))}
                    </div>
                </div>
                <div>
                    <h4 className="font-bold text-lg mb-8 text-white">Products</h4>
                    <ul className="space-y-4 text-slate-400">
                        <li><a href="#" className="hover:text-teal-400 transition-colors">Floor Care</a></li>
                        <li><a href="#" className="hover:text-teal-400 transition-colors">Infection Control</a></li>
                        <li><a href="#" className="hover:text-teal-400 transition-colors">Food Hygiene</a></li>
                        <li><a href="#" className="hover:text-teal-400 transition-colors">Laundry Systems</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-lg mb-8 text-white">Company</h4>
                    <ul className="space-y-4 text-slate-400">
                        <li><a href="#" className="hover:text-teal-400 transition-colors">About Wadha</a></li>
                        <li><a href="#" className="hover:text-teal-400 transition-colors">Sustainability</a></li>
                        <li><a href="#" className="hover:text-teal-400 transition-colors">Careers</a></li>
                        <li><a href="#" className="hover:text-teal-400 transition-colors">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Wadha Cleaning Solutions. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white">Privacy Policy</a>
                    <a href="#" className="hover:text-white">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
);

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-teal-200 selection:text-teal-900">
            <Navbar />
            <Hero />
            <Features />
            <Products />
            <Footer />
        </div>
    );
}
