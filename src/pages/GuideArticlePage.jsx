import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Clock, Tag, CheckCircle, Droplets, Share2, Printer } from 'lucide-react';
import NavbarWadha from '../components/layout/NavbarWadha';
import FooterWadha from '../components/layout/FooterWadha';

const SparkleIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>
);

// ─── Guide content ──────────────────────────────────────────────────────────
// Keyed by the id used in LaundryEducation cards → /guides/:guideId
const guideDetails = {
    "how-to-wash-clothes": {
        title: "How to Wash Clothes Properly",
        category: "Essential",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=1200",
        intro: "Washing clothes the right way keeps them fresh, bright and lasting far longer. Master these fundamentals for a perfect wash every single time.",
        steps: [
            { title: "Sort your laundry", detail: "Separate by colour (whites, lights, darks) and by fabric weight. This prevents dye transfer and uneven wear." },
            { title: "Check the care labels", detail: "Look for the recommended water temperature and wash cycle on each garment before you load the machine." },
            { title: "Pre-treat visible stains", detail: "Dab any spots with a little Wadha liquid detergent and let it sit for 5–10 minutes before washing." },
            { title: "Dose your detergent correctly", detail: "Match the amount to your load size and water hardness. Too much leaves residue; too little won't clean." },
            { title: "Pick the right cycle & temperature", detail: "Warm water for everyday cottons, cold water for bright colours and delicates." },
            { title: "Dry and store properly", detail: "Shake out each garment, dry promptly to avoid mustiness, then fold or hang once fully dry." },
        ],
        proTip: "Don't overload the machine — clothes need room to tumble so the water and detergent can circulate and clean effectively.",
        products: ["Wadha Detergent Powder", "Toto Matic Liquid"],
    },
    "protect-colours": {
        title: "How to Protect Colours",
        category: "Fabric Care",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=1200",
        intro: "Bright colours fade over time from friction, heat and harsh washing. A few simple habits keep your favourite garments looking new for far longer.",
        steps: [
            { title: "Wash inside out", detail: "Turning garments inside out protects the outer surface from rubbing and fading in the drum." },
            { title: "Use cold water", detail: "Cold water is gentler on dyes; hot water loosens colour and speeds up fading." },
            { title: "Separate darks and brights", detail: "Wash similar colours together so dye can't bleed onto lighter fabrics." },
            { title: "Choose a colour-safe detergent", detail: "Wadha's gentle formula lifts dirt without stripping the colour from your clothes." },
            { title: "Skip the harsh bleach", detail: "Never use chlorine bleach on coloured fabrics — reserve oxygen whiteners for whites only." },
            { title: "Dry in the shade", detail: "Direct sunlight bleaches colours, so line-dry brights in a shaded, airy spot." },
        ],
        proTip: "Add half a cup of white vinegar to the rinse for the first few washes of a new garment — it helps set the dye and lock in the colour.",
        products: ["Toto Matic Liquid", "Wadha Detergent Powder"],
    },
    "washing-machine-care": {
        title: "Washing Machine Dos & Don'ts",
        category: "Appliance Care",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=1200",
        intro: "Your washing machine works hard. A little care keeps it running efficiently, prevents odours and protects your clothes wash after wash.",
        steps: [
            { title: "DO clean the drum monthly", detail: "Run an empty hot cycle to clear detergent buildup and bacteria from inside the drum." },
            { title: "DON'T overload the machine", detail: "Cramming in clothes strains the motor and leaves your laundry poorly rinsed." },
            { title: "DO use the correct detergent", detail: "Use a low-suds 'Matic' detergent like Toto Matic in front-load and fully-automatic machines." },
            { title: "DON'T ignore the filter", detail: "Clean the lint and pump filter regularly to prevent drainage problems and bad smells." },
            { title: "DO leave the door open after use", detail: "Airing the drum between washes prevents mould and musty odours." },
            { title: "DON'T pour detergent randomly", detail: "Use the correct dispenser compartment for detergent, softener and pre-wash." },
        ],
        proTip: "Wipe the rubber door gasket dry after each wash on front-loaders — it's the number-one hiding spot for mould and odour.",
        products: ["Toto Matic Liquid", "Wadha Detergent Powder"],
    },
};

