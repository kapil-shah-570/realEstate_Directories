import React, { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { FaSearch, FaCalendarAlt, FaTag, FaRupeeSign, FaMapMarkerAlt, FaHome } from 'react-icons/fa';

const normalize = (value) => String(value || '').toLowerCase();

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [properties, setProperties] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [propertiesRes, blogsRes] = await Promise.all([
          fetch('http://localhost:8000/api/properties'),
          fetch('http://localhost:8000/api/blogs'),
        ]);
        const [propertiesData, blogsData] = await Promise.all([
          propertiesRes.json(),
          blogsRes.json(),
        ]);
        setProperties(Array.isArray(propertiesData) ? propertiesData : []);
        setBlogs(Array.isArray(blogsData) ? blogsData : []);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const matchesQuery = (text) => normalize(text).includes(normalize(query));

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const priceText = [property.price, property.rent, property.budget, property.amount]
        .filter(Boolean)
        .join(' ');
      return [
        property.title,
        property.name,
        property.location,
        property.type,
        property.category,
        priceText,
      ].some(matchesQuery);
    });
  }, [properties, query]);

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const priceText = [blog.price, blog.budget, blog.amount, blog.readTime]
        .filter(Boolean)
        .join(' ');
      return [
        blog.title,
        blog.slug,
        blog.category,
        blog.excerpt,
        blog.authorName,
        blog.authorRole,
        priceText,
      ].some(matchesQuery);
    });
  }, [blogs, query]);

  const totalResults = filteredProperties.length + filteredBlogs.length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="bg-slate-950 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Unified Search</p>
          <h1 className="mt-3 text-3xl md:text-5xl font-black">Search properties and blogs together</h1>
          <p className="mt-4 max-w-2xl text-white/70">
            Match listings, articles, names, categories, and price-related fields from one search box.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm mb-8">
          <div className="flex items-center gap-3 text-slate-700">
            <FaSearch className="text-cyan-600" />
            <span className="font-semibold">Search term:</span>
            <span className="text-slate-500">{query || 'None'}</span>
            <span className="ml-auto rounded-full bg-cyan-100 px-3 py-1 text-sm font-semibold text-cyan-800">
              {loading ? 'Loading...' : `${totalResults} results`}
            </span>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-slate-950">Properties</h2>
            {loading ? (
              <p className="text-slate-500">Loading properties...</p>
            ) : filteredProperties.length === 0 ? (
              <p className="text-slate-500">No properties matched your search.</p>
            ) : (
              filteredProperties.map((property) => (
                <Link key={property._id || property.id} to={`/listing/${property._id || property.id}`} className="block rounded-3xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
                      <FaHome />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.25em] text-cyan-600">
                        <span>{property.type || 'Property'}</span>
                        <span>•</span>
                        <span>{property.category || property.status || 'Listing'}</span>
                      </div>
                      <h3 className="mt-2 text-xl font-bold text-slate-950">{property.title || property.name || 'Untitled property'}</h3>
                      <p className="mt-2 text-sm text-slate-600">{property.location || 'Location not available'}</p>
                      <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-500">
                        <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1"><FaRupeeSign /> {property.price || property.rent || property.amount || 'Price on request'}</span>
                        {property.bedrooms && <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1">{property.bedrooms} beds</span>}
                        {property.bathrooms && <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1">{property.bathrooms} baths</span>}
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-slate-950">Blogs</h2>
            {loading ? (
              <p className="text-slate-500">Loading blogs...</p>
            ) : filteredBlogs.length === 0 ? (
              <p className="text-slate-500">No blogs matched your search.</p>
            ) : (
              filteredBlogs.map((blog) => (
                <Link key={blog._id} to={`/blog/${blog.slug}`} className="block rounded-3xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition">
                  <div className="flex items-start gap-4">
                    <div className="h-20 w-24 overflow-hidden rounded-2xl bg-slate-100">
                      <img src={blog.coverImage} alt={blog.title} className="h-full w-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.25em] text-cyan-600">
                        <span>{blog.category || 'Blog'}</span>
                        <span>•</span>
                        <span>{blog.authorRole || 'Editorial'}</span>
                      </div>
                      <h3 className="mt-2 text-xl font-bold text-slate-950">{blog.title}</h3>
                      <p className="mt-2 text-sm text-slate-600 line-clamp-2">{blog.excerpt}</p>
                      <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-500">
                        <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1"><FaCalendarAlt /> {new Date(blog.createdAt).toLocaleDateString()}</span>
                        <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1"><FaTag /> {blog.readTime || 'Read'}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsPage;
