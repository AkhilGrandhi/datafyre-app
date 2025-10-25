import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: '💻',
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs. From web applications to enterprise systems, we build scalable and robust software.',
      benefits: ['Custom Solutions', 'Agile Methodology', 'Quality Assurance'],
    },
    {
      id: 2,
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Migrate, manage, and optimize your cloud infrastructure. We help you leverage the power of AWS, Azure, and Google Cloud.',
      benefits: ['Cloud Migration', 'Cost Optimization', '24/7 Support'],
    },
    {
      id: 3,
      icon: '🌐',
      title: 'Web Development',
      description: 'Beautiful, responsive websites and web applications that deliver exceptional user experiences and drive business growth.',
      benefits: ['Responsive Design', 'SEO Optimized', 'Fast Performance'],
    },
    {
      id: 4,
      icon: '🤖',
      title: 'AI & Automation',
      description: 'Harness the power of artificial intelligence and automation to streamline operations and unlock new possibilities.',
      benefits: ['Machine Learning', 'Process Automation', 'Predictive Analytics'],
    },
    {
      id: 5,
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android that engage users and deliver value.',
      benefits: ['Native & Hybrid', 'UI/UX Design', 'App Maintenance'],
    },
    {
      id: 6,
      icon: '🔒',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets from evolving cyber threats and vulnerabilities.',
      benefits: ['Security Audits', 'Threat Prevention', 'Compliance'],
    },
  ];

  const getCardVariants = (index) => ({
    hidden: { 
      opacity: 0, 
      y: 80,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 18,
        mass: 1,
        delay: (index % 3) * 0.15, // Stagger based on column position
      },
    },
  });

  return (
    <section className="py-20 md:py-28 relative bg-gradient-to-b from-black via-gray-900/50 to-black">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
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
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            Comprehensive IT Services
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            End-to-end technology services to help you innovate, transform, 
            and achieve your business objectives.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: "1000px" }}>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={getCardVariants(index)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
              className="group glass-card rounded-2xl p-8 cursor-pointer backdrop-blur-xl bg-gray-900/40 hover:bg-gray-800/50 border border-white/10 hover:border-primary/50 transition-all duration-300"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Icon */}
              <div className="text-5xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

              {/* Benefits */}
              <ul className="space-y-2 mb-6">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300 text-sm">
                    <span className="text-accent mr-2">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                to="/services"
                className="inline-flex items-center text-accent font-semibold group-hover:gap-3 gap-2 transition-all duration-300"
              >
                Learn More
                <span className="text-xl">→</span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-lg mb-6">
            Ready to transform your business with our services?
          </p>
          <Link
            to="/contact"
            className="gradient-primary text-white px-8 py-4 rounded-lg font-semibold inline-block hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Get a Free Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

