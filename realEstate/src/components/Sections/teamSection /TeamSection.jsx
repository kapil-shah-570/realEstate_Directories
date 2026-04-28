// import React from 'react';
// import { motion } from 'framer-motion';
// import { 
//   FaTwitter, 
//   FaLinkedin, 
//   FaGithub, 
//   FaInstagram,
//   FaEnvelope,
//   FaGlobe,
//   FaQuoteLeft,
//   FaAward,
//   FaUserFriends
// } from 'react-icons/fa';
// import './TeamSection.css';

// const TeamSection = () => {
//   const teamMembers = [
//     {
//       id: 1,
//       name: "Alex Morgan",
//       role: "Lead Developer",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
//       bio: "Full-stack developer with 10+ years of experience in web technologies.",
//       social: {
//         twitter: "https://twitter.com",
//         linkedin: "https://linkedin.com",
//         github: "https://github.com",
//         email: "alex@example.com"
//       },
//       skills: ["React", "Node.js", "TypeScript", "AWS"],
//       featured: true,
//       projects: 42
//     },
//     {
//       id: 2,
//       name: "Sarah Chen",
//       role: "UI/UX Designer",
//       image: "https://images.unsplash.com/photo-1494790108755-2616b786d4c2",
//       bio: "Creating beautiful and functional user interfaces for over 8 years.",
//       social: {
//         twitter: "https://twitter.com",
//         linkedin: "https://linkedin.com",
//         dribbble: "https://dribbble.com",
//         email: "sarah@example.com"
//       },
//       skills: ["Figma", "Sketch", "UI Design", "Prototyping"],
//       featured: true,
//       projects: 38
//     },
//     {
//       id: 3,
//       name: "Marcus Rodriguez",
//       role: "Project Manager",
//       image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
//       bio: "Expert in agile methodologies and delivering projects on time.",
//       social: {
//         linkedin: "https://linkedin.com",
//         twitter: "https://twitter.com",
//         website: "https://example.com",
//         email: "marcus@example.com"
//       },
//       skills: ["Agile", "Scrum", "JIRA", "Team Leadership"],
//       featured: false,
//       projects: 56
//     },
//     {
//       id: 4,
//       name: "Emma Wilson",
//       role: "Frontend Developer",
//       image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
//       bio: "Passionate about creating responsive and accessible web applications.",
//       social: {
//         github: "https://github.com",
//         linkedin: "https://linkedin.com",
//         codepen: "https://codepen.io",
//         email: "emma@example.com"
//       },
//       skills: ["JavaScript", "Vue.js", "SASS", "Webpack"],
//       featured: false,
//       projects: 31
//     },
//     {
//       id: 5,
//       name: "David Kim",
//       role: "DevOps Engineer",
//       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
//       bio: "Building scalable infrastructure and automating deployment pipelines.",
//       social: {
//         github: "https://github.com",
//         linkedin: "https://linkedin.com",
//         twitter: "https://twitter.com",
//         email: "david@example.com"
//       },
//       skills: ["Docker", "Kubernetes", "CI/CD", "AWS"],
//       featured: true,
//       projects: 27
//     },
//     {
//       id: 6,
//       name: "Olivia Parker",
//       role: "QA Specialist",
//       image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
//       bio: "Ensuring quality and reliability of software products.",
//       social: {
//         linkedin: "https://linkedin.com",
//         twitter: "https://twitter.com",
//         email: "olivia@example.com"
//       },
//       skills: ["Testing", "Automation", "Selenium", "Jest"],
//       featured: false,
//       projects: 49
//     },
//     {
//       id: 7,
//       name: "James Miller",
//       role: "Backend Developer",
//       image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
//       bio: "Building robust APIs and database architectures.",
//       social: {
//         github: "https://github.com",
//         linkedin: "https://linkedin.com",
//         stackoverflow: "https://stackoverflow.com",
//         email: "james@example.com"
//       },
//       skills: ["Python", "Django", "PostgreSQL", "Redis"],
//       featured: true,
//       projects: 33
//     },
//     {
//       id: 8,
//       name: "Lisa Thompson",
//       role: "Mobile Developer",
//       image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
//       bio: "Creating native and cross-platform mobile applications.",
//       social: {
//         github: "https://github.com",
//         linkedin: "https://linkedin.com",
//         twitter: "https://twitter.com",
//         email: "lisa@example.com"
//       },
//       skills: ["React Native", "Flutter", "iOS", "Android"],
//       featured: false,
//       projects: 29
//     }
//   ];

//   const stats = [
//     { value: "50+", label: "Projects Completed", icon: <FaAward /> },
//     { value: "8", label: "Team Members", icon: <FaUserFriends /> },
//     { value: "95%", label: "Client Satisfaction", icon: <FaQuoteLeft /> },
//     { value: "5+", label: "Years Experience", icon: <FaGlobe /> }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { type: "spring", stiffness: 100 }
//     },
//     hover: {
//       y: -15,
//       scale: 1.03,
//       transition: { type: "spring", stiffness: 400 }
//     }
//   };

//   const getSocialIcon = (platform) => {
//     switch(platform) {
//       case 'twitter': return <FaTwitter />;
//       case 'linkedin': return <FaLinkedin />;
//       case 'github': return <FaGithub />;
//       case 'instagram': return <FaInstagram />;
//       case 'email': return <FaEnvelope />;
//       case 'website': return <FaGlobe />;
//       case 'dribbble': return <FaGithub />;
//       case 'codepen': return <FaGithub />;
//       case 'stackoverflow': return <FaGithub />;
//       default: return <FaGlobe />;
//     }
//   };

//   return (
//     <section className="team-section">
//       <div className="container">
//         {/* Header */}
//         <motion.div 
//           className="team-header"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           <span className="section-subtitle">Our Team</span>
//           <h2 className="section-title">Meet Our Experts</h2>
//           <p className="section-description">
//             A dedicated team of professionals passionate about creating amazing experiences
//           </p>
//         </motion.div>

//         {/* Stats */}
//         <motion.div 
//           className="team-stats"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2 }}
//         >
//           {stats.map((stat, index) => (
//             <div key={index} className="stat-card">
//               <div className="stat-icon">{stat.icon}</div>
//               <div className="stat-content">
//                 <h3 className="stat-value">{stat.value}</h3>
//                 <p className="stat-label">{stat.label}</p>
//               </div>
//             </div>
//           ))}
//         </motion.div>

//         {/* Team Grid */}
//         <motion.div 
//           className="team-grid"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           {teamMembers.map((member) => (
//             <motion.div
//               key={member.id}
//               className={`team-card ${member.featured ? 'featured' : ''}`}
//               variants={cardVariants}
//               whileHover="hover"
//             >
//               <div className="team-card-inner">
//                 {/* Card Front */}
//                 <div className="card-front">
//                   <div className="member-image">
//                     <img src={member.image} alt={member.name} />
//                     {member.featured && (
//                       <div className="featured-badge">
//                         <FaAward /> Featured
//                       </div>
//                     )}
//                   </div>
                  
