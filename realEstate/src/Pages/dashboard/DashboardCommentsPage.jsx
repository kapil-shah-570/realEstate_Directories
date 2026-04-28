import React, { useEffect, useState } from 'react';
import { FaComments } from 'react-icons/fa';
import DashboardSectionPage from '../../components/Dashboard/DashboardSectionPage';

export default function DashboardCommentsPage() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/properties')
      .then((res) => res.json())
      .then((data) => setProperties(Array.isArray(data) ? data : []))
      .catch(() => setProperties([]));
  }, []);

  return (
    <DashboardSectionPage title="Property Comments" subtitle="Review the latest likes and comments across listings.">
      <div className="space-y-4">
        {properties.map((property) => (
          <div key={property._id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-lg font-bold text-slate-950">{property.title}</p>
                <p className="text-sm text-slate-500">{property.location}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-rose-100 px-3 py-1 text-sm font-semibold text-rose-700">
                  {property.likesCount || 0} likes
                </span>
                <span className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-semibold text-cyan-700">
                  {(property.comments || []).length} comments
                </span>
              </div>
            </div>
            <div className="mt-5 space-y-3">
              {(property.comments || []).length > 0 ? (
                property.comments.map((comment, index) => (
                  <div key={`${property._id}-${index}`} className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-semibold text-slate-950">{comment.name}</p>
                      <span className="text-xs text-slate-500">{comment.createdAt ? new Date(comment.createdAt).toLocaleDateString() : ''}</span>
                    </div>
                    <p className="mt-2 text-sm text-slate-600">{comment.message}</p>
                  </div>
                ))
              ) : (
                <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-500 flex items-center gap-2">
                  <FaComments /> No comments yet for this property.
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </DashboardSectionPage>
  );
}
