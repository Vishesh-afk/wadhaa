import React from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';

const SupportSection = () => {
    return (
        <section id="contact" className="py-20 bg-blue-50/50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">

                    <div className="p-8 md:p-12 md:w-1/2 bg-[var(--color-brand-primary)] text-white flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold font-heading mb-4">Need Help with Laundry?</h3>
                            <p className="text-blue-100 mb-8">
                                Have a tough stain question? Need advice on fabric care? Our laundry experts are here to help.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <Phone className="w-5 h-5 mr-3 text-blue-300" />
                                    <span>+91 1800-123-4567</span>
                                </div>
                                <div className="flex items-center">
                                    <Mail className="w-5 h-5 mr-3 text-blue-300" />
                                    <span>care@wadha.in</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <p className="text-xs text-blue-200 mb-2">Connect with us</p>
                            <div className="flex space-x-4">
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/40 transition-colors">FB</div>
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/40 transition-colors">IG</div>
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/40 transition-colors">YT</div>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 md:p-12 md:w-1/2">
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Your Name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="you@example.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea id="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="How can we help?"></textarea>
                            </div>
                            <button type="button" className="w-full py-3 bg-[var(--color-brand-secondary)] text-white font-bold rounded-lg hover:bg-blue-600 transition-colors shadow-lg">
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SupportSection;
