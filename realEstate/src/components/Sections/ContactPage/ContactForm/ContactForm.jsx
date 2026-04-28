import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaPhoneAlt, FaEnvelope, FaRegClock, FaUserAlt } from 'react-icons/fa';

const ContactForm = ({ department = 'buyer' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredTime: '',
  });
  const [status, setStatus] = useState({ loading: false, success: '', error: '' });

  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: '', error: '' });
    try {
      const response = await fetch('http://localhost:8000/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, department }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to save contact request');
      setStatus({ loading: false, success: 'Thank you! Our team will contact you soon.', error: '' });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '', preferredTime: '' });
    } catch (error) {
      setStatus({ loading: false, success: '', error: error.message });
    }
  };

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-8">
      <div className="mb-8 flex flex-col gap-3">
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-cyan-100 px-4 py-1 text-xs font-bold uppercase tracking-[0.28em] text-cyan-800">
          Send Us A Message
        </span>
        <h2 className="text-3xl font-black text-slate-950 md:text-4xl">Tell us what you’re looking for</h2>
        <p className="max-w-2xl text-slate-600">
          Share your goals, timeline, and preferred contact details. Your message is stored in the dashboard and shown in the contact inbox.
        </p>
      </div>

      <div className="mb-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl bg-slate-50 p-4">
          <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
            <FaPhoneAlt />
          </div>
          <p className="text-sm font-semibold text-slate-950">Fast Call Back</p>
          <p className="text-sm text-slate-500">We usually reply within 24 hours.</p>
        </div>
        <div className="rounded-3xl bg-slate-50 p-4">
          <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
            <FaEnvelope />
          </div>
          <p className="text-sm font-semibold text-slate-950">Email Follow Up</p>
          <p className="text-sm text-slate-500">Your inquiry goes straight to our inbox.</p>
        </div>
        <div className="rounded-3xl bg-slate-50 p-4">
          <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
            <FaRegClock />
          </div>
          <p className="text-sm font-semibold text-slate-950">Flexible Timing</p>
          <p className="text-sm text-slate-500">Choose a time that works best for you.</p>
        </div>
      </div>

      <AnimatePresence>
        {status.success && (
          <motion.div className="mb-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {status.success}
          </motion.div>
        )}
        {status.error && (
          <motion.div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {status.error}
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Full Name *</label>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-cyan-400">
              <FaUserAlt className="text-slate-400" />
              <input name="name" value={formData.name} onChange={handleChange} required className="w-full bg-transparent outline-none" placeholder="Your full name" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Email *</label>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-cyan-400">
              <FaEnvelope className="text-slate-400" />
              <input name="email" type="email" value={formData.email} onChange={handleChange} required className="w-full bg-transparent outline-none" placeholder="name@example.com" />
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Phone *</label>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-cyan-400">
              <FaPhoneAlt className="text-slate-400" />
              <input name="phone" value={formData.phone} onChange={handleChange} required className="w-full bg-transparent outline-none" placeholder="+1 555 123 4567" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Subject</label>
            <input name="subject" value={formData.subject} onChange={handleChange} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-cyan-400" placeholder="How can we help?" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Message *</label>
          <textarea
            name="message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full rounded-[1.5rem] border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-cyan-400"
            placeholder="Tell us about the property, your timeline, and the support you need..."
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Preferred contact time</label>
            <select name="preferredTime" value={formData.preferredTime} onChange={handleChange} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-cyan-400">
              <option value="">Any time</option>
              <option value="morning">Morning (9am-12pm)</option>
              <option value="afternoon">Afternoon (12pm-5pm)</option>
              <option value="evening">Evening (5pm-8pm)</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Department</label>
            <input value={department} disabled className="w-full rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 text-slate-500" />
          </div>
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:scale-[1.01] disabled:opacity-60"
          disabled={status.loading}
        >
          <FaPaperPlane /> {status.loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
