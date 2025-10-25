import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      icon: '💻',
      title: 'Software Development',
      description: 'Custom software solutions tailored to your unique business requirements.',
      details: 'Our expert developers build scalable, robust, and secure software applications using the latest technologies and best practices. From concept to deployment, we handle every aspect of the development lifecycle.',
      offerings: [
        'Custom Application Development',
        'Enterprise Software Solutions',
        'API Development & Integration',
        'Legacy System Modernization',
        'Software Maintenance & Support',
      ],
    },
    {
      id: 2,
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Comprehensive cloud services to modernize your infrastructure.',
      details: 'Transform your IT infrastructure with our cloud solutions. We help you migrate, manage, and optimize your cloud environment across AWS, Azure, and Google Cloud platforms.',
      offerings: [
        'Cloud Migration & Strategy',
        'Infrastructure as Code (IaC)',
        'Cloud Security & Compliance',
        'Cost Optimization',
        'Multi-Cloud Management',
      ],
    },
    {
      id: 3,
      icon: '🌐',
      title: 'Web Development',
      description: 'Beautiful, responsive websites that deliver exceptional user experiences.',
      details: 'Create stunning web experiences that engage users and drive conversions. Our web development team specializes in modern frameworks and responsive design.',
      offerings: [
        'Responsive Web Design',
        'Progressive Web Apps (PWA)',
        'E-commerce Development',
        'CMS Implementation',
        'Web Performance Optimization',
      ],
    },
    {
      id: 4,
      icon: '🤖',
      title: 'AI & Automation',
      description: 'Intelligent solutions powered by artificial intelligence.',
      details: 'Leverage the power of AI and machine learning to automate processes, gain insights, and make data-driven decisions that transform your business.',
      offerings: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Robotic Process Automation',
        'Predictive Analytics',
      ],
    },
    {
      id: 5,
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications.',
      details: 'Build engaging mobile experiences for iOS and Android. Our mobile development team creates high-performance apps that users love.',
      offerings: [
        'iOS Development (Swift)',
        'Android Development (Kotlin)',
        'React Native Development',
        'Flutter Development',
        'App Store Optimization',
      ],
    },
    {
      id: 6,
      icon: '🔒',
      title: 'Cybersecurity',
      description: 'Protect your digital assets from evolving threats.',
      details: 'Comprehensive security solutions to safeguard your organization from cyber threats. We provide end-to-end security services and compliance support.',
      offerings: [
        'Security Audits & Assessments',
        'Penetration Testing',
        'Security Architecture Design',
        'Incident Response',
        'Compliance Management',
      ],
    },
    {
      id: 7,
      icon: '📊',
      title: 'Data Analytics',
      description: 'Turn data into actionable business intelligence.',
      details: 'Unlock the value of your data with our analytics services. We help you collect, process, and analyze data to make informed business decisions.',
      offerings: [
        'Data Warehousing',
        'Business Intelligence Dashboards',
        'Data Mining & Analysis',
        'Real-time Analytics',
        'Data Governance',
      ],
    },
    {
      id: 8,
      icon: '⚙️',
      title: 'DevOps & CI/CD',
      description: 'Streamline development with modern DevOps practices.',
      details: 'Accelerate software delivery with our DevOps expertise. We implement CI/CD pipelines, automate deployments, and optimize your development workflow.',
      offerings: [
        'CI/CD Pipeline Setup',
        'Infrastructure Automation',
        'Container Orchestration',
        'Monitoring & Logging',
        'GitOps Implementation',
      ],
    },
  ];

  const processSteps = [
    { step: '01', title: 'Discovery', description: 'Understanding your needs and goals' },
    { step: '02', title: 'Planning', description: 'Strategic roadmap and timeline' },
    { step: '03', title: 'Development', description: 'Building your solution' },
    { step: '04', title: 'Testing', description: 'Quality assurance and optimization' },
    { step: '05', title: 'Deployment', description: 'Launch and go-live support' },
    { step: '06', title: 'Support', description: 'Ongoing maintenance and updates' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-dark text-white pt-32 pb-20">
        <div className="container-custom px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Comprehensive IT services to help you innovate, transform, and 
              achieve your business objectives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-2xl p-8 hover-lift"
              >
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-dark mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-gray-700 mb-6 leading-relaxed">{service.details}</p>
                <div className="mb-6">
                  <h4 className="font-semibold text-dark mb-3">What We Offer:</h4>
                  <ul className="space-y-2">
                    {service.offerings.map((offering, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <span className="text-primary mr-2 mt-1">→</span>
                        <span>{offering}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-primary font-semibold hover:gap-3 gap-2 transition-all duration-300"
                >
                  Get Started
                  <span>→</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Our Process
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery every time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold text-dark mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-dark text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our services can help transform your business.
            </p>
            <Link
              to="/contact"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold inline-block hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Schedule a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

