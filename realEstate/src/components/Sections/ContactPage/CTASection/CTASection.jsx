// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaPhone, FaWhatsapp, FaComments } from 'react-icons/fa';
// import './CTASection.css';

// const CTASection = () => {
//   return (
//     <section className="cta-section">
//       <div className="container">
//         <motion.div
//           className="cta-content"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           <h2>Ready to take the next step?</h2>
//           <p>Our team is standing by to assist you with any real estate need.</p>
//           <div className="cta-buttons">
//             <a href="tel:+18001234567" className="cta-btn primary"><FaPhone /> Call now</a>
//             <a href="#" className="cta-btn secondary"><FaWhatsapp /> WhatsApp</a>
//             <a href="#" className="cta-btn outline"><FaComments /> Live chat</a>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default CTASection;





























// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaPhone, FaWhatsapp, FaComments } from 'react-icons/fa';

// const CTASection = () => {
//   return (
//     <section className="py-20 md:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
//       {/* Decorative background elements */}
//       <div className="absolute inset-0 opacity-10 pointer-events-none">
//         <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
//       </div>

//       <div className="max-w-4xl mx-auto px-5 md:px-6 relative z-10">
//         <motion.div
//           className="text-center"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-blue-200 rounded-full text-sm font-semibold uppercase tracking-wider mb-6 border border-white/20">
//             Get Started Today
//           </span>
          
//           <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white leading-tight">
//             Ready to take the next step?
//           </h2>
          
//           <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
//             Our team is standing by to assist you with any real estate need.
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
//             {/* Call Now Button */}
//             <motion.a
//               href="tel:+18001234567"
//               className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 border border-blue-400/30"
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               <FaPhone className="text-blue-200 group-hover:rotate-12 transition-transform" />
//               Call now
//               <span className="absolute -top-2 -right-2 w-5 h-5 bg-green-500 rounded-full border-2 border-white animate-pulse" />
//             </motion.a>

//             {/* WhatsApp Button */}
//             <motion.a
//               href="#"
//               className="group px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 border border-green-400/30"
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               <FaWhatsapp className="text-green-100 group-hover:scale-110 transition-transform" />
//               WhatsApp
//             </motion.a>

//             {/* Live Chat Button */}
//             <motion.a
//               href="#"
//               className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 border-2 border-white/30 hover:border-white/50"
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               <FaComments className="text-blue-300 group-hover:text-white transition-colors" />
//               Live chat
//             </motion.a>
//           </div>

//           {/* Trust badge */}
//           <p className="text-blue-200/80 text-sm mt-8 flex items-center justify-center gap-2">
//             <span className="inline-block w-1.5 h-1.5 bg-green-400 rounded-full" />
//             Average response time: under 2 minutes
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default CTASection;


















import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaWhatsapp, FaComments, FaEnvelope, FaArrowRight } from 'react-icons/fa';

const CTASection = () => {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-5xl mx-auto px-5 md:px-6 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-gray-200 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-gray-700 font-medium">Available 24/7 for urgent matters</span>
          </motion.div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-gray-900 leading-tight">
            Ready to Find Your{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Dream Property
            </span>
            ?
          </h2>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Our dedicated team of real estate experts is standing by to assist you with personalized guidance.
          </p>

          {/* Contact Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto mb-10">
            {/* Call Option */}
            <motion.a
              href="tel:+18001234567"
              className="group relative bg-white p-6 rounded-2xl shadow-md hover:shadow-xl border border-gray-200 transition-all duration-300 hover:border-blue-300"
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl mb-4 mx-auto group-hover:scale-110 transition-transform">
                <FaPhone />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Call Us</h3>
              <p className="text-gray-600 text-sm mb-3">Speak directly with an agent</p>
              <span className="inline-flex items-center gap-1 text-blue-600 font-semibold group-hover:gap-2 transition-all">
                +1 (800) 123‑4567 <FaArrowRight className="text-xs" />
              </span>
            </motion.a>

            {/* WhatsApp Option */}
            <motion.a
              href="#"
              className="group relative bg-white p-6 rounded-2xl shadow-md hover:shadow-xl border border-gray-200 transition-all duration-300 hover:border-green-300"
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-xl mb-4 mx-auto group-hover:scale-110 transition-transform">
                <FaWhatsapp />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">WhatsApp</h3>
              <p className="text-gray-600 text-sm mb-3">Quick chat & property photos</p>
              <span className="inline-flex items-center gap-1 text-green-600 font-semibold group-hover:gap-2 transition-all">
                Start Chat <FaArrowRight className="text-xs" />
              </span>
            </motion.a>

            {/* Email Option */}
            <motion.a
              href="mailto:hello@realestate.com"
              className="group relative bg-white p-6 rounded-2xl shadow-md hover:shadow-xl border border-gray-200 transition-all duration-300 hover:border-indigo-300"
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-xl mb-4 mx-auto group-hover:scale-110 transition-transform">
                <FaEnvelope />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Email Us</h3>
              <p className="text-gray-600 text-sm mb-3">Get a detailed written response</p>
              <span className="inline-flex items-center gap-1 text-indigo-600 font-semibold group-hover:gap-2 transition-all">
                hello@realestate.com <FaArrowRight className="text-xs" />
              </span>
            </motion.a>
          </div>

          {/* Primary CTA Button */}
          <motion.button
            className="px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-3 text-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaComments /> Start Live Chat Now
          </motion.button>

          {/* Trust message */}
          <p className="text-gray-500 text-sm mt-8">
            <span className="inline-flex items-center gap-1">
              <span className="text-yellow-400">★★★★★</span> 4.9/5 from 1,500+ reviews
            </span>
          </p>
        </motion.div>
      </div>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default CTASection;