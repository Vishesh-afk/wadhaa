import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo-90x90.webp';

const Navbar = () => {
    const navRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    // Removed GSAP animation to fix visibility issues
    useEffect(() => {
        // Optional: Simple fade-in logic if needed in future
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <nav ref={navRef} className="fixed w-full z-50 bg-white shadow-lg border-b-4 border-blue-600 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                        {/* Logo */}
                        <div className="w-12 h-12 rounded-full flex items-center justify-center p-1 bg-white shadow-sm border border-slate-100 overflow-hidden">
                            <img src={logo} alt="Swami Industries Logo" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl sm:text-3xl font-black text-blue-700 tracking-tighter leading-none">SWAMI</span>
                            <span className="text-[10px] sm:text-xs font-bold text-green-600 uppercase tracking-widest leading-none">Industries</span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((item) => (
                            <Link key={item.name} to={item.path} className="text-slate-700 hover:text-blue-600 font-bold text-sm uppercase tracking-wide transition-colors duration-200">
                                {item.name}
                            </Link>
                        ))}
                        <button onClick={() => navigate('/products')} className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-6 py-2.5 rounded-full font-black text-sm uppercase tracking-wide transition-all transform hover:scale-105 shadow-md">
                            Shop Now
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-blue-700 hover:text-blue-900 focus:outline-none p-2">
                            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-b-4 border-green-500 absolute w-full shadow-xl">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((item) => (
                            <Link key={item.name} to={item.path}
                                className="block px-3 py-2 rounded-md text-base font-bold text-slate-700 hover:text-blue-600 hover:bg-blue-50"
                                onClick={() => setIsMenuOpen(false)}>
                                {item.name}
                            </Link>
                        ))}
                        <button onClick={() => { navigate('/products'); setIsMenuOpen(false); }} className="w-full mt-4 bg-red-500 text-white px-6 py-3 rounded-lg font-black uppercase tracking-wide shadow-md">
                            Shop Now
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
