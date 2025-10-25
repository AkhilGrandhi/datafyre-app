import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import bgVideo from '../assets/bg_animation.mp4';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-32 px-4">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Semi-transparent Black Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-6"
            >
              <span className="text-gray-500 text-sm font-semibold tracking-[0.3em] uppercase">
                Data Fyre Private Limited
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.15] tracking-tight"
            >
              Empowering Businesses<br />
              with Smart<br />
              <span className="text-white">IT Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-gray-400 text-lg md:text-xl mb-8 leading-relaxed font-light"
            >
              Delivering enterprise-grade technology solutions that transform operations, 
              accelerate innovation, and drive sustainable growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contact"
                className="bg-white text-black px-8 py-3.5 rounded font-semibold hover:bg-gray-200 transition-all duration-300 text-center inline-flex items-center justify-center"
              >
                Schedule Consultation
              </Link>
              <Link
                to="/products"
                className="bg-transparent border-2 border-white/20 text-white px-8 py-3.5 rounded font-semibold hover:border-white/40 hover:bg-white/5 transition-all duration-300 text-center inline-flex items-center justify-center"
              >
                Explore Solutions
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Minimalist Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-sm">
              {/* Minimalist geometric design */}
              <div className="relative">
                <div className="grid grid-cols-3 gap-2.5">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="h-32 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm"
                  ></motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                    className="h-40 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm"
                  ></motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0, duration: 0.6 }}
                    className="h-28 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm"
                  ></motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.6 }}
                    className="h-36 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm"
                  ></motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="h-44 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm"
                  ></motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3, duration: 0.6 }}
                    className="h-32 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm"
                  ></motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-gray-600 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

