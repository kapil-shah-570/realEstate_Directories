// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
// import './FAQSection.css';

// const faqs = [
//   {
//     id: 1,
//     question: 'How quickly do you respond to inquiries?',
//     answer: 'We aim to respond to all messages within 2 hours during business hours, and within 12 hours for after‑hour submissions.'
//   },
//   {
//     id: 2,
//     question: 'Can I schedule a virtual tour?',
//     answer: 'Absolutely! Use the contact form and select “I want to buy” and mention “virtual tour” in your message. We’ll send you a Zoom/Google Meet link.'
//   },
//   {
//     id: 3,
//     question: 'Do you work with international clients?',
//     answer: 'Yes, we have a dedicated international desk that assists buyers and investors from all over the world.'
//   },
//   {
//     id: 4,
//     question: 'Is my information secure?',
//     answer: 'We take privacy seriously. All data is encrypted and never shared with third parties without your consent.'
//   }
// ];

// const FAQSection = () => {
//   const [openId, setOpenId] = useState(null);

//   const toggle = (id) => setOpenId(openId === id ? null : id);

//   return (
//     <section className="faq-section">
//       <div className="container">
//         <motion.div
//           className="section-header"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="section-title">Frequently Asked Questions</h2>
//           <p className="section-subtitle">Quick answers to common queries</p>
//         </motion.div>

//         <motion.div
//           className="faq-grid"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={{
//             hidden: { opacity: 0 },
//             visible: { transition: { staggerChildren: 0.1 } }
//           }}
//         >
//           {faqs.map(faq => (
//             <motion.div
//               key={faq.id}
//               className="faq-item"
//               variants={{
//                 hidden: { opacity: 0, y: 20 },
//                 visible: { opacity: 1, y: 0 }
//               }}
//             >
//               <button className="faq-question" onClick={() => toggle(faq.id)}>
//                 <span>{faq.question}</span>
//                 {openId === faq.id ? <FaChevronUp /> : <FaChevronDown />}
//               </button>
//               <AnimatePresence>
//                 {openId === faq.id && (
//                   <motion.div
//                     className="faq-answer"
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: 'auto' }}
//                     exit={{ opacity: 0, height: 0 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <p>{faq.answer}</p>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default FAQSection;











// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaChevronDown, FaChevronUp, FaQuestionCircle } from 'react-icons/fa';

// const faqs = [
//   {
//     id: 1,
//     question: 'How quickly do you respond to inquiries?',
//     answer: 'We aim to respond to all messages within 2 hours during business hours, and within 12 hours for after‑hour submissions.'
//   },
//   {
//     id: 2,
//     question: 'Can I schedule a virtual tour?',
//     answer: 'Absolutely! Use the contact form and select "I want to buy" and mention "virtual tour" in your message. We\'ll send you a Zoom/Google Meet link.'
//   },
//   {
//     id: 3,
//     question: 'Do you work with international clients?',
//     answer: 'Yes, we have a dedicated international desk that assists buyers and investors from all over the world.'
//   },
//   {
//     id: 4,
//     question: 'Is my information secure?',
//     answer: 'We take privacy seriously. All data is encrypted and never shared with third parties without your consent.'
//   }
// ];

// const FAQSection = () => {
//   const [openId, setOpenId] = useState(null);

//   const toggle = (id) => setOpenId(openId === id ? null : id);

//   return (
//     <section className="py-20 md:py-24 bg-gradient-to-br from-slate-50 via-white to-gray-100">
//       <div className="max-w-4xl mx-auto px-5 md:px-6">
//         {/* Section Header */}
//         <motion.div
//           className="text-center mb-12"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold uppercase tracking-wider mb-4 border border-blue-200">
//             <FaQuestionCircle className="text-blue-500" />
//             Got Questions?
//           </span>
//           <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
//             Frequently Asked Questions
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Quick answers to common queries
//           </p>
//         </motion.div>

