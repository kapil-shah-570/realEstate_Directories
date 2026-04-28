import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaComments, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AgentTeam = () => {
  const [specialists, setSpecialists] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/specialists')
      .then((res) => res.json())
      .then((data) => setSpecialists(Array.isArray(data) ? data : []))
      .catch(() => setSpecialists([]));
  }, []);

  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            Our Specialists
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">Directly Contact Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Click any specialist to view their full profile and connect instantly.</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {specialists.map((agent, index) => (
            <motion.div key={agent._id} className="rounded-3xl bg-white p-6 shadow-lg border border-gray-200" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
              <Link to={`/specialist/${agent.slug}`} className="block">
                <img src={agent.image} alt={agent.name} className="h-72 w-full rounded-2xl object-cover mb-5" />
                <h3 className="text-2xl font-bold text-gray-900">{agent.name}</h3>
                <p className="text-blue-600 font-semibold">{agent.role}</p>
                <p className="text-gray-500 mt-3 line-clamp-3">{agent.bio}</p>
                <div className="mt-4 grid grid-cols-2 gap-3 text-center">
                  <div className="rounded-2xl bg-slate-50 p-3">
                    <p className="text-lg font-bold text-slate-900">{agent.totalSales || 0}</p>
                    <p className="text-[11px] uppercase tracking-wide text-slate-500">Sales</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-3">
                    <p className="text-lg font-bold text-slate-900">{agent.propertiesSold || 0}</p>
                    <p className="text-[11px] uppercase tracking-wide text-slate-500">Sold</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-3">
                    <p className="text-lg font-bold text-slate-900">{agent.propertyUploads || 0}</p>
                    <p className="text-[11px] uppercase tracking-wide text-slate-500">Properties</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-3">
                    <p className="text-lg font-bold text-slate-900">{agent.blogUploads || 0}</p>
                    <p className="text-[11px] uppercase tracking-wide text-slate-500">Blogs</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {(agent.specialties || []).map((spec) => (
                    <span key={spec} className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700">{spec}</span>
                  ))}
                </div>
              </Link>
              <div className="mt-5 flex flex-col gap-3">
                <a href={`mailto:${agent.email}`} className="flex items-center justify-center gap-2 rounded-full bg-slate-50 py-2 text-slate-700"><FaEnvelope /> {agent.email}</a>
                <a href={`tel:${agent.phone}`} className="flex items-center justify-center gap-2 rounded-full bg-slate-50 py-2 text-slate-700"><FaPhone /> {agent.phone}</a>
                <Link to={`/specialist/${agent.slug}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 py-3 text-white font-semibold">
                  View Profile <FaArrowRight />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentTeam;
