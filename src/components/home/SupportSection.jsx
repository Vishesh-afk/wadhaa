import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, CheckCircle, Loader2 } from 'lucide-react';

// ⚠️ IMPORTANT: Replace this with your real Web3Forms access key!
// Get yours free at https://web3forms.com/ (enter: support@swamiindustries.in)
const WEB3FORMS_ACCESS_KEY = '68ca5138-578c-47b9-ad97-67e431c0c2f0';

const SupportSection = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
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
                    subject: `New Support Query from ${formData.name}`,
                    from_name: formData.name,
                    ...formData,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
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
                                    <span>9404007182, 7887881694</span>
                                </div>
                                <div className="flex items-center">
                                    <Mail className="w-5 h-5 mr-3 text-blue-300" />
                                    <span>swamiindustries.wadha@gmail.com</span>
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
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="support-name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    id="support-name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="support-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="support-email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    placeholder="you@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="support-message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    id="support-message"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    placeholder="How can we help?"
                                ></textarea>
                            </div>

                            {status === 'error' && (
                                <p className="text-red-600 text-sm font-medium bg-red-50 px-3 py-2 rounded-lg">
                                    ⚠️ {errorMsg}
                                </p>
                            )}

                            {status === 'success' ? (
                                <div className="w-full py-3 bg-green-500 text-white font-bold rounded-lg flex items-center justify-center gap-2 shadow-lg">
                                    <CheckCircle className="w-5 h-5" />
                                    Message Sent Successfully!
                                </div>
                            ) : (
                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full py-3 bg-[var(--color-brand-secondary)] text-white font-bold rounded-lg hover:bg-blue-600 transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        'Send Message'
                                    )}
                                </button>
                            )}
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SupportSection;
