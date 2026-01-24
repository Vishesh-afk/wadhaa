import React from 'react';
import { motion } from 'framer-motion';
import {
    ShieldCheck,
    Building2,
    User,
    MapPin,
    Users,
    BadgeCheck,
    Briefcase,
    TrendingUp,
    CreditCard,
    Truck,
    FileText,
    Landmark,
    Rocket,
    Globe,
    Award,
    Layers
} from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const AboutUs = () => {
    const factsheet = {
        basicInfo: [
            { label: 'Nature of Business', value: 'Manufacturer', icon: Briefcase },
            { label: 'Additional Business', value: 'Technical R&D, Enterprise Supply', icon: Building2 },
            { label: 'Head of Operations', value: 'Aditya Wadhwa', icon: User },
            { label: 'Regional HQ', value: 'A-3, Gondia MIDC, Industrial Area, Gondia- 441614, Maharashtra', icon: MapPin },
            { label: 'Enterprise Workforce', value: '25+ Professionals', icon: Users },
            { label: 'Legal Structure', value: 'Private Partnership', icon: ShieldCheck },
            { label: 'Fiscal Volume', value: 'Enterprise Grade', icon: TrendingUp },
        ],
        statutory: [
            { label: 'Tax Compliance Status', value: 'Active since 2017', icon: BadgeCheck },
            { label: 'GST Identification', value: '27ACQFS8390F1ZF', icon: BadgeCheck },
            { label: 'Global Trade Code', value: 'ACQFS8390F', icon: FileText },
            { label: 'Strategic Banker', value: 'Punjab National Bank', icon: Landmark },
        ],
        logistics: [
            { label: 'Payment Framework', value: 'L/C, Credit Line, Digital Settlement', icon: CreditCard },
            { label: 'Delivery Radius', value: 'Pan-India Logistics Network', icon: Truck },
        ]
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main className="pt-20">
                {/* Executive Hero Section */}
                <section className="relative py-40 bg-slate-900 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-indigo/20 to-transparent opacity-50"></div>

                    <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                        <div className="max-w-4xl">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8"
                            >
                                <ShieldCheck className="w-4 h-4 text-brand-indigo" />
                                <span className="text-white/80 font-bold text-[10px] uppercase tracking-[0.2em]">Institutional Profile</span>
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-6xl lg:text-9xl font-bold text-white leading-tight tracking-tight mb-12"
                            >
                                Chemistry of <br />
                                <span className="text-gradient-clean italic">Precision</span>.
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-xl lg:text-2xl text-slate-400 leading-relaxed font-medium"
                            >
                                Since 2014, Wadha Industries has been engineering high-purity hygiene solutions.
                                We merge chemical intelligence with industrial scale to redefine purity.
                            </motion.p>
                        </div>
                    </div>

                    {/* Background abstract */}
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 aspect-square bg-brand-indigo/10 blur-[120px] rounded-full"></div>
                </section>

                <div className="max-w-7xl mx-auto px-6 lg:px-12 -mt-24 relative z-20 pb-32">
                    <div className="bg-white rounded-[60px] p-12 lg:p-24 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] border border-slate-100 flex flex-col lg:flex-row gap-24">
                        <div className="lg:w-2/3">
                            <div className="flex items-center gap-4 mb-12">
                                <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white">
                                    <Layers className="w-6 h-6" />
                                </div>
                                <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Enterprise DNA</h2>
                            </div>
                            <div className="space-y-10 text-xl text-slate-500 leading-relaxed font-medium">
                                <p>
                                    Established in <span className="text-slate-900 font-bold">2014</span>, Wadha Industries has established itself as the technical leader in institutional hygiene. Under our marquee brand <span className="text-slate-900 font-bold italic underline decoration-brand-indigo/30 underline-offset-4">Wadha</span>, we develop molecular-level formulations.
                                </p>
                                <p>
                                    Our MIDC Gondia facility operates under rigorous ISO manufacturing protocols. The internal R&D wing ensures that every variant of our <span className="text-brand-indigo font-bold underline decoration-brand-indigo/20">Pro-Series</span> line delivers consistent pH stability and maximum soil removal efficacy.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
                                <div className="space-y-4 p-8 rounded-[40px] bg-slate-50 border border-slate-100">
                                    <Globe className="w-8 h-8 text-slate-900" />
                                    <h4 className="font-bold text-slate-900 tracking-tight text-lg">Logistic Reach</h4>
                                    <p className="text-sm text-slate-400 font-medium leading-relaxed">Systematic distribution across 180+ industrial clusters in Central India.</p>
                                </div>
                                <div className="space-y-4 p-8 rounded-[40px] bg-slate-50 border border-slate-100">
                                    <Award className="w-8 h-8 text-brand-indigo" />
                                    <h4 className="font-bold text-slate-900 tracking-tight text-lg">Quality Assurance</h4>
                                    <p className="text-sm text-slate-400 font-medium leading-relaxed">Integrated molecular analysis for every production batch before dispatch.</p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/3">
                            <div className="bg-slate-900 rounded-[50px] p-12 text-white flex flex-col items-center justify-center text-center space-y-8 h-full shadow-2xl relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-indigo/20 to-transparent"></div>
                                <div className="relative z-10 text-8xl font-bold italic tracking-tighter">10+</div>
                                <div className="relative z-10 space-y-2">
                                    <h4 className="text-2xl font-bold tracking-tight">Decade of Trust</h4>
                                    <div className="w-12 h-1 bg-brand-indigo rounded-full mx-auto"></div>
                                </div>
                                <p className="relative z-10 text-slate-400 font-medium">Delivering reliability since 2014 and scaling towards a precision-driven future.</p>
                            </div>
                        </div>
                    </div>

                    {/* Operational Factsheet */}
                    <div className="mt-40">
                        <div className="flex flex-col items-center text-center mb-24">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-brand-indigo font-bold text-[10px] uppercase tracking-[0.4em]">Operations Ledger</span>
                            </div>
                            <h3 className="text-5xl lg:text-7xl font-bold text-slate-900 tracking-tight">Industrial <span className="text-slate-400 italic">Sheet</span>.</h3>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-12">
                            {/* Column 1 - Entity */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="space-y-10"
                            >
                                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 border-l-2 border-slate-100 pl-4">Identification</h4>
                                <div className="space-y-2">
                                    {factsheet.basicInfo.slice(0, 4).map((info, i) => (
                                        <div key={i} className="group p-6 rounded-[32px] hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100 flex items-center gap-6">
                                            <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-brand-indigo group-hover:text-white transition-all">
                                                <info.icon className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">{info.label}</p>
                                                <p className="text-sm font-bold text-slate-900 leading-tight">{info.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Column 2 - Legal */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="space-y-10"
                            >
                                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 border-l-2 border-slate-100 pl-4">Compliance</h4>
                                <div className="space-y-2">
                                    {factsheet.statutory.map((info, i) => (
                                        <div key={i} className="group p-6 rounded-[32px] hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100 flex items-center gap-6">
                                            <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-brand-indigo group-hover:text-white transition-all">
                                                <info.icon className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">{info.label}</p>
                                                <p className="text-sm font-bold text-slate-900 leading-tight">{info.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                    {factsheet.basicInfo.slice(4).map((info, i) => (
                                        <div key={i} className="group p-6 rounded-[32px] hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100 flex items-center gap-6">
                                            <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-brand-indigo group-hover:text-white transition-all">
                                                <info.icon className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">{info.label}</p>
                                                <p className="text-sm font-bold text-slate-900 leading-tight">{info.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Column 3 - Logistics */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="space-y-12"
                            >
                                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 border-l-2 border-slate-100 pl-4">Logistics</h4>
                                <div className="space-y-8">
                                    {factsheet.logistics.map((info, i) => (
                                        <div key={i} className="bg-slate-900 p-10 rounded-[48px] text-white shadow-xl relative overflow-hidden group">
                                            <div className="absolute inset-0 bg-gradient-to-br from-brand-indigo/10 to-transparent"></div>
                                            <div className="relative z-10 w-12 h-12 bg-brand-indigo rounded-2xl flex items-center justify-center mb-6">
                                                <info.icon className="w-5 h-5 text-white" />
                                            </div>
                                            <p className="relative z-10 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-3">{info.label}</p>
                                            <p className="relative z-10 text-xl font-bold">{info.value}</p>
                                        </div>
                                    ))}
                                    <div className="bg-slate-50 p-12 rounded-[48px] border border-slate-100 relative overflow-hidden group">
                                        <h5 className="font-bold uppercase text-[10px] tracking-widest mb-6 text-slate-400">Strategic Alignment</h5>
                                        <p className="text-sm font-medium text-slate-500 leading-relaxed">Accepting enterprise distribution contracts for FY 24-25. Contact our logistics wing for quote estimates.</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default AboutUs;
