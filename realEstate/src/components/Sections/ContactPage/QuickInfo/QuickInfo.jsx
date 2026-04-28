import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

const infoItems = [
  { icon: <FaPhone />, title: 'Call Us', line1: '+1 (800) 123-4567', line2: 'Mon-Fri, 9am-7pm' },
  { icon: <FaEnvelope />, title: 'Email', line1: 'hello@realestate.com', line2: 'support@realestate.com' },
  { icon: <FaMapMarkerAlt />, title: 'Main Office', line1: '123 Park Avenue, Suite 400', line2: 'New York, NY 10022' },
  { icon: null, title: 'Follow Us', line1: '@realestate_co', social: true },
];

const QuickInfo = () => (
  <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-white">
    <div className="max-w-7xl mx-auto px-5 md:px-6">
      <motion.div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}>
        {infoItems.map((item) => (
          <motion.div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}>
            <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 text-2xl text-cyan-600">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-slate-950 text-center">{item.title}</h3>
            <p className="mt-3 text-center text-sm text-slate-600">{item.line1}</p>
            {item.line2 && <p className="text-center text-sm text-slate-500">{item.line2}</p>}
            {item.social && (
              <div className="mt-5 flex justify-center gap-3 text-slate-500">
                {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube].map((Icon, index) => (
                  <a key={index} href="#" className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-slate-50 transition hover:bg-cyan-600 hover:text-white">
                    <Icon />
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default QuickInfo;
