import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BlogsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Technology', 'AI & ML', 'Cybersecurity', 'Web Development', 'Data Analytics', 'DevOps'];

  const blogs = [
    {
      id: 1,
      image: '📝',
      category: 'Technology',
      title: 'The Future of Cloud Computing in 2025',
      excerpt: 'Explore the latest trends and innovations shaping the cloud computing landscape. From edge computing to serverless architecture, discover what\'s next in cloud technology.',
      author: 'John Smith',
      date: 'Oct 20, 2025',
      readTime: '5 min read',
    },
    {
      id: 2,
      image: '🤖',
      category: 'AI & ML',
      title: 'How AI is Transforming Business Operations',
      excerpt: 'Discover how artificial intelligence and machine learning are revolutionizing the way businesses operate and make decisions across various industries.',
      author: 'Sarah Johnson',
      date: 'Oct 18, 2025',
      readTime: '7 min read',
    },
    {
      id: 3,
      image: '🔒',
      category: 'Cybersecurity',
      title: 'Best Practices for Data Security in 2025',
      excerpt: 'Learn essential security practices to protect your organization from evolving cyber threats and maintain compliance with data protection regulations.',
      author: 'Michael Brown',
      date: 'Oct 15, 2025',
      readTime: '6 min read',
    },
    {
      id: 4,
      image: '🌐',
      category: 'Web Development',
      title: 'Modern Web Development: Trends & Tools',
      excerpt: 'A comprehensive guide to the latest frameworks, tools, and best practices in modern web development for building scalable applications.',
      author: 'Emily Davis',
      date: 'Oct 12, 2025',
      readTime: '8 min read',
    },
    {
      id: 5,
      image: '📊',
      category: 'Data Analytics',
      title: 'Data-Driven Decision Making for Businesses',
      excerpt: 'Understand how to leverage data analytics to make informed business decisions and gain competitive advantage in your industry.',
      author: 'David Wilson',
      date: 'Oct 10, 2025',
      readTime: '6 min read',
    },
    {
      id: 6,
      image: '🚀',
      category: 'DevOps',
      title: 'Implementing CI/CD Pipelines Effectively',
      excerpt: 'Master the art of continuous integration and deployment with best practices and real-world examples from successful implementations.',
      author: 'Lisa Anderson',
      date: 'Oct 8, 2025',
      readTime: '9 min read',
    },
    {
      id: 7,
      image: '💡',
      category: 'Technology',
      title: 'The Rise of Edge Computing',
      excerpt: 'Edge computing is revolutionizing how we process data. Learn about its benefits, use cases, and implementation strategies.',
      author: 'Robert Taylor',
      date: 'Oct 5, 2025',
      readTime: '5 min read',
    },
    {
      id: 8,
      image: '🎯',
      category: 'AI & ML',
      title: 'Machine Learning in Healthcare',
      excerpt: 'Exploring how machine learning is transforming patient care, diagnostics, and medical research in the healthcare industry.',
      author: 'Jennifer Lee',
      date: 'Oct 3, 2025',
      readTime: '7 min read',
    },
    {
      id: 9,
      image: '🔐',
      category: 'Cybersecurity',
      title: 'Zero Trust Architecture Explained',
      excerpt: 'A deep dive into zero trust security architecture and why it\'s becoming essential for modern enterprise security.',
      author: 'James Martinez',
      date: 'Oct 1, 2025',
      readTime: '6 min read',
    },
  ];

  const filteredBlogs = selectedCategory === 'All' 
    ? blogs 
    : blogs.filter(blog => blog.category === selectedCategory);

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
              Our Blog
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Insights, trends, and best practices from the world of technology 
              and digital innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'gradient-primary text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Blogs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog, index) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-2xl overflow-hidden hover-lift cursor-pointer border border-gray-100 group"
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-6xl">
                  {blog.image}
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    {blog.category}
                  </span>

                  <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {blog.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{blog.author}</span>
                    <span>{blog.readTime}</span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500">{blog.date}</span>
                    <button className="inline-flex items-center text-primary font-semibold group-hover:gap-3 gap-2 transition-all duration-300">
                      Read More
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white text-center"
          >
            <h3 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-xl mb-8 opacity-90">
              Get the latest articles and insights delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg text-dark focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;

