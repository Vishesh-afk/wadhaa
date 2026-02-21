import React from 'react';
import { Star, ShoppingBag, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Product Images
import imgPowder from '../../assets/wadha powder.jpeg';
import imgBar from '../../assets/wadha bar.jpeg';
import imgMatic from '../../assets/IMG_2192.PNG';


const products = [
    {
        id: 1,
        name: "Wadha Detergent Powder 1Kg",
        benefit: "Deep cleaning for bright whites",
        rating: 4.8,
        reviews: 1240,
        price: "Rs. 55.10 / Kg",
        image: imgPowder,
        tag: "Bestseller"
    },
    {
        id: 2,
        name: "WADHA MAHABAR 240gm",
        benefit: "Tough on grease, gentle on hands",
        rating: 4.7,
        reviews: 850,
        price: "Rs. 7.85 / Piece",
        image: imgBar,
        tag: "New Arrival"
    },
    {
        id: 3,
        name: "Wadha Matic Liquid 1L",
        benefit: "Specialized for washing machines",
        rating: 4.9,
        reviews: 2100,
        price: "Rs. 39.17 / Pack",
        image: imgMatic,
        tag: "Premium Care"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

const ProductHighlight = () => {
    const navigate = useNavigate();
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-[var(--color-brand-blue-dark)] mb-4">
                        Our Best-Selling Cleaners
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Choose the perfect detergent for your laundry needs. Formulated to keep clothes bright and stain-free.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            variants={cardVariants}
                            whileHover={{ y: -10 }}
                            onClick={() => navigate('/products')}
                            className="group relative bg-white border border-gray-100 rounded-2xl shadow-card hover:shadow-floating transition-all duration-300 flex flex-col overflow-hidden cursor-pointer"
                        >
                            {product.tag && (
                                <div className="absolute top-4 left-4 bg-[var(--color-brand-secondary)] text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-sm">
                                    {product.tag}
                                </div>
                            )}

                            {/* Image Area */}
                            <div className="h-72 bg-gray-50 flex items-center justify-center p-6 group-hover:bg-blue-50/30 transition-colors relative overflow-hidden">
                                <motion.img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-contain drop-shadow-md group-hover:drop-shadow-xl transition-all duration-500"
                                    whileHover={{ scale: 1.1 }}
                                />

                                {/* Flash effect on hover */}
                                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-overlay" />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center space-x-1 mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                                    ))}
                                    <span className="text-xs text-gray-400 ml-1">({product.reviews})</span>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[var(--color-brand-primary)] transition-colors">
                                    {product.name}
                                </h3>

                                <p className="text-sm text-gray-500 mb-4 flex-1">
                                    <Check className="w-4 h-4 inline mr-1 text-green-500" />
                                    {product.benefit}
                                </p>

                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                                    <span className="text-lg font-bold text-gray-900">{product.price}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 text-center"
                >
                    <a href="/products" className="inline-block text-[var(--color-brand-primary)] font-bold hover:underline transition-all hover:translate-x-1">
                        View All Products &rarr;
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default ProductHighlight;
