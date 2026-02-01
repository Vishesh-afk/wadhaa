import React from 'react';
import NavbarWadha from '../components/layout/NavbarWadha';
import Footer from '../components/layout/Footer';

const AboutUs = () => {
    const factsheet = {
        basicInfo: [
            { label: 'Nature of Business', value: 'Manufacturer', icon: "🏭" },
            { label: 'Additional Business', value: 'Technical R&D, Enterprise Supply', icon: "🔬" },
            { label: 'Head of Operations', value: 'Aditya Swami', icon: "👨‍💼" },
            { label: 'Regional HQ', value: 'A-3, Gondia MIDC, Industrial Area, Gondia- 441614, Maharashtra', icon: "📍" },
            { label: 'Enterprise Workforce', value: '25+ Professionals', icon: "👥" },
            { label: 'Legal Structure', value: 'Private Partnership', icon: "⚖️" },
            { label: 'Fiscal Volume', value: 'Enterprise Grade', icon: "💹" },
        ],
        statutory: [
            { label: 'Tax Compliance Status', value: 'Active since 2017', icon: "📜" },
            { label: 'GST Identification', value: '27ACQFS8390F1ZF', icon: "🆔" },
            { label: 'Global Trade Code', value: 'ACQFS8390F', icon: "🌐" },
            { label: 'Strategic Banker', value: 'Punjab National Bank', icon: "🏦" },
        ],
        logistics: [
            { label: 'Payment Framework', value: 'L/C, Credit Line, Digital Settlement', icon: "💳" },
            { label: 'Delivery Radius', value: 'Pan-India Logistics Network', icon: "🚚" },
        ]
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <NavbarWadha />

            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-green-900 overflow-hidden text-white">
                    {/* Background Bubbles */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="absolute rounded-full bg-white/10 backdrop-blur-sm animate-float-bubble"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    width: `${Math.random() * 60 + 20}px`,
                                    height: `${Math.random() * 60 + 20}px`,
                                    animationDelay: `${Math.random() * 5}s`,
                                    animationDuration: `${Math.random() * 10 + 10}s`
                                }}></div>
                        ))}
                    </div>

                    <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                        <div className="max-w-4xl">
                            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 mb-8 backdrop-blur-md">
                                <span className="text-xl">✅</span>
                                <span className="text-white font-bold text-xs uppercase tracking-[0.2em]">Since 2014</span>
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-8">
                                Chemistry of <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-300 italic">Purity & Power</span>.
                            </h1>
                            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed font-medium max-w-2xl">
                                Swami Industries has been engineering high-purity hygiene solutions for over a decade.
                                We merge chemical intelligence with industrial scale to redefine cleanliness for Indian homes.
                            </p>
                        </div>
                    </div>
                </section>

                <div className="max-w-7xl mx-auto px-6 lg:px-12 -mt-20 relative z-20 pb-20">
                    <div className="bg-white rounded-[40px] p-8 lg:p-16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-2/3">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-2xl">
                                    🧬
                                </div>
                                <h2 className="text-3xl font-black text-slate-900 tracking-tight">Our DNA</h2>
                            </div>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
                                <p>
                                    Established in <span className="text-blue-700 font-bold">2014</span>, Swami Industries has established itself as a technical leader in institutional hygiene. Under our marquee brand <span className="text-blue-900 font-black italic underline decoration-green-400 underline-offset-4">Swami</span>, we develop molecular-level formulations.
                                </p>
                                <p>
                                    Our MIDC Gondia facility operates under rigorous <span className="text-green-600 font-bold">ISO manufacturing protocols</span>. The internal R&D wing ensures that every variant of our Pro-Series line delivers consistent pH stability and maximum soil removal efficacy.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                                <div className="space-y-4 p-8 rounded-[30px] bg-blue-50 border border-blue-100 hover:shadow-lg transition-shadow">
                                    <div className="text-4xl mb-2">🚚</div>
                                    <h4 className="font-bold text-slate-900 tracking-tight text-xl">Logistic Reach</h4>
                                    <p className="text-sm text-slate-500 font-medium leading-relaxed">Systematic distribution across 180+ industrial clusters in Central India.</p>
                                </div>
                                <div className="space-y-4 p-8 rounded-[30px] bg-green-50 border border-green-100 hover:shadow-lg transition-shadow">
                                    <div className="text-4xl mb-2">🛡️</div>
                                    <h4 className="font-bold text-slate-900 tracking-tight text-xl">Quality Assurance</h4>
                                    <p className="text-sm text-slate-500 font-medium leading-relaxed">Integrated molecular analysis for every production batch before dispatch.</p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/3">
                            <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-[40px] p-10 text-white flex flex-col items-center justify-center text-center space-y-6 h-full shadow-2xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                                <div className="relative z-10 text-8xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">10+</div>
                                <div className="relative z-10 space-y-2">
                                    <h4 className="text-2xl font-bold tracking-tight">Decade of Trust</h4>
                                    <div className="w-16 h-1 bg-green-500 rounded-full mx-auto"></div>
                                </div>
                                <p className="relative z-10 text-blue-200 font-medium text-sm">Delivering reliability since 2014 and scaling towards a precision-driven future.</p>
                            </div>
                        </div>
                    </div>

                    {/* Operational Factsheet */}
                    <div className="mt-24">
                        <div className="flex flex-col items-center text-center mb-16">
                            <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.3em] mb-4">Operations Ledger</span>
                            <h3 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">Industrial <span className="text-slate-400 italic">Scorecard</span>.</h3>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8 text-left">
                            {/* Column 1 - Entity */}
                            <div className="space-y-8">
                                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 border-l-4 border-blue-500 pl-4">Identification</h4>
                                <div className="space-y-4">
                                    {factsheet.basicInfo.slice(0, 4).map((info, i) => (
                                        <div key={i} className="group p-5 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all flex items-start gap-4">
                                            <div className="text-2xl mt-1 grayscale group-hover:grayscale-0 transition-all">{info.icon}</div>
                                            <div>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1.5">{info.label}</p>
                                                <p className="text-sm font-bold text-slate-900 leading-tight">{info.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Column 2 - Legal */}
                            <div className="space-y-8">
                                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 border-l-4 border-green-500 pl-4">Compliance</h4>
                                <div className="space-y-4">
                                    {factsheet.statutory.map((info, i) => (
                                        <div key={i} className="group p-5 rounded-2xl bg-white border border-slate-100 hover:border-green-200 hover:shadow-md transition-all flex items-start gap-4">
                                            <div className="text-2xl mt-1 grayscale group-hover:grayscale-0 transition-all">{info.icon}</div>
                                            <div>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1.5">{info.label}</p>
                                                <p className="text-sm font-bold text-slate-900 leading-tight">{info.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                    {factsheet.basicInfo.slice(4).map((info, i) => (
                                        <div key={i} className="group p-5 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all flex items-start gap-4">
                                            <div className="text-2xl mt-1 grayscale group-hover:grayscale-0 transition-all">{info.icon}</div>
                                            <div>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1.5">{info.label}</p>
                                                <p className="text-sm font-bold text-slate-900 leading-tight">{info.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Column 3 - Logistics */}
                            <div className="space-y-8">
                                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 border-l-4 border-orange-500 pl-4">Logistics</h4>
                                <div className="space-y-6">
                                    {factsheet.logistics.map((info, i) => (
                                        <div key={i} className="bg-slate-900 p-8 rounded-[30px] text-white shadow-xl relative overflow-hidden group">
                                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
                                            <div className="relative z-10 text-3xl mb-4">{info.icon}</div>
                                            <p className="relative z-10 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-2">{info.label}</p>
                                            <p className="relative z-10 text-lg font-bold">{info.value}</p>
                                        </div>
                                    ))}
                                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-[30px] border border-orange-200 relative overflow-hidden group">
                                        <h5 className="font-bold uppercase text-[10px] tracking-widest mb-4 text-orange-800">Strategic Alignment</h5>
                                        <p className="text-xs font-medium text-orange-900 leading-relaxed">Accepting enterprise distribution contracts for FY 24-25. Contact our logistics wing for quote estimates.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default AboutUs;