//                   <div className="member-info">
//                     <h3 className="member-name">{member.name}</h3>
//                     <p className="member-role">{member.role}</p>
//                     <p className="member-bio">{member.bio}</p>
                    
//                     <div className="member-skills">
//                       {member.skills.slice(0, 3).map((skill, index) => (
//                         <span key={index} className="skill-tag">{skill}</span>
//                       ))}
//                       {member.skills.length > 3 && (
//                         <span className="skill-tag">+{member.skills.length - 3}</span>
//                       )}
//                     </div>
                    
//                     <div className="member-projects">
//                       <span className="projects-count">
//                         {member.projects} Projects
//                       </span>
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Card Back */}
//                 <div className="card-back">
//                   <div className="back-content">
//                     <h3 className="back-name">{member.name}</h3>
//                     <p className="back-role">{member.role}</p>
                    
//                     <div className="skills-list">
//                       <h4>Skills</h4>
//                       <div className="skills-grid">
//                         {member.skills.map((skill, index) => (
//                           <span key={index} className="skill-item">{skill}</span>
//                         ))}
//                       </div>
//                     </div>
                    
//                     <div className="social-links">
//                       {Object.entries(member.social).map(([platform, url]) => (
//                         <a
//                           key={platform}
//                           href={url}
//                           className={`social-link ${platform}`}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           {getSocialIcon(platform)}
//                           <span className="tooltip">{platform}</span>
//                         </a>
//                       ))}
//                     </div>
                    
//                     <button className="contact-btn" onClick={(e) => {
//                       e.stopPropagation();
//                       window.location.href = `mailto:${member.social.email}`;
//                     }}>
//                       <FaEnvelope /> Contact {member.name.split(' ')[0]}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Join Team CTA */}
//         <motion.div 
//           className="join-team"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.4 }}
//         >
//           <div className="join-content">
//             <h3>Want to Join Our Team?</h3>
//             <p>We're always looking for talented individuals to join our growing team.</p>
//             <div className="join-actions">
//               <button className="btn-primary">View Open Positions</button>
//               <button className="btn-secondary">Send Your CV</button>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default TeamSection;



























// import React from 'react';
// import { motion } from 'framer-motion';
// import { 
//   FaTwitter, 
//   FaLinkedin, 
//   FaGithub, 
//   FaInstagram,
//   FaEnvelope,
//   FaGlobe,
//   FaQuoteLeft,
//   FaAward,
//   FaUserFriends
// } from 'react-icons/fa';

// const TeamSection = () => {
//   const teamMembers = [
//     {
//       id: 1,
//       name: "Alex Morgan",
//       role: "Lead Developer",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
//       bio: "Full-stack developer with 10+ years of experience in web technologies.",
//       social: {
//         twitter: "https://twitter.com",
//         linkedin: "https://linkedin.com",
//         github: "https://github.com",
//         email: "alex@example.com"
//       },
//       skills: ["React", "Node.js", "TypeScript", "AWS"],
//       featured: true,
//       projects: 42
//     },
//     {
//       id: 2,
//       name: "Sarah Chen",
//       role: "UI/UX Designer",
//       image: "https://images.unsplash.com/photo-1494790108755-2616b786d4c2",
//       bio: "Creating beautiful and functional user interfaces for over 8 years.",
//       social: {
//         twitter: "https://twitter.com",
//         linkedin: "https://linkedin.com",
//         dribbble: "https://dribbble.com",
//         email: "sarah@example.com"
//       },
//       skills: ["Figma", "Sketch", "UI Design", "Prototyping"],
//       featured: true,
//       projects: 38
//     },
//     {
//       id: 3,
//       name: "Marcus Rodriguez",
//       role: "Project Manager",
//       image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
//       bio: "Expert in agile methodologies and delivering projects on time.",
//       social: {
//         linkedin: "https://linkedin.com",
//         twitter: "https://twitter.com",
//         website: "https://example.com",
//         email: "marcus@example.com"
//       },
//       skills: ["Agile", "Scrum", "JIRA", "Team Leadership"],
//       featured: false,
//       projects: 56
//     },
//     {
//       id: 4,
//       name: "Emma Wilson",
//       role: "Frontend Developer",
//       image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
//       bio: "Passionate about creating responsive and accessible web applications.",
//       social: {
//         github: "https://github.com",
//         linkedin: "https://linkedin.com",
//         codepen: "https://codepen.io",
//         email: "emma@example.com"
//       },
//       skills: ["JavaScript", "Vue.js", "SASS", "Webpack"],
//       featured: false,
//       projects: 31
//     },
//     {
//       id: 5,
//       name: "David Kim",
//       role: "DevOps Engineer",
//       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
//       bio: "Building scalable infrastructure and automating deployment pipelines.",
//       social: {
//         github: "https://github.com",
//         linkedin: "https://linkedin.com",
//         twitter: "https://twitter.com",
//         email: "david@example.com"
//       },
//       skills: ["Docker", "Kubernetes", "CI/CD", "AWS"],
//       featured: true,
//       projects: 27
//     },
//     {
//       id: 6,
//       name: "Olivia Parker",
//       role: "QA Specialist",
//       image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
//       bio: "Ensuring quality and reliability of software products.",
//       social: {
//         linkedin: "https://linkedin.com",
//         twitter: "https://twitter.com",
//         email: "olivia@example.com"
//       },
//       skills: ["Testing", "Automation", "Selenium", "Jest"],
//       featured: false,
//       projects: 49
//     },
//     {
//       id: 7,
//       name: "James Miller",
//       role: "Backend Developer",
//       image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
//       bio: "Building robust APIs and database architectures.",
//       social: {
//         github: "https://github.com",
//         linkedin: "https://linkedin.com",
//         stackoverflow: "https://stackoverflow.com",
//         email: "james@example.com"
//       },
//       skills: ["Python", "Django", "PostgreSQL", "Redis"],
//       featured: true,
//       projects: 33
//     },
//     {
//       id: 8,
//       name: "Lisa Thompson",
//       role: "Mobile Developer",
//       image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
//       bio: "Creating native and cross-platform mobile applications.",
//       social: {
//         github: "https://github.com",
//         linkedin: "https://linkedin.com",
//         twitter: "https://twitter.com",
//         email: "lisa@example.com"
//       },
//       skills: ["React Native", "Flutter", "iOS", "Android"],
//       featured: false,
//       projects: 29
//     }
//   ];

//   const stats = [
//     { value: "50+", label: "Projects Completed", icon: <FaAward /> },
//     { value: "8", label: "Team Members", icon: <FaUserFriends /> },
//     { value: "95%", label: "Client Satisfaction", icon: <FaQuoteLeft /> },
//     { value: "5+", label: "Years Experience", icon: <FaGlobe /> }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { type: "spring", stiffness: 100 }
//     },
//     hover: {
//       y: -15,
//       scale: 1.03,
//       transition: { type: "spring", stiffness: 400 }
//     }
//   };

