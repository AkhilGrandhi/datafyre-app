import React from 'react';
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

  return (
    <section className="py-20 md:py-28 relative" style={{ background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%)' }}>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 bg-primary/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-secondary/8 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          {/* Background Glow */}
          <div className="absolute inset-0 -z-10 flex items-center justify-center">
            <div className="w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          </div>
          
          <span className="text-accent font-semibold text-sm uppercase tracking-wider inline-block px-4 py-2 rounded-full border border-accent/30 bg-accent/5">
            Latest Insights
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-6 mb-4">
            From Our Blog
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Stay updated with the latest technology trends, insights, and best 
            practices from our team of experts.
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <article
              key={blog.id}
              className="glass-card rounded-2xl overflow-hidden cursor-pointer group backdrop-blur-xl bg-gray-900/40 border border-white/10 hover:border-primary/50 hover:bg-gray-800/50 transition-all duration-300"
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
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/blogs"
            className="gradient-primary text-white px-8 py-4 rounded-lg font-semibold inline-block hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blogs;

