import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import bgVideo from '../assets/bg_animation.mp4';
import { 
  Code, 
  Cloud, 
  Shield, 
  BarChart3, 
  Smartphone, 
  Database 
} from 'lucide-react';

const Hero = () => {
  // Animation variants for better control
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.6
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    },
    hover: {
      y: -12,
      scale: 1.08,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.2, 
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const glowVariants = {
    initial: { opacity: 0 },
    hover: { 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-20 sm:py-24 md:py-32 px-4">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover blur-lg"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Semi-transparent Black Overlay */}
      <div className="absolute inset-0 bg-black/85"></div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-6"
            >
              <span className="text-gray-500 text-sm font-semibold tracking-[0.3em] uppercase">
                Data Fyre Private Limited
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-[1.15] tracking-tight"
            >
              Empowering Businesses<br className="hidden sm:block" />
              <span className="sm:hidden"> </span>with Smart<br className="hidden sm:block" />
              <span className="sm:hidden"> </span><span className="text-white">IT Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-gray-400 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed font-light"
            >
              Delivering enterprise-grade technology solutions that transform operations, 
              accelerate innovation, and drive sustainable growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Link
                to="/contact"
                className="bg-white text-black px-6 sm:px-8 py-3 sm:py-3.5 rounded text-sm sm:text-base font-semibold hover:bg-gray-200 transition-all duration-300 text-center inline-flex items-center justify-center"
              >
                Schedule Consultation
              </Link>
              <Link
                to="/products"
                className="bg-transparent border-2 border-white/20 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded text-sm sm:text-base font-semibold hover:border-white/40 hover:bg-white/5 transition-all duration-300 text-center inline-flex items-center justify-center"
              >
                Explore Solutions
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Interactive Service Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden lg:flex items-center justify-end"
          >
            <div className="relative w-full max-w-md lg:ml-8">
              <motion.div 
                className="grid grid-cols-3 gap-2 md:gap-3"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {[
                  { 
                    icon: Code, 
                    label: 'Development', 
                    color: 'from-blue-500/20 to-cyan-500/20',
                    borderColor: 'border-blue-500/30',
                    glowColor: 'shadow-blue-500/30',
                    height: 'h-36',
                    iconColor: 'text-blue-400'
                  },
                  { 
                    icon: Cloud, 
                    label: 'Cloud Services', 
                    color: 'from-purple-500/20 to-pink-500/20',
                    borderColor: 'border-purple-500/30',
                    glowColor: 'shadow-purple-500/30',
                    height: 'h-44',
                    iconColor: 'text-purple-400'
                  },
                  { 
                    icon: Shield, 
                    label: 'Security', 
                    color: 'from-emerald-500/20 to-teal-500/20',
                    borderColor: 'border-emerald-500/30',
                    glowColor: 'shadow-emerald-500/30',
                    height: 'h-32',
                    iconColor: 'text-emerald-400'
                  },
                  { 
                    icon: BarChart3, 
                    label: 'Analytics', 
                    color: 'from-orange-500/20 to-amber-500/20',
                    borderColor: 'border-orange-500/30',
                    glowColor: 'shadow-orange-500/30',
                    height: 'h-40',
                    iconColor: 'text-orange-400'
                  },
                  { 
                    icon: Database, 
                    label: 'Data Solutions', 
                    color: 'from-violet-500/20 to-indigo-500/20',
                    borderColor: 'border-violet-500/30',
                    glowColor: 'shadow-violet-500/30',
                    height: 'h-48',
                    iconColor: 'text-violet-400'
                  },
                  { 
                    icon: Smartphone, 
                    label: 'Mobile Apps', 
                    color: 'from-rose-500/20 to-red-500/20',
                    borderColor: 'border-rose-500/30',
                    glowColor: 'shadow-rose-500/30',
                    height: 'h-36',
                    iconColor: 'text-rose-400'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover="hover"
                    className={`${item.height} bg-gradient-to-br ${item.color} border ${item.borderColor} rounded-xl backdrop-blur-sm 
                      cursor-pointer flex flex-col items-center justify-center p-4 gap-2 relative overflow-hidden
                      shadow-lg ${item.glowColor}`}
                  >
                    {/* Animated Background Gradient */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0"
                      variants={glowVariants}
                      initial="initial"
                    />
                    
                    {/* Icon */}
                    <motion.div 
                      className="relative z-10"
                      variants={iconVariants}
                      initial="initial"
                    >
                      <item.icon 
                        className={`w-9 h-9 ${item.iconColor}`}
                        strokeWidth={1.5} 
                      />
                    </motion.div>
                    
                    {/* Label */}
                    <motion.div 
                      className="relative z-10 text-center"
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-[10px] text-white/80 font-medium leading-tight">
                        {item.label}
                      </span>
                    </motion.div>

                    {/* Hover Glow Effect */}
                    <motion.div 
                      className="absolute inset-0"
                      variants={glowVariants}
                      initial="initial"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent"></div>
                    </motion.div>

                    {/* Floating Animation */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      animate={{
                        y: [0, -4, 0],
                      }}
                      transition={{
                        duration: 3 + index * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Decorative Elements with Pulse Animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: [0.3, 0.6, 0.3], 
                  scale: [1, 1.2, 1] 
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: [0.2, 0.5, 0.2], 
                  scale: [1, 1.3, 1] 
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute -bottom-4 -left-4 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl pointer-events-none"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 hidden sm:flex"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-gray-600 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