//   const getSocialIcon = (platform) => {
//     switch(platform) {
//       case 'twitter': return <FaTwitter />;
//       case 'linkedin': return <FaLinkedin />;
//       case 'github': return <FaGithub />;
//       case 'instagram': return <FaInstagram />;
//       case 'email': return <FaEnvelope />;
//       case 'website': return <FaGlobe />;
//       default: return <FaGlobe />;
//     }
//   };

//   return (
//     <section className="py-32 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white relative overflow-hidden">
//       {/* Subtle top border glow */}
//       <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
//       <div className="max-w-[1400px] mx-auto px-5 relative z-10">
//         {/* Header */}
//         <motion.div 
//           className="text-center mb-20"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           <span className="inline-block px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-semibold tracking-wider mb-5 uppercase">
//             Our Team
//           </span>
//           <h2 className="text-5xl md:text-6xl font-extrabold mb-5 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent tracking-tight">
//             Meet Our Experts
//           </h2>
//           <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
//             A dedicated team of professionals passionate about creating amazing experiences
//           </p>
//         </motion.div>

//         {/* Stats */}
//         <motion.div 
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2 }}
//         >
//           {stats.map((stat, index) => (
//             <div 
//               key={index} 
//               className="bg-slate-800/70 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex items-center gap-5 transition-all duration-300 cursor-pointer hover:-translate-y-1.5 hover:bg-slate-800/90 hover:border-blue-500/50 hover:shadow-2xl"
//             >
//               <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-2xl">
//                 {stat.icon}
//               </div>
//               <div className="flex-1">
//                 <h3 className="text-4xl font-bold bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent mb-1">
//                   {stat.value}
//                 </h3>
//                 <p className="text-slate-300 text-base font-medium">{stat.label}</p>
//               </div>
//             </div>
//           ))}
//         </motion.div>

//         {/* Team Grid */}
//         <motion.div 
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mb-20"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           {teamMembers.map((member) => (
//             <motion.div
//               key={member.id}
//               className={`team-card relative perspective-1000 h-[500px] cursor-pointer group ${member.featured ? 'featured' : ''}`}
//               variants={cardVariants}
//               whileHover="hover"
//             >
//               {/* Featured glow effect */}
//               {member.featured && (
//                 <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 animate-hue-rotate" />
//               )}
              
//               <div className="team-card-inner relative w-full h-full text-center transition-transform duration-800 transform-style-3d group-hover:rotate-y-180">
//                 {/* Card Front */}
//                 <div className={`absolute w-full h-full backface-hidden rounded-2xl overflow-hidden bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-white/10 flex flex-col ${member.featured ? 'rounded-2xl' : ''}`}>
//                   <div className="relative h-[250px] overflow-hidden">
//                     <img 
//                       src={member.image} 
//                       alt={member.name} 
//                       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
//                     />
//                     {member.featured && (
//                       <div className="absolute top-5 right-5 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 shadow-lg shadow-blue-500/30">
//                         <FaAward /> Featured
//                       </div>
//                     )}
//                   </div>
                  
//                   <div className="p-8 flex-1 flex flex-col text-left">
//                     <h3 className="text-2xl font-bold mb-2 text-white">{member.name}</h3>
//                     <p className="text-blue-400 text-lg mb-4 font-medium">{member.role}</p>
//                     <p className="text-slate-300 text-sm leading-relaxed mb-5 flex-1">{member.bio}</p>
                    
//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {member.skills.slice(0, 3).map((skill, index) => (
//                         <span key={index} className="bg-blue-500/10 text-blue-400 px-3 py-1.5 rounded-full text-xs font-medium border border-blue-500/30">
//                           {skill}
//                         </span>
//                       ))}
//                       {member.skills.length > 3 && (
//                         <span className="bg-blue-500/10 text-blue-400 px-3 py-1.5 rounded-full text-xs font-medium border border-blue-500/30">
//                           +{member.skills.length - 3}
//                         </span>
//                       )}
//                     </div>
                    
//                     <div className="pt-4 border-t border-white/10">
//                       <span className="text-emerald-400 text-sm font-semibold flex items-center gap-2">
//                         {member.projects} Projects
//                       </span>
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Card Back */}
//                 <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-blue-500/30 rounded-2xl p-8 flex flex-col justify-center items-center">
//                   <div className="w-full h-full flex flex-col justify-between">
//                     <div>
//                       <h3 className="text-3xl font-bold mb-1 text-white">{member.name}</h3>
//                       <p className="text-blue-400 text-lg mb-8 font-medium">{member.role}</p>
                      
//                       <div className="mb-8 w-full">
//                         <h4 className="text-left text-slate-400 text-sm mb-4 font-semibold">Skills</h4>
//                         <div className="grid grid-cols-2 gap-3">
//                           {member.skills.map((skill, index) => (
//                             <span key={index} className="bg-blue-500/10 text-blue-400 p-3 rounded-xl text-sm text-center border border-blue-500/30 transition-all duration-300 hover:bg-blue-500/20 hover:-translate-y-0.5">
//                               {skill}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
                    
//                     <div>
//                       <div className="flex justify-center gap-4 mb-8">
//                         {Object.entries(member.social).map(([platform, url]) => (
//                           <a
//                             key={platform}
//                             href={url}
//                             className="relative w-11 h-11 rounded-full flex items-center justify-center text-white text-lg transition-all duration-300 bg-white/10 hover:-translate-y-1.5 hover:bg-[#1DA1F2]"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             onClick={(e) => e.stopPropagation()}
//                           >
//                             {getSocialIcon(platform)}
//                             <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/90 text-white px-3 py-1.5 rounded-md text-xs whitespace-nowrap opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:-bottom-9 z-10">
//                               {platform}
//                               <span className="absolute -top-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-b-black/90" />
//                             </span>
//                           </a>
//                         ))}
//                       </div>
                      
