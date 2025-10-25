import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Visit Us',
      details: ['123 Tech Park, Silicon Valley', 'San Francisco, CA 94025', 'United States'],
    },
    {
      icon: '📧',
      title: 'Email Us',
      details: ['info@datafyre.com', 'support@datafyre.com', 'careers@datafyre.com'],
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543', 'Mon-Fri: 9AM - 6PM PST'],
    },
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
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            Let's Start a Conversation
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you. Send us a message 
            and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card glass-card-hover rounded-2xl p-8 text-center hover-lift"
            >
              <div className="text-5xl mb-4">{info.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">{info.title}</h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-gray-400">
                  {detail}
                </p>
              ))}
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-8 glow-effect"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h4 className="text-xl font-bold text-green-800 mb-2">Thank You!</h4>
                <p className="text-green-700">
                  Your message has been sent successfully. We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass-card text-white rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all placeholder-gray-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass-card text-white rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all placeholder-gray-500"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-white mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass-card text-white rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all placeholder-gray-500"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-darker-gray border border-primary/30 text-white rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none placeholder-gray-500"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full gradient-primary text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl overflow-hidden glow-effect"
          >
            <div className="h-full min-h-[500px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.9897438022!2d-122.48334994757733!3d37.75765499697152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1635000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Data Fyre Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

