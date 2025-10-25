import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProductsPage = () => {
  const products = [
    {
      id: 1,
      icon: '🚀',
      title: 'CloudSync Pro',
      description: 'Enterprise-grade cloud synchronization platform for seamless data management across all your devices and teams.',
      longDescription: 'CloudSync Pro provides real-time synchronization across unlimited devices with end-to-end encryption. Perfect for teams that need secure, reliable, and fast cloud storage solutions. Features include version control, automated backups, and advanced sharing permissions.',
      features: ['Real-time Sync', 'End-to-end Encryption', 'Team Collaboration', 'Version Control', 'Automated Backups'],
      pricing: 'Starting at $49/month',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      icon: '📊',
      title: 'DataViz Analytics',
      description: 'Advanced business intelligence and data visualization tool that transforms complex data into actionable insights.',
      longDescription: 'Turn your raw data into beautiful, interactive dashboards with AI-powered insights. DataViz Analytics helps you make data-driven decisions faster with real-time analytics, predictive modeling, and customizable reporting.',
      features: ['Interactive Dashboards', 'AI-Powered Insights', 'Custom Reports', 'Predictive Analytics', 'Data Integration'],
      pricing: 'Starting at $99/month',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      icon: '🤖',
      title: 'AutoFlow AI',
      description: 'Intelligent workflow automation platform powered by machine learning to streamline your business processes.',
      longDescription: 'AutoFlow AI uses advanced machine learning algorithms to identify bottlenecks and automate repetitive tasks. Boost productivity by up to 300% with smart process automation that learns and improves over time.',
      features: ['Smart Automation', 'ML Integration', 'Process Optimization', 'Task Scheduling', 'Performance Metrics'],
      pricing: 'Starting at $79/month',
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 4,
      icon: '🔐',
      title: 'SecureVault Pro',
      description: 'Military-grade security solution for protecting your sensitive data and digital assets from cyber threats.',
      longDescription: 'Protect your organization with enterprise-level security featuring zero-trust architecture, real-time threat detection, and compliance management. SecureVault Pro keeps your data safe from evolving cyber threats.',
      features: ['Zero-Trust Security', 'Threat Detection', 'Compliance Ready', 'Data Encryption', '24/7 Monitoring'],
      pricing: 'Starting at $129/month',
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 5,
      icon: '💼',
      title: 'ProjectHub Enterprise',
      description: 'Comprehensive project management platform designed for large teams and complex projects.',
      longDescription: 'Manage projects of any size with advanced planning tools, resource allocation, time tracking, and team collaboration features. ProjectHub Enterprise scales with your organization.',
      features: ['Project Planning', 'Resource Management', 'Time Tracking', 'Gantt Charts', 'Team Collaboration'],
      pricing: 'Starting at $69/month',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      id: 6,
      icon: '📱',
      title: 'MobileFirst SDK',
      description: 'Powerful SDK for building high-performance mobile applications with native-like experiences.',
      longDescription: 'Build beautiful cross-platform mobile apps faster with our comprehensive SDK. Includes pre-built components, APIs, and tools for iOS and Android development.',
      features: ['Cross-Platform', 'Pre-built Components', 'API Integration', 'Performance Optimized', 'Documentation'],
      pricing: 'Starting at $39/month',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-dark text-white pt-40 pb-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Products
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Discover our comprehensive suite of products designed to transform 
              your business operations and drive digital innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 md:py-28 relative bg-gradient-to-b from-black via-gray-900/50 to-black">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl relative z-10">
          <div className="space-y-12">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card glass-card-hover rounded-2xl overflow-hidden hover-lift backdrop-blur-xl bg-gray-900/40 border border-white/10"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-${index % 2 === 0 ? '2' : '2'} gap-8`}>
                  <div className={`p-8 md:p-12 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className={`w-20 h-20 bg-gradient-to-br ${product.color} rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-lg`}>
                      {product.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">{product.title}</h2>
                    <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                      {product.longDescription}
                    </p>
                    <div className="mb-6">
                      <h4 className="font-semibold text-white mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-300">
                            <span className="text-accent mr-2 text-lg">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between pt-6 border-t border-primary/20">
                      <span className="text-2xl font-bold text-gradient">{product.pricing}</span>
                      <Link
                        to="/contact"
                        className="gradient-primary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                  <div className={`bg-gradient-to-br ${product.color} p-8 md:p-12 flex items-center justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="text-white text-8xl opacity-50">
                      {product.icon}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white"
          >
            <h3 className="text-3xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-xl mb-8 opacity-90">
              We can tailor our products to meet your specific business needs.
            </p>
            <Link
              to="/contact"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold inline-block hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Contact Our Team
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;