//                       <button 
//                         className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/40 flex items-center justify-center gap-2"
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           window.location.href = `mailto:${member.social.email}`;
//                         }}
//                       >
//                         <FaEnvelope /> Contact {member.name.split(' ')[0]}
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Join Team CTA */}
//         <motion.div 
//           className="bg-gradient-to-br from-slate-800/80 to-slate-900/90 rounded-3xl p-16 text-center border border-white/10 relative overflow-hidden"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.4 }}
//         >
//           <div className="absolute inset-0 bg-radial-gradient from-blue-500/10 to-transparent" />
//           <div className="relative z-10">
//             <h3 className="text-4xl md:text-5xl font-bold mb-5 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
//               Want to Join Our Team?
//             </h3>
//             <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
//               We're always looking for talented individuals to join our growing team.
//             </p>
//             <div className="flex gap-5 justify-center flex-wrap">
//               <button className="px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl text-lg font-semibold shadow-xl shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-500/40 min-w-[220px]">
//                 View Open Positions
//               </button>
//               <button className="px-10 py-5 bg-transparent text-white border-2 border-white/20 rounded-2xl text-lg font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:-translate-y-1.5 min-w-[220px]">
//                 Send Your CV
//               </button>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Custom CSS for 3D flip and animations */}
//       <style jsx>{`
//         .perspective-1000 {
//           perspective: 1000px;
//         }
//         .transform-style-3d {
//           transform-style: preserve-3d;
//         }
//         .backface-hidden {
//           -webkit-backface-visibility: hidden;
//           backface-visibility: hidden;
//         }
//         .rotate-y-180 {
//           transform: rotateY(180deg);
//         }
//         .group:hover .group-hover\\:rotate-y-180 {
//           transform: rotateY(180deg);
//         }
//         @keyframes hue-rotate {
//           0% { filter: hue-rotate(0deg); }
//           100% { filter: hue-rotate(360deg); }
//         }
//         .animate-hue-rotate {
//           animation: hue-rotate 3s linear infinite;
//         }
//         .bg-radial-gradient {
//           background: radial-gradient(circle at top right, rgba(59, 130, 246, 0.1), transparent 50%);
//         }
//       `}</style>
//     </section>
//   );
// };

// export default TeamSection;





















// import React from 'react';
// import { motion } from 'framer-motion';
// import { 
//   FaTwitter, 
//   FaLinkedin, 
//   FaGithub, 
//   FaInstagram,
//   FaEnvelope,
//   FaGlobe,
//   FaQuoteLeft,
//   FaAward,
//   FaUserFriends
// } from 'react-icons/fa';

// const TeamSection = () => {
//   const teamMembers = [
//     {
//       id: 1,
//       name: "Alex Morgan",
//       role: "Lead Developer",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
//       bio: "Full-stack developer with 10+ years of experience in web technologies.",
//       social: {
//         twitter: "https://twitter.com",
//         linkedin: "https://linkedin.com",
//         github: "https://github.com",
//         email: "alex@example.com"
//       },
//       skills: ["React", "Node.js", "TypeScript", "AWS"],
//       featured: true,
//       projects: 42
//     },
//     {
//       id: 2,
//       name: "Sarah Chen",
//       role: "UI/UX Designer",
//       image: "https://images.unsplash.com/photo-1494790108755-2616b786d4c2",
//       bio: "Creating beautiful and functional user interfaces for over 8 years.",
//       social: {
//         twitter: "https://twitter.com",
//         linkedin: "https://linkedin.com",
//         dribbble: "https://dribbble.com",
//         email: "sarah@example.com"
//       },
//       skills: ["Figma", "Sketch", "UI Design", "Prototyping"],
//       featured: true,
//       projects: 38
//     },
//     {
//       id: 3,
//       name: "Marcus Rodriguez",
//       role: "Project Manager",
//       image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
//       bio: "Expert in agile methodologies and delivering projects on time.",
//       social: {
//         linkedin: "https://linkedin.com",
//         twitter: "https://twitter.com",
//         website: "https://example.com",
//         email: "marcus@example.com"
//       },
//       skills: ["Agile", "Scrum", "JIRA", "Team Leadership"],
//       featured: false,
//       projects: 56
//     },
//     {
//       id: 4,
//       name: "Emma Wilson",
//       role: "Frontend Developer",
//       image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
//       bio: "Passionate about creating responsive and accessible web applications.",
//       social: {
//         github: "https://github.com",
//         linkedin: "https://linkedin.com",
//         codepen: "https://codepen.io",
//         email: "emma@example.com"
//       },
//       skills: ["JavaScript", "Vue.js", "SASS", "Webpack"],
//       featured: false,
//       projects: 31
//     },
//     {
//       id: 5,
//       name: "David Kim",
//       role: "DevOps Engineer",
//       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
//       bio: "Building scalable infrastructure and automating deployment pipelines.",
//       social: {
//         github: "https://github.com",
//         linkedin: "https://linkedin.com",
//         twitter: "https://twitter.com",
//         email: "david@example.com"
//       },
//       skills: ["Docker", "Kubernetes", "CI/CD", "AWS"],
//       featured: true,
//       projects: 27
//     },
//     {
//       id: 6,
//       name: "Olivia Parker",
//       role: "QA Specialist",
//       image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
//       bio: "Ensuring quality and reliability of software products.",
//       social: {
//         linkedin: "https://linkedin.com",
//         twitter: "https://twitter.com",
//         email: "olivia@example.com"
//       },
//       skills: ["Testing", "Automation", "Selenium", "Jest"],
//       featured: false,
//       projects: 49
//     },
//     {
//       id: 7,
//       name: "James Miller",
//       role: "Backend Developer",
//       image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
//       bio: "Building robust APIs and database architectures.",
//       social: {
//         github: "https://github.com",
//         linkedin: "https://linkedin.com",
//         stackoverflow: "https://stackoverflow.com",
//         email: "james@example.com"
//       },
//       skills: ["Python", "Django", "PostgreSQL", "Redis"],
//       featured: true,
//       projects: 33
//     },
//     {
//       id: 8,
//       name: "Lisa Thompson",
//       role: "Mobile Developer",
//       image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
//       bio: "Creating native and cross-platform mobile applications.",
//       social: {
//         github: "https://github.com",
//         linkedin: "https://linkedin.com",
//         twitter: "https://twitter.com",
//         email: "lisa@example.com"
//       },
//       skills: ["React Native", "Flutter", "iOS", "Android"],
//       featured: false,
//       projects: 29
//     }
//   ];

//   const stats = [
//     { value: "50+", label: "Projects Completed", icon: <FaAward /> },
//     { value: "8", label: "Team Members", icon: <FaUserFriends /> },
//     { value: "95%", label: "Client Satisfaction", icon: <FaQuoteLeft /> },
//     { value: "5+", label: "Years Experience", icon: <FaGlobe /> }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { type: "spring", stiffness: 100 }
//     },
//     hover: {
//       y: -15,
//       scale: 1.03,
//       transition: { type: "spring", stiffness: 400 }
//     }
//   };

//   const getSocialIcon = (platform) => {
//     switch(platform) {
//       case 'twitter': return <FaTwitter />;
//       case 'linkedin': return <FaLinkedin />;
//       case 'github': return <FaGithub />;
//       case 'instagram': return <FaInstagram />;
//       case 'email': return <FaEnvelope />;
//       case 'website': return <FaGlobe />;
//       default: return <FaGlobe />;
//     }
//   };


//   return (
//     <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-800 relative overflow-hidden">
//       {/* Subtle background pattern */}
//       <div className="absolute inset-0 opacity-5 pointer-events-none">
//         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
//         <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]" />
//       </div>
      
