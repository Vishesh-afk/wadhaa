import React from 'react';
import NavbarWadha from '../components/layout/NavbarWadha';
import HeroWadha from '../components/home/HeroWadha';
import ProductHighlight from '../components/home/ProductHighlight';
import CategoryBrowse from '../components/home/CategoryBrowse';
import StainGuide from '../components/home/StainGuide';
import LaundryEducation from '../components/home/LaundryEducation';
import WhyWadha from '../components/home/WhyWadha';
import SocialProofWadha from '../components/home/SocialProofWadha';
import SupportSection from '../components/home/SupportSection';
import FooterWadha from '../components/layout/FooterWadha';

const Home = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
            <NavbarWadha />
            <main>
                <HeroWadha />
                <CategoryBrowse />
                <ProductHighlight />
                <StainGuide />
                <WhyWadha />
                <LaundryEducation />
                <SocialProofWadha />
                <SupportSection />
            </main>
            <FooterWadha />
        </div>
    );
};

export default Home;
