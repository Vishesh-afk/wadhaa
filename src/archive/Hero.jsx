import React, { useState, useRef, useEffect } from 'react';

// Carousel images data
const carouselImages = [
    {
        id: 1,
        url: "https://images.unsplash.com/photo-1585421514284-802c2d74263d?q=80&w=1400&auto=format&fit=crop",
        title: "Industrial Degreaser Pro",
        badge: "Best Seller",
        badgeColor: "bg-blue-500"
    },
    {
        id: 2,
        url: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?q=80&w=1400&auto=format&fit=crop",
        title: "Eco-Safe Sanitizer",
        badge: "Eco-Friendly",
        badgeColor: "bg-teal-500"
    },
    {
        id: 3,
        url: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=1400&auto=format&fit=crop",
        title: "Glass Pro Ultra",
        badge: "Premium",
        badgeColor: "bg-indigo-500"
    }
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const containerRef = useRef(null);
    const minSwipeDistance = 50;

    // Handle wheel/scroll event
    const handleWheel = (e) => {
        e.preventDefault();

        if (e.deltaY > 0 && currentIndex < carouselImages.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else if (e.deltaY < 0 && currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    // Touch handlers
    const handleTouchStart = (e) => {
        setTouchEnd(0);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe && currentIndex < carouselImages.length - 1) {
            setCurrentIndex(prev => prev + 1);
        }
        if (isRightSwipe && currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    // Wheel event listener
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let timeout;
        const debouncedWheel = (e) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => handleWheel(e), 50);
        };

        container.addEventListener('wheel', debouncedWheel, { passive: false });
        return () => {
            container.removeEventListener('wheel', debouncedWheel);
            clearTimeout(timeout);
        };
    }, [currentIndex]);

    return (
        <section
            id="home"
            className="relative pt-20 pb-12 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-4 shadow-lg">
                        <span className="flex h-2 w-2 relative mr-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
                        </span>
                        <span className="text-white font-semibold text-sm tracking-wide uppercase">Premium B2B Cleaning Solutions</span>
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-3 leading-tight">
                        Industrial Grade <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">Excellence</span>
                    </h1>
                    <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-2">
                        Discover our premium range of eco-friendly cleaning solutions designed for modern businesses
                    </p>
                    <p className="text-sm text-slate-400">
                        Scroll or swipe to explore products
                    </p>
                </div>

                {/* Carousel */}
                <div
                    ref={containerRef}
                    className="relative w-full h-[400px] lg:h-[500px] cursor-grab active:cursor-grabbing"
                    style={{ perspective: '1500px' }}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div className="relative w-full h-full">
                        {carouselImages.map((item, index) => {
                            const offset = index - currentIndex;
                            const isActive = offset === 0;

                            return (
                                <div
                                    key={item.id}
                                    className="absolute inset-0 transition-all duration-700 ease-out"
                                    style={{
                                        transform: isActive
                                            ? 'translateX(0) translateZ(0) rotateY(0deg) scale(1)'
                                            : offset > 0
                                                ? 'translateX(100%) translateZ(-400px) rotateY(-45deg) scale(0.7)'
                                                : 'translateX(-100%) translateZ(-400px) rotateY(45deg) scale(0.7)',
                                        opacity: isActive ? 1 : 0,
                                        zIndex: isActive ? 30 : 10,
                                        display: isActive ? 'block' : 'none',
                                        transformStyle: 'preserve-3d',
                                        pointerEvents: isActive ? 'auto' : 'none'
                                    }}
                                >
                                    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                                        {/* Badge */}
                                        <div className="absolute top-6 right-6 z-20">
                                            <span className={`${item.badgeColor} px-4 py-2 rounded-full text-sm font-bold text-white shadow-xl`}>
                                                {item.badge}
                                            </span>
                                        </div>

                                        {/* Image */}
                                        <img
                                            src={item.url}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                            draggable="false"
                                            loading="eager"
                                        />

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent"></div>

                                        {/* Content */}
                                        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                                            <h3 className="text-3xl lg:text-5xl font-bold text-white mb-4 drop-shadow-2xl">
                                                {item.title}
                                            </h3>
                                            <button className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-8 py-3 rounded-xl font-bold transition-all border border-white/30 hover:border-white/50 hover:shadow-xl">
                                                Learn More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Navigation Arrows */}
                    {currentIndex > 0 && (
                        <button
                            onClick={() => setCurrentIndex(prev => prev - 1)}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-all hover:scale-110 shadow-xl"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    )}
                    {currentIndex < carouselImages.length - 1 && (
                        <button
                            onClick={() => setCurrentIndex(prev => prev + 1)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-all hover:scale-110 shadow-xl"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    )}
                </div>

                {/* Progress Dots */}
                <div className="flex justify-center gap-2 mt-8 pb-8">
                    {carouselImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`transition-all duration-300 rounded-full ${index === currentIndex
                                    ? 'w-12 h-3 bg-teal-400'
                                    : 'w-3 h-3 bg-white/30 hover:bg-white/50'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
