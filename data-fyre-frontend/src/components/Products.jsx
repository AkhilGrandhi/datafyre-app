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
                  y: -10,
                  transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }
                }}
                className={`group glass-card rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer backdrop-blur-xl bg-gray-900/40 hover:bg-gray-800/50 border border-white/10 hover:border-primary/50 transition-all duration-500 w-full ${
                  isRightAligned ? 'lg:ml-[35%] lg:max-w-[65%]' : 'lg:mr-auto lg:max-w-[65%]'
                }`}
              >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 relative overflow-hidden">
                {/* Shimmer Effect on Hover */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
                  initial={{ x: '-100%', opacity: 0 }}
                  whileHover={{ 
                    x: '100%', 
                    opacity: 1,
                    transition: { duration: 0.8, ease: "easeInOut" }
                  }}
                />
                {/* Icon Side */}
                <motion.div 
                  className={`lg:col-span-3 bg-gradient-to-br ${product.color} p-8 sm:p-10 lg:p-4 flex items-center justify-center relative ${
                    index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  {/* Animated Background Glow */}
                  <motion.div 
                    className="absolute inset-0 bg-white/5"
                    animate={{ 
                      opacity: [0.05, 0.15, 0.05],
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <motion.div 
                    className="text-5xl sm:text-6xl lg:text-4xl opacity-90 relative z-10"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ 
                      scale: 1, 
                      opacity: 0.9,
                      transition: { delay: 0.2, duration: 0.5, ease: "easeOut" }
                    }}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.6, ease: "easeInOut" }
                    }}
                    animate={{ 
                      y: [0, -8, 0],
                    }}
                    transition={{ 
                      y: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    {product.icon}
                  </motion.div>
                </motion.div>

                {/* Content Side */}
                <div className={`lg:col-span-9 p-6 sm:p-8 lg:p-5 flex flex-col justify-center ${
                  index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'
                }`}>
                  <motion.h3 
                    className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
                  >
                    {product.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-400 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                  >
                    {product.description}
                  </motion.p>

                  {/* Features */}
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                  >
                    {product.features.map((feature, idx) => (
                      <motion.span
                        key={idx}
                        className="bg-accent/10 text-accent px-2.5 py-1 rounded-full text-xs sm:text-sm font-medium border border-accent/30 hover:bg-accent/20 hover:scale-105 transition-all duration-300"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: 0.4 + (idx * 0.1), 
                          duration: 0.4, 
                          ease: [0.34, 1.56, 0.64, 1]
                        }}
                        whileHover={{ 
                          y: -3,
                          transition: { duration: 0.2 }
                        }}
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* CTA */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                  >
                    <Link
                      to="/products"
                      className="inline-flex items-center text-accent text-sm sm:text-base font-semibold gap-2 group relative"
                    >
                      <span className="relative">
                        Learn More
                        <motion.span 
                          className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"
                        />
                      </span>
                      <motion.span 
                        className="text-sm"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity, 
                          repeatDelay: 2,
                          ease: "easeInOut"
                        }}
                      >
                        →
                      </motion.span>
                    </Link>
                  </motion.div>
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
          transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mt-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              to="/products"
              className="gradient-primary text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-3 group relative overflow-hidden"
            >
              <span className="relative z-10">View All Products</span>
              <motion.span
                className="relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  repeatDelay: 1,
                  ease: "easeInOut"
                }}
              >
                →
              </motion.span>
              {/* Hover Glow Effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;

