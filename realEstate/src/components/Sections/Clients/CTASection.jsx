// import React from 'react';
// import { FaHandshake, FaArrowRight } from 'react-icons/fa';

// const CTASection = () => {
//   return (
//     <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
//       <div className="max-w-4xl mx-auto px-5 text-center">
//         <h2 className="text-3xl md:text-4xl font-bold mb-6">
//           Ready to Become a Client?
//         </h2>
//         <p className="text-xl text-blue-100 mb-8">
//           Partner with EstatePro and experience the difference.
//         </p>
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <a
//             href="/contact"
//             className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all"
//           >
//             <FaHandshake /> Get in Touch
//           </a>
//           <a
//             href="/services"
//             className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-all"
//           >
//             <FaArrowRight /> View Services
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CTASection;






























import React from 'react';
import { motion } from 'framer-motion';
import { FaHandshake, FaArrowRight } from 'react-icons/fa';

const CTASection = () => {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-[120px] opacity-60 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 rounded-full blur-[120px] opacity-60 translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-5">
        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 md:p-14 shadow-xl border border-gray-200 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold uppercase tracking-wider mb-6 border border-blue-200">
            🚀 Let's Work Together
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Ready to Become a Client?
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Partner with EstatePro and experience the difference. Our team is dedicated to delivering exceptional results tailored to your needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaHandshake /> Get in Touch
              <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </motion.a>

            <motion.a
              href="/services"
              className="group inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-300 text-gray-800 font-bold px-8 py-4 rounded-full shadow-sm hover:shadow-md hover:border-blue-400 hover:text-blue-600 transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaArrowRight /> View Services
            </motion.a>
          </div>

          <p className="text-gray-500 text-sm mt-8">
            No commitment required – we're here to answer your questions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;