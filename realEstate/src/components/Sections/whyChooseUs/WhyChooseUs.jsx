// import React, { useRef } from 'react';
// import { motion } from 'framer-motion';
// import { FaAward, FaUsers, FaShieldAlt, FaChartLine, FaClock, FaHandshake } from 'react-icons/fa';
// import CountUp from 'react-countup';
// import './WhyChooseUs.css';

// const WhyChooseUs = () => {
//   const features = [
//     {
//       icon: <FaAward />,
//       title: "Award Winning",
//       description: "Multiple industry awards for excellence in real estate services",
//       color: "#3a86ff",
//       count: 25
//     },
//     {
//       icon: <FaUsers />,
//       title: "Expert Team",
//       description: "Highly qualified professionals with extensive market knowledge",
//       color: "#4cc9f0",
//       count: 50
//     },
//     {
//       icon: <FaShieldAlt />,
//       title: "Trust & Security",
//       description: "Your transactions are protected with highest security standards",
//       color: "#64ffda",
//       count: 100
//     },
//     {
//       icon: <FaChartLine />,
//       title: "Market Leaders",
//       description: "Consistently outperforming market averages for our clients",
//       color: "#ff6b6b",
//       count: 98
//     },
//     {
//       icon: <FaClock />,
//       title: "24/7 Support",
//       description: "Round-the-clock assistance for all your real estate needs",
//       color: "#7209b7",
//       count: 100
//     },
//     {
//       icon: <FaHandshake />,
//       title: "Client Focused",
//       description: "Personalized solutions tailored to your specific requirements",
//       color: "#f72585",
//       count: 100
//     }
//   ];

//   const stats = [
//     { value: 15, label: "Years Experience", suffix: "+" },
//     { value: 5000, label: "Properties Sold", suffix: "+" },
//     { value: 1500, label: "Happy Clients", suffix: "+" },
//     { value: 98, label: "Satisfaction Rate", suffix: "%" }
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

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { type: "spring", stiffness: 100 }
//     }
//   };

//   return (
//     <section className="why-choose-us">
//       <div className="container">
//         <motion.div 
//           className="section-header"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="section-title">Why Choose EstatePro?</h2>
//           <p className="section-subtitle">Discover what sets us apart in the real estate industry</p>
//         </motion.div>

//         <div className="content-wrapper">
//           {/* Features Grid */}
//           <motion.div 
//             className="features-grid"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//           >
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 className="feature-card"
//                 variants={itemVariants}
//                 whileHover={{ y: -10, scale: 1.02 }}
//               >
//                 <div 
//                   className="feature-icon"
//                   style={{ backgroundColor: `${feature.color}20`, color: feature.color }}
//                 >
//                   {feature.icon}
//                   <motion.div 
//                     className="feature-count"
//                     initial={{ scale: 0 }}
//                     whileInView={{ scale: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.2 + index * 0.1 }}
//                   >
//                     {feature.title === "24/7 Support" ? "24/7" : (
//                       <CountUp
//                         end={feature.count}
//                         duration={2}
//                         suffix={feature.title === "Client Focused" || feature.title === "Trust & Security" ? "%" : "+"}
//                         start={0}
//                       />
//                     )}
//                   </motion.div>
//                 </div>
                
//                 <h3 className="feature-title">{feature.title}</h3>
//                 <p className="feature-description">{feature.description}</p>
                
//                 <div className="feature-progress">
//                   <motion.div 
//                     className="progress-bar"
//                     initial={{ width: 0 }}
//                     whileInView={{ width: `${Math.min(feature.count, 100)}%` }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 2, delay: 0.3 }}
//                     style={{ backgroundColor: feature.color }}
//                   />
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Stats Section */}
//           <motion.div 
//             className="stats-section"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//           >
//             <div className="stats-grid">
//               {stats.map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   className="stat-card"
//                   initial={{ opacity: 0, scale: 0 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
//                 >
//                   <div className="stat-value">
//                     <CountUp
//                       start={0}
//                       end={stat.value}
//                       duration={2.5}
//                       suffix={stat.suffix}
//                       delay={0.5}
//                     />
//                   </div>
//                   <div className="stat-label">{stat.label}</div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Differentiators */}
//           <motion.div 
//             className="differentiators"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ delay: 0.6 }}
//           >
//             <h3 className="differentiators-title">What Makes Us Different</h3>
//             <div className="differentiators-grid">
//               <motion.div 
//                 className="differentiator"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.7 }}
//               >
//                 <div className="diff-icon">🎯</div>
//                 <h4>Precision Matching</h4>
//                 <p>Advanced AI algorithms to match you with perfect properties</p>
//               </motion.div>
//               <motion.div 
//                 className="differentiator"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.8 }}
//               >
//                 <div className="diff-icon">📊</div>
//                 <h4>Data-Driven Insights</h4>
//                 <p>Real-time market analytics for informed decision making</p>
//               </motion.div>
//               <motion.div 
//                 className="differentiator"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.9 }}
//               >
//                 <div className="diff-icon">🤝</div>
//                 <h4>Transparent Process</h4>
//                 <p>Clear communication and no hidden fees throughout</p>
//               </motion.div>
//               <motion.div 
//                 className="differentiator"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 1.0 }}
//               >
//                 <div className="diff-icon">🚀</div>
//                 <h4>Fast Transactions</h4>
//                 <p>Streamlined processes for quicker closings</p>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;






















