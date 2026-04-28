import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SimpleIntroSection = ({ onComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Generate particles data once
  const particles = useMemo(() => {
    return [...Array(50)].map((_, i) => ({
      randomX: Math.random() * 100,
      randomY: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: i * 0.1,
    }));
  }, []);

  // Simulate loading sequence (unchanged logic)
  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setShowContent(true);
            setTimeout(() => {
              setIsVisible(false);
              setTimeout(() => {
                onComplete?.();
              }, 500);
            }, 3000);
          }, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [onComplete]);

  const handleSkipIntro = () => {
    setIsVisible(false);
    setTimeout(() => {
      onComplete?.();
    }, 300);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 w-full h-screen bg-[#0a0e17] z-[9999] overflow-hidden flex flex-col justify-center items-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated Background */}
          <div className="absolute inset-0 z-[1]">
            {/* Gradient 1 */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e17] via-[#1a1f3a] to-[#0a0e17]" />
            
            {/* Gradient 2 with pulse animation */}
            <div 
              className="absolute inset-0 animate-pulse-slow"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 30% 30%, rgba(58, 134, 255, 0.15) 0%, transparent 50%),
                  radial-gradient(circle at 70% 70%, rgba(100, 255, 218, 0.1) 0%, transparent 50%)
                `
              }}
            />
            
            {/* Particles Container */}
            <div className="absolute inset-0 overflow-hidden">
              {particles.map((particle, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-[#64ffda] animate-float"
                  style={{
                    left: `${particle.randomX}vw`,
                    top: `${particle.randomY}vh`,
                    width: `${particle.size}px`,
                    height: `${particle.size}px`,
                    animationDelay: `${particle.delay}s`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Logo Animation (top 20%) */}
          <motion.div
            className="absolute top-[20%] z-[2]"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 1, delay: 0.3 }}
          >
            <div className="text-5xl md:text-7xl font-black flex gap-4 flex-wrap justify-center">
              <span className="bg-gradient-to-r from-[#3a86ff] to-[#4cc9f0] bg-clip-text text-transparent">
                Estate
              </span>
              <span className="text-[#64ffda]">Pro</span>
            </div>
          </motion.div>

          {/* Loading Container (bottom 25%) */}
          <motion.div
            className="absolute bottom-[25%] left-1/2 -translate-x-1/2 w-[300px] md:w-[300px] z-[3]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden mb-4">
              <motion.div
                className="h-full bg-gradient-to-r from-[#3a86ff] to-[#64ffda] rounded-full relative"
                initial={{ width: 0 }}
                animate={{ width: `${loadingProgress}%` }}
                transition={{ duration: 2 }}
              >
                <div className="absolute top-0 right-0 w-5 h-full bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shimmer" />
              </motion.div>
            </div>
            <div className="flex justify-between items-center text-white text-sm font-medium">
              <span className="text-[#64ffda] text-lg font-bold">{loadingProgress}%</span>
              <span className="text-[#a8b2d1] tracking-wide">Loading Experience</span>
            </div>
          </motion.div>

          {/* Skip Button */}
          <motion.button
            className="absolute bottom-[5%] right-[5%] bg-white/10 border border-white/20 text-[#a8b2d1] px-4 py-2 md:px-5 md:py-3 rounded-full text-sm md:text-base cursor-pointer z-[4] backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:text-white hover:scale-105"
            onClick={handleSkipIntro}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 1 }}
            whileHover={{ opacity: 1, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Skip Intro
          </motion.button>

          {/* Content Reveal Animation */}
          <AnimatePresence>
            {showContent && (
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-[3] w-[90%] max-w-[800px]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, type: "spring" }}
              >
                <motion.h1
                  className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Welcome to{' '}
                  <span className="bg-gradient-to-r from-[#3a86ff] to-[#64ffda] bg-clip-text text-transparent">
                    EstatePro
                  </span>
                </motion.h1>
                
                <motion.p
                  className="text-lg md:text-2xl text-[#a8b2d1] mb-8 md:mb-12 font-light tracking-wide uppercase"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Where Dreams Meet Reality
                </motion.p>

                <motion.div
                  className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center mb-12"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.button
                    className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-[#3a86ff] to-[#64ffda] text-[#0a0e17] font-semibold rounded-full uppercase tracking-wide shadow-[0_10px_30px_rgba(58,134,255,0.4)] hover:shadow-[0_15px_40px_rgba(58,134,255,0.6)] transition-all duration-300 min-w-[200px]"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Properties
                  </motion.button>
                  <motion.button
                    className="px-6 py-3 md:px-8 md:py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-full uppercase tracking-wide backdrop-blur-md hover:border-[#64ffda] hover:bg-[#64ffda]/10 transition-all duration-300 min-w-[200px]"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Take a Virtual Tour
                  </motion.button>
                </motion.div>

                {/* Animated Stats */}
                <motion.div
                  className="flex flex-wrap justify-center gap-4 md:gap-6 mt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  {[
                    { value: '15+', label: 'Years Experience' },
                    { value: '5000+', label: 'Properties Sold' },
                    { value: '98%', label: 'Client Satisfaction' },
                    { value: '50+', label: 'Awards Won' }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center p-4 md:p-6 bg-white/5 rounded-xl backdrop-blur-md border border-white/10 min-w-[120px] md:min-w-[140px] cursor-pointer transition-all duration-300 hover:bg-white/10 hover:border-[#3a86ff] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(58,134,255,0.2)]"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.9 + index * 0.1, type: "spring" }}
                      whileHover={{ scale: 1.1, y: -5 }}
                    >
                      <div className="text-2xl md:text-3xl font-extrabold text-[#64ffda] mb-2">
                        {stat.value}
                      </div>
                      <div className="text-xs md:text-sm text-[#a8b2d1] uppercase tracking-wide font-medium">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-[#a8b2d1] z-[4] text-xs md:text-sm uppercase tracking-wider"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-[30px] h-[50px] border-2 border-white/30 rounded-full flex justify-center pt-2">
              <div className="w-1 h-2.5 bg-[#64ffda] rounded-full animate-scroll" />
            </div>
            <span>Scroll to continue</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SimpleIntroSection;
