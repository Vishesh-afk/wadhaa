import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Clock, AlertTriangle, CheckCircle, Droplets, Share2, Printer } from 'lucide-react';
import NavbarWadha from '../components/layout/NavbarWadha';
import FooterWadha from '../components/layout/FooterWadha';

const SparkleIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>
);

const stainDetails = {
    "coffee-tea": {
        name: "Coffee & Tea",
        difficulty: "Medium",
        timeRequired: "15-20 mins",
        description: "Coffee and tea contain tannins that can leave brownish marks if not treated promptly. Hot liquids can also set the stain faster.",
        steps: [
            "Blot the excess liquid immediately with a clean cloth. Do not rub.",
            "Rinse the back of the stain with cold water.",
            "Pre-treat with a mixture of vinegar and water (1:2 ratio) or apply liquid detergent directly.",
            "Let it sit for 10 minutes.",
            "Wash with Wadha Detergent Powder in warm water."
        ],
        proTip: "For dried stains, soak the garment in warm water with a scoop of Wadha detergent for 30 minutes before washing.",
        products: ["Wadha Detergent Powder", "Toto Matic Liquid"]
    },
    "curry-spices": {
        name: "Curry & Spices",
        difficulty: "Hard",
        timeRequired: "30+ mins",
        description: "Turmeric and oil make curry stains stubborn. They require immediate attention and specific pre-treatment to avoid permanent yellowing.",
        steps: [
            "Scrape off excess sauce carefully.",
            "Apply glycerin or liquid detergent directly to the stain.",
            "Rub gently and let it sit for 20 minutes.",
            "Rinse with warm water.",
            "Wash using the 'Heavy' cycle on your machine with Wadha Matic Detergent."
        ],
        proTip: "Dry the stained area in direct sunlight after washing; sunlight helps fade turmeric marks naturally.",
        products: ["Toto Matic Liquid", "Wadha Detergent Bar"]
    },
    // ... (rest of the keys are same, I will use ReplaceFileContent wisely to move them)
    // Actually I will just replace the whole file structure to be safe and clean.


    "oil-grease": {
        name: "Oil & Grease",
        difficulty: "Medium",
        timeRequired: "20 mins",
        description: "Oil stains are hydrophobic, meaning water alone won't remove them. You need surfactants to break down the grease molecules.",
        steps: [
            "Blot excess oil with a paper towel.",
            "Sprinkle baking soda or cornstarch to absorb the oil. Let it sit for 10 mins, then brush off.",
            "Apply dish soap or liquid detergent to the spot.",
            "Rub gently into the fabric.",
            "Wash in the hottest water safe for the fabric type."
        ],
        proTip: "For heavy grease (like bike oil), use Wadha Dishwash Bar on the spot before machine washing.",
        products: ["Wadha Dishwash Bar", "Wadha Detergent Powder"]
    },
    "paint": {
        name: "Paint",
        difficulty: "Hard",
        timeRequired: "45 mins",
        description: "Water-based paints are easier to remove while wet. Oil-based paints require solvents like turpentine before washing.",
        steps: [
            "Identify if the paint is water-based or oil-based.",
            "For water-based: Rinse with warm water while the stain is wet.",
            "For dry spots, scrape off excess paint.",
            "Apply detergent solution and scrub with a soft brush.",
            "Wash as usual."
        ],
        proTip: "If the paint has fully cured (hardened), professional dry cleaning might be your best option.",
        products: ["Wadha Detergent Power"]
    },
    "ink": {
        name: "Ink",
        difficulty: "Hard",
        timeRequired: "20 mins",
        description: "Ballpoint ink is oil-based, while water-based markers are easier. Alcohol is often the key solvent for ink.",
        steps: [
            "Place a paper towel under the stain.",
            "Dab (don't rub) the stain with rubbing alcohol or hand sanitizer.",
            "Blot until ink stops transferring to the towel.",
            "Rinse with cold water.",
            "Wash with Wadha Detergent."
        ],
        proTip: "Hairspray (alcohol-based) can also work in a pinch to lift ink stains.",
        products: ["Toto Matic Liquid"]
    },
    "blood": {
        name: "Blood",
        difficulty: "Medium",
        timeRequired: "20 mins",
        description: "Protein-based stains like blood set instantly in hot water. Always use cold water for treatment.",
        steps: [
            "Soak immediately in COLD water. Never use hot water.",
            "Gently rub the fabric against itself under running cold water.",
            "If the stain remains, soak in salt water for 15 minutes.",
            "Wash with detergent."
        ],
        proTip: "Hydrogen peroxide works well on white clothes but may bleach colors, so test a hidden spot first.",
        products: ["Wadha Detergent Powder"]
    },
    "chocolate": {
        name: "Chocolate",
        difficulty: "Medium",
        timeRequired: "20 mins",
        description: "A combination of fat, sugar, and protein makes chocolate tricky but manageable.",
        steps: [
            "Scrape off any solid chocolate.",
            "Turn the garment inside out and flush with cold water.",
            "Pre-treat with liquid detergent or stain remover.",
            "Soak for 20 minutes.",
            "Wash in warm water."
        ],
        proTip: "Milk breaks down fats! Soaking the stain in milk for 30 mins before washing can help.",
        products: ["Toto Matic Liquid"]
    },
    "sweat": {
        name: "Sweat",
        difficulty: "Easy",
        timeRequired: "15 mins",
        description: "Yellow pit stains are caused by the reaction between sweat and aluminum in deodorants.",
        steps: [
            "Mix vinegar and water (1:1).",
            "Spray onto the stain and let it sit for 20 minutes.",
            "Scrub gently with a toothbrush.",
            "Wash with high-quality enzymatic detergent like Wadha."
        ],
        proTip: "Avoid using chlorine bleach on sweat stains as it can darken them.",
        products: ["Wadha Detergent Powder"]
    },
    "mud-grass": {
        name: "Mud & Grass",
        difficulty: "Medium",
        timeRequired: "30 mins",
        description: "Grass contains chlorophyll (a dye) and mud contains solid particles.",
        steps: [
            "Let mud dry completely, then brush off the excess.",
            "Pre-treat grass stains with a vinegar solution or enzyme spray.",
            "Rub liquid detergent into the fabric.",
            "Wash at the highest safe temperature."
        ],
        proTip: "Do not wet mud while it is fresh; it will only spread the stain deeper into the fibers.",
        products: ["Wadha Detergent Powder"]
    },
    "tomato-sauce": {
        name: "Tomato Sauce",
        difficulty: "Medium",
        timeRequired: "25 mins",
        description: "Acidic and oily, tomato stains need a two-pronged approach.",
        steps: [
            "Remove excess sauce.",
            "Flush with cold water from the back.",
            "Apply vinegar or lemon juice for the acid, then detergent for the oil.",
            "Rinse and wash."
        ],
        proTip: "Sunlight is a natural bleaching agent for tomato stains on white fabrics.",
        products: ["Toto Matic Liquid"]
    },
    "fruit-juice": {
        name: "Fruit Juice",
        difficulty: "Easy",
        timeRequired: "10 mins",
        description: "Sugary and often brightly colored, but usually water-soluble.",
        steps: [
            "Blot quickly to remove liquid.",
            "Flush with cool water.",
            "Soak in a solution of warm water and detergent.",
            "Wash as usual."
        ],
        proTip: "Boiling water poured from a height (for durable fabrics like cotton) can blast through berry stains.",
        products: ["Wadha Detergent Powder"]
    }
};


