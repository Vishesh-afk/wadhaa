import React from 'react';
import { motion } from 'framer-motion';
import heroBanner from '../../assets/IMG_2192.PNG';

const HeroWadha = () => {
  return (
    <section className="w-full bg-gray-50 overflow-hidden relative mt-16 md:mt-0">
      <motion.div
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-full"
      >
        <img
          src={heroBanner}
          alt="Wadha Detergent Hero Banner"
          className="w-full h-auto object-contain block"
        />
      </motion.div>

      {/* Optional Overlay Gradient for better text integration later if needed */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroWadha;
