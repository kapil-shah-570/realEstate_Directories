// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { FaArrowRight, FaStar, FaBuilding, FaHandshake, FaQuoteLeft } from 'react-icons/fa';
// import { clientStories, clientTestimonials } from '../data/clientsData';

// const ClientsPage = () => {
//   const stories = Array.isArray(clientStories) ? clientStories : [];
//   const testimonials = Array.isArray(clientTestimonials) ? clientTestimonials : [];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
//       <section className="relative overflow-hidden bg-white border-b border-gray-200">
//         <div className="absolute inset-0 pointer-events-none">
//           <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-blue-200/30 blur-3xl" />
//           <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-indigo-200/30 blur-3xl" />
//         </div>
//         <div className="relative max-w-7xl mx-auto px-5 py-16 md:py-20">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] items-center"
//           >
//             <div>
//               <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100 text-sm font-semibold mb-4">
//                 <FaHandshake /> Trusted by leading clients
//               </span>
//               <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
//                 Client stories with real impact
//               </h1>
//               <p className="text-lg text-gray-600 max-w-2xl">
//                 Browse the cards below and open each one for a full case study or testimonial detail page.
//               </p>
//             </div>

//             <div className="grid grid-cols-3 gap-4">
//               <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-4 text-center">
//                 <FaBuilding className="mx-auto text-blue-600 text-2xl mb-2" />
//                 <div className="text-2xl font-bold text-gray-900">50+</div>
//                 <div className="text-sm text-gray-500">Projects</div>
//               </div>
//               <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-4 text-center">
//                 <FaStar className="mx-auto text-yellow-500 text-2xl mb-2" />
//                 <div className="text-2xl font-bold text-gray-900">5.0</div>
//                 <div className="text-sm text-gray-500">Rating</div>
//               </div>
//               <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-4 text-center">
//                 <FaHandshake className="mx-auto text-green-600 text-2xl mb-2" />
//                 <div className="text-2xl font-bold text-gray-900">100%</div>
//                 <div className="text-sm text-gray-500">Trust</div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       <section className="py-20 md:py-24">
//         <div className="max-w-7xl mx-auto px-5">
//           <div className="flex items-end justify-between gap-4 mb-10">
//             <div>
//               <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 mb-2">Case Studies</p>
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Success Stories</h2>
//             </div>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {stories.map((story, index) => (
//               <Link key={story.id} to={`/clients/story/${story.id}`} className="block">
//                 <motion.article
//                   className="group bg-white rounded-3xl p-6 shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer"
//                   initial={{ opacity: 0, y: 24 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.08 }}
//                   whileHover={{ y: -4 }}
//                 >
//                   <div className="flex items-start gap-4 mb-4">
//                     <div className="p-3 bg-gray-50 rounded-2xl">{story.icon}</div>
//                     <div>
//                       <h3 className="text-xl font-bold text-gray-900">{story.title}</h3>
//                       <p className="text-sm text-gray-500">{story.client}</p>
//                     </div>
//                   </div>
//                   <p className="text-gray-600 flex-1 mb-4">{story.description}</p>
//                   <div className="flex items-center gap-2 mb-5">
//                     <span className="bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-full text-sm">
//                       {story.metric}
//                     </span>
//                     <span className="text-gray-500 text-sm">{story.metricLabel}</span>
//                   </div>
//                   <span className="inline-flex items-center gap-2 text-blue-600 font-semibold mt-auto">
//                     Read Full Story <FaArrowRight className="text-sm" />
//                   </span>
//                 </motion.article>
//               </Link>
//             ))}
//             {stories.length === 0 && (
//               <div className="col-span-full text-center py-12 text-gray-500">
//                 No client stories available right now.
//               </div>
//             )}
//           </div>
//         </div>
//       </section>

//       <section className="py-20 md:py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-5">
//           <div className="mb-10">
//             <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 mb-2">Testimonials</p>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What our clients say</h2>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {testimonials.map((test, index) => (
//               <Link key={test.id} to={`/clients/testimonial/${test.id}`} className="block">
//                 <motion.article
//                   className="group bg-slate-50 rounded-3xl p-6 shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer"
//                   initial={{ opacity: 0, y: 24 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.08 }}
//                   whileHover={{ y: -4 }}
//                 >
//                   <FaQuoteLeft className="text-blue-500 text-3xl mb-4" />
//                   <p className="text-gray-700 italic flex-1 mb-6">{test.summary || test.fullText}</p>
//                   <div className="flex items-center gap-1 mb-4">
//                     {Array.from({ length: test.rating || 5 }).map((_, i) => (
//                       <FaStar key={i} className="text-yellow-500 text-lg" />
//                     ))}
//                   </div>
//                   <div className="flex items-center gap-4 mb-4">
//                     <img
//                       src={test.image}
//                       alt={test.name}
//                       className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
//                       loading="lazy"
//                       onError={(e) => {
//                         e.currentTarget.style.display = 'none';
//                       }}
//                     />
//                     <div>
//                       <p className="font-bold text-gray-900">{test.name}</p>
//                       <p className="text-sm text-gray-500">{test.role}</p>
//                     </div>
//                   </div>
//                   <span className="inline-flex items-center gap-2 text-blue-600 font-semibold mt-auto">
//                     Read Full Story <FaArrowRight className="text-sm" />
//                   </span>
//                 </motion.article>
//               </Link>
//             ))}
//             {testimonials.length === 0 && (
//               <div className="col-span-full text-center py-12 text-gray-500">
//                 No testimonials available right now.
//               </div>
//             )}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ClientsPage;





























import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaArrowRight,
  FaStar,
  FaBuilding,
  FaHandshake,
  FaQuoteLeft,
  FaChartLine,
  FaHome,
  FaCity,
} from 'react-icons/fa';

