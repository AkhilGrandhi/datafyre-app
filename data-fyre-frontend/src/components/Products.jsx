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

  const getItemVariants = (isRightAligned) => ({
    hidden: { 
      opacity: 0, 
      x: isRightAligned ? 200 : -200, // Right cards come from right, left cards from left
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  });

  return (
    <section className="py-20 md:py-28 relative bg-gradient-to-b from-black via-gray-900/50 to-black">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            Innovative Solutions for Modern Business
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover our suite of cutting-edge products designed to accelerate 
            your digital transformation journey.
          </p>
        </motion.div>

        {/* Products List */}
        <div className="space-y-6 max-w-6xl mx-auto px-4">
          {products.map((product, index) => {
            const isRightAligned = index % 2 === 1;
            return (
              <motion.div
                key={product.id}
                variants={getItemVariants(isRightAligned)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className={`glass-card glass-card-hover rounded-2xl overflow-hidden hover-lift cursor-pointer backdrop-blur-xl bg-gray-900/40 border border-white/10 ${
                  isRightAligned ? 'lg:ml-[35%]' : 'lg:mr-auto'
                }`}
                style={{ maxWidth: '65%' }}
              >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Icon Side */}
                <div className={`lg:col-span-3 bg-gradient-to-br ${product.color} p-4 flex items-center justify-center ${
                  index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'
                }`}>
                  <div className="text-4xl opacity-90">
                    {product.icon}
                  </div>
                </div>

                {/* Content Side */}
                <div className={`lg:col-span-9 p-4 md:p-5 flex flex-col justify-center ${
                  index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'
                }`}>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">{product.title}</h3>
                  <p className="text-gray-400 mb-2.5 leading-relaxed text-sm">{product.description}</p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1.5 mb-2.5">
                    {product.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-accent/10 text-accent px-2 py-0.5 rounded-full text-xs font-medium border border-accent/30"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    to="/products"
                    className="inline-flex items-center text-accent font-semibold hover:gap-3 gap-2 transition-all duration-300 text-xs"
                  >
                    Learn More
                    <span className="text-sm">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>

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

