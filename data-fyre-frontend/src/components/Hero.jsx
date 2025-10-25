import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 animated-gradient opacity-30"></div>
        <div className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-secondary/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse"></div>
        <div className="absolute w-64 h-64 bg-tertiary/20 rounded-full blur-2xl top-1/4 right-1/4 animate-pulse"></div>
      </div>

      <div className="container-custom px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-4"
            >
              <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/30">
                🚀 Welcome to Data Fyre
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Empowering businesses with{' '}
              <span className="text-gradient">smart IT solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed"
            >
              Transform your business with cutting-edge technology solutions. 
              We deliver innovative software, cloud services, and digital strategies 
              that drive growth and success.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contact"
                className="gradient-primary text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center"
              >
                Get Started
              </Link>
              <Link
                to="/products"
                className="bg-transparent border-2 border-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent/10 transition-all duration-300 text-center"
              >
                Learn More
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12"
            >
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">500+</h3>
                <p className="text-gray-300 text-sm">Projects Delivered</p>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">200+</h3>
                <p className="text-gray-300 text-sm">Happy Clients</p>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">15+</h3>
                <p className="text-gray-300 text-sm">Years Experience</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg">
              {/* Placeholder for illustration - using geometric shapes */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-tertiary rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
                <div className="relative glass-card rounded-3xl p-8 glow-effect">
                  <div className="space-y-4">
                    <div className="h-4 bg-primary/30 rounded w-3/4 animate-pulse"></div>
                    <div className="h-4 bg-secondary/30 rounded w-1/2 animate-pulse"></div>
                    <div className="h-32 gradient-full rounded-2xl my-6"></div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-20 glass-card rounded-xl"></div>
                      <div className="h-20 glass-card rounded-xl"></div>
                    </div>
                  </div>
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
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