// ---- Embedded client data ----
const clientStories = [
  {
    id: 1,
    icon: <FaBuilding className="text-blue-600 text-3xl" />,
    title: 'Global Finance Expansion',
    client: 'Global Finance Inc.',
    description:
      'Secured three premium office locations across major cities, saving the client 15% on lease costs.',
    metric: '15%',
    metricLabel: 'Cost Saved',
  },
  {
    id: 2,
    icon: <FaChartLine className="text-green-600 text-3xl" />,
    title: 'Residential Portfolio Growth',
    client: 'Private Investor',
    description:
      'Grew a client’s property portfolio by 200% in two years through strategic acquisitions.',
    metric: '200%',
    metricLabel: 'Growth',
  },
  {
    id: 3,
    icon: <FaHandshake className="text-purple-600 text-3xl" />,
    title: 'Landmark Deal',
    client: 'Miami Luxury Group',
    description:
      'Closed the largest residential sale in Miami Beach history, exceeding the asking price by 10%.',
    metric: '10%',
    metricLabel: 'Above Asking',
  },
  {
    id: 4,
    icon: <FaCity className="text-orange-600 text-3xl" />,
    title: 'Suburban Redevelopment',
    client: 'City Central LLC',
    description:
      'Converted an abandoned mall into a thriving mixed‑use community with 300+ residential units.',
    metric: '300+',
    metricLabel: 'Units',
  },
  {
    id: 5,
    icon: <FaHome className="text-red-600 text-3xl" />,
    title: 'Luxury Home Sales Surge',
    client: 'Private Seller',
    description:
      'Sold 20 luxury properties in under 6 months, setting a new regional benchmark.',
    metric: '20',
    metricLabel: 'Homes Sold',
  },
];

const clientTestimonials = [
  {
    id: 1,
    name: 'Robert J.',
    role: 'CEO, TechCorp',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    summary:
      "EstatePro helped us find the perfect commercial space for our headquarters. Their attention to detail and market knowledge was outstanding.",
    fullText:
      "EstatePro helped us find the perfect commercial space for our headquarters. Their attention to detail and market knowledge was outstanding.",
    rating: 5,
  },
  {
    id: 2,
    name: 'Maria S.',
    role: 'Investor',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    summary:
      "Working with EstatePro has been a game‑changer. They consistently deliver above‑market returns and exceptional service.",
    fullText:
      "Working with EstatePro has been a game‑changer. They consistently deliver above‑market returns and exceptional service.",
    rating: 5,
  },
  {
    id: 3,
    name: 'David L.',
    role: 'Homeowner',
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    summary:
      "From first viewing to closing, the team made the entire process seamless and stress‑free. Highly recommended!",
    fullText:
      "From first viewing to closing, the team made the entire process seamless and stress‑free. Highly recommended!",
    rating: 5,
  },
  {
    id: 4,
    name: 'Samantha W.',
    role: 'First‑time Buyer',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    summary:
      "As a first‑time buyer, I was nervous, but EstatePro guided me through every step with patience and expertise.",
    fullText:
      "As a first‑time buyer, I was nervous, but EstatePro guided me through every step with patience and expertise.",
    rating: 5,
  },
];

const ClientsPage = () => {
  const stories = clientStories;
  const testimonials = clientTestimonials;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white border-b border-gray-200">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-blue-200/30 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-indigo-200/30 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] items-center"
          >
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100 text-sm font-semibold mb-4">
                <FaHandshake /> Trusted by leading clients
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
                Client stories with real impact
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl">
                Browse the cards below and open each one for a full case study or testimonial detail page.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-4 text-center">
                <FaBuilding className="mx-auto text-blue-600 text-2xl mb-2" />
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-500">Projects</div>
              </div>
              <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-4 text-center">
                <FaStar className="mx-auto text-yellow-500 text-2xl mb-2" />
                <div className="text-2xl font-bold text-gray-900">5.0</div>
                <div className="text-sm text-gray-500">Rating</div>
              </div>
              <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-4 text-center">
                <FaHandshake className="mx-auto text-green-600 text-2xl mb-2" />
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-500">Trust</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 mb-2">
                Case Studies
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Success Stories
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <Link key={story.id} to={`/clients/story/${story.id}`} className="block">
                <motion.article
                  className="group bg-white rounded-3xl p-6 shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-gray-50 rounded-2xl">{story.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{story.title}</h3>
                      <p className="text-sm text-gray-500">{story.client}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 flex-1 mb-4">{story.description}</p>
                  <div className="flex items-center gap-2 mb-5">
                    <span className="bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-full text-sm">
                      {story.metric}
                    </span>
                    <span className="text-gray-500 text-sm">{story.metricLabel}</span>
                  </div>
                  <span className="inline-flex items-center gap-2 text-blue-600 font-semibold mt-auto">
                    Read Full Story <FaArrowRight className="text-sm" />
                  </span>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 mb-2">
              Testimonials
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What our clients say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((test, index) => (
              <Link key={test.id} to={`/clients/testimonial/${test.id}`} className="block">
                <motion.article
                  className="group bg-slate-50 rounded-3xl p-6 shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                >
                  <FaQuoteLeft className="text-blue-500 text-3xl mb-4" />
                  <p className="text-gray-700 italic flex-1 mb-6">
                    {test.summary || test.fullText}
                  </p>
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: test.rating || 5 }).map((_, i) => (
                      <FaStar key={i} className="text-yellow-500 text-lg" />
                    ))}
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={test.image}
                      alt={test.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div>
                      <p className="font-bold text-gray-900">{test.name}</p>
                      <p className="text-sm text-gray-500">{test.role}</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 text-blue-600 font-semibold mt-auto">
                    Read Full Story <FaArrowRight className="text-sm" />
                  </span>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientsPage;