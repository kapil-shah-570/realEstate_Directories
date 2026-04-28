import React, { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaEnvelope, FaPhone, FaComments, FaHome, FaChartLine, FaBlog, FaGlobe, FaBriefcase, FaCheckCircle } from 'react-icons/fa';

const StatCard = ({ label, value, icon: Icon, tone = 'blue' }) => (
  <div className="rounded-3xl bg-white p-5 shadow-sm border border-slate-200">
    <div className={`mx-auto mb-3 grid h-12 w-12 place-items-center rounded-2xl bg-${tone}-50 text-${tone}-600`}>
      <Icon />
    </div>
    <p className="text-2xl font-black text-slate-950 text-center">{value}</p>
    <p className="text-xs uppercase tracking-[0.24em] text-slate-500 text-center mt-1">{label}</p>
  </div>
);

const DetailChipGroup = ({ title, items, emptyText, tone = 'cyan' }) => (
  <div className="rounded-3xl bg-slate-50 p-5 border border-slate-200">
    <h3 className="text-sm uppercase tracking-[0.3em] text-slate-500 mb-3">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {(items || []).length > 0 ? items.map((item) => (
        <span key={item} className={`rounded-full bg-white px-3 py-1 text-sm text-${tone}-800 border border-${tone}-100`}>{item}</span>
      )) : <p className="text-sm text-slate-500">{emptyText}</p>}
    </div>
  </div>
);

