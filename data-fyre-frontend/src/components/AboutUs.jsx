import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const values = [
    {
      icon: '🎯',
      title: 'Innovation',
      description: 'We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.',
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and building strong partnerships with our clients.',
    },
    {
      icon: '⚡',
      title: 'Excellence',
      description: 'We are committed to delivering the highest quality in everything we do.',
    },
    {
      icon: '🌟',
      title: 'Integrity',
      description: 'We operate with transparency, honesty, and ethical practices in all our interactions.',
    },
  ];

  const team = [
    {
      name: 'John Anderson',
      role: 'CEO & Founder',
      image: '👨‍💼',
    },
    {
      name: 'Sarah Mitchell',
      role: 'CTO',
      image: '👩‍💻',
    },
    {
      name: 'Michael Chen',
      role: 'Head of Product',
      image: '👨‍🔬',
    },
    {
      name: 'Emily Roberts',
      role: 'Head of Design',
      image: '👩‍🎨',
    },
  ];

  const stats = [
    { number: '15+', label: 'Years in Business' },
    { number: '500+', label: 'Projects Completed' },
    { number: '200+', label: 'Happy Clients' },
    { number: '50+', label: 'Team Members' },
  ];

  return (
    <section className="py-20 md:py-28 relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            Building the Future of Technology
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Data Fyre Pvt. Ltd. is a leading IT solutions provider dedicated to 
            empowering businesses through innovative technology. With over 15 years 
            of experience, we've helped hundreds of organizations achieve their 
            digital transformation goals.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-8"
          >
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed">
              To empower businesses worldwide with innovative IT solutions that 
              drive growth, efficiency, and competitive advantage. We strive to 
              be the trusted technology partner for organizations seeking digital 
              transformation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-8"
          >
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-400 leading-relaxed">
              To be the global leader in delivering cutting-edge IT solutions 
              that shape the future of business and technology. We envision a 
              world where every organization can harness the full potential of 
              technology to achieve extraordinary results.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl glass-card glass-card-hover"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-4">Meet Our Leadership</h3>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Our experienced leadership team brings together decades of expertise 
            in technology, business, and innovation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                  {member.image}
                </div>
                <h4 className="text-lg font-bold text-white mb-1">{member.name}</h4>
                <p className="text-gray-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;