//       <div className="max-w-[1400px] mx-auto px-5 relative z-10">
//         {/* Header */}
//         <motion.div 
//           className="text-center mb-20"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           <span className="inline-block px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-sm font-semibold tracking-wider mb-5 uppercase shadow-md">
//             Our Team
//           </span>
//           <h2 className="text-5xl md:text-6xl font-extrabold mb-5 text-slate-900 tracking-tight">
//             Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Experts</span>
//           </h2>
//           <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
//             A dedicated team of professionals passionate about creating amazing experiences
//           </p>
//         </motion.div>

//         {/* Stats - Refined glassmorphism */}
//         <motion.div 
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2 }}
//         >
//           {stats.map((stat, index) => (
//             <div 
//               key={index} 
//               className="bg-white/80 backdrop-blur-sm border border-white rounded-2xl p-8 flex items-center gap-5 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
//             >
//               <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-2xl text-white shadow-md">
//                 {stat.icon}
//               </div>
//               <div className="flex-1">
//                 <h3 className="text-4xl font-bold text-slate-900 mb-1">
//                   {stat.value}
//                 </h3>
//                 <p className="text-slate-600 text-base font-medium">{stat.label}</p>
//               </div>
//             </div>
//           ))}
//         </motion.div>

//         {/* Team Grid - Redesigned Cards */}
//         <motion.div 
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mb-20"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           {teamMembers.map((member) => (
//             <motion.div
//               key={member.id}
//               className={`team-card relative perspective-1000 h-[520px] cursor-pointer group ${member.featured ? 'featured' : ''}`}
//               variants={cardVariants}
//               whileHover="hover"
//             >
//               {/* Featured subtle border glow */}
//               {member.featured && (
//                 <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-500" />
//               )}
              
//               <div className="team-card-inner relative w-full h-full text-center transition-transform duration-800 transform-style-3d group-hover:rotate-y-180">
//                 {/* Card Front - Modern Design */}
//                 <div className={`absolute w-full h-full backface-hidden rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-xl flex flex-col ${member.featured ? 'rounded-2xl' : ''}`}>
//                   <div className="relative h-[240px] overflow-hidden bg-gradient-to-b from-slate-100 to-transparent">
//                     <img 
//                       src={member.image} 
//                       alt={member.name} 
//                       className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" 
//                     />
//                     {member.featured && (
//                       <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-2 shadow-md">
//                         <FaAward className="text-yellow-300" /> Featured
//                       </div>
//                     )}
//                     {/* Overlay gradient */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
//                   </div>
                  
//                   <div className="p-7 flex-1 flex flex-col text-left">
//                     <h3 className="text-xl font-bold mb-1 text-slate-900">{member.name}</h3>
//                     <p className="text-blue-600 text-sm font-semibold mb-3 uppercase tracking-wide">{member.role}</p>
//                     <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-1">{member.bio}</p>
                    
//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {member.skills.slice(0, 3).map((skill, index) => (
//                         <span key={index} className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-200">
//                           {skill}
//                         </span>
//                       ))}
//                       {member.skills.length > 3 && (
//                         <span className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-200">
//                           +{member.skills.length - 3}
//                         </span>
//                       )}
//                     </div>
                    
//                     <div className="pt-4 border-t border-slate-200 flex justify-between items-center">
//                       <span className="text-emerald-600 text-sm font-semibold flex items-center gap-1">
//                         <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
//                         {member.projects} Projects
//                       </span>
//                       <span className="text-slate-400 text-xs flex items-center gap-1">
//                         Hover to flip <span className="text-lg leading-none">↻</span>
//                       </span>
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Card Back - Clean Design */}
//                 <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white border border-slate-200 rounded-2xl p-8 flex flex-col justify-center items-center shadow-xl">
//                   <div className="w-full h-full flex flex-col justify-between">
//                     <div>
//                       <h3 className="text-2xl font-bold mb-1 text-slate-900">{member.name}</h3>
//                       <p className="text-blue-600 text-sm font-semibold mb-6 uppercase tracking-wide">{member.role}</p>
                      
//                       <div className="mb-8 w-full">
//                         <h4 className="text-left text-slate-500 text-xs font-semibold uppercase tracking-wider mb-3">Expertise</h4>
//                         <div className="grid grid-cols-2 gap-2">
//                           {member.skills.map((skill, index) => (
//                             <span key={index} className="bg-slate-50 text-slate-700 p-2.5 rounded-lg text-xs text-center border border-slate-200 transition-all duration-200 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700">
//                               {skill}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
                    
//                     <div>
//                       <div className="flex justify-center gap-3 mb-8">
//                         {Object.entries(member.social).map(([platform, url]) => (
//                           <a
//                             key={platform}
//                             href={url}
//                             className="relative w-10 h-10 rounded-full flex items-center justify-center text-slate-600 text-lg transition-all duration-300 bg-slate-100 hover:bg-blue-600 hover:text-white hover:-translate-y-1 shadow-sm"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             onClick={(e) => e.stopPropagation()}
//                           >
//                             {getSocialIcon(platform)}
//                             <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white px-3 py-1.5 rounded-md text-xs whitespace-nowrap opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:-bottom-9 z-10 pointer-events-none">
//                               {platform}
//                               <span className="absolute -top-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-b-slate-800" />
//                             </span>
//                           </a>
//                         ))}
//                       </div>
                      
//                       <button 
//                         className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2"
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           window.location.href = `mailto:${member.social.email}`;
//                         }}
//                       >
//                         <FaEnvelope /> Contact
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Join Team CTA - Light theme */}
//         <motion.div 
//           className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-16 text-center relative overflow-hidden shadow-2xl"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.4 }}
//         >
//           <div className="absolute inset-0 opacity-10">
//             <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl" />
//             <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full blur-3xl" />
//           </div>
//           <div className="relative z-10">
//             <h3 className="text-4xl md:text-5xl font-bold mb-5 text-white">
//               Want to Join Our Team?
//             </h3>
//             <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
//               We're always looking for talented individuals to join our growing team.
//             </p>
//             <div className="flex gap-5 justify-center flex-wrap">
//               <button className="px-10 py-5 bg-white text-blue-600 rounded-2xl text-lg font-semibold shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl min-w-[220px]">
//                 View Open Positions
//               </button>
//               <button className="px-10 py-5 bg-transparent text-white border-2 border-white/30 rounded-2xl text-lg font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white hover:-translate-y-1 min-w-[220px]">
//                 Send Your CV
//               </button>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Custom CSS for 3D flip */}
//       <style jsx>{`
//         .perspective-1000 {
//           perspective: 1000px;
//         }
//         .transform-style-3d {
//           transform-style: preserve-3d;
//         }
//         .backface-hidden {
//           -webkit-backface-visibility: hidden;
//           backface-visibility: hidden;
//         }
//         .rotate-y-180 {
//           transform: rotateY(180deg);
//         }
//         .group:hover .group-hover\\:rotate-y-180 {
//           transform: rotateY(180deg);
//         }
//       `}</style>
//     </section>
//   );
// };

