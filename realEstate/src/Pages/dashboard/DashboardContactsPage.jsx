import React, { useEffect, useState } from 'react';
import { FaUserFriends, FaEnvelope, FaPhoneAlt, FaRegClock, FaCommentDots } from 'react-icons/fa';
import DashboardSectionPage from '../../components/Dashboard/DashboardSectionPage';

export default function DashboardContactsPage() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/contacts');
        const data = await response.json();
        setContacts(Array.isArray(data) ? data : []);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  return (
    <DashboardSectionPage
      title="Contact Persons"
      subtitle="Every message from the contact page appears here as a saved inquiry."
    >
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-950">Inbox</h3>
            <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-800">
              {loading ? 'Loading...' : `${contacts.length} messages`}
            </span>
          </div>

          {loading ? (
            <p className="text-slate-500">Loading contact inquiries...</p>
          ) : contacts.length === 0 ? (
            <p className="text-slate-500">No contact inquiries yet.</p>
          ) : (
            contacts.map((contact) => (
              <div key={contact._id} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-cyan-100 text-cyan-700">
                      <FaUserFriends />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="text-lg font-bold text-slate-950">{contact.name}</h4>
                        <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 border border-slate-200">
                          {contact.department || 'General'}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-slate-500">{contact.subject || 'No subject provided'}</p>
                      <p className="mt-3 text-sm leading-relaxed text-slate-700">{contact.message}</p>
                    </div>
                  </div>

                  <div className="grid gap-2 text-sm text-slate-600 lg:min-w-[240px]">
                    <p className="inline-flex items-center gap-2"><FaEnvelope className="text-cyan-600" /> {contact.email}</p>
                    <p className="inline-flex items-center gap-2"><FaPhoneAlt className="text-cyan-600" /> {contact.phone}</p>
                    <p className="inline-flex items-center gap-2"><FaRegClock className="text-cyan-600" /> {contact.preferredTime || 'Any time'}</p>
                    <p className="inline-flex items-center gap-2"><FaCommentDots className="text-cyan-600" /> {new Date(contact.createdAt).toLocaleString()}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-950">Contact Summary</h3>
          <div className="grid gap-4">
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Saved inquiries</p>
              <p className="mt-1 text-3xl font-black text-slate-950">{loading ? '--' : contacts.length}</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Latest department</p>
              <p className="mt-1 text-lg font-bold text-slate-950">
                {contacts[0]?.department || 'No data yet'}
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Newest lead</p>
              <p className="mt-1 text-lg font-bold text-slate-950">
                {contacts[0]?.name || 'No lead yet'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardSectionPage>
  );
}
