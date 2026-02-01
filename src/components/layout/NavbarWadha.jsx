import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, Menu, X, ChevronDown, ArrowRight, Sparkles, ShieldCheck, Star } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { productsData } from '../../data/products';
import logoImg from '../../assets/logo-90x90.webp';

const NavbarWadha = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Shop Products', id: 'products', hasDropdown: true },
        { name: 'About Us', href: '/about' },
        { name: 'Stain Removal', href: '#stain-guide' },
        { name: 'Why Wadha', href: '#why-wadha' },
        { name: 'Contact Us', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-sans ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white shadow-sm py-4'
                }`}
            onMouseLeave={() => setActiveMenu(null)}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => navigate('/')}>
                        <img src={logoImg} alt="Wadha Logo" className="h-12 w-auto object-contain" />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative group"
                                onMouseEnter={() => link.hasDropdown && setActiveMenu(link.id)}
                            >
                                <a
                                    href={link.href || '#'}
                                    className={`flex items-center text-gray-700 hover:text-[var(--color-brand-primary)] font-medium transition-colors ${activeMenu === link.id ? 'text-[var(--color-brand-primary)]' : ''}`}
                                    onClick={(e) => {
                                        if (link.hasDropdown) {
                                            e.preventDefault();
                                            navigate('/catalog');
                                        } else if (link.href && link.href.startsWith('/')) {
                                            e.preventDefault();
                                            navigate(link.href);
                                        }
                                    }}
                                >
                                    {link.name}
                                    {link.hasDropdown && <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${activeMenu === link.id ? 'rotate-180' : ''}`} />}
                                </a>

                                {/* Mega Menu Dropdown */}
                                <AnimatePresence>
                                    {link.hasDropdown && activeMenu === link.id && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20, scale: 0.98 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.98 }}
                                            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                                            className="absolute top-full -left-20 w-[900px] bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden z-50 p-8 cursor-default"
                                            onMouseEnter={() => setActiveMenu(link.id)}
                                            onMouseLeave={() => setActiveMenu(null)}
                                        >
                                            <div className="grid grid-cols-12 gap-8">
                                                {/* Left Section - Featured Card */}
                                                <div className="col-span-4">
                                                    <div className="h-full bg-gradient-to-br from-[var(--color-brand-primary)] to-blue-500 rounded-2xl p-6 text-white relative overflow-hidden group/featured">
                                                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 blur-3xl -mr-16 -mt-16 group-hover/featured:bg-white/30 transition-colors"></div>
                                                        <div className="relative z-10 space-y-4">
                                                            <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center">
                                                                <Sparkles className="w-5 h-5 text-white" />
                                                            </div>
                                                            <div className="space-y-1">
                                                                <h4 className="text-lg font-bold leading-tight">Premium Collection</h4>
                                                                <p className="text-xs text-white/80">Professional cleaning solutions for every home.</p>
                                                            </div>
                                                            <button
                                                                onClick={() => {
                                                                    navigate('/catalog');
                                                                    setActiveMenu(null);
                                                                }}
                                                                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-white/80 transition-colors group/btn pt-4"
                                                            >
                                                                View All <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                                                            </button>
                                                        </div>
                                                        <div className="mt-8 pt-4 border-t border-white/10">
                                                            <div className="flex items-center gap-2">
                                                                <ShieldCheck className="w-3 h-3 text-white/70" />
                                                                <span className="text-[10px] font-bold uppercase tracking-wider text-white/70">ISO Certified</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Main Categories */}
                                                <div className="col-span-8 grid grid-cols-2 gap-x-8 gap-y-8">
                                                    {productsData.map((cat, idx) => (
                                                        <div key={idx} className="space-y-3">
                                                            <div className="flex items-center gap-2">
                                                                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[var(--color-brand-primary)]">
                                                                    <cat.icon className="w-4 h-4" />
                                                                </div>
                                                                <h3 className="font-bold text-gray-900 text-sm tracking-tight">{cat.category}</h3>
                                                            </div>
                                                            <ul className="space-y-2">
                                                                {cat.products.slice(0, 3).map((product, pIdx) => (
                                                                    <li key={pIdx}>
                                                                        <button
                                                                            onClick={(e) => {
                                                                                e.preventDefault();
                                                                                navigate(`/catalog?cat=${cat.id}`);
                                                                                setActiveMenu(null);
                                                                            }}
                                                                            className="flex items-center gap-2 text-xs text-gray-500 hover:text-[var(--color-brand-primary)] transition-all group/item text-left w-full"
                                                                        >
                                                                            <div className="w-1 h-1 rounded-full bg-gray-300 group-hover/item:bg-[var(--color-brand-primary)] transition-colors flex-shrink-0" />
                                                                            {product.name}
                                                                        </button>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* Right Icons */}
                    <div className="hidden md:flex items-center space-x-6">
                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="pl-8 pr-4 py-1.5 rounded-full bg-gray-100 focus:bg-white focus:ring-1 focus:ring-blue-500 border-none text-sm w-32 focus:w-48 transition-all"
                            />
                            <Search className="w-4 h-4 absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700">
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg h-screen overflow-y-auto pb-20">
                    <div className="px-4 pt-4 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <div key={link.name}>
                                <a
                                    href={link.href || '#'}
                                    className="block px-3 py-3 text-base font-bold text-gray-800 hover:bg-blue-50 rounded-md border-b border-gray-50"
                                    onClick={() => {
                                        if (!link.hasDropdown) setIsMobileMenuOpen(false);
                                    }}
                                >
                                    {link.name}
                                </a>
                                {link.hasDropdown && (
                                    <div className="pl-6 space-y-2 mt-2 mb-2">
                                        {productsData.map((cat, idx) => (
                                            <div key={idx}>
                                                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 mt-2">{cat.category}</p>
                                                {cat.products.slice(0, 3).map((p, pIdx) => (
                                                    <a key={pIdx} href="#" className="block py-1 text-sm text-gray-600 hover:text-blue-600 pl-2 border-l-2 border-transparent hover:border-blue-500">
                                                        {p.name}
                                                    </a>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="pt-6 flex items-center space-x-4">
                            <button className="flex-1 bg-gray-100 py-3 rounded-lg flex justify-center items-center text-gray-700 font-bold">
                                <Search className="w-4 h-4 mr-2" /> Search
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavbarWadha;
