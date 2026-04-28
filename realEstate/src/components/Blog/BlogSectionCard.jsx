import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const BlogSectionCard = ({ section, index }) => (
  <section className="rounded-3xl bg-slate-50 p-6 md:p-8 border border-slate-200">
    {section.heading && <h2 className="text-2xl font-black text-slate-950 mb-2">{section.heading}</h2>}
    {section.subheading && <p className="text-sm uppercase tracking-[0.24em] text-cyan-600 mb-4">{section.subheading}</p>}
    {section.body && <p className="text-slate-700 leading-relaxed whitespace-pre-line">{section.body}</p>}
    {section.motto && (
      <div className="mt-5 rounded-2xl bg-white p-4 border border-cyan-100">
        <div className="flex items-start gap-3">
          <FaQuoteLeft className="mt-1 text-cyan-600" />
          <p className="text-slate-700 font-medium">{section.motto}</p>
        </div>
      </div>
    )}
    {section.note && <p className="mt-4 text-sm text-slate-500">Note: {section.note}</p>}
    {section.conclusion && (
      <div className="mt-5 rounded-2xl bg-cyan-50 p-4 border border-cyan-100">
        <h3 className="text-sm uppercase tracking-[0.24em] text-cyan-700 mb-2">Conclusion</h3>
        <p className="text-slate-700 leading-relaxed whitespace-pre-line">{section.conclusion}</p>
      </div>
    )}
  </section>
);

export default BlogSectionCard;
