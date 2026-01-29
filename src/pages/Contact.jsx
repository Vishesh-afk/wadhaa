import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Contact = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <Navbar />

            <main className="pt-20">
                {/* Hero Section */}
                <section className="bg-blue-600 py-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 opacity-90"></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-12 -translate-y-12"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-green-400 opacity-20 rounded-full blur-2xl transform -translate-x-4 translate-y-4"></div>

                    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center text-white">
                        <h1 className="text-4xl lg:text-6xl font-black mb-6">We're Here to Help! 📞</h1>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto font-medium">
                            Have a question about our products or want to become a distributor?
                            Reach out to us and we'll get back to you!
                        </p>
                    </div>
                </section>

                {/* Contact Content */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16">

                            {/* Contact Form */}
                            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-100 text-left">
                                <h2 className="text-3xl font-black text-blue-900 mb-8">Send us a Message</h2>
                                <form className="space-y-6">
                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">First Name</label>
                                            <input type="text" className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none font-medium" placeholder="Rahul" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Last Name</label>
                                            <input type="text" className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none font-medium" placeholder="Sharma" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Email Address</label>
                                        <input type="email" className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none font-medium" placeholder="rahul@example.com" />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Subject</label>
                                        <select className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none font-medium text-slate-600">
                                            <option>General Inquiry</option>
                                            <option>Distributorship</option>
                                            <option>Bulk Order</option>
                                            <option>Complaint/Feedback</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Message</label>
                                        <textarea rows="4" className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none font-medium" placeholder="How can we help you today?"></textarea>
                                    </div>

                                    <button type="button" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-black py-4 rounded-xl shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1 transition-all">
                                        Send Message 🚀
                                    </button>
                                </form>
                            </div>

                            {/* Contact Info & Map */}
                            <div className="space-y-8">
                                <div className="bg-green-50 p-8 rounded-3xl border border-green-100">
                                    <h3 className="text-xl font-black text-green-800 mb-4 flex items-center gap-2">
                                        <span className="text-2xl">🏢</span> Head Office
                                    </h3>
                                    <p className="text-slate-700 font-medium leading-relaxed">
                                        Swami Industries Pvt. Ltd.<br />
                                        A-3, Gondia MIDC, Industrial Area,<br />
                                        Gondia - 441614, Maharashtra, India.
                                    </p>
                                </div>

                                <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100">
                                    <h3 className="text-xl font-black text-orange-800 mb-4 flex items-center gap-2">
                                        <span className="text-2xl">🤝</span> Direct Contact
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-orange-500">📞</div>
                                            <div>
                                                <p className="text-xs font-bold text-slate-500 uppercase">Phone</p>
                                                <p className="font-bold text-slate-800">+91 98765 43210</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-orange-500">✉️</div>
                                            <div>
                                                <p className="text-xs font-bold text-slate-500 uppercase">Email</p>
                                                <p className="font-bold text-slate-800">support@swamiindustries.in</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Placeholder for Map */}
                                <div className="h-64 bg-slate-200 rounded-3xl overflow-hidden relative">
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold">
                                        Google Maps Placeholder 🗺️
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;
