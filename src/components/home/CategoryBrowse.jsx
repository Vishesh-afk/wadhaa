import { ArrowRight, Sparkles, Zap, Droplets, UtensilsCrossed } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
    { name: "Wash and Shine Range", icon: Sparkles, desc: "Deep cleaning power for everyday loads", color: "text-blue-600", bg: "bg-blue-100", border: "hover:border-blue-300", link: "/catalog?cat=detergent-powder" },
    { name: "Wash and Shine Cakes", icon: Zap, desc: "Powerful cleaning bars for hand-wash laundry", color: "text-yellow-600", bg: "bg-yellow-100", border: "hover:border-yellow-300", link: "/catalog?cat=detergent-cake" },
    { name: "Toilet Cleaner", icon: Droplets, desc: "Kills 99.9% germs, removes touch stains", color: "text-cyan-600", bg: "bg-cyan-100", border: "hover:border-cyan-300", link: "/catalog?cat=toilet-cleaner" },
    { name: "Liquid Dishwash", icon: UtensilsCrossed, desc: "Grease-cutting lemon formula", color: "text-green-600", bg: "bg-green-100", border: "hover:border-green-300", link: "/catalog?cat=liquid-dishwash" }
];

const CategoryBrowse = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-white to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10">
                    <div>
                        <span className="text-[var(--color-brand-secondary)] font-bold text-sm uppercase tracking-wider">Our Range</span>
                        <h2 className="text-3xl font-bold font-heading text-[var(--color-brand-blue-dark)] mt-2">Browse by Category</h2>
                    </div>
                    <Link to="/catalog" className="text-[var(--color-brand-primary)] font-semibold hover:underline flex items-center mt-4 md:mt-0">
                        View All Products <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat, idx) => (
                        <Link key={idx} to={cat.link} className={`flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-floating transition-all duration-300 border border-gray-100 ${cat.border} group relative overflow-hidden`}>
                            {/* Decorative background blob */}
                            <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full ${cat.bg} opacity-50 group-hover:scale-150 transition-transform duration-500 ease-out`}></div>

                            <div className={`relative z-10 w-20 h-20 rounded-2xl ${cat.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner`}>
                                <cat.icon className={`w-10 h-10 ${cat.color}`} />
                            </div>

                            <div className="relative z-10 text-center">
                                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[var(--color-brand-primary)] transition-colors">{cat.name}</h3>
                                <p className="text-sm text-gray-500 mt-2">{cat.desc}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryBrowse;