import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaShieldAlt, FaChartLine, FaClock, FaHandshake } from 'react-icons/fa';
import CountUp from 'react-countup';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaAward />,
      title: "Award Winning",
      description: "Multiple industry awards for excellence in real estate services",
      color: "#3a86ff",
      count: 25
    },
    {
      icon: <FaUsers />,
      title: "Expert Team",
      description: "Highly qualified professionals with extensive market knowledge",
      color: "#4cc9f0",
      count: 50
    },
    {
      icon: <FaShieldAlt />,
      title: "Trust & Security",
      description: "Your transactions are protected with highest security standards",
      color: "#64ffda",
      count: 100
    },
    {
      icon: <FaChartLine />,
      title: "Market Leaders",
      description: "Consistently outperforming market averages for our clients",
      color: "#ff6b6b",
      count: 98
    },
    {
      icon: <FaClock />,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your real estate needs",
      color: "#7209b7",
      count: 100
    },
    {
      icon: <FaHandshake />,
      title: "Client Focused",
      description: "Personalized solutions tailored to your specific requirements",
      color: "#f72585",
      count: 100
    }
  ];

  const stats = [
    { value: 15, label: "Years Experience", suffix: "+" },
    { value: 5000, label: "Properties Sold", suffix: "+" },
    { value: 1500, label: "Happy Clients", suffix: "+" },
    { value: 98, label: "Satisfaction Rate", suffix: "%" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#3a86ff] to-[#64ffda] bg-clip-text text-transparent">
            Why Choose EstatePro?
          </h2>
          <p className="text-xl text-[#64748b] max-w-2xl mx-auto">
            Discover what sets us apart in the real estate industry
          </p>
        </motion.div>

        <div className="flex flex-col gap-16">
          {/* Features Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)] cursor-pointer transition-all duration-300 border border-transparent hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:border-[rgba(58,134,255,0.1)]"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div 
                  className="relative w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-6"
                  style={{ backgroundColor: `${feature.color}20`, color: feature.color }}
                >
                  {feature.icon}
                  <motion.div 
                    className="absolute -top-2 -right-2 bg-white text-[#1e293b] py-1 px-3 rounded-2xl text-sm font-bold shadow-[0_5px_15px_rgba(0,0,0,0.1)] min-w-[50px] text-center origin-center"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    {feature.title === "24/7 Support" ? "24/7" : (
                      <CountUp
                        end={feature.count}
                        duration={2}
                        suffix={feature.title === "Client Focused" || feature.title === "Trust & Security" ? "%" : "+"}
                        enableScrollSpy
                        scrollSpyOnce
                      />
                    )}
                  </motion.div>
                </div>
                
                <h3 className="text-2xl font-bold text-[#1e293b] mb-4">{feature.title}</h3>
                <p className="text-[#64748b] leading-relaxed mb-6">{feature.description}</p>
                
                <div className="h-1.5 bg-[#f1f5f9] rounded overflow-hidden">
                  <motion.div 
                    className="h-full rounded"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${Math.min(feature.count, 100)}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.3 }}
                    style={{ backgroundColor: feature.color }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            className="bg-gradient-to-r from-[#3a86ff] to-[#4cc9f0] rounded-2xl p-16 my-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 transition-all duration-300 hover:bg-white/20 hover:-translate-y-1.5"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
                >
                  <div className="text-5xl font-extrabold text-white leading-none mb-2 font-sans">
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      suffix={stat.suffix}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  </div>
                  <div className="text-lg text-white/90 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Differentiators */}
          <motion.div 
            className="p-12 bg-[#f8fafc] rounded-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-center text-4xl text-[#1e293b] mb-12">What Makes Us Different</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: "🎯", title: "Precision Matching", desc: "Advanced AI algorithms to match you with perfect properties" },
                { icon: "📊", title: "Data-Driven Insights", desc: "Real-time market analytics for informed decision making" },
                { icon: "🤝", title: "Transparent Process", desc: "Clear communication and no hidden fees throughout" },
                { icon: "🚀", title: "Fast Transactions", desc: "Streamlined processes for quicker closings" }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  className="text-center p-8 bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + idx * 0.1 }}
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h4 className="text-xl text-[#1e293b] mb-4">{item.title}</h4>
                  <p className="text-[#64748b] leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;