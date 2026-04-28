// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaHandshake, FaStar, FaHeart, FaShieldAlt } from 'react-icons/fa';
// import './CoreValuesSection.css';

// const values = [
//   {
//     icon: <FaHandshake />,
//     title: 'Integrity',
//     desc: 'Honest, transparent dealings, every time.',
//   },
//   {
//     icon: <FaStar />,
//     title: 'Excellence',
//     desc: 'We set the highest standards and exceed them.',
//   },
//   {
//     icon: <FaHeart />,
//     title: 'Client First',
//     desc: 'Your goals become our mission.',
//   },
//   {
//     icon: <FaShieldAlt />,
//     title: 'Trust',
//     desc: 'Building lasting relationships through reliability.',
//   },
// ];

// const CoreValuesSection = () => {
//   return (
//     <motion.div
//       className="values-section"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.3 }}
//       variants={{
//         hidden: { opacity: 0 },
//         visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
//       }}
//     >
//       <h2 className="section-title">Core Values</h2>
//       <div className="values-grid">
//         {values.map((value, index) => (
//           <motion.div
//             key={index}
//             className="value-card"
//             variants={{
//               hidden: { opacity: 0, y: 30 },
//               visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
//             }}
//             whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
//           >
//             <div className="value-icon">{value.icon}</div>
//             <h3>{value.title}</h3>
//             <p>{value.desc}</p>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default CoreValuesSection;









import React from 'react';
import { motion } from 'framer-motion';
import { FaHandshake, FaStar, FaHeart, FaShieldAlt } from 'react-icons/fa';

const values = [
  {
    icon: <FaHandshake />,
    title: 'Integrity',
    desc: 'Honest, transparent dealings, every time.',
  },
  {
    icon: <FaStar />,
    title: 'Excellence',
    desc: 'We set the highest standards and exceed them.',
  },
  {
    icon: <FaHeart />,
    title: 'Client First',
    desc: 'Your goals become our mission.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Trust',
    desc: 'Building lasting relationships through reliability.',
  },
];

const CoreValuesSection = () => {
  return (
    <motion.div
      className="mb-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
      }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1e293b] mb-12">
        Core Values
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <motion.div
            key={index}
            className="bg-white p-10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] text-center transition-all duration-300 hover:-translate-y-1.5"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
          >
            <div className="text-5xl text-[#3a86ff] mb-6">{value.icon}</div>
            <h3 className="text-2xl font-bold mb-4 text-[#1e293b]">{value.title}</h3>
            <p className="text-[#64748b] leading-relaxed">{value.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CoreValuesSection;