//         {/* FAQ Items */}
//         <motion.div
//           className="space-y-4"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={{
//             hidden: { opacity: 0 },
//             visible: { transition: { staggerChildren: 0.1 } }
//           }}
//         >
//           {faqs.map(faq => (
//             <motion.div
//               key={faq.id}
//               className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
//               variants={{
//                 hidden: { opacity: 0, y: 20 },
//                 visible: { opacity: 1, y: 0 }
//               }}
//             >
//               <button
//                 className="w-full px-6 py-5 md:px-8 md:py-6 flex items-center justify-between text-left focus:outline-none group"
//                 onClick={() => toggle(faq.id)}
//               >
//                 <span className="text-base md:text-lg font-semibold text-gray-900 pr-4">
//                   {faq.question}
//                 </span>
//                 <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors duration-200">
//                   {openId === faq.id ? <FaChevronUp className="text-sm" /> : <FaChevronDown className="text-sm" />}
//                 </span>
//               </button>
//               <AnimatePresence>
//                 {openId === faq.id && (
//                   <motion.div
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: 'auto' }}
//                     exit={{ opacity: 0, height: 0 }}
//                     transition={{ duration: 0.3, ease: 'easeInOut' }}
//                   >
//                     <div className="px-6 pb-6 md:px-8 md:pb-7 text-gray-600 leading-relaxed border-t border-gray-100">
//                       <p className="pt-5">{faq.answer}</p>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default FAQSection;



















// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaChevronDown, FaChevronUp, FaQuestionCircle } from 'react-icons/fa';

// const faqs = [
//   {
//     id: 1,
//     question: 'How quickly do you respond to inquiries?',
//     answer: 'We aim to respond to all messages within 2 hours during business hours, and within 12 hours for after‑hour submissions.'
//   },
//   {
//     id: 2,
//     question: 'Can I schedule a virtual tour?',
//     answer: 'Absolutely! Use the contact form and select "I want to buy" and mention "virtual tour" in your message. We\'ll send you a Zoom/Google Meet link.'
//   },
//   {
//     id: 3,
//     question: 'Do you work with international clients?',
//     answer: 'Yes, we have a dedicated international desk that assists buyers and investors from all over the world.'
//   },
//   {
//     id: 4,
//     question: 'Is my information secure?',
//     answer: 'We take privacy seriously. All data is encrypted and never shared with third parties without your consent.'
//   }
// ];

// const FAQSection = () => {
//   const [openId, setOpenId] = useState(null);

//   const toggle = (id) => setOpenId(openId === id ? null : id);

//   return (
//     <section className="py-20 md:py-24 bg-gradient-to-br from-slate-50 via-white to-gray-100">
//       <div className="max-w-4xl mx-auto px-5 md:px-6">
//         {/* Section Header */}
//         <motion.div
//           className="text-center mb-12"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold uppercase tracking-wider mb-4 border border-blue-200">
//             <FaQuestionCircle className="text-blue-500" />
//             Got Questions?
//           </span>
//           <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
//             Frequently Asked Questions
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Quick answers to common queries
//           </p>
//         </motion.div>

//         {/* FAQ Items */}
//         <motion.div
//           className="space-y-4"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={{
//             hidden: { opacity: 0 },
//             visible: { transition: { staggerChildren: 0.1 } }
//           }}
//         >
//           {faqs.map(faq => (
//             <motion.div
//               key={faq.id}
//               className="bg-white rounded-2xl shadow-md border-2 border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-gray-300"
//               variants={{
//                 hidden: { opacity: 0, y: 20 },
//                 visible: { opacity: 1, y: 0 }
//               }}
//             >
//               <button
//                 className="w-full px-6 py-5 md:px-8 md:py-6 flex items-center justify-between text-left focus:outline-none group"
//                 onClick={() => toggle(faq.id)}
//               >
//                 <span className="text-base md:text-lg font-bold text-gray-900 pr-4">
//                   {faq.question}
//                 </span>
//                 <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors duration-200 border border-gray-300">
//                   {openId === faq.id ? <FaChevronUp className="text-sm" /> : <FaChevronDown className="text-sm" />}
//                 </span>
//               </button>
//               <AnimatePresence>
//                 {openId === faq.id && (
//                   <motion.div
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: 'auto' }}
//                     exit={{ opacity: 0, height: 0 }}
//                     transition={{ duration: 0.3, ease: 'easeInOut' }}
//                   >
//                     <div className="px-6 pb-6 md:px-8 md:pb-7 text-gray-800 leading-relaxed border-t-2 border-gray-200 bg-gray-50">
//                       <p className="pt-5">{faq.answer}</p>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default FAQSection;




