const SpecialistDetailPage = () => {
  const { slug } = useParams();
  const [specialist, setSpecialist] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/api/specialists/${slug}`)
      .then((res) => res.json())
      .then((data) => setSpecialist(data))
      .catch(() => setSpecialist(null));
  }, [slug]);

  const topSpecialties = useMemo(() => (specialist?.specialties || []).slice(0, 4), [specialist]);

  if (!specialist) return <div className="min-h-screen flex items-center justify-center">Loading specialist...</div>;

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#eff6ff,white_42%,#f8fafc)] py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-5">
        <Link to="/contact" className="inline-flex items-center gap-2 text-blue-600 font-semibold mb-6 hover:gap-3 transition-all">
          <FaArrowLeft /> Back to Contact
        </Link>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] overflow-hidden bg-white shadow-xl border border-slate-200">
            <div className="relative">
              <img
                src={(specialist.images && specialist.images[0]) ? `http://localhost:8000${specialist.images[0]}` : specialist.image}
                alt={specialist.name}
                className="h-[420px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] backdrop-blur-md">
                  Specialist Profile
                </span>
                <h1 className="mt-4 text-3xl md:text-5xl font-black leading-tight">{specialist.name}</h1>
                <p className="mt-2 text-white/80 text-lg">{specialist.role}</p>
              </div>
            </div>

            <div className="p-6 md:p-8">
              {(specialist.images || []).length > 1 && (
                <div className="mb-6 grid grid-cols-3 gap-3">
                  {specialist.images.slice(1, 4).map((image, index) => (
                    <div key={image} className="aspect-square overflow-hidden rounded-2xl border border-slate-200">
                      <img src={`http://localhost:8000${image}`} alt={`${specialist.name} ${index + 2}`} className="h-full w-full object-cover" />
                    </div>
                  ))}
                </div>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-50 p-5 border border-slate-200">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Experience</p>
                  <p className="mt-2 text-2xl font-black text-slate-950">{specialist.yearsExperience || 'Expert'}</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-5 border border-slate-200">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Location</p>
                  <p className="mt-2 text-lg font-bold text-slate-950">{specialist.location || 'Nationwide'}</p>
                </div>
              </div>

              <p className="mt-6 text-slate-700 leading-relaxed">{specialist.bio}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {topSpecialties.map((spec) => (
                  <span key={spec} className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 border border-blue-100">{spec}</span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`mailto:${specialist.email}`} className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 font-semibold text-white shadow-sm">
                  <FaEnvelope /> Email
                </a>
                <a href={`tel:${specialist.phone}`} className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-3 font-semibold text-slate-700 bg-white">
                  <FaPhone /> Call
                </a>
                <a href={specialist.calendarLink || '#'} className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 font-semibold text-white">
                  <FaComments /> Connect
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <StatCard label="Sales" value={specialist.totalSales || 0} icon={FaChartLine} />
              <StatCard label="Properties" value={specialist.propertyUploads || 0} icon={FaHome} />
              <StatCard label="Blogs" value={specialist.blogUploads || 0} icon={FaBlog} />
            </div>

            <div className="rounded-[2rem] bg-white p-6 md:p-8 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-600">Professional Overview</p>
                  <h2 className="text-2xl font-black text-slate-950">Everything connected to this specialist</h2>
                </div>
                {specialist.featured && (
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">Featured</span>
                )}
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-3xl bg-slate-50 p-5">
                  <p className="text-sm font-semibold text-slate-500 mb-2">Properties Sold</p>
                  <p className="text-3xl font-black text-slate-950">{specialist.propertiesSold || 0}</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-5">
                  <p className="text-sm font-semibold text-slate-500 mb-2">Active Listings</p>
                  <p className="text-3xl font-black text-slate-950">{specialist.activeListings || 0}</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-5">
                  <p className="text-sm font-semibold text-slate-500 mb-2">Blog Topics</p>
                  <p className="text-3xl font-black text-slate-950">{(specialist.blogPosts || []).length}</p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <DetailChipGroup
                title="Previous Projects"
                items={specialist.previousProjects}
                emptyText="No projects added yet."
                tone="cyan"
              />
              <DetailChipGroup
                title="Linked Blog Topics"
                items={specialist.blogPosts}
                emptyText="No blog topics added yet."
                tone="amber"
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <DetailChipGroup
                title="Recent Sales"
                items={specialist.recentSales}
                emptyText="No recent sales added yet."
                tone="emerald"
              />
              <div className="rounded-3xl bg-slate-50 p-5 border border-slate-200">
                <h3 className="text-sm uppercase tracking-[0.3em] text-slate-500 mb-3">Contact Details</h3>
                <div className="space-y-3 text-slate-700">
                  <p><strong>Email:</strong> {specialist.email}</p>
                  <p><strong>Phone:</strong> {specialist.phone}</p>
                  <p><strong>Languages:</strong> {(specialist.languages || []).join(', ') || 'English'}</p>
                  <p><strong>Specialties:</strong> {(specialist.specialties || []).join(', ') || 'Residential, Commercial'}</p>
                </div>
              </div>
            </div>

            {(specialist.propertyUploads > 0 || specialist.blogUploads > 0) && (
              <div className="rounded-[2rem] bg-gradient-to-br from-cyan-50 to-white p-6 md:p-8 border border-cyan-100 shadow-sm">
                <div className="flex items-center gap-2 mb-4 text-slate-950">
                  <FaBriefcase className="text-cyan-600" />
                  <h2 className="text-xl font-bold">Work Summary</h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-white p-5 border border-slate-200">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Properties uploaded</p>
                    <p className="mt-2 text-3xl font-black text-slate-950">{specialist.propertyUploads || 0}</p>
                  </div>
                  <div className="rounded-3xl bg-white p-5 border border-slate-200">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Blogs published</p>
                    <p className="mt-2 text-3xl font-black text-slate-950">{specialist.blogUploads || 0}</p>
                  </div>
                </div>
              </div>
            )}

            <div className="rounded-[2rem] bg-white p-6 md:p-8 shadow-sm border border-slate-200">
              <div className="flex items-center gap-2 mb-4 text-slate-950">
                <FaCheckCircle className="text-cyan-600" />
                <h2 className="text-xl font-bold">How to Connect</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Use the email, phone, or connect button to reach this specialist directly. Their detail page includes the projects, blog topics, and work history you need before making contact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialistDetailPage;
