import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-green-500 rounded-full"></div>
                        <span className="text-2xl font-black tracking-tight">SWAMI</span>
                    </div>
                    <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
                        We are on a mission to provide every Indian household with premium quality cleaning products that are tough on dirt but safe for the family and the planet.
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg border border-slate-700">
                        <span className="text-2xl">🇮🇳</span>
                        <span className="font-bold text-sm text-slate-300">Proudly Made in India</span>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-6">Quick Links</h4>
                    <ul className="space-y-3 text-slate-400 text-sm font-medium">
                        <li><Link to="/products" className="hover:text-blue-400 transition-colors">Our Products</Link></li>
                        <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                        <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Support</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-6">Contact</h4>
                    <ul className="space-y-3 text-slate-400 text-sm font-medium">
                        <li>support@swamiindustries.in</li>
                        <li>+91 98765 43210</li>
                        <li>Gondia, Maharashtra</li>
                    </ul>
                    <div className="flex gap-4 mt-6">
                        {/* Social Icons Placeholder */}
                        {[1, 2, 3].map(i => (
                            <div key={i} className="w-8 h-8 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors cursor-pointer"></div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="border-t border-slate-800 pt-8 text-center bg-slate-900">
                <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Swami Industries. All rights reserved.</p>
            </div>
        </div>
    </footer>
);

export default Footer;
