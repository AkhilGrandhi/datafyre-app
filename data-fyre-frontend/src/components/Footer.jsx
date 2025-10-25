import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram, 
  Mail,
  ArrowRight,
  Send
} from 'lucide-react';
import whiteLogo from '../assets/white_trans_logo.PNG';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
      alert('Thank you for subscribing!');
    }, 1000);
  };

  const footerLinks = {
    Company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Team', path: '/about' },
      { name: 'Careers', path: '#' },
      { name: 'Contact', path: '/contact' },
    ],
    Services: [
      { name: 'Software Development', path: '/services' },
      { name: 'Cloud Solutions', path: '/services' },
      { name: 'Web Development', path: '/services' },
      { name: 'AI & Automation', path: '/services' },
    ],
    Products: [
      { name: 'All Products', path: '/products' },
      { name: 'Enterprise Solutions', path: '/products' },
      { name: 'Custom Development', path: '/products' },
      { name: 'Support', path: '/contact' },
    ],
    Resources: [
      { name: 'Blogs', path: '/blogs' },
      { name: 'Documentation', path: '#' },
      { name: 'Case Studies', path: '#' },
      { name: 'FAQ', path: '#' },
    ],
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: '#', color: 'hover:text-blue-400' },
    { name: 'Twitter', icon: Twitter, url: '#', color: 'hover:text-sky-400' },
    { name: 'Facebook', icon: Facebook, url: '#', color: 'hover:text-blue-500' },
    { name: 'Instagram', icon: Instagram, url: '#', color: 'hover:text-pink-400' },
  ];


  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#e54ed0]/20 to-[#9f45b0]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-[#9f45b0]/20 to-[#44008b]/20 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl py-12 md:py-16">
          {/* Top Section with Logo and Newsletter */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <Link to="/" className="flex items-center space-x-2 mb-4 group">
                <img 
                  src={whiteLogo} 
                  alt="Data Fyre Logo" 
                  className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <span className="font-bold text-xl">Data Fyre</span>
              </Link>
              <p className="text-gray-400 mb-4 leading-relaxed text-sm max-w-xs">
                Empowering businesses with cutting-edge IT solutions and digital transformation.
              </p>

              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-gradient-primary hover:border-transparent transition-all duration-300`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer Links - Grid of 4 sections in 6 columns */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-6 grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {Object.entries(footerLinks).map(([title, links]) => (
                <div key={title}>
                  <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
                    {title}
                  </h3>
                  <ul className="space-y-2">
                    {links.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.path}
                          className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group text-sm"
                        >
                          <ArrowRight className="w-0 h-3 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300 mr-0 group-hover:mr-2" />
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>

            {/* Newsletter Section - Compact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
                Stay Updated
              </h3>
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#e54ed0] transition-all duration-300 text-sm"
                  />
                  <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-primary px-4 py-2 rounded-lg font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2 text-sm disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'Subscribing...' : 'Subscribe'}</span>
                  <Send className="w-3 h-3" />
                </button>
              </form>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-white/10 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} <span className="text-white font-semibold">Data Fyre Pvt. Ltd.</span> All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <Link to="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </Link>
                <span className="text-gray-600">•</span>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Terms of Service
                </Link>
                <span className="text-gray-600">•</span>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#e54ed0] to-transparent"></div>
    </footer>
  );
};

export default Footer;

