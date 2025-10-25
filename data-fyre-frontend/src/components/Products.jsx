import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    {
      id: 1,
      icon: '🚀',
      title: 'CloudSync Pro',
      description: 'Enterprise-grade cloud synchronization platform for seamless data management across all your devices and teams.',
      features: ['Real-time Sync', 'End-to-end Encryption', 'Team Collaboration'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      icon: '📊',
      title: 'DataViz Analytics',
      description: 'Advanced business intelligence and data visualization tool that transforms complex data into actionable insights.',
      features: ['Interactive Dashboards', 'AI-Powered Insights', 'Custom Reports'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      icon: '🤖',
      title: 'AutoFlow AI',
      description: 'Intelligent workflow automation platform powered by machine learning to streamline your business processes.',
      features: ['Smart Automation', 'ML Integration', 'Process Optimization'],
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 4,
      icon: '🔐',
      title: 'SecureVault Pro',
      description: 'Military-grade security solution for protecting your sensitive data and digital assets from cyber threats.',
      features: ['Zero-Trust Security', 'Threat Detection', 'Compliance Ready'],
      color: 'from-green-500 to-emerald-500',
    },
  ];

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // Card animation variants - Smooth fade-in with upward movement
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94], // Smooth easing curve
      },
    },
  };

  return (
    <section className="py-16 sm:py-20 md:py-28 relative bg-gradient-to-b from-black via-gray-900/50 to-black">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-10 sm:left-10 w-64 sm:w-72 h-64 sm:h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-10 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 px-4"
        >
          <span className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider">
            Our Products
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 sm:mt-4 mb-3 sm:mb-4">
            Innovative Solutions for Modern Business
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Discover our suite of cutting-edge products designed to accelerate 
            your digital transformation journey.
          </p>
        </motion.div>

        {/* Products List */}
        <motion.div 
          className="space-y-4 sm:space-y-6 max-w-6xl mx-auto px-0 sm:px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {products.map((product, index) => {
            const isRightAligned = index % 2 === 1;
            return (
              <motion.div
                key={product.id}
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className={`group glass-card rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer backdrop-blur-xl bg-gray-900/40 hover:bg-gray-800/50 border border-white/10 hover:border-primary/50 transition-all duration-300 w-full ${
                  isRightAligned ? 'lg:ml-[35%] lg:max-w-[65%]' : 'lg:mr-auto lg:max-w-[65%]'
                }`}
              >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Icon Side */}
                <motion.div 
                  className={`lg:col-span-3 bg-gradient-to-br ${product.color} p-8 sm:p-10 lg:p-4 flex items-center justify-center ${
                    index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <motion.div 
                    className="text-5xl sm:text-6xl lg:text-4xl opacity-90"
                    whileHover={{ 
                      scale: 1.15,
                      rotate: 5,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    animate={{ 
                      y: [0, -5, 0],
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {product.icon}
                  </motion.div>
                </motion.div>

                {/* Content Side */}
                <div className={`lg:col-span-9 p-6 sm:p-8 lg:p-5 flex flex-col justify-center ${
                  index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'
                }`}>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3">
                    {product.title}
                  </h3>
                  <p className="text-gray-400 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-accent/10 text-accent px-2.5 py-1 rounded-full text-xs sm:text-sm font-medium border border-accent/30 hover:bg-accent/20 transition-colors duration-200"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div>
                    <Link
                      to="/products"
                      className="inline-flex items-center text-accent text-sm sm:text-base font-semibold hover:gap-3 gap-2 transition-all duration-300 group"
                    >
                      Learn More
                      <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/products"
            className="gradient-primary text-white px-8 py-4 rounded-lg font-semibold inline-block hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            View All Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;