const GuideArticlePage = () => {
    const { guideId } = useParams();
    const navigate = useNavigate();
    const [guide, setGuide] = useState(null);

    useEffect(() => {
        setGuide(guideDetails[guideId] || null);
        window.scrollTo(0, 0);
    }, [guideId]);

    if (!guide) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Guide Not Found</h2>
                    <button onClick={() => navigate('/')} className="px-6 py-3 bg-[var(--color-brand-primary)] text-white rounded-lg">Return Home</button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <NavbarWadha />

            <main className="pt-24 pb-20">
                {/* Breadcrumb / Back */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                    <button
                        onClick={() => navigate('/#how-to-wash')}
                        className="flex items-center text-gray-500 hover:text-[var(--color-brand-primary)] transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Guides
                    </button>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* Main Content */}
                        <div className="lg:col-span-8">

                            {/* Header */}
                            <div className="mb-8">
                                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                                    How-To Guide
                                </span>
                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[var(--color-brand-blue-dark)] mb-4">
                                    {guide.title}
                                </h1>
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    {guide.intro}
                                </p>
                            </div>

                            {/* Hero Image */}
                            <div className="rounded-3xl overflow-hidden mb-10 h-64 sm:h-80 w-full shadow-sm">
                                <img src={guide.image} alt={guide.title} className="w-full h-full object-cover" />
                            </div>

                            {/* Meta Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                <div className="bg-gray-50 p-6 rounded-2xl flex items-center">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mr-4 text-blue-500">
                                        <Tag className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase font-bold">Category</p>
                                        <p className="text-lg font-bold text-gray-900">{guide.category}</p>
                                    </div>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-2xl flex items-center">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mr-4 text-green-500">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase font-bold">Read Time</p>
                                        <p className="text-lg font-bold text-gray-900">{guide.readTime}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Steps */}
                            <div className="mb-12">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                    <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                                    Step-by-Step
                                </h3>
                                <div className="space-y-6">
                                    {guide.steps.map((step, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.08 }}
                                            viewport={{ once: true }}
                                            className="flex"
                                        >
                                            <div className="flex-shrink-0 mr-6">
                                                <div className="w-10 h-10 rounded-full bg-[var(--color-brand-primary)] text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-blue-200">
                                                    {idx + 1}
                                                </div>
                                            </div>
                                            <div className="pt-1">
                                                <p className="text-lg text-gray-900 font-bold">{step.title}</p>
                                                <p className="text-gray-600 mt-1 leading-relaxed">{step.detail}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Pro Tip */}
                            <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-8 mb-10 relative overflow-hidden">
                                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-yellow-100 rounded-full opacity-50 blur-xl"></div>
                                <div className="relative z-10">
                                    <h4 className="flex items-center text-yellow-800 font-bold mb-3">
                                        <SparkleIcon className="w-5 h-5 mr-2" />
                                        Wadha Pro Tip
                                    </h4>
                                    <p className="text-yellow-900/80 italic text-lg">
                                        "{guide.proTip}"
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-4 space-y-8">

                            {/* Recommended Products */}
                            <div className="bg-white border border-gray-100 rounded-2xl shadow-floating p-6 sticky top-24">
                                <h4 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                                    <Droplets className="w-5 h-5 text-blue-500 mr-2" />
                                    Recommended Products
                                </h4>
                                <div className="space-y-4">
                                    {guide.products.map((prod, idx) => (
                                        <div
                                            key={idx}
                                            onClick={() => navigate('/catalog')}
                                            className="flex items-center p-3 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors cursor-pointer group"
                                        >
                                            <div className="w-12 h-12 bg-white rounded-lg border border-gray-200 flex items-center justify-center text-xs text-gray-400 font-medium mr-3 group-hover:border-blue-200">
                                                Img
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-bold text-gray-800 text-sm">{prod}</p>
                                                <span className="text-xs text-[var(--color-brand-primary)] font-medium">Shop now</span>
                                            </div>
                                            <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[var(--color-brand-primary)]" />
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between">
                                    <button className="flex items-center text-gray-500 text-sm hover:text-gray-900">
                                        <Share2 className="w-4 h-4 mr-2" /> Share
                                    </button>
                                    <button onClick={() => window.print()} className="flex items-center text-gray-500 text-sm hover:text-gray-900">
                                        <Printer className="w-4 h-4 mr-2" /> Print
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </main>

            <FooterWadha />
        </div>
    );
};

export default GuideArticlePage;
