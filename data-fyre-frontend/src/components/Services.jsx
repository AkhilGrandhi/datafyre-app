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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="section-padding bg-darker-gray">
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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group bg-dark-gray rounded-2xl p-8 hover-lift cursor-pointer border border-primary/20 hover:border-primary/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

              {/* Benefits */}
              <ul className="space-y-2 mb-6">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300 text-sm">
                    <span className="text-primary mr-2">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                to="/services"
                className="inline-flex items-center text-primary font-semibold group-hover:gap-3 gap-2 transition-all duration-300"
              >
                Learn More
                <span className="text-xl">→</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

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

