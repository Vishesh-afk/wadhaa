import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Layers } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import MegaMenu from './MegaMenu';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isHome = location.pathname === '/';

    const handleContactClick = () => {
        if (isHome) {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate('/contact');
        }
        setMobileMenuOpen(false);
    };

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 
            ${scrolled
                    ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/50 py-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)]'
                    : 'bg-transparent py-7'}`}
        >
            {/* Subtle Top Accent */}
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-indigo via-pure-blue to-fresh-mint transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`} />

            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex justify-between items-center">
                    {/* Logo Section */}
                    <div
                        onClick={() => navigate('/')}
                        className="flex-shrink-0 flex items-center gap-4 cursor-pointer group"
                    >
                        <div className="relative">
                            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-bold transition-all duration-500 group-hover:bg-brand-indigo group-hover:rotate-[10deg]">
                                <Layers className="w-5 h-5" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">WADHA</span>
                            <span className="text-[9px] font-bold text-slate-400 tracking-[0.3em] uppercase mt-1">Professional</span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-12">
                        <Link
                            to="/"
                            className={`font-semibold text-sm transition-all
                                ${isHome ? 'text-brand-indigo' : 'text-slate-500 hover:text-slate-900'}`}
                        >
                            Home
                        </Link>
                        <MegaMenu />
                        <Link
                            to="/about"
                            className={`font-semibold text-sm transition-all
                                ${location.pathname === '/about' ? 'text-brand-indigo' : 'text-slate-500 hover:text-slate-900'}`}
                        >
                            About Us
                        </Link>
                        <button
                            onClick={handleContactClick}
                            className="font-semibold text-sm text-slate-500 hover:text-slate-900 transition-all"
                        >
                            Contact
                        </button>
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden lg:flex items-center gap-8">
                        <button
                            onClick={handleContactClick}
                            className="relative px-8 py-3 bg-slate-900 text-white rounded-full font-bold text-sm transition-all hover:bg-brand-indigo hover:shadow-2xl hover:shadow-brand-indigo/30 flex items-center gap-2 group overflow-hidden"
                        >
                            <span className="relative z-10">Request Quote</span>
                            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-gradient-to-r from-brand-indigo to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className={`p-2.5 rounded-xl transition-all ${mobileMenuOpen ? 'bg-slate-100 text-slate-900' : 'text-slate-700 hover:bg-slate-50'}`}
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="lg:hidden absolute top-20 left-4 right-4 bg-white rounded-3xl border border-slate-100 shadow-2xl overflow-hidden p-8"
                    >
                        <div className="flex flex-col gap-8">
                            <div className="space-y-4">
                                <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block text-2xl font-bold text-slate-900">Home</Link>
                                <Link to="/catalog" onClick={() => setMobileMenuOpen(false)} className="block text-2xl font-bold text-slate-900">Products</Link>
                                <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block text-2xl font-bold text-slate-900">About Us</Link>
                                <button onClick={handleContactClick} className="block text-2xl font-bold text-slate-900">Contact</button>
                            </div>
                            <div className="pt-8 border-t border-slate-100">
                                <button
                                    onClick={handleContactClick}
                                    className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold shadow-xl transition-all flex items-center justify-center gap-2"
                                >
                                    Get Started <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
