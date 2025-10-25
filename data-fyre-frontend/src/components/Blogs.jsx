import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Blogs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const carouselRef = useRef(null);

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

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isAutoPlay]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % blogs.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + blogs.length) % blogs.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Get visible cards (current, two left, and two right)
  const getVisibleCards = () => {
    const leftTwo = (currentIndex - 2 + blogs.length) % blogs.length;
    const leftOne = (currentIndex - 1 + blogs.length) % blogs.length;
    const rightOne = (currentIndex + 1) % blogs.length;
    const rightTwo = (currentIndex + 2) % blogs.length;
    return [leftTwo, leftOne, currentIndex, rightOne, rightTwo];
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
      rotateY: direction > 0 ? 25 : -25,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
      rotateY: direction < 0 ? 25 : -25,
    }),
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%)' }}>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 bg-primary/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-secondary/8 rounded-full blur-3xl"></div>
        
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          {/* Background Glow */}
          <div className="absolute inset-0 -z-10 flex items-center justify-center">
            <div className="w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          </div>
          
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-semibold text-sm uppercase tracking-wider inline-block px-4 py-2 rounded-full border border-accent/30 bg-accent/5"
          >
            Latest Insights
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-6 mb-4"
          >
            From Our Blog
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Stay updated with the latest technology trends, insights, and best 
            practices from our team of experts.
          </motion.p>
        </div>

        {/* Featured Carousel - Stacked Cards */}
        <div className="mb-12">
          <div 
            className="relative h-[550px] flex items-center justify-center overflow-visible"
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
          >
            {/* Render visible cards */}
            {getVisibleCards().map((blogIndex, position) => {
              const isCenter = position === 2;
              const isLeftOne = position === 1;
              const isLeftTwo = position === 0;
              const isRightOne = position === 3;
              const isRightTwo = position === 4;
              
              // Calculate position offsets and fixed heights
              let xOffset = 0;
              let scale = 1;
              let opacity = 1;
              let zIndex = 30;
              let rotateY = 0;
              let cardHeight = '500px'; // Default center height
              
              if (isCenter) {
                xOffset = 0;
                scale = 1;
                opacity = 1;
                zIndex = 30;
                rotateY = 0;
                cardHeight = '500px'; // Center card: 100%
              } else if (isLeftOne || isRightOne) {
                xOffset = isLeftOne ? -100: 100;
                scale = 1;
                opacity = 0.6;
                zIndex = 20;
                rotateY = isLeftOne ? 12 : -12;
                cardHeight = '400px'; // Adjacent cards: 80% of center
              } else if (isLeftTwo || isRightTwo) {
                xOffset = isLeftTwo ? -190 : 190;
                scale = 1;
                opacity = 0.3;
                zIndex = 10;
                rotateY = isLeftTwo ? 20 : -20;
                cardHeight = '320px'; // Outer cards: 80% of adjacent
              }
              
              return (
                <motion.div
                  key={`${blogIndex}-${currentIndex}`}
                  initial={false}
                  animate={{
                    x: xOffset,
                    scale: scale,
                    opacity: opacity,
                    zIndex: zIndex,
                    rotateY: rotateY,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 26,
                  }}
                  className="absolute w-full max-w-4xl px-4"
                  style={{ pointerEvents: isCenter ? 'auto' : 'none' }}
                >
                <motion.article
                  whileHover={{ scale: 1.02, y: -10 }}
                  className="glass-card rounded-3xl overflow-hidden cursor-pointer group backdrop-blur-xl bg-gray-900/95 border border-white/20 hover:border-primary/50 transition-all duration-300 shadow-2xl hover:shadow-primary/30"
                  style={{ height: cardHeight }}
                >
                  <div className="grid md:grid-cols-2 gap-0 h-full">
                    {/* Image Section */}
                    <div className="relative h-80 md:h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-8xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm"></div>
                      <motion.span 
                        className="relative z-10"
                        animate={{ 
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1.1, 1],
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse" 
                        }}
                      >
                        {blogs[blogIndex].image}
                      </motion.span>
                      
                      {/* Floating Particles */}
                      <div className="absolute inset-0">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-white/30 rounded-full"
                            animate={{
                              x: [0, Math.random() * 100 - 50],
                              y: [0, Math.random() * 100 - 50],
                              opacity: [0, 1, 0],
                            }}
                            transition={{
                              duration: 3 + Math.random() * 2,
                              repeat: Infinity,
                              delay: i * 0.5,
                            }}
                            style={{
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 md:p-10 flex flex-col justify-center">
                      <motion.span 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-accent/30 w-fit"
                      >
                        {blogs[blogIndex].category}
                      </motion.span>

                      <motion.h3 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-accent transition-colors"
                      >
                        {blogs[blogIndex].title}
                      </motion.h3>

                      <motion.p 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-400 mb-6 leading-relaxed text-lg"
                      >
                        {blogs[blogIndex].excerpt}
                      </motion.p>

                      {/* Meta Info */}
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center justify-between text-sm text-gray-500 mb-6 pb-6 border-b border-primary/20"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                            {blogs[blogIndex].author.charAt(0)}
                          </div>
                          <div>
                            <p className="text-white font-medium">{blogs[blogIndex].author}</p>
                            <p className="text-xs text-gray-500">{blogs[blogIndex].date}</p>
                          </div>
                        </div>
                        <span className="text-accent font-medium">{blogs[blogIndex].readTime}</span>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <Link
                          to="/blogs"
                          className="inline-flex items-center gap-2 gradient-primary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 group/btn"
                        >
                          Read Full Article
                          <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            →
                          </motion.span>
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </motion.article>
              </motion.div>
              );
            })}

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute -left-20 z-50 bg-gray-900/80 hover:bg-gray-800 text-white p-2.5 rounded-full border border-white/10 hover:border-primary/50 transition-all duration-300 backdrop-blur-xl hover:scale-110"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute -right-20 z-50 bg-gray-900/80 hover:bg-gray-800 text-white p-2.5 rounded-full border border-white/10 hover:border-primary/50 transition-all duration-300 backdrop-blur-xl hover:scale-110"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {blogs.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-12 h-3 bg-gradient-to-r from-primary to-secondary'
                    : 'w-3 h-3 bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Customer Reviews - Infinite Scroll */}
        <div className="mt-20 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider inline-block px-4 py-2 rounded-full border border-accent/30 bg-accent/5">
              Testimonials
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-3">
              What Our Clients Say
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Trusted by industry leaders worldwide
            </p>
          </motion.div>

          {/* Scrolling Reviews Container */}
          <div className="relative">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>

            {/* Infinite Scroll Animation */}
            <motion.div
              className="flex gap-6"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {/* First Set of Reviews */}
              {[
                {
                  id: 1,
                  name: 'Sarah Mitchell',
                  position: 'CTO, TechVision Inc.',
                  avatar: 'SM',
                  review: 'DataFyre transformed our cloud infrastructure completely. Their solutions are innovative, reliable, and exactly what we needed to scale our operations.',
                  rating: 5,
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  id: 2,
                  name: 'James Rodriguez',
                  position: 'CEO, NextGen Solutions',
                  avatar: 'JR',
                  review: 'Outstanding service and exceptional results. The team at DataFyre truly understands enterprise needs and delivers beyond expectations.',
                  rating: 5,
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  id: 3,
                  name: 'Emily Chen',
                  position: 'Director of IT, GlobalCorp',
                  avatar: 'EC',
                  review: 'Working with DataFyre has been a game-changer. Their AI-powered solutions have increased our efficiency by 300%. Highly recommended!',
                  rating: 5,
                  color: 'from-orange-500 to-red-500'
                },
                {
                  id: 4,
                  name: 'Michael Thompson',
                  position: 'VP Engineering, StartupHub',
                  avatar: 'MT',
                  review: 'The level of support and innovation from DataFyre is unmatched. They helped us modernize our entire tech stack seamlessly.',
                  rating: 5,
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  id: 5,
                  name: 'Lisa Wang',
                  position: 'Product Manager, InnovateTech',
                  avatar: 'LW',
                  review: 'DataFyre\'s products are cutting-edge and user-friendly. They\'ve revolutionized how we manage and analyze our data.',
                  rating: 5,
                  color: 'from-indigo-500 to-blue-500'
                },
                {
                  id: 6,
                  name: 'David Martinez',
                  position: 'COO, CloudFirst Solutions',
                  avatar: 'DM',
                  review: 'Exceptional quality and reliability. DataFyre has become an integral part of our business operations. Couldn\'t be happier!',
                  rating: 5,
                  color: 'from-pink-500 to-rose-500'
                },
              ].concat([
                {
                  id: 7,
                  name: 'Sarah Mitchell',
                  position: 'CTO, TechVision Inc.',
                  avatar: 'SM',
                  review: 'DataFyre transformed our cloud infrastructure completely. Their solutions are innovative, reliable, and exactly what we needed to scale our operations.',
                  rating: 5,
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  id: 8,
                  name: 'James Rodriguez',
                  position: 'CEO, NextGen Solutions',
                  avatar: 'JR',
                  review: 'Outstanding service and exceptional results. The team at DataFyre truly understands enterprise needs and delivers beyond expectations.',
                  rating: 5,
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  id: 9,
                  name: 'Emily Chen',
                  position: 'Director of IT, GlobalCorp',
                  avatar: 'EC',
                  review: 'Working with DataFyre has been a game-changer. Their AI-powered solutions have increased our efficiency by 300%. Highly recommended!',
                  rating: 5,
                  color: 'from-orange-500 to-red-500'
                },
                {
                  id: 10,
                  name: 'Michael Thompson',
                  position: 'VP Engineering, StartupHub',
                  avatar: 'MT',
                  review: 'The level of support and innovation from DataFyre is unmatched. They helped us modernize our entire tech stack seamlessly.',
                  rating: 5,
                  color: 'from-green-500 to-emerald-500'
                },
              ]).map((review) => (
                <div
                  key={review.id}
                  className="flex-shrink-0 w-96 glass-card rounded-2xl p-6 backdrop-blur-xl bg-gray-900/60 border border-white/10 hover:border-primary/30 transition-all duration-300"
                >
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-300 text-base leading-relaxed mb-6">
                    "{review.review}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center text-white font-bold shadow-lg`}>
                      {review.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">{review.name}</h4>
                      <p className="text-gray-400 text-xs">{review.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            to="/blogs"
            className="gradient-primary text-white px-10 py-4 rounded-xl font-semibold inline-block hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Read Our Blog
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs;

