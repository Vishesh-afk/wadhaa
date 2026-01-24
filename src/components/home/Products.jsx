import React from 'react';
import { ArrowRight } from 'lucide-react';
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
        <section id="products" className="py-32 bg-[#fafafa] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-brand-indigo font-bold text-[10px] uppercase tracking-[0.3em]">Curated Solutions</span>
                        </div>
                        <h3 className="text-4xl lg:text-7xl font-bold text-slate-900 leading-tight tracking-tight">
                            Enterprise <br />
                            <span className="text-slate-400 font-medium italic underline decoration-brand-indigo/30 underline-offset-8">Inventory.</span>
                        </h3>
                    </motion.div>

                    <Link
                        to="/catalog"
                        className="group flex items-center gap-8 bg-white px-10 py-8 rounded-[32px] shadow-sm border border-slate-100 hover:border-brand-indigo/30 transition-all hover:shadow-xl hover:shadow-brand-indigo/5"
                    >
                        <div className="flex flex-col">
                            <span className="font-bold text-[10px] uppercase tracking-[0.2em] text-slate-400 group-hover:text-brand-indigo transition-colors">Digital Catalogue</span>
                            <span className="font-bold text-lg text-slate-900">Browse Full Series</span>
                        </div>
                        <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-brand-indigo group-hover:text-white transition-all">
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