// export default TeamSection;


















import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaTwitter, 
  FaLinkedin, 
  FaGithub, 
  FaInstagram,
  FaEnvelope,
  FaGlobe,
  FaQuoteLeft,
  FaAward,
  FaUserFriends,
  FaMapPin
} from 'react-icons/fa';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Alex Morgan",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      bio: "Full-stack developer with 10+ years of experience in web technologies.",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        email: "alex@example.com"
      },
      skills: ["React", "Node.js", "TypeScript", "AWS"],
      featured: true,
      projects: 42
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b786d4c2",
      bio: "Creating beautiful and functional user interfaces for over 8 years.",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        dribbble: "https://dribbble.com",
        email: "sarah@example.com"
      },
      skills: ["Figma", "Sketch", "UI Design", "Prototyping"],
      featured: true,
      projects: 38
    },
    {
      id: 3,
      name: "Marcus Rodriguez",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      bio: "Expert in agile methodologies and delivering projects on time.",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        website: "https://example.com",
        email: "marcus@example.com"
      },
      skills: ["Agile", "Scrum", "JIRA", "Team Leadership"],
      featured: false,
      projects: 56
    },
    {
      id: 4,
      name: "Emma Wilson",
      role: "Frontend Developer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      bio: "Passionate about creating responsive and accessible web applications.",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        codepen: "https://codepen.io",
        email: "emma@example.com"
      },
      skills: ["JavaScript", "Vue.js", "SASS", "Webpack"],
      featured: false,
      projects: 31
    },
    {
      id: 5,
      name: "David Kim",
      role: "DevOps Engineer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      bio: "Building scalable infrastructure and automating deployment pipelines.",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "david@example.com"
      },
      skills: ["Docker", "Kubernetes", "CI/CD", "AWS"],
      featured: true,
      projects: 27
    },
    {
      id: 6,
      name: "Olivia Parker",
      role: "QA Specialist",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
      bio: "Ensuring quality and reliability of software products.",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "olivia@example.com"
      },
      skills: ["Testing", "Automation", "Selenium", "Jest"],
      featured: false,
      projects: 49
    },
    {
      id: 7,
      name: "James Miller",
      role: "Backend Developer",
      image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
      bio: "Building robust APIs and database architectures.",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        stackoverflow: "https://stackoverflow.com",
        email: "james@example.com"
      },
      skills: ["Python", "Django", "PostgreSQL", "Redis"],
      featured: true,
      projects: 33
    },
    {
      id: 8,
      name: "Lisa Thompson",
      role: "Mobile Developer",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      bio: "Creating native and cross-platform mobile applications.",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "lisa@example.com"
      },
      skills: ["React Native", "Flutter", "iOS", "Android"],
      featured: false,
      projects: 29
    }
  ];

  const stats = [
    { value: "50+", label: "Projects Completed", icon: <FaAward /> },
    { value: "8", label: "Team Members", icon: <FaUserFriends /> },
    { value: "95%", label: "Client Satisfaction", icon: <FaQuoteLeft /> },
    { value: "5+", label: "Years Experience", icon: <FaGlobe /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    },
    hover: {
      y: -15,
      scale: 1.03,
      transition: { type: "spring", stiffness: 400 }
    }
  };

  const getSocialIcon = (platform) => {
    switch(platform) {
      case 'twitter': return <FaTwitter />;
      case 'linkedin': return <FaLinkedin />;
      case 'github': return <FaGithub />;
      case 'instagram': return <FaInstagram />;
      case 'email': return <FaEnvelope />;
      case 'website': return <FaGlobe />;
      default: return <FaGlobe />;
    }
  };

  return (
    <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-800 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.15),transparent_50%)]" />
      </div>
      
      <div className="max-w-[1400px] mx-auto px-5 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-sm font-semibold tracking-wider mb-5 uppercase shadow-md">
            Our Team
          </span>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-5 text-slate-900 tracking-tight">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Experts</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A dedicated team of professionals passionate about creating amazing experiences
          </p>
        </motion.div>

        {/* Stats - Clean cards without blur */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 flex items-center gap-5 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 border border-slate-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-2xl text-white shadow-md">
                {stat.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-4xl font-bold text-slate-900 mb-1">
                  {stat.value}
                </h3>
                <p className="text-slate-600 text-base font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Team Grid - Enhanced Cards */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              className={`team-card relative perspective-1000 h-[540px] cursor-pointer group ${member.featured ? 'featured' : ''}`}
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Featured glow effect - subtle */}
              {member.featured && (
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl blur opacity-0 group-hover:opacity-70 transition duration-500" />
              )}
              
              <div className="team-card-inner relative w-full h-full text-center transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
                {/* Card Front - Refined Design */}
                <div className={`absolute w-full h-full backface-hidden rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-xl flex flex-col ${member.featured ? 'rounded-2xl' : ''}`}>
                  <div className="relative h-[250px] overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" 
                    />
                    {/* Gradient overlay for better text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                    
                    {member.featured && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                        <FaAward className="text-white" /> Featured
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-slate-900 mb-0.5">{member.name}</h3>
                      <p className="text-blue-600 text-sm font-semibold uppercase tracking-wide">{member.role}</p>
                    </div>
                    
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">{member.bio}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.skills.slice(0, 3).map((skill, index) => (
                        <span key={index} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg text-xs font-medium border border-slate-200">
                          {skill}
                        </span>
                      ))}
                      {member.skills.length > 3 && (
                        <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg text-xs font-medium border border-slate-200">
                          +{member.skills.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <div className="pt-3 border-t border-slate-200 flex justify-between items-center">
                      <span className="text-emerald-600 text-sm font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                        {member.projects} Projects
                      </span>
                      <span className="text-slate-400 text-xs flex items-center gap-1">
                        Flip <span className="text-base leading-none">↻</span>
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Card Back - Clean & Professional */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white border border-slate-200 rounded-2xl p-7 flex flex-col shadow-xl">
                  <div className="flex-1 flex flex-col">
                    <div className="text-left mb-6">
                      <h3 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h3>
                      <p className="text-blue-600 text-sm font-semibold uppercase tracking-wide">{member.role}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-left text-slate-500 text-xs font-semibold uppercase tracking-wider mb-3">Expertise</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {member.skills.map((skill, index) => (
                          <span key={index} className="bg-slate-50 text-slate-700 p-2.5 rounded-lg text-xs text-center border border-slate-200 transition-all duration-200 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <div className="flex justify-center gap-3 mb-6">
                        {Object.entries(member.social).map(([platform, url]) => (
                          <a
                            key={platform}
                            href={url}
                            className="relative w-10 h-10 rounded-full flex items-center justify-center text-slate-600 text-lg transition-all duration-300 bg-slate-100 hover:bg-blue-600 hover:text-white hover:-translate-y-1 shadow-sm"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {getSocialIcon(platform)}
                            {/* <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white px-3 py-1.5 rounded-md text-xs whitespace-nowrap opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:-bottom-9 z-10 pointer-events-none">
                              {platform}
                              <span className="absolute -top-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-b-slate-800" />
                            </span> */}
                          </a>
                        ))}
                      </div>
                      
                      <button 
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.location.href = `mailto:${member.social.email}`;
                        }}
                      >
                        <FaEnvelope /> Contact
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Join Team CTA */}
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-16 text-center relative overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full blur-3xl" />
          </div>
          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-bold mb-5 text-white">
              Want to Join Our Team?
            </h3>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              We're always looking for talented individuals to join our growing team.
            </p>
            <div className="flex gap-5 justify-center flex-wrap">
              <button className="px-10 py-5 bg-white text-blue-600 rounded-2xl text-lg font-semibold shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl min-w-[220px]">
                View Open Positions
              </button>
              <button className="px-10 py-5 bg-transparent text-white border-2 border-white/30 rounded-2xl text-lg font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white hover:-translate-y-1 min-w-[220px]">
                Send Your CV
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Custom CSS for 3D flip */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group:hover .group-hover\\:rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default TeamSection;
















