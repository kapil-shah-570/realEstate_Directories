import React, { useEffect, useMemo, useState } from 'react';
import { FaUserTie, FaPlus, FaEye, FaPenNib, FaImages } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import DashboardSectionPage from '../../components/Dashboard/DashboardSectionPage';

const specialistFormDefaults = {
  name: '',
  slug: '',
  role: '',
  email: '',
  phone: '',
  specialties: '',
  bio: '',
  yearsExperience: '',
  totalSales: '',
  propertiesSold: '',
  activeListings: '',
  propertyUploads: '',
  blogUploads: '',
  languages: '',
  location: '',
  calendarLink: '',
  featured: false,
};

const contentFormDefaults = {
  slug: '',
  previousProjects: '',
  blogPosts: '',
  recentSales: '',
};

export default function DashboardAgentsPage() {
  const [specialists, setSpecialists] = useState([]);
  const [specialistForm, setSpecialistForm] = useState(specialistFormDefaults);
  const [contentForm, setContentForm] = useState(contentFormDefaults);
  const [specialistImages, setSpecialistImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [savingProfile, setSavingProfile] = useState(false);
  const [savingContent, setSavingContent] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchSpecialists();
  }, []);

  const selectedSpecialist = useMemo(
    () => specialists.find((item) => item.slug === contentForm.slug),
    [specialists, contentForm.slug]
  );

  const fetchSpecialists = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/specialists');
      if (!response.ok) throw new Error('Failed to fetch specialists');
      setSpecialists(await response.json());
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleProfileChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSpecialistForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleProfileImages = (e) => {
    const files = Array.from(e.target.files || []);
    setSpecialistImages(files);
  };

  const handleContentChange = (e) => {
    const { name, value } = e.target;
    setContentForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    setSavingProfile(true);
    setError('');

    try {
      const formData = new FormData();
      Object.entries(specialistForm).forEach(([key, value]) => {
        formData.append(key, value);
      });
      specialistImages.forEach((file) => formData.append('images', file));

      const response = await fetch('http://localhost:8000/api/specialists', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to save specialist');
      setSpecialists((prev) => [data.specialist, ...prev]);
      setSpecialistForm(specialistFormDefaults);
      setSpecialistImages([]);
      if (!contentForm.slug) setContentForm((prev) => ({ ...prev, slug: data.specialist.slug }));
    } catch (err) {
      setError(err.message);
    } finally {
      setSavingProfile(false);
    }
  };

  const handleContentSubmit = async (e) => {
    e.preventDefault();
    if (!contentForm.slug) {
      setError('Please choose a specialist first.');
      return;
    }
    setSavingContent(true);
    setError('');

    try {
      const response = await fetch(`http://localhost:8000/api/specialists/${contentForm.slug}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contentForm),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to update specialist');
      setSpecialists((prev) => prev.map((item) => (item.slug === data.specialist.slug ? data.specialist : item)));
      setContentForm((prev) => ({ ...contentFormDefaults, slug: prev.slug }));
    } catch (err) {
      setError(err.message);
    } finally {
      setSavingContent(false);
    }
  };

  return (
    <DashboardSectionPage
      title="Agents"
      subtitle="Create specialist profiles with uploaded images, then add their project history, blogs, and sales summaries."
      actionLabel="View Contact Page"
      onAction={() => navigate('/contact')}
    >
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <form onSubmit={handleProfileSubmit} className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-slate-900">
              <FaUserTie className="text-cyan-600" />
              <h3 className="text-xl font-bold">Create Specialist Profile</h3>
            </div>

            {error && <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>}

            <div className="grid gap-4 md:grid-cols-2">
              <input name="name" value={specialistForm.name} onChange={handleProfileChange} placeholder="Name" className="rounded-2xl border border-slate-200 px-4 py-3" required />
              <input name="slug" value={specialistForm.slug} onChange={handleProfileChange} placeholder="Slug (optional)" className="rounded-2xl border border-slate-200 px-4 py-3" />
              <input name="role" value={specialistForm.role} onChange={handleProfileChange} placeholder="Role" className="rounded-2xl border border-slate-200 px-4 py-3" required />
              <input name="yearsExperience" value={specialistForm.yearsExperience} onChange={handleProfileChange} placeholder="Years of experience" className="rounded-2xl border border-slate-200 px-4 py-3" />
              <input name="totalSales" value={specialistForm.totalSales} onChange={handleProfileChange} placeholder="Total sales closed" className="rounded-2xl border border-slate-200 px-4 py-3" />
              <input name="propertiesSold" value={specialistForm.propertiesSold} onChange={handleProfileChange} placeholder="Properties sold" className="rounded-2xl border border-slate-200 px-4 py-3" />
              <input name="activeListings" value={specialistForm.activeListings} onChange={handleProfileChange} placeholder="Active listings" className="rounded-2xl border border-slate-200 px-4 py-3" />
              <input name="propertyUploads" value={specialistForm.propertyUploads} onChange={handleProfileChange} placeholder="Property uploads managed" className="rounded-2xl border border-slate-200 px-4 py-3" />
              <input name="blogUploads" value={specialistForm.blogUploads} onChange={handleProfileChange} placeholder="Blog posts uploaded" className="rounded-2xl border border-slate-200 px-4 py-3" />
              <input name="email" value={specialistForm.email} onChange={handleProfileChange} placeholder="Email" className="rounded-2xl border border-slate-200 px-4 py-3" required />
              <input name="phone" value={specialistForm.phone} onChange={handleProfileChange} placeholder="Phone" className="rounded-2xl border border-slate-200 px-4 py-3" required />
              <input name="location" value={specialistForm.location} onChange={handleProfileChange} placeholder="Location" className="rounded-2xl border border-slate-200 px-4 py-3 md:col-span-2" />
              <textarea name="bio" value={specialistForm.bio} onChange={handleProfileChange} placeholder="Bio" className="rounded-2xl border border-slate-200 px-4 py-3 md:col-span-2 h-28" required />
              <input name="specialties" value={specialistForm.specialties} onChange={handleProfileChange} placeholder="Specialties comma separated" className="rounded-2xl border border-slate-200 px-4 py-3 md:col-span-2" />
              <input name="languages" value={specialistForm.languages} onChange={handleProfileChange} placeholder="Languages comma separated" className="rounded-2xl border border-slate-200 px-4 py-3 md:col-span-2" />
              <input name="calendarLink" value={specialistForm.calendarLink} onChange={handleProfileChange} placeholder="Calendar or booking link" className="rounded-2xl border border-slate-200 px-4 py-3 md:col-span-2" />
              <div className="md:col-span-2 rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-5">
                <label className="flex cursor-pointer flex-col items-center justify-center gap-2 text-center">
                  <FaImages className="text-2xl text-cyan-600" />
                  <span className="font-semibold text-slate-900">Upload specialist images</span>
                  <span className="text-sm text-slate-500">PNG, JPG, WEBP, multiple files supported</span>
                  <input type="file" multiple accept="image/*" onChange={handleProfileImages} className="hidden" />
                </label>
                {specialistImages.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-3">
                    {specialistImages.map((file) => (
                      <span key={file.name} className="rounded-full bg-white px-3 py-1 text-sm text-slate-700 border border-slate-200">
                        {file.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <label className="inline-flex items-center gap-2 text-sm text-slate-600">
              <input type="checkbox" name="featured" checked={specialistForm.featured} onChange={handleProfileChange} />
              Featured specialist
            </label>

            <button type="submit" disabled={savingProfile} className="inline-flex items-center gap-2 rounded-2xl bg-cyan-600 px-5 py-3 font-semibold text-white hover:bg-cyan-700 disabled:opacity-60">
              <FaPlus />
              {savingProfile ? 'Saving...' : 'Save Specialist'}
            </button>
          </form>

          <form onSubmit={handleContentSubmit} className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-slate-900">
              <FaPenNib className="text-cyan-600" />
              <h3 className="text-xl font-bold">Add Specialist Content</h3>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <select name="slug" value={contentForm.slug} onChange={handleContentChange} className="rounded-2xl border border-slate-200 px-4 py-3 md:col-span-2">
                <option value="">Select specialist</option>
                {specialists.map((agent) => (
                  <option key={agent._id} value={agent.slug}>
                    {agent.name} - {agent.role}
                  </option>
                ))}
              </select>
              <input name="previousProjects" value={contentForm.previousProjects} onChange={handleContentChange} placeholder="Previous projects comma separated" className="rounded-2xl border border-slate-200 px-4 py-3 md:col-span-2" />
              <input name="blogPosts" value={contentForm.blogPosts} onChange={handleContentChange} placeholder="Blog topics or posts comma separated" className="rounded-2xl border border-slate-200 px-4 py-3 md:col-span-2" />
              <input name="recentSales" value={contentForm.recentSales} onChange={handleContentChange} placeholder="Recent sales comma separated" className="rounded-2xl border border-slate-200 px-4 py-3 md:col-span-2" />
            </div>

            <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
              {selectedSpecialist ? `Updating ${selectedSpecialist.name}` : 'Choose a specialist to attach projects and blog history.'}
            </div>

            <button type="submit" disabled={savingContent} className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 font-semibold text-white hover:bg-slate-800 disabled:opacity-60">
              <FaPlus />
              {savingContent ? 'Updating...' : 'Add Content'}
            </button>
          </form>
        </div>

        <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900">Team Members</h3>
          {loading ? (
            <p className="text-slate-500">Loading specialists...</p>
          ) : specialists.length === 0 ? (
            <p className="text-slate-500">No specialists yet.</p>
          ) : (
            specialists.map((agent) => (
              <div key={agent._id} className="rounded-2xl border border-slate-200 p-4">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <img src={(agent.images && agent.images[0]) ? `http://localhost:8000${agent.images[0]}` : agent.image} alt={agent.name} className="h-16 w-16 rounded-2xl object-cover" />
                    {(agent.images || []).length > 1 && (
                      <span className="absolute -bottom-2 -right-2 rounded-full bg-slate-950 px-2 py-1 text-[10px] font-semibold text-white">
                        +{agent.images.length - 1}
                      </span>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="font-semibold text-slate-950">{agent.name}</p>
                        <p className="text-sm text-slate-500">{agent.role}</p>
                      </div>
                      {agent.featured && <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">Featured</span>}
                    </div>
                    <p className="mt-2 text-sm text-slate-600 line-clamp-2">{agent.bio}</p>
                    <div className="mt-3 grid grid-cols-2 gap-2 text-center">
                      <div className="rounded-2xl bg-cyan-50 p-2">
                        <p className="text-base font-bold text-slate-900">{agent.propertyUploads || 0}</p>
                        <p className="text-[11px] uppercase tracking-wide text-slate-500">Properties</p>
                      </div>
                      <div className="rounded-2xl bg-cyan-50 p-2">
                        <p className="text-base font-bold text-slate-900">{agent.blogUploads || 0}</p>
                        <p className="text-[11px] uppercase tracking-wide text-slate-500">Blogs</p>
                      </div>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {(agent.specialties || []).slice(0, 3).map((spec) => (
                        <span key={spec} className="rounded-full bg-cyan-100 px-2.5 py-1 text-xs font-medium text-cyan-800">{spec}</span>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                      <button onClick={() => navigate(`/specialist/${agent.slug}`)} className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white">
                        <FaEye /> View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </DashboardSectionPage>
  );
}
