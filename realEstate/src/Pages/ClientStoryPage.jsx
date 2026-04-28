// import React from 'react';
// import { useParams, Link, Navigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { FaArrowLeft, FaStar, FaCalendarAlt, FaBuilding, FaQuoteLeft } from 'react-icons/fa';
// import { clientStories, clientTestimonials } from '../data/clientsData';

// const ClientStoryPage = () => {
//   const { type, id } = useParams();
//   const storyId = Number(id);

//   if (!type || !Number.isFinite(storyId)) {
//     return <Navigate to="/clients" replace />;
//   }

//   const content =
//     type === 'story'
//       ? clientStories.find((item) => item.id === storyId)
//       : clientTestimonials.find((item) => item.id === storyId);

//   if (!content) {
//     return <Navigate to="/clients" replace />;
//   }

//   const isStory = type === 'story';

//   return (
//     <motion.div
//       className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     >
//       <div className="max-w-6xl mx-auto px-5 py-10 md:py-16">
//         <Link
//           to="/clients"
//           className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all mb-8"
//         >
//           <FaArrowLeft /> Back to Clients
//         </Link>

//         <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8">
//           <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
//             <div className="relative h-64 md:h-80 bg-slate-100 overflow-hidden">
//               <img
//                 src={content.image || (isStory ? 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750' : 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e')}
//                 alt={content.title || content.name}
//                 className="w-full h-full object-cover"
//                 loading="lazy"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
//               <div className="absolute bottom-5 left-5 right-5 text-white">
//                 <p className="text-xs uppercase tracking-[0.25em] text-blue-100 mb-2">
//                   {isStory ? 'Case Study' : 'Testimonial'}
//                 </p>
//                 <h1 className="text-2xl md:text-4xl font-extrabold">
//                   {content.title || content.name}
//                 </h1>
//               </div>
//             </div>

//             <div className="p-8 md:p-10 border-b border-gray-100">
//               <div className="flex items-center gap-3 mb-5">
//                 <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-100">
//                   {isStory ? 'Case Study' : 'Testimonial'}
//                 </span>
//                 <span className="inline-flex items-center gap-2 text-gray-500 text-sm">
//                   <FaCalendarAlt /> {content.date || 'Recent'}
//                 </span>
//               </div>

//               <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
//                 {content.description || content.summary || content.role}
//               </p>
//             </div>

//             <div className="p-8 md:p-10 space-y-8">
//               {(content.highlights || content.tags)?.length ? (
//                 <div className="grid sm:grid-cols-3 gap-4">
//                   {(content.highlights || content.tags).slice(0, 3).map((item) => (
//                     <div key={item} className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
//                       <p className="text-sm text-gray-500 mb-1">Highlight</p>
//                       <p className="font-semibold text-gray-900">{item}</p>
//                     </div>
//                   ))}
//                 </div>
//               ) : null}

//               <div className="prose max-w-none text-gray-700 leading-relaxed">
//                 {(content.fullText || content.text || content.description || '')
//                   .split('\n')
//                   .filter(Boolean)
//                   .map((para, index) => <p key={index}>{para}</p>)}
//               </div>

//               {isStory && content.timeline?.length ? (
//                 <div>
//                   <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Timeline</h2>
//                   <div className="space-y-3">
//                     {content.timeline.map((step, index) => (
//                       <div
//                         key={step}
//                         className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4"
//                       >
//                         <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
//                           {index + 1}
//                         </div>
//                         <p className="text-gray-700">{step}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ) : null}
//             </div>
//           </div>

//           <div className="space-y-6">
//             <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl">
//               <div className="flex items-center gap-3 mb-4">
//                 {isStory ? content.icon : <FaQuoteLeft className="text-3xl text-blue-300" />}
//               </div>
//               <p className="text-sm uppercase tracking-[0.2em] text-blue-200 mb-2">
//                 {isStory ? 'Client Impact' : 'Client Feedback'}
//               </p>
//               <div className="text-4xl font-extrabold mb-2">
//                 {content.metric || `${content.rating}/5`}
//               </div>
//               <p className="text-blue-100">{content.metricLabel || 'Rating'}</p>
//             </div>

//             <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-6">
//               <h2 className="text-xl font-bold text-gray-900 mb-4">Client Details</h2>
//               <div className="space-y-4 text-sm">
//                 <div className="flex items-center justify-between gap-4">
//                   <span className="text-gray-500">Client</span>
//                   <span className="font-semibold text-gray-900">
//                     {content.client || content.company || content.name}
//                   </span>
//                 </div>
//                 <div className="flex items-center justify-between gap-4">
//                   <span className="text-gray-500">Category</span>
//                   <span className="font-semibold text-gray-900">
//                     {content.category || content.role}
//                   </span>
//                 </div>
//                 {!isStory && (
//                   <div className="flex items-center justify-between gap-4">
//                     <span className="text-gray-500">Location</span>
//                     <span className="font-semibold text-gray-900">{content.location}</span>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {!isStory && (
//               <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-6">
//                 <h2 className="text-xl font-bold text-gray-900 mb-4">Rating</h2>
//                 <div className="flex items-center gap-1 mb-3">
//                   {Array.from({ length: Math.max(1, Number(content.rating) || 5) }).map((_, index) => (
//                     <FaStar key={index} className="text-yellow-500" />
//                   ))}
//                 </div>
//                 <p className="text-gray-600">{content.summary || content.fullText}</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default ClientStoryPage;























