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
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-32 px-4">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.15] tracking-tight"
            >
              Empowering Businesses<br />
              with Smart<br />
              <span className="text-white">IT Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-gray-400 text-lg md:text-xl mb-8 leading-relaxed font-light"
            >
              Delivering enterprise-grade technology solutions that transform operations, 
              accelerate innovation, and drive sustainable growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contact"
                className="bg-white text-black px-8 py-3.5 rounded font-semibold hover:bg-gray-200 transition-all duration-300 text-center inline-flex items-center justify-center"
              >
                Schedule Consultation
              </Link>
              <Link
                to="/products"
                className="bg-transparent border-2 border-white/20 text-white px-8 py-3.5 rounded font-semibold hover:border-white/40 hover:bg-white/5 transition-all duration-300 text-center inline-flex items-center justify-center"
              >
                Explore Solutions
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Interactive Service Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex items-center justify-end"
          >
            <div className="relative w-full max-w-md ml-8">
              <div className="grid grid-cols-3 gap-3">
                {[
                  { 
                    icon: Code, 
                    label: 'Development', 
                    color: 'from-blue-500/20 to-cyan-500/20',
                    borderColor: 'border-blue-500/30',
                    glowColor: 'shadow-blue-500/20',
                    height: 'h-36'
                  },
                  { 
                    icon: Cloud, 
                    label: 'Cloud Services', 
                    color: 'from-purple-500/20 to-pink-500/20',
                    borderColor: 'border-purple-500/30',
                    glowColor: 'shadow-purple-500/20',
                    height: 'h-44'
                  },
                  { 
                    icon: Shield, 
                    label: 'Security', 
                    color: 'from-emerald-500/20 to-teal-500/20',
                    borderColor: 'border-emerald-500/30',
                    glowColor: 'shadow-emerald-500/20',
                    height: 'h-32'
                  },
                  { 
                    icon: BarChart3, 
                    label: 'Analytics', 
                    color: 'from-orange-500/20 to-amber-500/20',
                    borderColor: 'border-orange-500/30',
                    glowColor: 'shadow-orange-500/20',
                    height: 'h-40'
                  },
                  { 
                    icon: Database, 
                    label: 'Data Solutions', 
                    color: 'from-violet-500/20 to-indigo-500/20',
                    borderColor: 'border-violet-500/30',
                    glowColor: 'shadow-violet-500/20',
                    height: 'h-48'
                  },
                  { 
                    icon: Smartphone, 
                    label: 'Mobile Apps', 
                    color: 'from-rose-500/20 to-red-500/20',
                    borderColor: 'border-rose-500/30',
                    glowColor: 'shadow-rose-500/20',
                    height: 'h-36'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                    whileHover={{ 
                      y: -8, 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    className={`${item.height} bg-gradient-to-br ${item.color} border ${item.borderColor} rounded-xl backdrop-blur-sm 
                      hover:shadow-lg ${item.glowColor} transition-all duration-300 cursor-pointer
                      flex flex-col items-center justify-center p-4 gap-2 group relative overflow-hidden`}
                  >
                    {/* Animated Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Icon */}
                    <div className="relative z-10">
                      <item.icon className="w-8 h-8 text-white/70 group-hover:text-white group-hover:scale-110 
                        transition-all duration-300" strokeWidth={1.5} />
                    </div>
                    
                    {/* Label */}
                    <div className="relative z-10 text-center">
                      <span className="text-[10px] text-white/60 group-hover:text-white/90 font-medium 
                        transition-colors duration-300 leading-tight">
                        {item.label}
                      </span>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Decorative Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"
              ></motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.7, duration: 1 }}
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
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