const StainRemovalPage = () => {
    const { stainId } = useParams();
    const navigate = useNavigate();
    const [stain, setStain] = useState(null);

    useEffect(() => {
        // Normalize logic to match ID
        if (stainDetails[stainId]) {
            setStain(stainDetails[stainId]);
        } else {
            // Fallback or handle not found
            // For simplicity, we might just default to 'coffee-tea' or show error
            // But let's try to be smart about URL typos if needed, for now exact match
        }

        window.scrollTo(0, 0);
    }, [stainId]);

    if (!stain) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Stain Not Found</h2>
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
                        onClick={() => navigate('/')}
                        className="flex items-center text-gray-500 hover:text-[var(--color-brand-primary)] transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                    </button>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* Main Content */}
                        <div className="lg:col-span-8">

                            {/* Header */}
                            <div className="mb-8">
                                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                                    Stain Removal Guide
                                </span>
                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[var(--color-brand-blue-dark)] mb-4">
                                    How to remove <span className="text-red-600">{stain.name}</span> stains
                                </h1>
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    {stain.description}
                                </p>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                <div className="bg-gray-50 p-6 rounded-2xl flex items-center">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mr-4 text-orange-500">
                                        <AlertTriangle className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase font-bold">Difficulty</p>
                                        <p className="text-lg font-bold text-gray-900">{stain.difficulty}</p>
                                    </div>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-2xl flex items-center">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mr-4 text-blue-500">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase font-bold">Time Required</p>
                                        <p className="text-lg font-bold text-gray-900">{stain.timeRequired}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Steps */}
                            <div className="mb-12">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                    <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                                    Step-by-Step Instructions
                                </h3>
                                <div className="space-y-6">
                                    {stain.steps.map((step, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            viewport={{ once: true }}
                                            className="flex"
                                        >
                                            <div className="flex-shrink-0 mr-6">
                                                <div className="w-10 h-10 rounded-full bg-[var(--color-brand-primary)] text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-blue-200">
                                                    {idx + 1}
                                                </div>
                                            </div>
                                            <div className="pt-2">
                                                <p className="text-lg text-gray-800 font-medium">{step}</p>
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
                                        "{stain.proTip}"
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
                                    {stain.products.map((prod, idx) => (
                                        <div key={idx} className="flex items-center p-3 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors cursor-pointer group">
                                            <div className="w-12 h-12 bg-white rounded-lg border border-gray-200 flex items-center justify-center text-xs text-gray-400 font-medium mr-3 group-hover:border-blue-200">
                                                Img
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-bold text-gray-800 text-sm">{prod}</p>
                                                <span className="text-xs text-[var(--color-brand-primary)] font-medium">Add to Cart</span>
                                            </div>
                                            <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[var(--color-brand-primary)]" />
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between">
                                    <button className="flex items-center text-gray-500 text-sm hover:text-gray-900">
                                        <Share2 className="w-4 h-4 mr-2" /> Share
                                    </button>
                                    <button className="flex items-center text-gray-500 text-sm hover:text-gray-900">
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

export default StainRemovalPage;
