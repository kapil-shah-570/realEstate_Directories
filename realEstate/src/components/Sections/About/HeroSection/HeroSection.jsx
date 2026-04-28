// import React from 'react';
// import { motion } from 'framer-motion';
// import './HeroSection.css';

// const HeroSection = () => {
//   return (
//     <motion.section
//       className="about-hero"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//     >
//       <div className="container">
//         <motion.h1
//           className="hero-title"
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//         >
//           About <span className="highlight">EstatePro</span>
//         </motion.h1>
//         <motion.p
//           className="hero-subtitle"
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.4, duration: 0.6 }}
//         >
//           Redefining real estate with integrity, innovation, and personalized service.
//         </motion.p> 
//       </div>
//     </motion.section>
//   );
// };

// export default HeroSection;








import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <motion.section
      className="bg-gradient-to-br from-[#f8fafc] to-[#eef2f6] py-24 md:py-28 mb-16 text-center rounded-b-[50px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-[1400px] mx-auto px-8">
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#1e293b] mb-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          About{' '}
          <span className="bg-gradient-to-r from-[#3a86ff] to-[#64ffda] bg-clip-text text-transparent">
            EstatePro
          </span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-[#64748b] max-w-3xl mx-auto leading-relaxed"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Redefining real estate with integrity, innovation, and personalized service.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default HeroSection;