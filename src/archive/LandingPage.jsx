import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import heroImg1 from './assets/WhatsApp Image 2026-01-17 at 5.05.55 PM.jpeg';
import heroImg2 from './assets/WhatsApp Image 2026-01-17 at 5.05.56 PM.jpeg';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const heroRef = useRef(null);
    const navigate = useNavigate();
    const [currentImg, setCurrentImg] = useState(0);
    const images = [heroImg1, heroImg2];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImg((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.from(".hero-content > *", { y: 50, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" })
                .from(".hero-image", { x: 50, opacity: 0, duration: 1, ease: "back.out(1.7)" }, "-=0.6");
        }, heroRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} id="home" className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-100 min-h-screen flex items-center">
            {/* Background Bubbles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(10)].map((_, i) => (
                    <div key={i} className="absolute rounded-full bg-blue-400/20 backdrop-blur-sm animate-float-bubble"
                        style={{
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 60 + 20}px`,
                            height: `${Math.random() * 60 + 20}px`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${Math.random() * 10 + 10}s`
                        }}></div>
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="hero-content text-center lg:text-left">
                        <div className="inline-block px-4 py-1.5 bg-green-100 text-green-700 font-bold rounded-full mb-6 border border-green-200 shadow-sm animate-pulse">
                            🌿 100% Safe for Hands & Fabric
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-black text-blue-900 leading-tight mb-6">
                            Tough on Stains,<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">Gentle on You!</span>
                        </h1>
                        <p className="text-lg text-slate-600 font-medium mb-8 max-w-lg mx-auto lg:mx-0">
                            Experience the power of <span className="text-blue-700 font-bold">Deep Clean Technology</span> that removes dirt, keeps colors bright, and leaves a lasting freshness.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button onClick={() => navigate('/products')} className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-black text-lg shadow-lg hover:shadow-orange-500/40 transition-all transform hover:-translate-y-1">
                                Shop Now
                            </button>
                            <button onClick={() => navigate('/about')} className="flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-lg border-2 border-blue-100 hover:border-blue-300 hover:bg-blue-50 transition-all">
                                Know More
                            </button>
                        </div>
                        <div className="mt-8 flex items-center justify-center lg:justify-start gap-2 text-sm font-bold text-slate-500">
                            <span className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"></div>
                                <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white"></div>
                                <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white"></div>
                            </span>
                            Trusted by 10 Lakh+ Indian Homes 🇮🇳
                        </div>
                    </div>

                    <div className="hero-image relative flex justify-center items-center h-full">
                        <div className="relative w-full max-w-md aspect-square bg-slate-200 rounded-3xl border-4 border-white shadow-xl flex items-center justify-center overflow-hidden group">
                            {images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Swami Product ${index + 1}`}
                                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImg ? 'opacity-100' : 'opacity-0'}`}
                                />
                            ))}
                        </div>

                        {/* Floating decorative elements behind */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Features = () => {
    return (
        <section id="why-us" className="py-20 bg-white relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-lg font-black text-green-600 uppercase tracking-widest mb-2">Why Choose Swami?</h2>
                    <h2 className="text-4xl font-black text-blue-900">Cleaning Made Simple & Safe</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: "Bio-Enzyme Power", desc: "Natural enzymes that eat away stains", icon: "🧬", color: "bg-blue-100 text-blue-600" },
                        { title: "Safe for Hands", desc: "pH balanced formula, gentle on skin", icon: "🤲", color: "bg-green-100 text-green-600" },
                        { title: "Fabric Protection", desc: "Keeps clothes looking new longer", icon: "👕", color: "bg-purple-100 text-purple-600" },
                        { title: "Eco-Friendly", desc: "Biodegradable & water safe", icon: "🌱", color: "bg-teal-100 text-teal-600" },
                    ].map((feature, idx) => (
                        <div key={idx} className="bg-slate-50 p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100 text-center group">
                            <div className={`w-16 h-16 mx-auto ${feature.color} rounded-2xl flex items-center justify-center text-3xl mb-6 transform group-hover:scale-110 transition-transform`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                            <p className="text-slate-600 font-medium leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProductRange = () => {
    const scrollRef = useRef(null);
    const navigate = useNavigate();

    // Simplified animation removed to ensure visibility
    useEffect(() => {
        // Optional: Add simpler animation or keep static for robustness
    }, []);

    const products = [
        { name: "Swami Active Powder", type: "Detergent Powder", price: "₹85/kg", color: "from-blue-500 to-blue-700", accent: "bg-yellow-400" },
        { name: "Swami Gentle Wash", type: "Liquid Detergent", price: "₹210/L", color: "from-green-500 to-green-700", accent: "bg-pink-400" },
        { name: "Swami Floor Shine", type: "Floor Cleaner", price: "₹150/L", color: "from-pink-500 to-purple-600", accent: "bg-blue-400" },
        { name: "Swami Stain Bar", type: "Laundry Bar", price: "₹25/pc", color: "from-orange-400 to-red-500", accent: "bg-green-400" },
    ];

    return (
        <section id="products" className="py-24 bg-blue-50" ref={scrollRef}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl font-black text-blue-900 mb-2">Our Complete Range</h2>
                        <p className="text-slate-600 font-semibold text-lg">Solutions for every cleaning need</p>
                    </div>
                    <Link to="/products" className="hidden md:inline-flex items-center text-blue-700 font-bold hover:text-blue-900 transition-colors">
                        View Full Catalogue <span className="ml-2">→</span>
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product, idx) => (
                        <div key={idx} className="product-card group bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-2xl transition-all duration-300 border border-slate-100 cursor-pointer" onClick={() => navigate('/products')}>
                            {/* Product Visual */}
                            <div className={`h-56 bg-gradient-to-br ${product.color} relative p-6 flex flex-col justify-between overflow-hidden`}>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
                                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur text-white text-xs font-bold rounded-full w-fit">
                                    {product.type}
                                </span>
                                <div className="relative z-10 transform group-hover:-translate-y-2 transition-transform duration-500">
                                    <h3 className="text-2xl font-black text-white leading-tight italic">{product.name}</h3>
                                </div>
                                {/* Shine Effect */}
                                <div className="absolute -bottom-10 right-0 text-6xl opacity-20 transform rotate-12">✨</div>
                            </div>

                            {/* Product Info */}
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-slate-500 font-bold text-sm">Best Seller</span>
                                    <span className="text-xl font-black text-blue-900">{product.price}</span>
                                </div>
                                <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-blue-600 transition-colors">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const HowItWorks = () => (
    <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-black text-blue-900 mb-4">How Swami Works?</h2>
                <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-slate-100 z-0 transform -translate-y-1/2"></div>

                {[
                    { title: "Penetrates Deep", desc: "Micro-agents go deep into fabric fibers", bg: "bg-blue-100", icon: "🎯" },
                    { title: "Lifts Dirt", desc: "Loosens tough stains & grime instantly", bg: "bg-orange-100", icon: "🌪️" },
                    { title: "Protects & Freshens", desc: "Locks in color & leaves mild fragrance", bg: "bg-green-100", icon: "🌸" }
                ].map((step, idx) => (
                    <div key={idx} className="relative z-10 text-center bg-white p-4">
                        <div className={`w-24 h-24 mx-auto ${step.bg} rounded-full flex items-center justify-center text-4xl shadow-inner mb-6 border-4 border-white`}>
                            {step.icon}
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">{step.title}</h3>
                        <p className="text-slate-600 px-4">{step.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const IndianTrust = () => (
    <section className="py-20 bg-yellow-50 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-200 rounded-full blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">Trusted by Indian Households 🏡</h2>
                <p className="text-lg text-slate-700">From Kashmir to Kanyakumari, cleaner homes choose Swami.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { name: "Priya Sharma", loc: "Mumbai", quote: "Stains from my kids' school uniforms vanish in one wash! Best detergent I've used." },
                    { name: "Anita Desai", loc: "Ahmedabad", quote: "Very affordable and smells amazing. My hands stay soft even after washing clothes daily." },
                    { name: "Rahul Verma", loc: "Delhi", quote: "Quality matches the top expensive brands but at half the price. Kudos to Make in India!" }
                ].map((testimonial, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-yellow-100 relative">
                        <div className="text-4xl text-yellow-400 absolute top-4 left-4 opacity-50">"</div>
                        <p className="text-slate-700 font-medium italic mb-6 relative z-10 pt-4">"{testimonial.quote}"</p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">
                                {testimonial.name[0]}
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-sm">{testimonial.name}</h4>
                                <p className="text-xs font-bold text-slate-500 uppercase">{testimonial.loc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-200 selection:text-blue-900">
            <Navbar />
            <Hero />
            <Features />
            <ProductRange />
            <HowItWorks />
            <IndianTrust />
            <Footer />
        </div>
    );
}
