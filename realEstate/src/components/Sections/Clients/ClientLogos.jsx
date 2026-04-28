// import React from 'react';
// import { motion } from 'framer-motion';

// const clientLogos = [
//   { name: 'TechCorp', logo: 'https://via.placeholder.com/150x80?text=TechCorp' },
//   { name: 'BuildRight', logo: 'https://via.placeholder.com/150x80?text=BuildRight' },
//   { name: 'Global Finance', logo: 'https://via.placeholder.com/150x80?text=Global+Finance' },
//   { name: 'Skyline Realty', logo: 'https://via.placeholder.com/150x80?text=Skyline' },
//   { name: 'Ocean Properties', logo: 'https://via.placeholder.com/150x80?text=Ocean' },
//   { name: 'Metro Homes', logo: 'https://via.placeholder.com/150x80?text=Metro' },
// ];

// const ClientLogos = () => {
//   return (
//     <section className="py-16 md:py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-5">
//         <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
//           Trusted by Industry Leaders
//         </h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
//           {clientLogos.map((client, index) => (
//             <motion.div
//               key={index}
//               className="p-4 bg-gray-50 rounded-xl shadow-sm border border-gray-200 w-full flex items-center justify-center"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//             >
//               <img src={client.logo} alt={client.name} className="max-h-12" />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ClientLogos;

























// import React from 'react';
// import { motion } from 'framer-motion';

// const clientLogos = [
//   { name: 'TechCorp', logo: 'https://via.placeholder.com/150x80?text=TechCorp' },
//   { name: 'BuildRight', logo: 'https://via.placeholder.com/150x80?text=BuildRight' },
//   { name: 'Global Finance', logo: 'https://via.placeholder.com/150x80?text=Global+Finance' },
//   { name: 'Skyline Realty', logo: 'https://via.placeholder.com/150x80?text=Skyline' },
//   { name: 'Ocean Properties', logo: 'https://via.placeholder.com/150x80?text=Ocean' },
//   { name: 'Metro Homes', logo: 'https://via.placeholder.com/150x80?text=Metro' },
//   { name: 'Apex Ventures', logo: 'https://via.placeholder.com/150x80?text=Apex' },
//   { name: 'Zenith Group', logo: 'https://via.placeholder.com/150x80?text=Zenith' },
// ];

// const ClientLogos = () => {
//   // Duplicate logos for seamless infinite loop
//   const infiniteLogos = [...clientLogos, ...clientLogos];

//   return (
//     <section className="py-20 md:py-28 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
//       {/* Subtle background glow */}
//       <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2" />

//       <div className="max-w-7xl mx-auto px-5 relative z-10">
//         {/* Header */}
//         <motion.div
//           className="text-center mb-12"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold uppercase tracking-wider mb-4 border border-blue-200">
//             🤝 Trusted Partners
//           </span>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//             Trusted by Industry Leaders
//           </h2>
//           <p className="text-gray-500 mt-2">
//             We're proud to work with some of the world's most respected organizations.
//           </p>
//         </motion.div>

//         {/* Auto‑scrolling logo carousel */}
//         <div className="relative group">
//           {/* Gradient fade overlays on edges */}
//           <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
//           <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

//           <div className="overflow-hidden">
//             <motion.div
//               className="flex gap-8"
//               initial={{ x: 0 }}
//               animate={{ x: '-50%' }}
//               transition={{
//                 repeat: Infinity,
//                 duration: 25,
//                 ease: 'linear',
//                 repeatType: 'loop',
//               }}
//               // Pause animation on hover
//               whileHover={{ animationPlayState: 'paused' }}
//             >
//               {infiniteLogos.map((client, index) => (
//                 <motion.div
//                   key={`${client.name}-${index}`}
//                   className="flex-shrink-0 w-44 h-24 bg-white rounded-2xl shadow-sm border border-gray-200 flex items-center justify-center p-4 hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 cursor-default group/card"
//                   whileHover={{ y: -5 }}
//                 >
//                   <img
//                     src={client.logo}
//                     alt={client.name}
//                     className="max-h-10 max-w-full object-contain"
//                   />
//                   {/* Hidden name tooltip on hover */}
//                   <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-md opacity-0 group-hover/card:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
//                     {client.name}
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ClientLogos;





















// import React from 'react';
// import { motion } from 'framer-motion';

