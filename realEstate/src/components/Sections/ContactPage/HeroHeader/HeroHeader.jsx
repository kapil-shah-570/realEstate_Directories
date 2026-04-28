import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaPhone, FaEnvelope, FaCommentDots, FaMapMarkerAlt } from 'react-icons/fa';

const HeroHeader = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
  }));

  const headline = "Let's Connect";
  const headlineChars = headline.split('');

  return (
    <section className="relative bg-[radial-gradient(circle_at_20%_30%,#0f172a,#0b1120)] pt-20 md:pt-24 pb-16 md:pb-20 text-white overflow-hidden isolate min-h-[660px] md:min-h-[660px]" ref={ref}>
      <div className="absolute inset-0 pointer-events-none z-[1]">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-blue-500/30 blur-[1px] shadow-[0_0_10px_rgba(59,130,246,0.2)]"
            initial={{ opacity: 0, x: `${p.x}vw`, y: `${p.y}vh` }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              x: [`${p.x}vw`, `${p.x + (Math.random() * 10 - 5)}vw`, `${p.x}vw`],
              y: [`${p.y}vh`, `${p.y + (Math.random() * 10 - 5)}vh`, `${p.y}vh`],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: 'easeInOut',
            }}
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
          />
        ))}
      </div>

      <div className="absolute -top-[10vh] -right-[10vw] w-[60vh] h-[60vh] bg-[radial-gradient(circle,rgba(37,99,235,0.15)_0%,transparent_70%)] rounded-full blur-[80px] z-[1] animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 min-h-[660px] md:min-h-[660px] flex items-center">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
        >
          <motion.div
            className="max-w-[600px] text-center lg:text-left"
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 70 } },
            }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium text-blue-100 mb-6 shadow-lg">
              👋 Welcome to Real Estate Co.
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent tracking-tight">
              {headlineChars.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03, duration: 0.3 }}
                  style={{ display: 'inline-block' }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-[580px] mx-auto lg:mx-0">
              Whether you're buying, selling, investing, or just exploring, our team is ready to help.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-8 justify-center lg:justify-start">
              <motion.a
                href="#contact-form"
                className="w-full sm:w-auto px-9 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold text-lg no-underline inline-flex items-center justify-center gap-3 border border-white/20 transition-all duration-300 shadow-xl hover:shadow-2xl"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(37,99,235,0.4)' }}
                whileTap={{ scale: 0.98 }}
              >
                <FaCommentDots /> Start Conversation
              </motion.a>
              <motion.a
                href="tel:+18001234567"
                className="w-full sm:w-auto px-9 py-4 bg-transparent border-2 border-white/30 rounded-full text-white font-semibold text-lg no-underline inline-flex items-center justify-center gap-3 backdrop-blur-sm transition-all duration-300 hover:border-white/50"
                whileHover={{ scale: 1.05, borderColor: '#2563eb', color: '#2563eb' }}
                whileTap={{ scale: 0.98 }}
              >
                <FaPhone /> Call Now
              </motion.a>
            </div>

            <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-sm text-blue-100">
                <FaEnvelope className="text-blue-400" /> hello@realestate.com
              </span>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-sm text-blue-100">
                <FaMapMarkerAlt className="text-blue-400" /> New York, NY
              </span>
            </div>
          </motion.div>

          <motion.div
            className="relative h-[300px] md:h-[380px] flex items-center justify-center"
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 70 } },
            }}
          >
            <div className="relative w-full h-full">
              <motion.div
                className="absolute top-[10%] left-[5%] px-5 py-3 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-xl border border-blue-500/40 rounded-full text-white font-medium inline-flex items-center gap-2 shadow-xl text-sm whitespace-nowrap"
                animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <FaPhone className="text-blue-400 text-sm" /> 24/7 Support
              </motion.div>
              <motion.div
                className="absolute bottom-[14%] right-[5%] px-5 py-3 bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-xl border border-purple-500/40 rounded-full text-white font-medium inline-flex items-center gap-2 shadow-xl text-sm whitespace-nowrap"
                animate={{ y: [0, 10, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <FaEnvelope className="text-blue-400 text-sm" /> Instant Reply
              </motion.div>
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-5 py-3 bg-gradient-to-br from-emerald-600/20 to-blue-600/20 backdrop-blur-xl border border-emerald-500/40 rounded-full text-white font-medium inline-flex items-center gap-2 shadow-xl text-sm whitespace-nowrap"
                animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <FaMapMarkerAlt className="text-blue-400 text-sm" /> Office Visit
              </motion.div>
            </div>
            <div className="absolute inset-0 -z-10">
              <svg width="100%" height="100%" viewBox="0 0 300 200">
                <motion.circle
                  cx="150"
                  cy="100"
                  r="40"
                  fill="url(#grad)"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <defs>
                  <radialGradient id="grad">
                    <stop offset="0%" stopColor="#2563eb" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full leading-[0] z-[5]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200" className="block w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,122.7C960,139,1056,149,1152,138.7C1248,128,1344,96,1392,80L1440,64L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroHeader;
