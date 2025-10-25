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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="section-padding bg-dark">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
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

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="bg-dark-gray rounded-2xl p-8 hover-lift cursor-pointer border border-primary/20 hover:border-primary/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center text-3xl mb-6 shadow-lg`}>
                {product.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-3">{product.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{product.description}</p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {product.features.map((feature, index) => (
                  <span
                    key={index}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium border border-primary/30"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Link
                to="/products"
                className="inline-flex items-center text-primary font-semibold hover:gap-3 gap-2 transition-all duration-300"
              >
                Learn More
                <span className="text-xl">→</span>
              </Link>
            </motion.div>
          ))}
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

