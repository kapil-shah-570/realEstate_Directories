// import React from 'react';
// import { motion } from 'framer-motion';
// import './StorySection.css';

// const StorySection = () => {
//   return (
//     <motion.div
//       className="story-section"
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.3 }}
//       transition={{ duration: 0.6 }}
//     >
//       <div className="story-content">
//         <h2 className="section-title">Our Story</h2>
//         <p className="story-text">
//           EstatePro was founded in 2010 with a simple vision: to make the 
//           journey of buying or selling a home seamless, transparent, and 
//           even enjoyable. What started as a small team of passionate agents 
//           in Los Angeles has grown into a nationwide network of trusted 
//           advisors. We combine local expertise with cutting-edge technology 
//           to deliver exceptional results for our clients. Every transaction 
//           is a story, and we’re honored to be part of yours.
//         </p>
//       </div>
//       <div className="story-image">
//         <div className="image-placeholder">
//           <span>🏡</span>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default StorySection;








// import React from 'react';
// import { motion } from 'framer-motion';

// const StorySection = () => {
//   return (
//     <motion.div
//       className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-24"
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.3 }}
//       transition={{ duration: 0.6 }}
//     >
//       <div className="story-content">
//         <h2 className="text-4xl font-bold text-[#1e293b] mb-12 relative inline-block after:content-[''] after:absolute after:-bottom-2.5 after:left-0 after:w-20 after:h-1 after:bg-[#3a86ff] after:rounded-sm">
//           Our Story
//         </h2>
//         <p className="text-xl leading-relaxed text-[#64748b]">
//           EstatePro was founded in 2010 with a simple vision: to make the 
//           journey of buying or selling a home seamless, transparent, and 
//           even enjoyable. What started as a small team of passionate agents 
//           in Los Angeles has grown into a nationwide network of trusted 
//           advisors. We combine local expertise with cutting-edge technology 
//           to deliver exceptional results for our clients. Every transaction 
//           is a story, and we're honored to be part of yours.
//         </p>
//       </div>
//       <div className="story-image">
//         <div className="bg-gradient-to-br from-[#3a86ff]/10 to-[#64ffda]/10 rounded-[30px] p-12 lg:p-16 flex justify-center items-center text-8xl text-[#3a86ff] shadow-[0_10px_40px_rgba(0,0,0,0.08)] max-sm:p-8 max-sm:text-6xl">
//           <span>🏡</span>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default StorySection;













import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaUsers, FaTrophy, FaChartLine } from 'react-icons/fa';

const StorySection = () => {
  const milestones = [
    { year: '2010', title: 'Founded', desc: 'EstatePro opens its first office in Los Angeles with a team of 5 passionate agents.', icon: <FaBuilding /> },
    { year: '2015', title: 'Expansion', desc: 'Grew to 50+ agents and expanded operations to three new states.', icon: <FaUsers /> },
    { year: '2020', title: 'Innovation', desc: 'Launched proprietary AI-powered property matching technology.', icon: <FaChartLine /> },
    { year: '2025', title: 'Recognition', desc: 'Named one of the top 10 real estate brokerages nationwide.', icon: <FaTrophy /> },
  ];

  return (
    <motion.div
      className="mb-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      {/* Section Header with decorative line */}
      <div className="text-center mb-12">
        
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          The EstatePro Story
        </motion.h2>
        
      </div>

      {/* Main Story Content - Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg md:text-xl text-[#64748b] leading-relaxed mb-6">
            EstatePro was founded in 2010 with a simple yet powerful vision: 
            to transform the real estate experience from stressful and opaque 
            to seamless, transparent, and even enjoyable.
          </p>
          <p className="text-lg md:text-xl text-[#64748b] leading-relaxed mb-6">
            What began as a small team of five dedicated agents in a modest 
            Los Angeles office has blossomed into a nationwide network of 
            over 200 trusted advisors. We've grown organically, driven by 
            client referrals and a reputation for exceptional service.
          </p>
          <p className="text-lg md:text-xl text-[#64748b] leading-relaxed">
            Today, we combine deep local expertise with cutting-edge technology 
            to help buyers, sellers, and investors achieve their goals. 
            Every transaction is more than a deal—it's a story, and we're 
            honored to be part of yours.
          </p>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative background shape */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#3a86ff]/5 to-[#64ffda]/10 rounded-[40px] blur-2xl" />
          
          {/* Image/Placeholder with stats overlay */}
          <div className="relative bg-white p-8 rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gradient-to-br from-[#3a86ff]/10 to-[#3a86ff]/5 rounded-2xl p-5 text-center">
                <div className="text-3xl font-bold text-[#3a86ff]">15+</div>
                <div className="text-sm text-[#64748b] font-medium">Years of Excellence</div>
              </div>
              <div className="bg-gradient-to-br from-[#64ffda]/10 to-[#64ffda]/5 rounded-2xl p-5 text-center">
                <div className="text-3xl font-bold text-[#3a86ff]">5k+</div>
                <div className="text-sm text-[#64748b] font-medium">Properties Sold</div>
              </div>
              <div className="bg-gradient-to-br from-[#3a86ff]/10 to-[#3a86ff]/5 rounded-2xl p-5 text-center">
                <div className="text-3xl font-bold text-[#3a86ff]">200+</div>
                <div className="text-sm text-[#64748b] font-medium">Expert Agents</div>
              </div>
              <div className="bg-gradient-to-br from-[#64ffda]/10 to-[#64ffda]/5 rounded-2xl p-5 text-center">
                <div className="text-3xl font-bold text-[#3a86ff]">98%</div>
                <div className="text-sm text-[#64748b] font-medium">Client Satisfaction</div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-48 bg-gradient-to-br from-[#3a86ff]/20 to-[#64ffda]/20 flex items-center justify-center">
              <span className="text-7xl opacity-40">🏢</span>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-6xl drop-shadow-lg">🏡</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Milestones Timeline */}
      <motion.div 
        className="mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-[#1e293b] text-center mb-10">Our Milestones</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((item, index) => (
            <motion.div
              key={index}
              className="relative bg-white p-6 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-300"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="absolute -top-4 left-6 bg-gradient-to-r from-[#3a86ff] to-[#64ffda] text-white text-lg font-bold px-4 py-1 rounded-full shadow-md">
                {item.year}
              </div>
              <div className="text-4xl text-[#3a86ff] mb-4 mt-4">{item.icon}</div>
              <h4 className="text-xl font-bold text-[#1e293b] mb-2">{item.title}</h4>
              <p className="text-[#64748b] text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default StorySection;