import React from 'react';
import { Twitter, Facebook, Linkedin, Instagram, ArrowUpRight, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white pt-32 pb-16 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-indigo/5 rounded-full blur-[120px] -mr-[250px] -mb-[250px]"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid md:grid-cols-4 gap-16 mb-24">
                    <div className="col-span-1 md:col-span-2 pr-12">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-10 h-10 bg-brand-indigo rounded-xl flex items-center justify-center text-white font-bold transition-all duration-500">
                                <Layers className="w-5 h-5" />
                            </div>
                            <span className="text-2xl font-bold text-white tracking-tight">WADHA<span className="text-brand-indigo">.</span></span>
                        </div>
                        <p className="text-slate-400 font-medium leading-relaxed mb-10 max-w-sm text-lg">
                            Pioneering industrial hygiene through advanced chemical engineering.
                            Wadha Industries delivers high-purity cleaning solutions for enterprise scale units.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: Twitter, href: '#' },
                                { icon: Facebook, href: '#' },
                                { icon: Linkedin, href: '#' },
                                { icon: Instagram, href: '#' }
                            ].map((social, idx) => (
                                <a key={idx} href={social.href} className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-indigo hover:border-brand-indigo hover:text-white transition-all transform hover:-translate-y-1">
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 mb-10 border-l-2 border-brand-indigo pl-4">Inventory</h4>
                        <ul className="space-y-6">
                            {[
                                { name: 'Institutional Care', link: '/catalog?cat=institutional' },
                                { name: 'Floor Formulations', link: '/catalog?cat=floor' },
                                { name: 'Industrial Hygiene', link: '/catalog?cat=industrial' },
                                { name: 'Bulk Specialty', link: '/catalog' }
                            ].map((item, i) => (
                                <li key={i}>
                                    <Link to={item.link} className="text-slate-400 hover:text-brand-indigo font-bold text-sm flex items-center group gap-2 transition-colors">
                                        {item.name}
                                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 mb-10 border-l-2 border-brand-indigo pl-4">Company</h4>
                        <ul className="space-y-6">
                            {[
                                { name: 'About Legacy', link: '/about-us' },
                                { name: 'Certifications', link: '/about-us' },
                                { name: 'Contact Sales', link: '/contact' },
                                { name: 'Partnerships', link: '/contact' }
                            ].map((item, i) => (
                                <li key={i}>
                                    <Link to={item.link} className="text-slate-400 hover:text-brand-indigo font-bold text-sm flex items-center group gap-2 transition-colors">
                                        {item.name}
                                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                        &copy; {new Date().getFullYear()} Wadha Industries. Engineered with Precision.
                    </p>
                    <div className="flex gap-10">
                        <a href="#" className="text-slate-500 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">Privacy Policy</a>
                        <a href="#" className="text-slate-500 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">Compliance</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
