// import React from 'react';
// import { motion } from 'framer-motion';
// import './CTASection.css';

// const CTASection = () => {
//   return (
//     <motion.div
//       className="about-cta"
//       initial={{ opacity: 0, scale: 0.95 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5 }}
//     >
//       <h3>Ready to start your real estate journey?</h3>
//       <p>Whether you’re buying, selling, or investing, our team is here to help.</p>
//       <button className="cta-button">Contact Us Today</button>
//     </motion.div>
//   );
// };

// export default CTASection;















// import React from 'react';
// import { motion } from 'framer-motion';

// const CTASection = () => {
//   return (
//     <motion.div
//       className="bg-gradient-to-r from-[#3a86ff] to-[#4cc9f0] py-20 px-12 md:py-24 md:px-16 rounded-[40px] text-center text-white mt-16"
//       initial={{ opacity: 0, scale: 0.95 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5 }}
//     >
//       <h3 className="text-3xl md:text-4xl font-extrabold mb-6">
//         Ready to start your real estate journey?
//       </h3>
//       <p className="text-lg md:text-xl mb-8 opacity-95">
//         Whether you're buying, selling, or investing, our team is here to help.
//       </p>
//       <button className="bg-white text-[#3a86ff] border-none px-8 py-4 text-xl font-semibold rounded-full cursor-pointer transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)]">
//         Contact Us Today
//       </button>
//     </motion.div>
//   );
// };

// export default CTASection;












import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaArrowRight } from 'react-icons/fa';

const CTASection = () => {
  const handleContactClick = (e) => {
    e.preventDefault();
    if (window.location.pathname !== '/contact') {
      window.location.href = '/contact';
    }
  };

  const handleCallClick = (e) => {
    e.preventDefault();
    window.location.href = 'tel:+918434249577';
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-[#3a86ff] via-[#4a9afe] to-[#64ffda] py-16 px-8 md:py-20 md:px-12 lg:py-24 lg:px-16 rounded-[40px] text-center text-white mt-16 mb-8 shadow-2xl"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.h3 
        className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        Ready to start your real estate journey?
      </motion.h3>
      
      <motion.p 
        className="text-lg md:text-xl mb-10 opacity-95 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Whether you're buying, selling, or investing, our team is here to help you achieve your goals with confidence.
      </motion.p>
      
      <motion.div 
        className="flex flex-col sm:flex-row gap-5 justify-center items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {/* Primary Button */}
        <motion.button
          onClick={handleContactClick}
          className="group relative bg-white text-[#3a86ff] border-none px-10 py-5 text-lg md:text-xl font-bold rounded-full cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all duration-300 overflow-hidden w-full sm:w-auto min-w-[220px]"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10 flex items-center justify-center gap-3">
            Contact Us Today
            <FaArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-[#64ffda] to-[#3a86ff] opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full" />
        </motion.button>

        {/* Secondary Button */}
        <motion.button
          onClick={handleCallClick}
          className="group relative bg-transparent text-white border-2 border-white/30 px-10 py-5 text-lg md:text-xl font-semibold rounded-full cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-all duration-300 backdrop-blur-sm w-full sm:w-auto min-w-[220px]"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10 flex items-center justify-center gap-3">
            <FaPhoneAlt className="text-base" />
            Call Us Now
          </span>
          <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full" />
        </motion.button>
      </motion.div>

      {/* Trust Badge */}
      <motion.p 
        className="text-sm md:text-base text-white/80 mt-8 italic"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        ⭐ Trusted by 5,000+ clients • Free consultation • No obligation
      </motion.p>
    </motion.div>
  );
};

export default CTASection;