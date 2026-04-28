// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaStar, FaQuoteLeft } from 'react-icons/fa';

// const testimonials = [
//   {
//     id: 1,
//     name: 'Robert J.',
//     role: 'CEO, TechCorp',
//     text: 'EstatePro helped us find the perfect commercial space for our headquarters. Their attention to detail and market knowledge was outstanding.',
//     rating: 5,
//   },
//   {
//     id: 2,
//     name: 'Maria S.',
//     role: 'Investor',
//     text: 'Working with EstatePro has been a game‑changer. They consistently deliver above‑market returns and exceptional service.',
//     rating: 5,
//   },
//   {
//     id: 3,
//     name: 'David L.',
//     role: 'Homeowner',
//     text: 'From first viewing to closing, the team made the entire process seamless and stress‑free. Highly recommended!',
//     rating: 5,
//   },
// ];

// const Testimonials = () => {
//   return (
//     <section className="py-16 md:py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-5">
//         <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
//           What Our Clients Say
//         </h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {testimonials.map((test) => (
//             <motion.div
//               key={test.id}
//               className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-200"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//             >
//               <FaQuoteLeft className="text-blue-500 text-2xl mb-4" />
//               <p className="text-gray-700 italic mb-6">"{test.text}"</p>
//               <div className="flex items-center gap-2 mb-2">
//                 {Array.from({ length: test.rating }).map((_, i) => (
//                   <FaStar key={i} className="text-yellow-500" />
//                 ))}
//               </div>
//               <p className="font-bold text-gray-900">{test.name}</p>
//               <p className="text-sm text-gray-500">{test.role}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
























import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { clientTestimonials as testimonials } from '../../../data/clientsData';

const Testimonials = () => {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[150px] opacity-50 translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-100 rounded-full blur-[150px] opacity-50 -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-200/80 backdrop-blur-sm text-blue-800 rounded-full text-sm font-semibold uppercase tracking-wider mb-4 border border-blue-300">
            ⭐ Client Love
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real feedback from the people we've served.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={test.id}
              className="group bg-white rounded-2xl p-6 shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="text-blue-500 text-3xl mb-4" />

              {/* Testimonial Text */}
              <p className="text-gray-700 italic flex-1 mb-6">"{test.text}"</p>

              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: test.rating }).map((_, i) => (
                  <FaStar key={i} className="text-yellow-500 text-lg" />
                ))}
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={test.image}
                  alt={test.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div>
                  <p className="font-bold text-gray-900">{test.name}</p>
                  <p className="text-sm text-gray-500">{test.role}</p>
                </div>
              </div>

              {/* Read More Link */}
              <Link
                to={`/clients/testimonial/${test.id}`}
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all mt-auto"
              >
                Read Full Story <FaArrowRight className="text-sm" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