// import React from 'react';
// import { motion } from 'framer-motion';
// import { 
//   FaTwitter, 
//   FaLinkedin, 
//   FaGithub, 
//   FaInstagram,
//   FaEnvelope,
//   FaGlobe,
//   FaQuoteLeft,
//   FaAward,
//   FaUserFriends
// } from 'react-icons/fa';

// const TeamSection = () => {
// const teamMembers = [
//     {
//       id: 1,
//       name: "Alex Morgan",
//       role: "Lead Developer",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
//       bio: "Full-stack developer with 10+ years of experience in web technologies.",
//       social: {
//         twitter: "https://twitter.com",
//         linkedin: "https://linkedin.com",
//         github: "https://github.com",
//         email: "alex@example.com"
//       },
//       skills: ["React", "Node.js", "TypeScript", "AWS"],
//       featured: true,
//       projects: 42
//     },
//     {
//       id: 2,
//       name: "Sarah Chen",
//       role: "UI/UX Designer",
//       image: "https://images.unsplash.com/photo-1494790108755-2616b786d4c2",
//       bio: "Creating beautiful and functional user interfaces for over 8 years.",
//       social: {
//         twitter: "https://twitter.com",
//         linkedin: "https://linkedin.com",
//         dribbble: "https://dribbble.com",
//         email: "sarah@example.com"
//       },
//       skills: ["Figma", "Sketch", "UI Design", "Prototyping"],
//       featured: true,
//       projects: 38
//     },
//     {
//       id: 3,
//       name: "Marcus Rodriguez",
//       role: "Project Manager",
//       image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
//       bio: "Expert in agile methodologies and delivering projects on time.",
//       social: {
//         linkedin: "https://linkedin.com",
//         twitter: "https://twitter.com",
//         website: "https://example.com",
//         email: "marcus@example.com"
//       },
//       skills: ["Agile", "Scrum", "JIRA", "Team Leadership"],
//       featured: false,
//       projects: 56
//     },
//     {
//       id: 4,
//       name: "Emma Wilson",
//       role: "Frontend Developer",
//       image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
//       bio: "Passionate about creating responsive and accessible web applications.",
//       social: {
//         github: "https://github.com",
//         linkedin: "https://linkedin.com",
//         codepen: "https://codepen.io",
//         email: "emma@example.com"
//       },
//       skills: ["JavaScript", "Vue.js", "SASS", "Webpack"],
//       featured: false,
//       projects: 31
//     },
//     {
//       id: 5,
//       name: "David Kim",
//       role: "DevOps Engineer",
//       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
//       bio: "Building scalable infrastructure and automating deployment pipelines.",
//       social: {
//         github: "https://github.com",
//         linkedin: "https://linkedin.com",
//         twitter: "https://twitter.com",
//         email: "david@example.com"
//       },
//       skills: ["Docker", "Kubernetes", "CI/CD", "AWS"],
//       featured: true,
//       projects: 27
//     },
//     {
//       id: 6,
//       name: "Olivia Parker",
//       role: "QA Specialist",
//       image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
//       bio: "Ensuring quality and reliability of software products.",
//       social: {
//         linkedin: "https://linkedin.com",
//         twitter: "https://twitter.com",
//         email: "olivia@example.com"
//       },
//       skills: ["Testing", "Automation", "Selenium", "Jest"],
//       featured: false,
//       projects: 49
//     },
//     {
//       id: 7,
//       name: "James Miller",
//       role: "Backend Developer",
//       image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
//       bio: "Building robust APIs and database architectures.",
//       social: {
//         github: "https://github.com",
//         linkedin: "https://linkedin.com",
//         stackoverflow: "https://stackoverflow.com",
//         email: "james@example.com"
//       },
//       skills: ["Python", "Django", "PostgreSQL", "Redis"],
//       featured: true,
//       projects: 33
//     },
//     {
//       id: 8,
//       name: "Lisa Thompson",
//       role: "Mobile Developer",
//       image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
//       bio: "Creating native and cross-platform mobile applications.",
//       social: {
//         github: "https://github.com",
//         linkedin: "https://linkedin.com",
//         twitter: "https://twitter.com",
//         email: "lisa@example.com"
//       },
//       skills: ["React Native", "Flutter", "iOS", "Android"],
//       featured: false,
//       projects: 29
//     }
//   ];

//   const stats = [
//     { value: "50+", label: "Projects Completed", icon: <FaAward /> },
//     { value: "8", label: "Team Members", icon: <FaUserFriends /> },
//     { value: "95%", label: "Client Satisfaction", icon: <FaQuoteLeft /> },
//     { value: "5+", label: "Years Experience", icon: <FaGlobe /> }
//   ];


//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1 }
//     }
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { type: "spring", stiffness: 100 }
//     },
//     hover: {
//       y: -15,
//       scale: 1.03,
//       transition: { type: "spring", stiffness: 400 }
//     }
//   };

//   const getSocialIcon = (platform) => {
//     // ... (same function)
//   };

//   return (
//     <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-800 relative overflow-hidden">
//       {/* Subtle background pattern */}
//       <div className="absolute inset-0 opacity-5 pointer-events-none">
//         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]" />
//         <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.15),transparent_50%)]" />
//       </div>
      
//       <div className="max-w-[1400px] mx-auto px-5 relative z-10">
//         {/* Header unchanged */}
//         <motion.div 
//           className="text-center mb-20"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           <span className="inline-block px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-sm font-semibold tracking-wider mb-5 uppercase shadow-md">
//             Our Team
//           </span>
//           <h2 className="text-5xl md:text-6xl font-extrabold mb-5 text-slate-900 tracking-tight">
//             Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Experts</span>
//           </h2>
//           <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
//             A dedicated team of professionals passionate about creating amazing experiences
//           </p>
//         </motion.div>

