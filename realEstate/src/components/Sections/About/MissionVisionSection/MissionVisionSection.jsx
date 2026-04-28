// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaBullseye, FaEye } from 'react-icons/fa';
// import './MissionVisionSection.css';

// const MissionVisionSection = () => {
//   return (
//     <motion.div
//       className="mission-vision"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.3 }}
//       variants={{
//         hidden: { opacity: 0 },
//         visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
//       }}
//     >
//       <motion.div
//         className="mission-card"
//         variants={{
//           hidden: { opacity: 0, y: 30 },
//           visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
//         }}
//       >
//         <FaBullseye className="card-icon" />
//         <h3>Our Mission</h3>
//         <p>
//           To empower clients with the knowledge, resources, and confidence 
//           to make their best real estate decisions – backed by data, 
//           delivered with care.
//         </p>
//       </motion.div>
//       <motion.div
//         className="vision-card"
//         variants={{
//           hidden: { opacity: 0, y: 30 },
//           visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
//         }}
//       >
//         <FaEye className="card-icon" />
//         <h3>Our Vision</h3>
//         <p>
//           To become the most trusted real estate partner, recognized for 
//           innovation, integrity, and a relentless commitment to client 
//           success.
//         </p>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default MissionVisionSection;













import React from 'react';
import { motion } from 'framer-motion';
import { FaBullseye, FaEye } from 'react-icons/fa';

const MissionVisionSection = () => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
      }}
    >
      <motion.div
        className="bg-white p-12 md:p-14 rounded-[30px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)]"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
        }}
      >
        <FaBullseye className="text-6xl text-[#3a86ff] mb-6 mx-auto" />
        <h3 className="text-3xl font-bold mb-4 text-[#1e293b]">Our Mission</h3>
        <p className="text-[#64748b] leading-relaxed text-lg">
          To empower clients with the knowledge, resources, and confidence 
          to make their best real estate decisions – backed by data, 
          delivered with care.
        </p>
      </motion.div>
      
      <motion.div
        className="bg-white p-12 md:p-14 rounded-[30px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)]"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
        }}
      >
        <FaEye className="text-6xl text-[#3a86ff] mb-6 mx-auto" />
        <h3 className="text-3xl font-bold mb-4 text-[#1e293b]">Our Vision</h3>
        <p className="text-[#64748b] leading-relaxed text-lg">
          To become the most trusted real estate partner, recognized for 
          innovation, integrity, and a relentless commitment to client 
          success.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default MissionVisionSection;