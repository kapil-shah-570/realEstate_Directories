// import React from 'react';
// import { motion } from 'framer-motion';
// import './ContactCTA.css';

// const ContactCTA = () => {
//   // Animation variants with more fluid transitions
//   const containerVariants = {
//     hidden: {
//       opacity: 0,
//       y: 50
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         staggerChildren: 0.2,
//         when: "beforeChildren"
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { 
//       opacity: 0, 
//       y: 30,
//       scale: 0.95 
//     },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       scale: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 12
//       }
//     }
//   };

//   // Handle phone number click safely
//   const handlePhoneClick = (e) => {
//     e.preventDefault();
//     const phoneNumber = "+918434249577";
//     try {
//       // For web - create tel link
//       window.location.href = `tel:${phoneNumber}`;
//     } catch (error) {
//       console.error("Error initiating phone call:", error);
//       // Fallback: show phone number
//       alert(`Please call: ${phoneNumber}`);
//     }
//   };

//   // Handle contact form navigation
//   const handleContactClick = (e) => {
//     e.preventDefault();
//     try {
//       // Check if we're on the same page to avoid unnecessary navigation
//       if (window.location.pathname !== '/contact') {
//         window.location.href = '/contact';
//       }
//     } catch (error) {
//       console.error("Navigation error:", error);
//     }
//   };

//   return (
//     <motion.section 
//       className="contact-cta-section"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.3, margin: "-50px" }}
//       variants={containerVariants}
//     >
//       <div className="container_contact">
//         <div className="contact-cta-content">
//           <motion.h2 
//             className="cta-title" 
//             variants={itemVariants}
//           >
//             Ready to Find Your Dream Property?
//           </motion.h2>
          
//           <motion.p 
//             className="cta-subtitle" 
//             variants={itemVariants}
//           >
//             Our team of experts is here to guide you every step of the way. 
//             Whether you're buying, selling, or investing, we have the tools 
//             and expertise to help you succeed.
//           </motion.p>
          
//           <motion.div 
//             className="cta-buttons" 
//             variants={itemVariants}
//           >
//             <motion.a 
//               href="/contact" 
//               className="cta-btn primary"
//               onClick={handleContactClick}
//               whileHover={{ 
//                 scale: 1.05,
//                 boxShadow: "0 10px 25px rgba(37, 99, 235, 0.3)"
//               }}
//               whileTap={{ scale: 0.95 }}
//               aria-label="Contact us for real estate assistance"
//             >
//               Contact Us Now
//             </motion.a>
            
//             <motion.a 
//               href="tel:+918434249577" 
//               className="cta-btn secondary"
//               onClick={handlePhoneClick}
//               whileHover={{ 
//                 scale: 1.05,
//                 boxShadow: "0 10px 25px rgba(255, 255, 255, 0.2)"
//               }}
//               whileTap={{ scale: 0.95 }}
//               aria-label="Call us at +91 84342 49577"
//             >
//               <svg 
//                 xmlns="http://www.w3.org/2000/svg" 
//                 className="phone-icon" 
//                 viewBox="0 0 24 24" 
//                 fill="currentColor"
//                 aria-hidden="true"
//               >
//                 <path 
//                   fillRule="evenodd" 
//                   d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" 
//                   clipRule="evenodd" 
//                 />
//               </svg>
//               +91 84342 49577
//             </motion.a>
//           </motion.div>
          
//           <motion.p 
//             className="cta-note" 
//             variants={itemVariants}
//           >
//             Schedule a free consultation today. No obligation, just expert advice.
//           </motion.p>
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// // Add PropTypes for better development
// // ContactCTA.propTypes = {};

// export default ContactCTA;





















// import React from 'react';
// import { motion } from 'framer-motion';

// const ContactCTA = () => {
//   // Animation variants with more fluid transitions
//   const containerVariants = {
//     hidden: {
//       opacity: 0,
//       y: 50
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         staggerChildren: 0.2,
//         when: "beforeChildren"
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { 
//       opacity: 0, 
//       y: 30,
//       scale: 0.95 
//     },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       scale: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 12
//       }
//     }
//   };

//   // Handle phone number click safely
//   const handlePhoneClick = (e) => {
//     e.preventDefault();
//     const phoneNumber = "+918434249577";
//     try {
//       window.location.href = `tel:${phoneNumber}`;
//     } catch (error) {
//       console.error("Error initiating phone call:", error);
//       alert(`Please call: ${phoneNumber}`);
//     }
//   };

//   // Handle contact form navigation
//   const handleContactClick = (e) => {
//     e.preventDefault();
//     try {
//       if (window.location.pathname !== '/contact') {
//         window.location.href = '/contact';
//       }
//     } catch (error) {
//       console.error("Navigation error:", error);
//     }
//   };

//   return (
//     <motion.section 
//       className="relative py-24 md:py-28 overflow-hidden bg-gradient-to-br from-[#0a0f1c] to-[#101b2b]"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.3, margin: "-50px" }}
//       variants={containerVariants}
//     >
//       {/* Radial gradient overlays */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.12),transparent_50%)]" />
//         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.12),transparent_50%)]" />
//       </div>

//       <div className="max-w-5xl mx-auto px-5 relative z-10">
//         <div className="py-12 md:py-16 px-5 md:px-10 rounded-3xl shadow-[0_20px_40px_-12px_rgba(0,0,0,0.25)] bg-transparent">
//           <div className="text-center max-w-4xl mx-auto">
//             <motion.h2 
//               className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
//               variants={itemVariants}
//             >
//               <span className="bg-gradient-to-r from-white to-[#e2e8f0] bg-clip-text text-transparent">
//                 Ready to Find Your Dream Property?
//               </span>
//             </motion.h2>
            
//             <motion.p 
//               className="text-lg md:text-xl text-[#cbd5e1] leading-relaxed mb-10 max-w-3xl mx-auto"
//               variants={itemVariants}
//             >
//               Our team of experts is here to guide you every step of the way. 
//               Whether you're buying, selling, or investing, we have the tools 
//               and expertise to help you succeed.
//             </motion.p>
            
//             <motion.div 
//               className="flex flex-wrap gap-5 justify-center mb-8"
//               variants={itemVariants}
//             >
//               <motion.a 
//                 href="/contact" 
//                 className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-lg font-semibold no-underline transition-all duration-300 min-w-[220px] bg-gradient-to-r from-[#2563eb] to-[#1e40af] text-white shadow-[0_4px_20px_rgba(37,99,235,0.3)] border-2 border-transparent hover:border-[#60a5fa] hover:from-[#1e40af] hover:to-[#1e3a8a]"
//                 onClick={handleContactClick}
//                 whileHover={{ 
//                   scale: 1.05,
//                   boxShadow: "0 10px 25px rgba(37, 99, 235, 0.3)"
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 aria-label="Contact us for real estate assistance"
//               >
//                 Contact Us Now
//               </motion.a>
              
//               <motion.a 
//                 href="tel:+918434249577" 
//                 className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-lg font-semibold no-underline transition-all duration-300 min-w-[220px] bg-white/8 backdrop-blur-md text-white border-2 border-white/15 hover:bg-white/12 hover:border-white/25"
//                 onClick={handlePhoneClick}
//                 whileHover={{ 
//                   scale: 1.05,
//                   boxShadow: "0 10px 25px rgba(255, 255, 255, 0.2)"
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 aria-label="Call us at +91 84342 49577"
//               >
//                 <svg 
//                   xmlns="http://www.w3.org/2000/svg" 
//                   className="w-5 h-5 flex-shrink-0" 
//                   viewBox="0 0 24 24" 
//                   fill="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path 
//                     fillRule="evenodd" 
//                     d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" 
//                     clipRule="evenodd" 
//                   />
//                 </svg>
//                 +91 84342 49577
//               </motion.a>
//             </motion.div>
            
//             <motion.p 
//               className="text-[#94a3b8] text-base italic"
//               variants={itemVariants}
//             >
//               Schedule a free consultation today. No obligation, just expert advice.
//             </motion.p>
//           </div>
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default ContactCTA;










import React from 'react';
import { motion } from 'framer-motion';

const ContactCTA = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  const handlePhoneClick = (e) => {
    e.preventDefault();
    const phoneNumber = "+918434249577";
    try {
      window.location.href = `tel:${phoneNumber}`;
    } catch (error) {
      console.error("Error initiating phone call:", error);
      alert(`Please call: ${phoneNumber}`);
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    try {
      if (window.location.pathname !== '/contact') {
        window.location.href = '/contact';
      }
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };

  return (
    <motion.section 
      className="relative py-24 md:py-28 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-100"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3, margin: "-50px" }}
      variants={containerVariants}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.08),transparent_50%)]" />
      </div>

      <div className="max-w-5xl mx-auto px-5 relative z-10">
        <div className="py-12 md:py-16 px-5 md:px-10 rounded-3xl shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] bg-white/60 backdrop-blur-sm border border-white">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-[#1e293b] to-[#334155] bg-clip-text text-transparent">
                Ready to Find Your Dream Property?
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl text-[#475569] leading-relaxed mb-10 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Our team of experts is here to guide you every step of the way. 
              Whether you're buying, selling, or investing, we have the tools 
              and expertise to help you succeed.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-5 justify-center mb-8"
              variants={itemVariants}
            >
              <motion.a 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-lg font-semibold no-underline transition-all duration-300 min-w-[220px] bg-gradient-to-r from-[#3a86ff] to-[#2563eb] text-white shadow-[0_4px_20px_rgba(58,134,255,0.25)] border-2 border-transparent hover:border-white hover:from-[#2563eb] hover:to-[#1d4ed8]"
                onClick={handleContactClick}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(58, 134, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                aria-label="Contact us for real estate assistance"
              >
                Contact Us Now
              </motion.a>
              
              <motion.a 
                href="tel:+918434249577" 
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-lg font-semibold no-underline transition-all duration-300 min-w-[220px] bg-white text-[#1e293b] border-2 border-[#e2e8f0] shadow-sm hover:bg-gray-50 hover:border-[#3a86ff] hover:shadow-md"
                onClick={handlePhoneClick}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                aria-label="Call us at +91 84342 49577"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-5 h-5 flex-shrink-0 text-[#3a86ff]" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" 
                    clipRule="evenodd" 
                  />
                </svg>
                +91 84342 49577
              </motion.a>
            </motion.div>
            
            <motion.p 
              className="text-[#64748b] text-base italic"
              variants={itemVariants}
            >
              Schedule a free consultation today. No obligation, just expert advice.
            </motion.p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactCTA;