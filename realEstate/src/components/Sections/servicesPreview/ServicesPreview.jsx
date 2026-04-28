// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { 
//   FaHome, 
//   FaMoneyBillWave, 
//   FaBuilding, 
//   FaChartLine, 
//   FaBalanceScale,
//   FaShieldAlt,
//   FaTools,
//   FaClipboardCheck
// } from 'react-icons/fa';
// import './ServicesPreview.css';

// const ServicesPreview = () => {
//   const [activeService, setActiveService] = useState(null);

//   const services = [
//     {
//       id: 1,
//       title: "Property Buying",
//       icon: <FaHome />,
//       description: "Full-service property acquisition with expert guidance",
//       features: ["Market Analysis", "Property Search", "Negotiation", "Closing"],
//       color: "#3a86ff",
//       stats: { completed: "1500+", satisfaction: "98%" }
//     },
//     {
//       id: 2,
//       title: "Property Selling",
//       icon: <FaMoneyBillWave />,
//       description: "Maximize your property value with our selling strategy",
//       features: ["Valuation", "Marketing", "Showings", "Paperwork"],
//       color: "#4cc9f0",
//       stats: { completed: "1200+", satisfaction: "97%" }
//     },
//     {
//       id: 3,
//       title: "Property Management",
//       icon: <FaBuilding />,
//       description: "Comprehensive property management services",
//       features: ["Tenant Screening", "Maintenance", "Rent Collection", "Inspections"],
//       color: "#64ffda",
//       stats: { completed: "800+", satisfaction: "99%" }
//     },
//     {
//       id: 4,
//       title: "Investment Consulting",
//       icon: <FaChartLine />,
//       description: "Strategic real estate investment advice",
//       features: ["Portfolio Analysis", "Market Research", "Risk Assessment", "ROI Planning"],
//       color: "#ff6b6b",
//       stats: { completed: "500+", satisfaction: "96%" }
//     },
//     {
//       id: 5,
//       title: "Legal Assistance",
//       icon: <FaBalanceScale />,
//       description: "Expert legal guidance for all real estate transactions",
//       features: ["Contract Review", "Title Search", "Compliance", "Dispute Resolution"],
//       color: "#7209b7",
//       stats: { completed: "300+", satisfaction: "100%" }
//     },
//     {
//       id: 6,
//       title: "Home Staging",
//       icon: <FaTools />,
//       description: "Transform properties for maximum appeal and value",
//       features: ["Design Consultation", "Furniture Rental", "Decor Selection", "Photography"],
//       color: "#f72585",
//       stats: { completed: "700+", satisfaction: "98%" }
//     }
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
//     },
//     hover: {
//       y: -10,
//       scale: 1.02,
//       transition: { type: "spring", stiffness: 400 }
//     }
//   };

//   const processSteps = [
//     { step: 1, title: "Consultation", description: "Understand your needs and goals" },
//     { step: 2, title: "Planning", description: "Develop customized strategy" },
//     { step: 3, title: "Execution", description: "Implement the plan effectively" },
//     { step: 4, title: "Support", description: "Ongoing assistance and follow-up" }
//   ];

//   return (
//     <section className="services-preview bg-light">
//       <div className="container">
//         <motion.div 
//           className="section-header"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="section-title">Our Premium Services</h2>
//           <p className="section-subtitle">Comprehensive real estate solutions for every need</p>
//         </motion.div>

//         {/* Services Grid */}
//         <motion.div 
//           className="services-grid"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           {services.map((service, index) => (
//             <motion.div
//               key={service.id}
//               className={`service-card ${activeService === service.id ? 'active' : ''}`}
//               variants={itemVariants}
//               custom={index}
//               whileHover="hover"
//               onClick={() => setActiveService(service.id === activeService ? null : service.id)}
//             >
//               <div 
//                 className="service-icon"
//                 style={{ backgroundColor: `${service.color}20`, color: service.color }}
//               >
//                 {service.icon}
//               </div>
              
//               <h3 className="service-title">{service.title}</h3>
//               <p className="service-description">{service.description}</p>
              
//               <div className="service-stats">
//                 <div className="stat">
//                   <div className="stat-value">{service.stats.completed}</div>
//                   <div className="stat-label">Projects</div>
//                 </div>
//                 <div className="stat">
//                   <div className="stat-value">{service.stats.satisfaction}</div>
//                   <div className="stat-label">Satisfaction</div>
//                 </div>
//               </div>

//               {/* Features List */}
//               <div className="service-features">
//                 {service.features.map((feature, idx) => (
//                   <span key={idx} className="feature-tag">
//                     {feature}
//                   </span>
//                 ))}
//               </div>

//               {/* Expandable Content */}
//               <motion.div 
//                 className="expanded-content"
//                 initial={{ height: 0, opacity: 0 }}
//                 animate={{ 
//                   height: activeService === service.id ? 'auto' : 0,
//                   opacity: activeService === service.id ? 1 : 0
//                 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <div className="expanded-details">
//                   <h4>What's Included:</h4>
//                   <ul>
//                     {service.features.map((feature, idx) => (
//                       <li key={idx}>✓ {feature}</li>
//                     ))}
//                   </ul>
//                   <button className="learn-more-btn">Learn More</button>
//                 </div>
//               </motion.div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Process Timeline */}
//         <motion.div 
//           className="process-timeline"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.3 }}
//         >
//           <h3 className="process-title">Our 4-Step Process</h3>
//           <div className="timeline">
//             {processSteps.map((step, index) => (
//               <motion.div 
//                 key={step.step}
//                 className="timeline-step"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <div className="step-number">{step.step}</div>
//                 <h4>{step.title}</h4>
//                 <p>{step.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* CTA */}
//         <motion.div 
//           className="service-cta"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.5 }}
//         >
//           <h3>Need Professional Real Estate Services?</h3>
//           <p>Our experts are ready to help you achieve your real estate goals.</p>
//           <div className="cta-buttons">
//             <motion.button 
//               className="cta-btn primary"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Get Free Consultation
//             </motion.button>
//             <motion.button 
//               className="cta-btn secondary"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               View All Services
//             </motion.button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ServicesPreview;















import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaHome, 
  FaMoneyBillWave, 
  FaBuilding, 
  FaChartLine, 
  FaBalanceScale,
  FaTools
} from 'react-icons/fa';

const ServicesPreview = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Property Buying",
      icon: <FaHome />,
      description: "Full-service property acquisition with expert guidance",
      features: ["Market Analysis", "Property Search", "Negotiation", "Closing"],
      color: "#3a86ff",
      stats: { completed: "1500+", satisfaction: "98%" }
    },
    {
      id: 2,
      title: "Property Selling",
      icon: <FaMoneyBillWave />,
      description: "Maximize your property value with our selling strategy",
      features: ["Valuation", "Marketing", "Showings", "Paperwork"],
      color: "#4cc9f0",
      stats: { completed: "1200+", satisfaction: "97%" }
    },
    {
      id: 3,
      title: "Property Management",
      icon: <FaBuilding />,
      description: "Comprehensive property management services",
      features: ["Tenant Screening", "Maintenance", "Rent Collection", "Inspections"],
      color: "#64ffda",
      stats: { completed: "800+", satisfaction: "99%" }
    },
    {
      id: 4,
      title: "Investment Consulting",
      icon: <FaChartLine />,
      description: "Strategic real estate investment advice",
      features: ["Portfolio Analysis", "Market Research", "Risk Assessment", "ROI Planning"],
      color: "#ff6b6b",
      stats: { completed: "500+", satisfaction: "96%" }
    },
    {
      id: 5,
      title: "Legal Assistance",
      icon: <FaBalanceScale />,
      description: "Expert legal guidance for all real estate transactions",
      features: ["Contract Review", "Title Search", "Compliance", "Dispute Resolution"],
      color: "#7209b7",
      stats: { completed: "300+", satisfaction: "100%" }
    },
    {
      id: 6,
      title: "Home Staging",
      icon: <FaTools />,
      description: "Transform properties for maximum appeal and value",
      features: ["Design Consultation", "Furniture Rental", "Decor Selection", "Photography"],
      color: "#f72585",
      stats: { completed: "700+", satisfaction: "98%" }
    }
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
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: { type: "spring", stiffness: 400 }
    }
  };

  const processSteps = [
    { step: 1, title: "Consultation", description: "Understand your needs and goals" },
    { step: 2, title: "Planning", description: "Develop customized strategy" },
    { step: 3, title: "Execution", description: "Implement the plan effectively" },
    { step: 4, title: "Support", description: "Ongoing assistance and follow-up" }
  ];

  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#3a86ff] to-[#4cc9f0] bg-clip-text text-transparent">
            Our Premium Services
          </h2>
          <p className="text-xl text-[#64748b] max-w-2xl mx-auto">
            Comprehensive real estate solutions for every need
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className={`
                bg-white rounded-2xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)] 
                cursor-pointer transition-all duration-300 relative overflow-hidden
                hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                ${activeService === service.id ? 'border-2 border-[#3a86ff]' : ''}
              `}
              variants={itemVariants}
              whileHover="hover"
              onClick={() => setActiveService(service.id === activeService ? null : service.id)}
            >
              {/* Service Icon */}
              <div 
                className="w-[70px] h-[70px] rounded-2xl flex items-center justify-center text-4xl mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-[5deg]"
                style={{ backgroundColor: `${service.color}20`, color: service.color }}
              >
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-[#1e293b] mb-4">{service.title}</h3>
              <p className="text-[#64748b] leading-relaxed mb-6">{service.description}</p>
              
              {/* Service Stats */}
              <div className="flex gap-8 mb-6 pb-6 border-b border-[#e2e8f0]">
                <div className="text-center">
                  <div className="text-3xl font-extrabold text-[#3a86ff] leading-none">{service.stats.completed}</div>
                  <div className="text-sm text-[#64748b] mt-1">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-extrabold text-[#3a86ff] leading-none">{service.stats.satisfaction}</div>
                  <div className="text-sm text-[#64748b] mt-1">Satisfaction</div>
                </div>
              </div>

              {/* Features Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature, idx) => (
                  <span 
                    key={idx} 
                    className="bg-[#f1f5f9] text-[#1e293b] px-4 py-2 rounded-2xl text-sm font-medium transition-all duration-300 group-hover:bg-[#3a86ff] group-hover:text-white"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Expandable Content */}
              <motion.div 
                className="overflow-hidden"
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: activeService === service.id ? 'auto' : 0,
                  opacity: activeService === service.id ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="pt-6 border-t border-[#e2e8f0]">
                  <h4 className="text-xl text-[#1e293b] mb-4">What's Included:</h4>
                  <ul className="list-none p-0 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-[#64748b] mb-2 flex items-center gap-2">
                        ✓ {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-3 bg-transparent border-2 border-[#3a86ff] rounded-xl text-[#3a86ff] font-semibold transition-all duration-300 hover:bg-[#3a86ff] hover:text-white">
                    Learn More
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Timeline */}
        <motion.div 
          className="bg-white rounded-2xl p-12 mb-16 shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-center text-3xl text-[#1e293b] mb-12">Our 4-Step Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Timeline Line - visible on desktop */}
            <div className="hidden md:block absolute top-10 left-0 right-0 h-[3px] bg-gradient-to-r from-[#3a86ff] to-[#4cc9f0] z-0" />
            {processSteps.map((step, index) => (
              <motion.div 
                key={step.step}
                className="text-center relative z-10 px-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-20 h-20 bg-white border-[3px] border-[#3a86ff] rounded-full flex items-center justify-center text-3xl font-extrabold text-[#3a86ff] mx-auto mb-6 relative">
                  {step.step}
                </div>
                <h4 className="text-xl text-[#1e293b] mb-2">{step.title}</h4>
                <p className="text-[#64748b] leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center p-16 bg-gradient-to-r from-[#3a86ff] to-[#4cc9f0] rounded-2xl text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-4xl mb-4">Need Professional Real Estate Services?</h3>
          <p className="text-xl mb-8 opacity-90">Our experts are ready to help you achieve your real estate goals.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <motion.button 
              className="px-10 py-4 bg-white text-[#3a86ff] rounded-xl text-lg font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free Consultation
            </motion.button>
            <motion.button 
              className="px-10 py-4 bg-transparent text-white border-2 border-white rounded-xl text-lg font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Services
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;