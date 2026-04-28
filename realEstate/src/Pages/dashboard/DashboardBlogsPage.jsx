import React, { useEffect, useState } from 'react';
import { FaBlog, FaPlus, FaEye, FaImages, FaLayerGroup } from 'react-icons/fa';
import DashboardSectionPage from '../../components/Dashboard/DashboardSectionPage';
import { useNavigate } from 'react-router-dom';

const emptySection = { heading: '', subheading: '', body: '', conclusion: '', motto: '', note: '' };

const emptyForm = {
  title: '',
  slug: '',
  category: '',
  excerpt: '',
  content: '',
  authorName: '',
  authorRole: '',
  authorBio: '',
  authorAvatar: '',
  readTime: '5 min read',
  status: 'draft',
  tags: '',
  highlights: '',
  conclusion: '',
  motto: '',
  note: '',
  sections: [emptySection],
};

export default function DashboardBlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [blogImages, setBlogImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/blogs');
      if (!response.ok) throw new Error('Failed to fetch blogs');
      setBlogs(await response.json());
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSectionChange = (index, field, value) => {
    setForm((prev) => {
      const sections = [...prev.sections];
      sections[index] = { ...sections[index], [field]: value };
      return { ...prev, sections };
    });
  };

  const addSection = () => setForm((prev) => ({ ...prev, sections: [...prev.sections, emptySection] }));
  const removeSection = (index) => setForm((prev) => ({ ...prev, sections: prev.sections.filter((_, i) => i !== index) }));

  const handleImages = (e) => {
    setBlogImages(Array.from(e.target.files || []));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError('');

    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        if (key === 'sections') {
          formData.append('sections', JSON.stringify(value));
        } else if (key !== 'highlights') {
          formData.append(key, value);
        }
      });
      formData.append('highlights', form.highlights);
      blogImages.forEach((file) => formData.append('images', file));

      const response = await fetch('http://localhost:8000/api/blogs', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to create blog');

      setBlogs((prev) => [data.blog, ...prev]);
      setForm(emptyForm);
      setBlogImages([]);
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <DashboardSectionPage
      title="Blogs"
      subtitle="Create structured blog posts with multiple images, sections, and editorial details."
      actionLabel="View Blog Page"
      onAction={() => navigate('/blog')}
    >
      <div className="grid gap-6 lg:grid-cols-5">
        <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2 text-slate-900">
            <FaBlog className="text-cyan-600" />
            <h3 className="text-xl font-bold">Create Blog Post</h3>
          </div>

          {error && <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>}

          <div className="grid gap-4 md:grid-cols-2">
            <input name="title" value={form.title} onChange={handleChange} placeholder="Title" className="rounded-2xl border border-slate-200 px-4 py-3" required />
            <input name="slug" value={form.slug} onChange={handleChange} placeholder="Slug (optional)" className="rounded-2xl border border-slate-200 px-4 py-3" />
            <input name="category" value={form.category} onChange={handleChange} placeholder="Category" className="rounded-2xl border border-slate-200 px-4 py-3" required />
            <input name="readTime" value={form.readTime} onChange={handleChange} placeholder="Read time" className="rounded-2xl border border-slate-200 px-4 py-3" />
            <input name="authorName" value={form.authorName} onChange={handleChange} placeholder="Author name" className="rounded-2xl border border-slate-200 px-4 py-3" required />
            <input name="authorRole" value={form.authorRole} onChange={handleChange} placeholder="Author role" className="rounded-2xl border border-slate-200 px-4 py-3" />
            <input name="authorAvatar" value={form.authorAvatar} onChange={handleChange} placeholder="Author avatar URL" className="rounded-2xl border border-slate-200 px-4 py-3 md:col-span-2" />
            <textarea name="authorBio" value={form.authorBio} onChange={handleChange} placeholder="Author bio" className="rounded-2xl border border-slate-200 px-4 py-3 md:col-span-2 h-24" />
            <textarea name="excerpt" value={form.excerpt} onChange={handleChange} placeholder="Short excerpt" className="rounded-2xl border border-slate-200 px-4 py-3 md:col-span-2 h-24" required />
            <textarea name="content" value={form.content} onChange={handleChange} placeholder="Full blog content / introduction" className="rounded-2xl border border-slate-200 px-4 py-3 md:col-span-2 h-28" required />
            <input name="highlights" value={form.highlights} onChange={handleChange} placeholder="Highlights comma separated" className="rounded-2xl border border-slate-200 px-4 py-3 md:col-span-2" />
            <input name="motto" value={form.motto} onChange={handleChange} placeholder="Blog motto" className="rounded-2xl border border-slate-200 px-4 py-3 md:col-span-2" />
            <input name="note" value={form.note} onChange={handleChange} placeholder="Editor note" className="rounded-2xl border border-slate-200 px-4 py-3 md:col-span-2" />
            <input name="conclusion" value={form.conclusion} onChange={handleChange} placeholder="Conclusion summary" className="rounded-2xl border border-slate-200 px-4 py-3 md:col-span-2" />
          </div>

          <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-5">
            <label className="flex cursor-pointer flex-col items-center justify-center gap-2 text-center">
              <FaImages className="text-2xl text-cyan-600" />
              <span className="font-semibold text-slate-900">Upload blog images</span>
              <span className="text-sm text-slate-500">Multiple images supported</span>
              <input type="file" multiple accept="image/*" onChange={handleImages} className="hidden" />
            </label>
            {blogImages.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-3">
                {blogImages.map((file) => (
                  <span key={file.name} className="rounded-full bg-white px-3 py-1 text-sm text-slate-700 border border-slate-200">
                    {file.name}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <FaLayerGroup className="text-cyan-600" />
                <h4 className="font-bold text-slate-900">Article Sections</h4>
              </div>
              <button type="button" onClick={addSection} className="rounded-full bg-cyan-600 px-4 py-2 text-sm font-semibold text-white">
                <FaPlus /> Add Section
              </button>
            </div>

            {form.sections.map((section, index) => (
              <div key={index} className="rounded-3xl bg-white p-4 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-slate-900">Section {index + 1}</p>
                  {form.sections.length > 1 && (
                    <button type="button" onClick={() => removeSection(index)} className="text-sm font-semibold text-red-600">
                      Remove
                    </button>
                  )}
                </div>
                <input value={section.heading} onChange={(e) => handleSectionChange(index, 'heading', e.target.value)} placeholder="Heading" className="w-full rounded-2xl border border-slate-200 px-4 py-3" />
                <input value={section.subheading} onChange={(e) => handleSectionChange(index, 'subheading', e.target.value)} placeholder="Subheading" className="w-full rounded-2xl border border-slate-200 px-4 py-3" />
                <textarea value={section.body} onChange={(e) => handleSectionChange(index, 'body', e.target.value)} placeholder="Body" className="w-full rounded-2xl border border-slate-200 px-4 py-3 h-28" />
                <textarea value={section.conclusion} onChange={(e) => handleSectionChange(index, 'conclusion', e.target.value)} placeholder="Conclusion" className="w-full rounded-2xl border border-slate-200 px-4 py-3 h-24" />
                <input value={section.motto} onChange={(e) => handleSectionChange(index, 'motto', e.target.value)} placeholder="Motto" className="w-full rounded-2xl border border-slate-200 px-4 py-3" />
                <input value={section.note} onChange={(e) => handleSectionChange(index, 'note', e.target.value)} placeholder="Note" className="w-full rounded-2xl border border-slate-200 px-4 py-3" />
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <select name="status" value={form.status} onChange={handleChange} className="rounded-2xl border border-slate-200 px-4 py-3">
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
            <button type="submit" disabled={saving} className="inline-flex items-center gap-2 rounded-2xl bg-cyan-600 px-5 py-3 font-semibold text-white hover:bg-cyan-700 disabled:opacity-60">
              <FaPlus />
              {saving ? 'Saving...' : 'Save Blog'}
            </button>
          </div>
        </form>

        <div className="lg:col-span-2 space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900">Saved Blogs</h3>
          {loading ? (
            <p className="text-slate-500">Loading blogs...</p>
          ) : blogs.length === 0 ? (
            <p className="text-slate-500">No blogs yet. Create your first post.</p>
          ) : (
            blogs.map((blog) => (
              <button
                key={blog._id}
                type="button"
                onClick={() => navigate(`/blog/${blog.slug}`)}
                className="w-full rounded-2xl border border-slate-200 p-4 text-left hover:bg-slate-50"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-slate-900">{blog.title}</p>
                    <p className="mt-1 text-sm text-slate-500">{blog.category} · {blog.readTime}</p>
                  </div>
                  <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-800">{blog.status}</span>
                </div>
              </button>
            ))
          )}
        </div>
      </div>
    </DashboardSectionPage>
  );
}
