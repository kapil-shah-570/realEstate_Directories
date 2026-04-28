import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

const infoItems = [
  {
    icon: <FaPhone />,
    title: 'Call Us',
    line1: '+1 (800) 123‑4567',
    line2: 'Mon‑Fri, 9am‑7pm'
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    line1: 'hello@realestate.com',
    line2: 'support@realestate.com'
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Main Office',
    line1: '123 Park Avenue, Suite 400',
    line2: 'New York, NY 10022'
  },
  {
    icon: null,
    title: 'Follow Us',
    line1: '@realestate_co',
    social: true
  }
];

const QuickInfo = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
              hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            }
          }}
        >
          {infoItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-slate-50 p-8 rounded-3xl text-center shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:border-blue-500"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
              }}
            >
              {item.icon && <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl text-blue-600">{item.icon}</div>}
              {item.social && (
                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full flex items-center justify-center gap-2 mx-auto mb-6 text-lg text-blue-600">
                  <FaFacebookF /><FaTwitter /><FaLinkedinIn /><FaInstagram />
                </div>
              )}
              <h3 className="text-xl font-semibold mb-3 text-slate-900">{item.title}</h3>
              <p className="text-slate-600 mb-1 text-sm">{item.line1}</p>
              <p className="text-slate-600 mb-0 text-sm">{item.line2}</p>
              {item.social && (
                <div className="flex justify-center gap-3 mt-5">
                  <a href="#" className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-slate-500 transition-all duration-200 border border-slate-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:scale-110"><FaFacebookF /></a>
                  <a href="#" className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-slate-500 transition-all duration-200 border border-slate-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:scale-110"><FaTwitter /></a>
                  <a href="#" className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-slate-500 transition-all duration-200 border border-slate-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:scale-110"><FaLinkedinIn /></a>
                  <a href="#" className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-slate-500 transition-all duration-200 border border-slate-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:scale-110"><FaInstagram /></a>
                  <a href="#" className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-slate-500 transition-all duration-200 border border-slate-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:scale-110"><FaYoutube /></a>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default QuickInfo;
