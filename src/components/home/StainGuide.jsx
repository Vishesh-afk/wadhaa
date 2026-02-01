import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const stains = [
    { name: "Coffee & Tea", id: "coffee-tea" },
    { name: "Curry & Spices", id: "curry-spices" },
    { name: "Oil & Grease", id: "oil-grease" },
    { name: "Paint", id: "paint" },
    { name: "Ink", id: "ink" },
    { name: "Blood", id: "blood" },
    { name: "Chocolate", id: "chocolate" },
    { name: "Sweat", id: "sweat" },
    { name: "Mud & Grass", id: "mud-grass" },
    { name: "Tomato Sauce", id: "tomato-sauce" },
    { name: "Fruit Juice", id: "fruit-juice" }
];

const StainGuide = () => {
    const [selectedIndex, setSelectedIndex] = useState(3); // Default to 'Paint'
    const navigate = useNavigate();

    const handleScroll = (direction) => {
        if (direction === 'up') {
            setSelectedIndex((prev) => (prev > 0 ? prev - 1 : stains.length - 1));
        } else {
            setSelectedIndex((prev) => (prev < stains.length - 1 ? prev + 1 : 0));
        }
    };

    const handleNavigate = () => {
        if (stains[selectedIndex]) {
            const selectedStainId = stains[selectedIndex].id;
            console.log("Navigating to stain:", selectedStainId); // potentially helpful for debugging
            navigate(`/stain-removal/${selectedStainId}`);
        }
    };

    return (
        <section id="stain-guide" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-12">
                    <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-2">Expert Care</h2>
                    <h3 className="text-3xl font-heading font-extrabold text-[var(--color-brand-blue-dark)]">STAIN REMOVAL GUIDE</h3>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 relative">

                    {/* Left Visual: T-Shirt Split */}
                    <div className="relative w-64 h-80 md:w-80 md:h-96 flex-shrink-0">
                        {/* Simple SVG representation of a T-Shirt */}
                        <svg viewBox="0 0 200 240" className="w-full h-full drop-shadow-xl filter">
                            <defs>
                                <linearGradient id="stainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#e5e7eb" />
                                    <stop offset="100%" stopColor="#d1d5db" />
                                </linearGradient>
                            </defs>
                            {/* T-Shirt Shape */}
                            <path d="M160,40 L190,70 L160,90 L160,230 L40,230 L40,90 L10,70 L40,40 Q100,60 160,40" fill="white" stroke="#e5e7eb" strokeWidth="2" />

                            {/* Split Line */}
                            <line x1="100" y1="40" x2="100" y2="230" stroke="#cbd5e1" strokeWidth="2" />

                            {/* Stains on Left Side */}
                            <g fill="#854d0e" opacity="0.7">
                                <circle cx="70" cy="110" r="10" filter="url(#f1)" />
                                <circle cx="80" cy="130" r="8" />
                                <path d="M60,150 Q70,160 85,145 T90,170" stroke="#854d0e" strokeWidth="5" fill="none" />
                                <circle cx="75" cy="180" r="12" />
                            </g>

                            {/* Sparkles on Right Side (Clean) */}
                            <g fill="none" stroke="#3b82f6" strokeWidth="2">
                                <path d="M130,120 L135,125 L130,130 L125,125 Z" fill="#3b82f6" />
                                <path d="M150,160 L155,165 L150,170 L145,165 Z" fill="#3b82f6" />
                            </g>
                        </svg>

                        {/* Floating Badge */}
                        <div className="absolute top-1/2 -right-4 lg:-right-12 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-4 border border-gray-100">
                            <span className="block text-2xl font-black text-green-600">VS</span>
                        </div>
                    </div>

                    {/* Center: Scroll Selector */}
                    <div className="flex flex-col items-center w-full max-w-md">

                        {/* The Selector Box */}
                        <div className="w-full bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden relative">

                            {/* Selection Highlight Bar */}
                            <div className="absolute top-1/2 left-0 w-full h-16 transform -translate-y-1/2 bg-green-600 z-0 transition-all duration-300"></div>

                            <div className="relative z-10 py-4">
                                {/* Previous Items (Faded) */}
                                <div className="h-24 flex flex-col justify-end items-center pb-2 space-y-2 opacity-30 cursor-pointer" onClick={() => handleScroll('up')}>
                                    <p className="text-lg font-bold text-gray-500">{stains[(selectedIndex - 2 + stains.length) % stains.length].name}</p>
                                    <p className="text-xl font-bold text-gray-700">{stains[(selectedIndex - 1 + stains.length) % stains.length].name}</p>
                                </div>

                                {/* Selected Item */}
                                <div className="h-16 flex items-center justify-between px-8 text-white">
                                    <ChevronUp className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" onClick={() => handleScroll('up')} />
                                    <AnimatePresence mode="wait">
                                        <motion.span
                                            key={selectedIndex}
                                            initial={{ y: 10, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -10, opacity: 0 }}
                                            onClick={handleNavigate}
                                            className="text-2xl font-black uppercase tracking-wider text-center flex-1 cursor-pointer hover:underline"
                                        >
                                            {stains[selectedIndex].name}
                                        </motion.span>
                                    </AnimatePresence>
                                    <ChevronDown className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" onClick={() => handleScroll('down')} />
                                </div>

                                {/* Next Items (Faded) */}
                                <div className="h-24 flex flex-col justify-start items-center pt-2 space-y-2 opacity-30 cursor-pointer" onClick={() => handleScroll('down')}>
                                    <p className="text-xl font-bold text-gray-700">{stains[(selectedIndex + 1) % stains.length].name}</p>
                                    <p className="text-lg font-bold text-gray-500">{stains[(selectedIndex + 2) % stains.length].name}</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <button
                            onClick={handleNavigate}
                            className="mt-8 px-10 py-4 bg-red-600 text-white font-bold rounded-full text-lg shadow-lg hover:bg-red-700 hover:shadow-xl transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center"
                        >
                            Learn how to remove
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </button>

                        <a href="#" className="mt-4 text-sm text-gray-500 font-medium underline hover:text-[var(--color-brand-primary)]">
                            Can't find the right stain?
                        </a>

                    </div>

                    {/* Decorative Background Text */}
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 -z-10 opacity-5 hidden xl:block pointer-events-none">
                        <span className="text-[200px] font-black text-gray-900 leading-none">STAIN</span>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default StainGuide;
