import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import CompanyBrief from '../components/home/CompanyBrief';
import Products from '../components/home/Products';
import Testimonials from '../components/home/Testimonials';
import ContactSection from '../components/home/ContactSection';
import Footer from '../components/layout/Footer';

const Home = () => {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-brand-indigo selection:text-white">
            <Navbar />
            <main>
                <Hero />
                <CompanyBrief />
                <Features />
                <Products />
                <Testimonials />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