// // Real logos from a stable CDN (no placeholders)
// const featuredClients = [
//   {
//     name: 'Google',
//     logo: 'https://cdnlogo.com/logos/g/76/google.svg',
//     url: '#',
//   },
//   {
//     name: 'Amazon',
//     logo: 'https://cdnlogo.com/logos/a/19/amazon.svg',
//     url: '#',
//   },
//   {
//     name: 'Microsoft',
//     logo: 'https://cdnlogo.com/logos/m/39/microsoft.svg',
//     url: '#',
//   },
//   {
//     name: 'Tesla',
//     logo: 'https://cdnlogo.com/logos/t/65/tesla.svg',
//     url: '#',
//   },
// ];

// const allPartners = [
//   { name: 'Adobe', logo: 'https://cdnlogo.com/logos/a/63/adobe.svg' },
//   { name: 'Airbnb', logo: 'https://cdnlogo.com/logos/a/63/airbnb.svg' },
//   { name: 'Spotify', logo: 'https://cdnlogo.com/logos/s/28/spotify.svg' },
//   { name: 'Slack', logo: 'https://cdnlogo.com/logos/s/11/slack.svg' },
//   { name: 'Netflix', logo: 'https://cdnlogo.com/logos/n/36/netflix.svg' },
//   { name: 'Shopify', logo: 'https://cdnlogo.com/logos/s/38/shopify.svg' },
//   { name: 'Stripe', logo: 'https://cdnlogo.com/logos/s/86/stripe.svg' },
//   { name: 'Uber', logo: 'https://cdnlogo.com/logos/u/4/uber.svg' },
//   { name: 'Zoom', logo: 'https://cdnlogo.com/logos/z/35/zoom.svg' },
//   { name: 'Dropbox', logo: 'https://cdnlogo.com/logos/d/31/dropbox.svg' },
// ];

// const ClientLogos = () => {
//   // Double array for seamless infinite scroll
//   const infinitePartners = [...allPartners, ...allPartners];

//   return (
//     <section className="py-20 md:py-28 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
//       {/* Soft background glows */}
//       <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-200 rounded-full blur-[150px] opacity-30 -translate-x-1/2 -translate-y-1/2" />
//       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-200 rounded-full blur-[150px] opacity-30 translate-x-1/2 translate-y-1/2" />

//       <div className="max-w-7xl mx-auto px-5 relative z-10">
//         {/* Header */}
//         <motion.div
//           className="text-center mb-14"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold uppercase tracking-wider mb-4 border border-blue-200">
//             🤝 Trusted by the Best
//           </span>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
//             Our Valued Partners
//           </h2>
//           <p className="text-gray-500 max-w-2xl mx-auto">
//             We're proud to work with industry leaders who trust our expertise.
//           </p>
//         </motion.div>

//         {/* Featured Clients – static grid */}
//         <div className="mb-16">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {featuredClients.map((client, index) => (
//               <motion.a
//                 key={client.name}
//                 href={client.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group relative bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex items-center justify-center cursor-pointer"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ y: -5, scale: 1.02 }}
//               >
//                 <img
//                   src={client.logo}
//                   alt={client.name}
//                   className="h-10 md:h-12 object-contain transition-transform duration-300 group-hover:scale-110"
//                 />
//                 {/* Subtle glow on hover */}
//                 <div className="absolute inset-0 rounded-2xl bg-blue-500 opacity-0 group-hover:opacity-5 transition-opacity" />
//               </motion.a>
//             ))}
//           </div>
//         </div>

//         {/* All Partners – infinite auto‑scroll carousel */}
//         <div className="relative group">
//           {/* Gradient fades */}
//           <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
//           <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

//           <div className="overflow-hidden">
//             <motion.div
//               className="flex gap-6"
//               initial={{ x: 0 }}
//               animate={{ x: '-50%' }}
//               transition={{
//                 repeat: Infinity,
//                 duration: 30,
//                 ease: 'linear',
//                 repeatType: 'loop',
//               }}
//               // Pause on hover
//               whileHover={{ animationPlayState: 'paused' }}
//             >
//               {infinitePartners.map((partner, index) => (
//                 <motion.div
//                   key={`${partner.name}-${index}`}
//                   className="flex-shrink-0 w-36 h-20 bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center p-3 hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 cursor-default group/card"
//                   whileHover={{ y: -3 }}
//                 >
//                   <img
//                     src={partner.logo}
//                     alt={partner.name}
//                     className="max-h-8 max-w-full object-contain"
//                   />
//                   {/* Tooltip */}
//                   <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover/card:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
//                     {partner.name}
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ClientLogos;





















// import React from 'react';
// import { motion } from 'framer-motion';

// /* ── Real estate company logos (all from cdnlogo.com) ── */
// const elitePartners = [
//   {
//     name: 'RE/MAX',
//     logo: 'https://cdnlogo.com/logo/ibp_9158.html',
//     url: 'https://www.remax.com',
//   },
//   {
//     name: 'Coldwell Banker',
//     logo: 'https://cdnlogo.com/logos/c/97/coldwell-banker.svg',
//     url: 'https://www.coldwellbanker.com',
//   },
//   {
//     name: 'Keller Williams',
//     logo: 'https://cdnlogo.com/logos/k/49/keller-williams.svg',
//     url: 'https://www.kw.com',
//   },
//   {
//     name: "Sotheby's International Realty",
//     logo: 'https://cdnlogo.com/logos/s/59/sothebys-international-realty.svg',
//     url: 'https://www.sothebysrealty.com',
//   },
// ];

// const allPartners = [
//   { name: 'CBRE', logo: 'https://cdnlogo.com/logos/c/81/cbre.svg' },
//   { name: 'JLL', logo: 'https://cdnlogo.com/logos/j/37/jll.svg' },
//   { name: 'Zillow', logo: 'https://cdnlogo.com/logos/z/72/zillow.svg' },
//   { name: 'Century 21', logo: 'https://cdnlogo.com/logos/c/58/century-21.svg' },
//   { name: 'Berkshire Hathaway HomeServices', logo: 'https://cdnlogo.com/logos/b/17/berkshire-hathaway.svg' },
//   { name: 'Realogy', logo: 'https://cdnlogo.com/logos/r/31/realogy.svg' },
//   { name: 'Redfin', logo: 'https://cdnlogo.com/logos/r/8/redfin.svg' },
//   { name: 'Trulia', logo: 'https://cdnlogo.com/logos/t/50/trulia.svg' },
//   { name: 'Rocket Companies', logo: 'https://cdnlogo.com/logos/r/33/rocket-companies.svg' },
//   { name: 'Opentable', logo: 'https://cdnlogo.com/logos/o/25/opentable.svg' },  // not real estate, keep as placeholder or replace
// ];

// const ClientLogos = () => {
//   /* Double the array for seamless infinite scroll */
//   const infinitePartners = [...allPartners, ...allPartners];

//   return (
//     <section className="relative py-20 md:py-28 overflow-hidden">
//       {/* ===== Hero‑like background ===== */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-indigo-100" />
//       {/* Large blurred circles for depth */}
//       <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-200 rounded-full blur-[200px] opacity-40 -translate-x-1/2 -translate-y-1/2" />
//       <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-200 rounded-full blur-[200px] opacity-40 translate-x-1/2 translate-y-1/2" />

//       <div className="relative z-10 max-w-7xl mx-auto px-5">
//         {/* Section header */}
//         <motion.div
//           className="text-center mb-14"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-200/80 backdrop-blur-sm text-blue-800 rounded-full text-sm font-semibold uppercase tracking-wider mb-4 border border-blue-300">
//             🏆 Trusted by the Industry
//           </span>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
//             Our Valued Partners
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             We’re proud to collaborate with leading real estate organizations who rely on our expertise.
//           </p>
//         </motion.div>

//         {/* ===== Featured Elite Partners – static grid ===== */}
//         <div className="mb-16">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {elitePartners.map((partner, index) => (
//               <motion.a
//                 key={partner.name}
//                 href={partner.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group relative bg-white rounded-2xl p-6 shadow-md border border-gray-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex items-center justify-center cursor-pointer"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ y: -5, scale: 1.02 }}
//               >
//                 <img
//                   src={partner.logo}
//                   alt={partner.name}
//                   className="h-10 md:h-12 object-contain transition-transform duration-300 group-hover:scale-110"
//                 />
//                 {/* subtle blue glow on hover */}
//                 <div className="absolute inset-0 rounded-2xl bg-blue-500 opacity-0 group-hover:opacity-5 transition-opacity" />
//               </motion.a>
//             ))}
//           </div>
//         </div>

//         {/* ===== Infinite‑scroll carousel of all partners ===== */}
//         <div className="relative group">
//           {/* Gradient fade overlays */}
//           <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
//           <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

//           <div className="overflow-hidden">
//             <motion.div
//               className="flex gap-6"
//               initial={{ x: 0 }}
//               animate={{ x: '-50%' }}
//               transition={{
//                 repeat: Infinity,
//                 duration: 30,
//                 ease: 'linear',
//                 repeatType: 'loop',
//               }}
//               // Pause animation on hover
//               whileHover={{ animationPlayState: 'paused' }}
//             >
//               {infinitePartners.map((partner, index) => (
//                 <motion.div
//                   key={`${partner.name}-${index}`}
//                   className="flex-shrink-0 w-36 h-20 bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center p-3 hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 cursor-default group/card"
//                   whileHover={{ y: -3 }}
//                 >
//                   <img
//                     src={partner.logo}
//                     alt={partner.name}
//                     className="max-h-8 max-w-full object-contain"
//                   />
//                   {/* Tooltip on hover */}
//                   <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover/card:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
//                     {partner.name}
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ClientLogos;
















import React from 'react';
import { motion } from 'framer-motion';

/* ── Guaranteed‑to‑load real estate company logos ── */
const elitePartners = [
  {
    name: 'RE/MAX',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/REMAX_logo.svg',
    url: 'https://www.remax.com',
  },
  {
    name: 'Coldwell Banker',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Coldwell_Banker_logo.svg',
    url: 'https://www.coldwellbanker.com',
  },
  {
    name: 'Keller Williams',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Keller_Williams_Realty_logo.svg',
    url: 'https://www.kw.com',
  },
  {
    name: "Sotheby's International Realty",
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Sotheby%27s_International_Realty_logo.svg',
    url: 'https://www.sothebysrealty.com',
  },
];

const allPartners = [
  { name: 'CBRE', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/CBRE_Group.svg' },
  { name: 'Zillow', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Zillow_logo.svg' },
  { name: 'Century 21', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Century_21_Real_Estate_logo.svg' },
  { name: 'JLL', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/JLL_logo.svg' },
  { name: 'Redfin', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Redfin_logo.svg' },
  { name: 'Berkshire Hathaway', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Berkshire_Hathaway_HomeServices_logo.svg' },
  { name: 'Realogy', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Anywhere_Real_Estate_logo.svg' },
  { name: 'Trulia', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Trulia_logo.svg' },
  { name: 'Rocket Mortgage', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Rocket_Mortgage_logo.svg' },
  { name: 'Compass', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Compass_Inc._logo.svg' },
];

const ClientLogos = () => {
  const infinitePartners = [...allPartners, ...allPartners];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white">
      {/* Background glow accents */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-200 rounded-full blur-[180px] opacity-25 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-200 rounded-full blur-[180px] opacity-25 translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-200/80 backdrop-blur-sm text-blue-800 rounded-full text-sm font-semibold uppercase tracking-wider mb-4 border border-blue-300">
            🏆 Trusted by the Industry
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our Valued Partners
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're proud to collaborate with leading real estate organizations who rely on our expertise.
          </p>
        </motion.div>

        {/* ── Elite Partners Grid ── */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {elitePartners.map((partner, index) => (
              <motion.a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white rounded-2xl p-6 shadow-md border border-gray-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex items-center justify-center cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-10 md:h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <span className="text-gray-800 font-bold text-sm text-center hidden">
                  {partner.name}
                </span>
                {/* Subtle blue glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-blue-500 opacity-0 group-hover:opacity-5 transition-opacity" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* ── Infinite Scroll Carousel ── */}
        <div className="relative group">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              initial={{ x: 0 }}
              animate={{ x: '-50%' }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: 'linear',
                repeatType: 'loop',
              }}
              whileHover={{ animationPlayState: 'paused' }}
            >
              {infinitePartners.map((partner, index) => (
                <motion.div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 w-36 h-20 bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center p-3 hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 cursor-default group/card relative"
                  whileHover={{ y: -3 }}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-8 max-w-full object-contain"
                  />
                  <span className="hidden text-gray-700 font-semibold text-xs text-center">
                    {partner.name}
                  </span>
                  {/* Tooltip on hover */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover/card:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20">
                    {partner.name}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