//         {/* Stats - Solid cards with consistent styling */}
//         <motion.div 
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2 }}
//         >
//           {stats.map((stat, index) => (
//             <div 
//               key={index} 
//               className="bg-white rounded-2xl p-8 flex items-center gap-5 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1 border border-slate-100"
//             >
//               <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-2xl text-white shadow-md">
//                 {stat.icon}
//               </div>
//               <div className="flex-1">
//                 <h3 className="text-4xl font-bold text-slate-900 mb-1">{stat.value}</h3>
//                 <p className="text-slate-600 text-base font-medium">{stat.label}</p>
//               </div>
//             </div>
//           ))}
//         </motion.div>

//         {/* Team Grid - Refined cards with no gaps */}
//         <motion.div 
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mb-20"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           {teamMembers.map((member) => (
//             <motion.div
//               key={member.id}
//               className={`team-card relative perspective-1000 h-[560px] cursor-pointer group ${member.featured ? 'featured' : ''}`}
//               variants={cardVariants}
//               whileHover="hover"
//             >
//               {/* Featured subtle glow - only on hover, no blur */}
//               {member.featured && (
//                 <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-70 transition duration-500" />
//               )}
              
//               <div className="team-card-inner relative w-full h-full text-center transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
//                 {/* Card Front - Solid background, no gaps */}
//                 <div className="absolute w-full h-full backface-hidden rounded-2xl overflow-hidden bg-white shadow-lg flex flex-col">
//                   {/* Image container - increased height */}
//                   <div className="relative h-[260px] overflow-hidden flex-shrink-0">
//                     <img 
//                       src={member.image} 
//                       alt={member.name} 
//                       className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" 
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
//                     {member.featured && (
//                       <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-lg">
//                         <FaAward className="text-white" /> Featured
//                       </div>
//                     )}
//                   </div>
                  
//                   {/* Content area - fills remaining space */}
//                   <div className="p-6 flex-1 flex flex-col">
//                     <div className="mb-3">
//                       <h3 className="text-xl font-bold text-slate-900 leading-tight">{member.name}</h3>
//                       <p className="text-blue-600 text-sm font-semibold uppercase tracking-wide">{member.role}</p>
//                     </div>
                    
//                     <p className="text-slate-600 text-sm leading-relaxed mb-3 flex-1 line-clamp-3">{member.bio}</p>
                    
//                     <div className="flex flex-wrap gap-2 mb-3">
//                       {member.skills.slice(0, 3).map((skill, index) => (
//                         <span key={index} className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg text-xs font-medium border border-slate-200">
//                           {skill}
//                         </span>
//                       ))}
//                       {member.skills.length > 3 && (
//                         <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg text-xs font-medium border border-slate-200">
//                           +{member.skills.length - 3}
//                         </span>
//                       )}
//                     </div>
                    
//                     <div className="pt-2 border-t border-slate-200 flex justify-between items-center mt-auto">
//                       <span className="text-emerald-600 text-sm font-semibold flex items-center gap-1">
//                         <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
//                         {member.projects} Projects
//                       </span>
//                       <span className="text-slate-400 text-xs flex items-center gap-1">
//                         Flip <span className="text-base leading-none">↻</span>
//                       </span>
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Card Back - Solid background, increased padding */}
//                 <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-2xl shadow-lg flex flex-col p-7">
//                   <div className="flex-1 flex flex-col">
//                     <div className="mb-5">
//                       <h3 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h3>
//                       <p className="text-blue-600 text-sm font-semibold uppercase tracking-wide">{member.role}</p>
//                     </div>
                    
//                     <div className="mb-5 flex-1">
//                       <h4 className="text-left text-slate-500 text-xs font-semibold uppercase tracking-wider mb-3">Expertise</h4>
//                       <div className="grid grid-cols-2 gap-2">
//                         {member.skills.map((skill, index) => (
//                           <span key={index} className="bg-slate-50 text-slate-700 p-2.5 rounded-lg text-xs text-center border border-slate-200 transition-all duration-200 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700">
//                             {skill}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
                    
//                     <div>
//                       <div className="flex justify-center gap-3 mb-5">
//                         {Object.entries(member.social).map(([platform, url]) => (
//                           <a
//                             key={platform}
//                             href={url}
//                             className="relative w-10 h-10 rounded-full flex items-center justify-center text-slate-600 text-lg transition-all duration-300 bg-slate-100 hover:bg-blue-600 hover:text-white hover:-translate-y-1 shadow-sm"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             onClick={(e) => e.stopPropagation()}
//                           >
//                             {getSocialIcon(platform)}
//                             <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white px-3 py-1.5 rounded-md text-xs whitespace-nowrap opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:-bottom-9 z-10 pointer-events-none">
//                               {platform}
//                               <span className="absolute -top-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-b-slate-800" />
//                             </span>
//                           </a>
//                         ))}
//                       </div>
                      
//                       <button 
//                         className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2"
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           window.location.href = `mailto:${member.social.email}`;
//                         }}
//                       >
//                         <FaEnvelope /> Contact
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Join Team CTA unchanged */}
//         <motion.div 
//           className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-16 text-center relative overflow-hidden shadow-2xl"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.4 }}
//         >
//           <div className="absolute inset-0 opacity-10">
//             <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl" />
//             <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full blur-3xl" />
//           </div>
//           <div className="relative z-10">
//             <h3 className="text-4xl md:text-5xl font-bold mb-5 text-white">
//               Want to Join Our Team?
//             </h3>
//             <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
//               We're always looking for talented individuals to join our growing team.
//             </p>
//             <div className="flex gap-5 justify-center flex-wrap">
//               <button className="px-10 py-5 bg-white text-blue-600 rounded-2xl text-lg font-semibold shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl min-w-[220px]">
//                 View Open Positions
//               </button>
//               <button className="px-10 py-5 bg-transparent text-white border-2 border-white/30 rounded-2xl text-lg font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white hover:-translate-y-1 min-w-[220px]">
//                 Send Your CV
//               </button>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Custom CSS for 3D flip */}
//       <style jsx>{`
//         .perspective-1000 {
//           perspective: 1000px;
//         }
//         .transform-style-3d {
//           transform-style: preserve-3d;
//         }
//         .backface-hidden {
//           -webkit-backface-visibility: hidden;
//           backface-visibility: hidden;
//         }
//         .rotate-y-180 {
//           transform: rotateY(180deg);
//         }
//         .group:hover .group-hover\\:rotate-y-180 {
//           transform: rotateY(180deg);
//         }
//         .line-clamp-3 {
//           display: -webkit-box;
//           -webkit-line-clamp: 3;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default TeamSection;