import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaArrowLeft,
  FaStar,
  FaCalendarAlt,
  FaBuilding,
  FaQuoteLeft,
  FaChartLine,
  FaHome,
  FaCity,
  FaHandshake,
} from 'react-icons/fa';

// ---- Inline data (no external file needed) ----
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
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    date: 'March 2024',
    highlights: ['3 New Offices', '15% Lease Savings', '6‑Month Timeline'],
    timeline: [
      'Market analysis and location scouting',
      'Negotiation and lease structuring',
      'Fit‑out and move‑in coordination',
    ],
    category: 'Commercial Real Estate',
    fullText:
      'Global Finance needed a rapid expansion into three key markets. Our team identified undervalued office spaces, negotiated aggressive lease terms, and managed the entire relocation process. The result was a 15% reduction in occupancy costs and a fully operational presence in under six months.',
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
    image:
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    date: 'February 2024',
    highlights: ['200% Growth', '12 Properties', '2‑Year Plan'],
    timeline: [
      'Portfolio audit and gap analysis',
      'Targeted acquisition strategy',
      'Ongoing asset management',
    ],
    category: 'Investment',
    fullText:
      'Starting with a single rental property, the client wanted to scale rapidly. We developed a data‑driven acquisition plan, identified undervalued assets, and managed the purchase and renovation of 12 additional units. In two years, the portfolio value increased by 200% while maintaining positive cash flow.',
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
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    date: 'January 2024',
    highlights: ['Record Sale', '10% Over Asking', 'Global Marketing'],
    timeline: [
      'Strategic pricing and staging',
      'International multi‑channel marketing',
      'Multiple offer negotiation',
    ],
    category: 'Luxury Sales',
    fullText:
      'The waterfront estate required a bespoke marketing approach. We produced cinematic video tours, targeted high‑net‑worth buyers globally, and orchestrated a competitive bidding process. The home sold for 10% above the asking price, setting a new benchmark for Miami Beach luxury real estate.',
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
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    date: 'December 2023',
    highlights: ['Mixed‑Use', '300+ Units', 'Revitalization'],
    timeline: [
      'Feasibility study and zoning',
      'Design and community engagement',
      'Construction and leasing',
    ],
    category: 'Development',
    fullText:
      'The abandoned mall was a blight on the community. We partnered with the city to repurpose the 20‑acre site into a vibrant mixed‑use development. The project now includes 300 rental apartments, 50,000 sqft of retail, and public green space, creating jobs and revitalizing the neighborhood.',
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
    image:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    date: 'November 2023',
    highlights: ['20 Transactions', '6 Months', 'Regional Record'],
    timeline: [
      'Portfolio evaluation and pricing',
      'Targeted buyer outreach',
      'Simultaneous closings coordination',
    ],
    category: 'Luxury Sales',
    fullText:
      'A developer needed to liquidate a luxury home inventory quickly. We implemented an aggressive go‑to‑market strategy, leveraging our network of international buyers and staging every property to perfection. All 20 homes sold within six months, achieving above‑market prices and setting a new regional sales record.',
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
      'EstatePro helped us find the perfect commercial space for our headquarters. Their attention to detail and market knowledge was outstanding.',
    fullText:
      'EstatePro helped us find the perfect commercial space for our headquarters. Their attention to detail and market knowledge was outstanding. From the initial search to the final signing, they were responsive and professional. I would recommend them to any business looking for premium real estate.',
    rating: 5,
    date: 'March 2024',
    location: 'New York, NY',
    company: 'TechCorp',
    category: 'Commercial',
  },
  {
    id: 2,
    name: 'Maria S.',
    role: 'Investor',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    summary:
      'Working with EstatePro has been a game‑changer. They consistently deliver above‑market returns and exceptional service.',
    fullText:
      'Working with EstatePro has been a game‑changer. They consistently deliver above‑market returns and exceptional service. Their team identified undervalued properties and managed the entire acquisition and renovation process. My portfolio has grown exponentially thanks to their expertise.',
    rating: 5,
    date: 'February 2024',
    location: 'Miami, FL',
    company: 'Private Investor',
    category: 'Investment',
  },
  {
    id: 3,
    name: 'David L.',
    role: 'Homeowner',
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    summary:
      'From first viewing to closing, the team made the entire process seamless and stress‑free. Highly recommended!',
    fullText:
      'From first viewing to closing, the team made the entire process seamless and stress‑free. Highly recommended! As a first‑time homebuyer, I was nervous, but EstatePro guided me every step of the way. They negotiated a great deal and were always available for questions.',
    rating: 5,
    date: 'January 2024',
    location: 'Chicago, IL',
    company: '',
    category: 'Residential',
  },
  {
    id: 4,
    name: 'Samantha W.',
    role: 'First‑time Buyer',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    summary:
      'As a first‑time buyer, I was nervous, but EstatePro guided me through every step with patience and expertise.',
    fullText:
      'As a first‑time buyer, I was nervous, but EstatePro guided me through every step with patience and expertise. They explained everything clearly, helped me find the perfect starter home, and even connected me with a great mortgage broker. I am so grateful for their support.',
    rating: 5,
    date: 'December 2023',
    location: 'Austin, TX',
    company: '',
    category: 'Residential',
  },
];

// ---- Main Component ----
const ClientStoryPage = () => {
  const { type, id } = useParams();
  const storyId = Number(id);
  const isStory = type === 'story';
  const isTestimonial = type === 'testimonial';

  // Guard against invalid params
  if ((!isStory && !isTestimonial) || !Number.isFinite(storyId)) {
    return <Navigate to="/clients" replace />;
  }

  const content = isStory
    ? clientStories.find((item) => item.id === storyId)
    : clientTestimonials.find((item) => item.id === storyId);

  if (!content) {
    return <Navigate to="/clients" replace />;
  }

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-6xl mx-auto px-5 py-10 md:py-16">
        <Link
          to="/clients"
          className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all mb-8"
        >
          <FaArrowLeft /> Back to Clients
        </Link>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8">
          {/* Main Content */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="relative h-64 md:h-80 bg-slate-100 overflow-hidden">
              <img
                src={
                  content.image ||
                  (isStory
                    ? 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750'
                    : 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e')
                }
                alt={content.title || content.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="text-xs uppercase tracking-[0.25em] text-blue-100 mb-2">
                  {isStory ? 'Case Study' : 'Testimonial'}
                </p>
                <h1 className="text-2xl md:text-4xl font-extrabold">
                  {content.title || content.name}
                </h1>
              </div>
            </div>

            <div className="p-8 md:p-10 border-b border-gray-100">
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-100">
                  {isStory ? 'Case Study' : 'Testimonial'}
                </span>
                <span className="inline-flex items-center gap-2 text-gray-500 text-sm">
                  <FaCalendarAlt /> {content.date || 'Recent'}
                </span>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
                {content.description || content.summary || content.role}
              </p>
            </div>

            <div className="p-8 md:p-10 space-y-8">
              {/* Highlights / Tags */}
              {(content.highlights || content.tags)?.length ? (
                <div className="grid sm:grid-cols-3 gap-4">
                  {(content.highlights || content.tags).slice(0, 3).map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-slate-50 border border-slate-200 p-4"
                    >
                      <p className="text-sm text-gray-500 mb-1">Highlight</p>
                      <p className="font-semibold text-gray-900">{item}</p>
                    </div>
                  ))}
                </div>
              ) : null}

              {/* Full text */}
              <div className="prose max-w-none text-gray-700 leading-relaxed">
                {(content.fullText || content.text || content.description || '')
                  .split('\n')
                  .filter(Boolean)
                  .map((para, index) => (
                    <p key={index}>{para}</p>
                  ))}
              </div>

              {/* Timeline for stories */}
              {isStory && content.timeline?.length ? (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Project Timeline
                  </h2>
                  <div className="space-y-3">
                    {content.timeline.map((step, index) => (
                      <div
                        key={step}
                        className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4"
                      >
                        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        <p className="text-gray-700">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                {isStory ? (
                  content.icon
                ) : (
                  <FaQuoteLeft className="text-3xl text-blue-300" />
                )}
              </div>
              <p className="text-sm uppercase tracking-[0.2em] text-blue-200 mb-2">
                {isStory ? 'Client Impact' : 'Client Feedback'}
              </p>
              <div className="text-4xl font-extrabold mb-2">
                {content.metric || `${content.rating}/5`}
              </div>
              <p className="text-blue-100">
                {content.metricLabel || 'Rating'}
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Client Details
              </h2>
              <div className="space-y-4 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-gray-500">Client</span>
                  <span className="font-semibold text-gray-900">
                    {content.client || content.company || content.name}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-gray-500">Category</span>
                  <span className="font-semibold text-gray-900">
                    {content.category || content.role}
                  </span>
                </div>
                {!isStory && (
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-gray-500">Location</span>
                    <span className="font-semibold text-gray-900">
                      {content.location || '—'}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {!isStory && (
              <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Rating</h2>
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({
                    length: Math.max(1, Number(content.rating) || 5),
                  }).map((_, index) => (
                    <FaStar key={index} className="text-yellow-500 text-xl" />
                  ))}
                </div>
                <p className="text-gray-600">
                  {content.summary || content.fullText}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ClientStoryPage;