import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp, FaSearch, FaQuestionCircle, FaHome, FaUser, FaShieldAlt, FaGlobe } from 'react-icons/fa';

const categories = [
  { id: 'all', label: 'All Questions', icon: <FaQuestionCircle /> },
  { id: 'general', label: 'General', icon: <FaHome /> },
  { id: 'account', label: 'Account', icon: <FaUser /> },
  { id: 'security', label: 'Security', icon: <FaShieldAlt /> },
  { id: 'international', label: 'International', icon: <FaGlobe /> },
];

const faqs = [
  {
    id: 1,
    category: 'general',
    question: 'How quickly do you respond to inquiries?',
    answer: 'We aim to respond to all messages within 2 hours during business hours, and within 12 hours for after‑hour submissions.'
  },
  {
    id: 2,
    category: 'general',
    question: 'Can I schedule a virtual tour?',
    answer: 'Absolutely! Use the contact form and select "I want to buy" and mention "virtual tour" in your message. We\'ll send you a Zoom/Google Meet link.'
  },
  {
    id: 3,
    category: 'international',
    question: 'Do you work with international clients?',
    answer: 'Yes, we have a dedicated international desk that assists buyers and investors from all over the world. We can coordinate across time zones and provide multilingual support.'
  },
  {
    id: 4,
    category: 'security',
    question: 'Is my information secure?',
    answer: 'We take privacy seriously. All data is encrypted using industry‑standard protocols and is never shared with third parties without your explicit consent.'
  },
  {
    id: 5,
    category: 'account',
    question: 'How do I create an account?',
    answer: 'Creating an account is free and easy. Click the "Sign Up" button in the top right corner, enter your email address and a secure password, and you\'re all set!'
  },
  {
    id: 6,
    category: 'general',
    question: 'What areas do you serve?',
    answer: 'We currently serve major metropolitan areas across the United States, including New York, Los Angeles, Miami, Chicago, and Austin. We\'re expanding rapidly—contact us to see if we cover your area.'
  },
  {
    id: 7,
    category: 'security',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, bank transfers, and certified checks. For your security, all online payments are processed through a PCI‑compliant gateway.'
  },
  {
    id: 8,
    category: 'international',
    question: 'Do you offer multilingual services?',
    answer: 'Yes, our team includes agents fluent in Spanish, Mandarin, French, and Arabic. Please let us know your language preference and we\'ll connect you with the right specialist.'
  }
];

const FAQSection = () => {
  const [openId, setOpenId] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const toggle = (id) => setOpenId(openId === id ? null : id);

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-slate-50 via-white to-gray-100">
      <div className="max-w-6xl mx-auto px-5 md:px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold uppercase tracking-wider mb-4 border border-blue-200">
            <FaQuestionCircle className="text-blue-500" />
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Quick answers to common queries
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          className="max-w-md mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border-2 border-gray-200 rounded-full focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-gray-700 placeholder-gray-400"
            />
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:bg-blue-50'
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* FAQ Grid */}
        {filteredFaqs.length > 0 ? (
        <motion.div
          className="grid md:grid-cols-2 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
          }}
        >
            {filteredFaqs.map(faq => (
              <motion.div
                key={faq.id}
                className="bg-white rounded-2xl shadow-md border-2 border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-gray-300"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <button
                  className="w-full px-5 py-4 md:px-6 md:py-5 flex items-center justify-between text-left focus:outline-none group"
                  onClick={() => toggle(faq.id)}
                >
                  <span className="text-sm md:text-base font-bold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors duration-200 border border-gray-300">
                    {openId === faq.id ? <FaChevronUp className="text-xs" /> : <FaChevronDown className="text-xs" />}
                  </span>
                </button>
                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-5 md:px-6 md:pb-6 text-gray-800 leading-relaxed border-t-2 border-gray-200 bg-gray-50">
                        <p className="pt-4 text-sm md:text-base">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-500 text-lg">No matching questions found.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('all');
              }}
              className="mt-4 text-blue-600 font-semibold hover:underline"
            >
              Clear filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FAQSection;
