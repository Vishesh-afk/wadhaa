import React from 'react';
import { ArrowRight, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductCard from '../ui/ProductCard';
import { productsData } from '../../data/products';

const Products = () => {
    // Get a few featured products (one from each of the first 4 categories)
    const featuredProducts = productsData.slice(0, 4).map(cat => ({
        ...cat.products[0],
        category: cat.category
    }));

    return (
        <section id="products" className="py-32 bg-gradient-light relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-fresh-green/10 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-deep-blue/10 rounded-full blur-[120px]"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-gradient-to-r from-deep-blue/10 to-fresh-green/10 rounded-lg">
                                <Package className="w-5 h-5 text-fresh-green" />
                            </div>
                            <span className="text-deep-blue font-bold text-[11px] uppercase tracking-[0.3em]">Our Products</span>
                        </div>
                        <h3 className="text-5xl lg:text-7xl font-black text-deep-blue leading-tight tracking-tight">
                            Premium <br />
                            <span className="text-gradient-green">Product Range</span>
                        </h3>
                    </motion.div>

                    <Link
                        to="/catalog"
                        className="group flex items-center gap-6 bg-white px-8 py-6 rounded-2xl shadow-card border-2 border-soft-gray hover:border-fresh-green transition-all hover:shadow-elevated hover-lift"
                    >
                        <div className="flex flex-col">
                            <span className="font-bold text-[10px] uppercase tracking-[0.2em] text-gray-500 group-hover:text-fresh-green transition-colors">Full Catalog</span>
                            <span className="font-bold text-lg text-deep-blue">View All Products</span>
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-deep-blue to-ocean-blue flex items-center justify-center text-white group-hover:scale-110 transition-all shadow-md">
                            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                        </div>
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredProducts.map((product, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <ProductCard
                                title={product.name}
                                category={product.category}
                                price={product.price}
                                moq={product.moq}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
