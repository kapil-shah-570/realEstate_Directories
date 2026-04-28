// import React from 'react';
// import { motion } from 'framer-motion';
// import CountUp from 'react-countup';
// import './AchievementsSection.css';

// const stats = [
//   { value: 15, label: 'Years of Excellence', suffix: '+' },
//   { value: 5000, label: 'Properties Sold', suffix: '+' },
//   { value: 2500, label: 'Happy Families', suffix: '+' },
//   { value: 98, label: 'Satisfaction Rate', suffix: '%' },
// ];

// const AchievementsSection = () => {
//   return (
//     <motion.div
//       className="achievements-section"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.3 }}
//       variants={{
//         hidden: { opacity: 0 },
//         visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
//       }}
//     >
//       <h2 className="section-title">Company Achievements</h2>
//       <div className="stats-grid">
//         {stats.map((stat, index) => (
//           <motion.div
//             key={index}
//             className="stat-card"
//             variants={{
//               hidden: { opacity: 0, y: 30 },
//               visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
//             }}
//             whileHover={{ y: -5, backgroundColor: '#3a86ff' }}
//           >
//             <div className="stat-number">
//               <CountUp
//                 start={0}
//                 end={stat.value}
//                 duration={2.5}
//                 suffix={stat.suffix}
//                 delay={0.3}
//               />
//             </div>
//             <div className="stat-label">{stat.label}</div>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default AchievementsSection;

















import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const stats = [
  { value: 15, label: 'Years of Excellence', suffix: '+' },
  { value: 5000, label: 'Properties Sold', suffix: '+' },
  { value: 2500, label: 'Happy Families', suffix: '+' },
  { value: 98, label: 'Satisfaction Rate', suffix: '%' },
];

const AchievementsSection = () => {
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
        Company Achievements
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="bg-white p-10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] text-center transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#3a86ff] group"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            whileHover={{ y: -5 }}
          >
            <div className="text-5xl font-extrabold text-[#3a86ff] mb-2 group-hover:text-white">
              <CountUp
                start={0}
                end={stat.value}
                duration={2.5}
                suffix={stat.suffix}
                enableScrollSpy
                scrollSpyOnce
              />
            </div>
            <div className="text-lg text-[#64748b] uppercase tracking-wider group-hover:text-white">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AchievementsSection;