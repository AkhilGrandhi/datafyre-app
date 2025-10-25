import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    Resources: [
      { name: 'Blogs', path: '/blogs' },
      { name: 'Documentation', path: '#' },
      { name: 'Case Studies', path: '#' },
      { name: 'FAQ', path: '#' },
    ],
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: '🔗', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'Facebook', icon: '📘', url: '#' },
    { name: 'Instagram', icon: '📷', url: '#' },
  ];

  return (
    <footer className="gradient-dark text-white">
      <div className="container-custom px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">DF</span>
              </div>
              <span className="font-bold text-xl">Data Fyre</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Empowering businesses with smart IT solutions. We deliver innovative 
              software, cloud services, and digital transformation strategies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300"
                  aria-label={social.name}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-lg mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © {currentYear} Data Fyre Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="#" className="text-gray-300 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-gray-300 hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="#" className="text-gray-300 hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

