// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaBuilding, FaChartLine, FaHandshake } from 'react-icons/fa';

// const stories = [
//   {
//     id: 1,
//     title: 'Global Finance Expansion',
//     description: 'Secured three premium office locations across major cities, saving the client 15% on lease costs.',
//     icon: <FaBuilding className="text-blue-600 text-3xl" />,
//   },
//   {
//     id: 2,
//     title: 'Residential Portfolio Growth',
//     description: 'Grew a client’s property portfolio by 200% in two years through strategic acquisitions.',
//     icon: <FaChartLine className="text-green-600 text-3xl" />,
//   },
//   {
//     id: 3,
//     title: 'Landmark Deal',
//     description: 'Closed the largest residential sale in Miami Beach history, exceeding the asking price by 10%.',
//     icon: <FaHandshake className="text-purple-600 text-3xl" />,
//   },
// ];

// const SuccessStories = () => {
//   return (
//     <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
//       <div className="max-w-7xl mx-auto px-5">
//         <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
//           Success Stories
//         </h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {stories.map((story) => (
//             <motion.div
//               key={story.id}
//               className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition-shadow"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//             >
//               <div className="mb-4">{story.icon}</div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">{story.title}</h3>
//               <p className="text-gray-600">{story.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SuccessStories;


















import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { clientStories as stories } from '../../../data/clientsData';

const SuccessStories = () => {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[150px] opacity-60 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-100 rounded-full blur-[150px] opacity-60 translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-200/80 backdrop-blur-sm text-blue-800 rounded-full text-sm font-semibold uppercase tracking-wider mb-4 border border-blue-300">
            📈 Proven Results
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Success Stories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real outcomes we've delivered for our clients.
          </p>
        </motion.div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              className="group bg-white rounded-2xl p-6 shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Icon & Title */}
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-gray-50 rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                  {story.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{story.title}</h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 flex-1 mb-4">{story.description}</p>

              {/* Metric Badge */}
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-full text-sm">
                  {story.metric}
                </span>
                <span className="text-gray-500 text-sm">{story.metricLabel}</span>
              </div>

              {/* Read More Link */}
              <Link
                to={`/clients/story/${story.id}`}
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

export default SuccessStories;
