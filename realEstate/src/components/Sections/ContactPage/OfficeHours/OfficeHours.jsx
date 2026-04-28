// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaClock, FaHeadset } from 'react-icons/fa';
// import './OfficeHours.css';

// const OfficeHours = () => {
//   return (
//     <section className="hours-section">
//       <div className="container">
//         <motion.div
//           className="hours-card"
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           <div className="hours-icon">
//             <FaClock />
//           </div>
//           <h2>Office Hours</h2>
//           <div className="hours-grid">
//             <div className="day">Monday – Friday</div>
//             <div className="time">9:00 AM – 7:00 PM</div>
//             <div className="day">Saturday</div>
//             <div className="time">10:00 AM – 5:00 PM</div>
//             <div className="day">Sunday</div>
//             <div className="time closed">Closed</div>
//           </div>
//           <p className="holiday-note">* Holidays may affect hours. Please call ahead.</p>
//           <div className="urgent-contact">
//             <FaHeadset /> 24/7 Urgent: <a href="tel:+18001234567">+1 (800) 123‑4567</a>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default OfficeHours;






















import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaHeadset, FaPhoneAlt, FaCalendarCheck } from 'react-icons/fa';

const OfficeHours = () => {
  const hoursData = [
    { day: 'Monday – Friday', hours: '9:00 AM – 7:00 PM', isOpen: true },
    { day: 'Saturday', hours: '10:00 AM – 5:00 PM', isOpen: true },
    { day: 'Sunday', hours: 'Closed', isOpen: false },
  ];

  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-slate-50 via-white to-gray-100">
      <div className="max-w-4xl mx-auto px-5 md:px-6">
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f172a] via-[#1a2538] to-[#0f172a] shadow-2xl border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#3b82f6,transparent_70%)]" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,#8b5cf6,transparent_70%)]" />
          </div>

          <div className="relative z-10 p-8 md:p-12">
            {/* Header with icon and title */}
            <div className="flex flex-col items-center text-center mb-10">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl" />
                <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-3xl text-white shadow-lg">
                  <FaClock />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Office Hours
              </h2>
              <div className="flex items-center gap-2 text-blue-300 text-sm font-medium">
                <FaCalendarCheck className="text-blue-400" />
                <span>We're here to help</span>
              </div>
            </div>

            {/* Hours grid with elegant styling */}
            <div className="max-w-md mx-auto mb-8">
              {hoursData.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-4 border-b border-white/10 last:border-b-0"
                >
                  <span className="text-gray-200 font-medium text-lg">
                    {item.day}
                  </span>
                  <span
                    className={`text-lg font-semibold ${
                      item.isOpen ? 'text-white' : 'text-red-400'
                    }`}
                  >
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>

            {/* Holiday note */}
            <p className="text-center text-gray-400 text-sm mb-8 italic">
              * Hours may vary on public holidays. Please call to confirm.
            </p>

            {/* Urgent contact card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400">
                  <FaHeadset className="text-xl" />
                </div>
                <div className="text-left">
                  <div className="text-gray-300 text-sm font-medium">
                    24/7 Emergency Support
                  </div>
                  <div className="text-white font-bold text-lg">
                    +1 (800) 123‑4567
                  </div>
                </div>
              </div>
              <a
                href="tel:+18001234567"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <FaPhoneAlt className="text-sm" />
                Call Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfficeHours;