import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      image: '📝',
      category: 'Technology',
      title: 'The Future of Cloud Computing in 2025',
      excerpt: 'Explore the latest trends and innovations shaping the cloud computing landscape. From edge computing to serverless architecture...',
      author: 'John Smith',
      date: 'Oct 20, 2025',
      readTime: '5 min read',
    },
    {
      id: 2,
      image: '🤖',
      category: 'AI & ML',
      title: 'How AI is Transforming Business Operations',
      excerpt: 'Discover how artificial intelligence and machine learning are revolutionizing the way businesses operate and make decisions...',
      author: 'Sarah Johnson',
      date: 'Oct 18, 2025',
      readTime: '7 min read',
    },
    {
      id: 3,
      image: '🔒',
      category: 'Cybersecurity',
      title: 'Best Practices for Data Security in 2025',
      excerpt: 'Learn essential security practices to protect your organization from evolving cyber threats and maintain compliance...',
      author: 'Michael Brown',
      date: 'Oct 15, 2025',
      readTime: '6 min read',
    },
    {
      id: 4,
      image: '🌐',
      category: 'Web Development',
      title: 'Modern Web Development: Trends & Tools',
      excerpt: 'A comprehensive guide to the latest frameworks, tools, and best practices in modern web development for building scalable applications...',
      author: 'Emily Davis',
      date: 'Oct 12, 2025',
      readTime: '8 min read',
    },
    {
      id: 5,
      image: '📊',
      category: 'Data Analytics',
      title: 'Data-Driven Decision Making for Businesses',
      excerpt: 'Understand how to leverage data analytics to make informed business decisions and gain competitive advantage...',
      author: 'David Wilson',
      date: 'Oct 10, 2025',
      readTime: '6 min read',
    },
    {
      id: 6,
      image: '🚀',
      category: 'DevOps',
      title: 'Implementing CI/CD Pipelines Effectively',
      excerpt: 'Master the art of continuous integration and deployment with best practices and real-world examples...',
      author: 'Lisa Anderson',
      date: 'Oct 8, 2025',
      readTime: '9 min read',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

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
            Latest Insights
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            From Our Blog
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stay updated with the latest technology trends, insights, and best 
            practices from our team of experts.
          </p>
        </motion.div>

        {/* Blogs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogs.map((blog) => (
            <motion.article
              key={blog.id}
              variants={itemVariants}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden hover-lift cursor-pointer group"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-6xl">
                {blog.image}
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold mb-3 border border-accent/30">
                  {blog.category}
                </span>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {blog.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed line-clamp-3">
                  {blog.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{blog.author}</span>
                  <span>{blog.readTime}</span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-primary/20">
                  <span className="text-sm text-gray-500">{blog.date}</span>
                  <Link
                    to="/blogs"
                    className="inline-flex items-center text-accent font-semibold group-hover:gap-3 gap-2 transition-all duration-300"
                  >
                    Read More
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            to="/blogs"
            className="gradient-primary text-white px-8 py-4 rounded-lg font-semibold inline-block hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            View All Articles
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs;

