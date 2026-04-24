import React, { useState } from 'react';
import { CheckCircle, Loader2 } from 'lucide-react';
import NavbarWadha from '../components/layout/NavbarWadha';
import FooterWadha from '../components/layout/FooterWadha';
import SocialProofWadha from '../components/home/SocialProofWadha';

// ⚠️ IMPORTANT: Replace this with your real Web3Forms access key!
// Get yours free at https://web3forms.com/ (enter: support@swamiindustries.in)
const WEB3FORMS_ACCESS_KEY = '68ca5138-578c-47b9-ad97-67e431c0c2f0';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: 'General Inquiry',
        message: '',
    });
    const [status, setStatus] = useState('idle'); // idle | loading | success | error
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMsg('');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    subject: `[${formData.subject}] Message from ${formData.firstName} ${formData.lastName}`,
                    from_name: `${formData.firstName} ${formData.lastName}`,
                    name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                    message: formData.message,
                    category: formData.subject,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus('success');
                setFormData({ firstName: '', lastName: '', email: '', subject: 'General Inquiry', message: '' });
                setTimeout(() => setStatus('idle'), 4000);
            } else {
                setStatus('error');
                setErrorMsg(result.message || 'Something went wrong. Please try again.');
            }
        } catch (err) {
            setStatus('error');
            setErrorMsg('Network error. Please check your connection and try again.');
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <NavbarWadha />

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
                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">First Name</label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none font-medium"
                                                placeholder="Rahul"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Last Name</label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none font-medium"
                                                placeholder="Sharma"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none font-medium"
                                            placeholder="rahul@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Subject</label>
                                        <select
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none font-medium text-slate-600"
                                        >
                                            <option>General Inquiry</option>
                                            <option>Distributorship</option>
                                            <option>Bulk Order</option>
                                            <option>Complaint/Feedback</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Message</label>
                                        <textarea
                                            name="message"
                                            rows="4"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none font-medium"
                                            placeholder="How can we help you today?"
                                        ></textarea>
                                    </div>

                                    {status === 'error' && (
                                        <p className="text-red-600 text-sm font-medium bg-red-50 px-4 py-3 rounded-xl">
                                            ⚠️ {errorMsg}
                                        </p>
                                    )}

                                    {status === 'success' ? (
                                        <div className="w-full py-4 bg-green-500 text-white font-black rounded-xl flex items-center justify-center gap-2 shadow-lg">
                                            <CheckCircle className="w-5 h-5" />
                                            Message Sent Successfully! 🎉
                                        </div>
                                    ) : (
                                        <button
                                            type="submit"
                                            disabled={status === 'loading'}
                                            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-black py-4 rounded-xl shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                        >
                                            {status === 'loading' ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                'Send Message 🚀'
                                            )}
                                        </button>
                                    )}
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
                                                <p className="font-bold text-slate-800">9404007182, 7887881694</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-orange-500">✉️</div>
                                            <div>
                                                <p className="text-xs font-bold text-slate-500 uppercase">Email</p>
                                                <p className="font-bold text-slate-800">swamiindustries.wadha@gmail.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Media */}
                                <div className="bg-purple-50 p-8 rounded-3xl border border-purple-100">
                                    <h3 className="text-xl font-black text-purple-800 mb-4 flex items-center gap-2">
                                        <span className="text-2xl">📲</span> Follow Us
                                    </h3>
                                    <div className="flex flex-col gap-3">
                                        {/* Instagram */}
                                        <a
                                            href="https://www.instagram.com/wadhadetergent?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-4 bg-white rounded-2xl px-5 py-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all group"
                                        >
                                            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-lg flex-shrink-0"
                                                style={{ background: 'linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)' }}>
                                                📸
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-slate-500 uppercase">Instagram</p>
                                                <p className="font-bold text-slate-800 group-hover:text-pink-600 transition-colors">@wadhadetergent</p>
                                            </div>
                                        </a>

                                        {/* YouTube */}
                                        <a
                                            href="https://www.youtube.com/@Wadhadetergent/videos"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-4 bg-white rounded-2xl px-5 py-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all group"
                                        >
                                            <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white text-lg flex-shrink-0">
                                                ▶
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-slate-500 uppercase">YouTube</p>
                                                <p className="font-bold text-slate-800 group-hover:text-red-600 transition-colors">@Wadhadetergent</p>
                                            </div>
                                        </a>

                                        {/* Facebook */}
                                        <a
                                            href="https://www.facebook.com/share/1CimkLh6wZ/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-4 bg-white rounded-2xl px-5 py-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all group"
                                        >
                                            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-lg flex-shrink-0">
                                                f
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-slate-500 uppercase">Facebook</p>
                                                <p className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">Wadha Detergent</p>
                                            </div>
                                        </a>
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
            <SocialProofWadha />
            <FooterWadha />
        </div>
    );
};

export default Contact;
