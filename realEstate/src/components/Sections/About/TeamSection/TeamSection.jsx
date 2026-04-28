// import React from 'react';
// import { motion } from 'framer-motion';
// import './TeamSection.css';

// const team = [
//   {
//     name: 'Sarah Johnson',
//     role: 'Founder & CEO',
//     bio: '15+ years in luxury real estate',
//     icon: '👩‍💼',
//   },
//   {
//     name: 'Michael Chen',
//     role: 'Head of Sales',
//     bio: 'Former top broker at Sotheby’s',
//     icon: '👨‍💼',
//   },
//   {
//     name: 'Emily Rodriguez',
//     role: 'Marketing Director',
//     bio: 'Brand strategist & designer',
//     icon: '👩‍🎨',
//   },
//   {
//     name: 'David Kim',
//     role: 'Lead Analyst',
//     bio: 'Data-driven market specialist',
//     icon: '👨‍🔬',
//   },
// ];

// const TeamSection = () => {
//   return (
//     <motion.div
//       className="team-section"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.3 }}
//       variants={{
//         hidden: { opacity: 0 },
//         visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
//       }}
//     >
//       <h2 className="section-title">Leadership Team</h2>
//       <div className="team-grid">
//         {team.map((member, index) => (
//           <motion.div
//             key={index}
//             className="team-card"
//             variants={{
//               hidden: { opacity: 0, y: 30 },
//               visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
//             }}
//             whileHover={{ y: -8 }}
//           >
//             <div className="team-avatar">{member.icon}</div>
//             <h3>{member.name}</h3>
//             <p className="team-role">{member.role}</p>
//             <p className="team-bio">{member.bio}</p>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default TeamSection;


















import React from 'react';
import { motion } from 'framer-motion';

const team = [
  {
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    bio: '15+ years in luxury real estate',
    icon: '👩‍💼',
  },
  {
    name: 'Michael Chen',
    role: 'Head of Sales',
    bio: 'Former top broker at Sotheby\'s',
    icon: '👨‍💼',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    bio: 'Brand strategist & designer',
    icon: '👩‍🎨',
  },
  {
    name: 'David Kim',
    role: 'Lead Analyst',
    bio: 'Data-driven market specialist',
    icon: '👨‍🔬',
  },
];

const TeamSection = () => {
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
        Leadership Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, index) => (
          <motion.div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] text-center transition-all duration-300 hover:-translate-y-2"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            whileHover={{ y: -8 }}
          >
            <div className="w-32 h-32 bg-gradient-to-br from-[#3a86ff]/20 to-[#64ffda]/20 rounded-full mx-auto mb-6 flex items-center justify-center text-6xl text-[#3a86ff] max-[480px]:w-24 max-[480px]:h-24 max-[480px]:text-5xl">
              {member.icon}
            </div>
            <h3 className="text-2xl font-bold mb-2 text-[#1e293b]">{member.name}</h3>
            <p className="text-[#3a86ff] font-semibold mb-3">{member.role}</p>
            <p className="text-[#64748b] text-sm">{member.bio}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TeamSection;