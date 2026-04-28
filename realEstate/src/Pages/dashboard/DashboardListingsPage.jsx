import React, { useState, useEffect } from 'react';
import { FaBuilding, FaCheckCircle, FaBed, FaBath, FaMapMarkerAlt, FaEye, FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import DashboardSectionPage from '../../components/Dashboard/DashboardSectionPage';

export default function DashboardListingsPage() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:8000/api/properties');
      if (!response.ok) throw new Error('Failed to fetch properties');
      const data = await response.json();
      setProperties(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCardClick = (property) => {
    navigate(`/listing/${property._id}`);
  };

  const handleEdit = (e, property) => {
    e.stopPropagation();
    navigate(`/dashboard/edit-property/${property._id}`);
  };

  const handleDelete = async (e, propertyId) => {
    e.stopPropagation();
    if (window.confirm('Are you sure you want to delete this property?')) {
      try {
        const response = await fetch(`http://localhost:8000/api/properties/${propertyId}`, {
          method: 'DELETE',
        });
        if (!response.ok) throw new Error('Failed to delete property');
        setProperties(properties.filter(p => p._id !== propertyId));
      } catch (err) {
        alert('Error deleting property: ' + err.message);
      }
    }
  };

  const handleAddProperty = () => {
    navigate('/dashboard/add-property');
  };

  if (loading) {
    return (
      <DashboardSectionPage
        title="Property Listings"
        subtitle="View, publish, and update all properties from this section."
        actionLabel="Add Property"
        onAction={handleAddProperty}
      >
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-600"></div>
            <span className="ml-3 text-slate-600">Loading properties...</span>
          </div>
        </div>
      </DashboardSectionPage>
    );
  }

  if (error) {
    return (
      <DashboardSectionPage
        title="Property Listings"
        subtitle="View, publish, and update all properties from this section."
        actionLabel="Add Property"
        onAction={handleAddProperty}
      >
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-center py-12">
            <div className="text-red-500 mb-4">
              <FaBuilding className="mx-auto text-4xl mb-2" />
              <p className="text-lg font-semibold">Error loading properties</p>
            </div>
            <p className="text-slate-600 mb-4">{error}</p>
            <button
              onClick={fetchProperties}
              className="bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 transition"
            >
              Try Again
            </button>
          </div>
        </div>
      </DashboardSectionPage>
    );
  }

  return (
    <DashboardSectionPage
      title="Property Listings"
      subtitle="View, publish, and update all properties from this section."
      actionLabel="Add Property"
      onAction={handleAddProperty}
    >
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        {properties.length > 0 && (
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-slate-600">
              Showing {properties.length} propert{properties.length === 1 ? 'y' : 'ies'}
            </p>
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <div
              key={property._id}
              className="group rounded-2xl bg-slate-50 p-4 cursor-pointer hover:bg-slate-100 hover:shadow-md transition-all duration-200 border border-transparent hover:border-slate-200"
              onClick={() => handleCardClick(property)}
            >
              <div className="mb-4 relative">
                {property.images && property.images.length > 0 ? (
                  <img
                    src={`http://localhost:8000${property.images[0]}`}
                    alt={property.title}
                    className="w-full h-32 object-cover rounded-xl"
                  />
                ) : (
                  <div className="w-full h-32 bg-slate-200 rounded-xl flex items-center justify-center">
                    <FaBuilding className="text-slate-400 text-2xl" />
                  </div>
                )}

                {/* Action buttons overlay */}
                <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={(e) => handleEdit(e, property)}
                    className="bg-white/90 hover:bg-white p-2 rounded-lg shadow-sm text-slate-600 hover:text-cyan-600 transition-colors"
                    title="Edit property"
                  >
                    <FaEdit className="text-sm" />
                  </button>
                  <button
                    onClick={(e) => handleDelete(e, property._id)}
                    className="bg-white/90 hover:bg-white p-2 rounded-lg shadow-sm text-slate-600 hover:text-red-600 transition-colors"
                    title="Delete property"
                  >
                    <FaTrash className="text-sm" />
                  </button>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 mb-1 line-clamp-1">{property.title}</h3>
                <p className="text-sm text-slate-500 mb-2 flex items-center gap-1">
                  <FaMapMarkerAlt /> {property.location}
                </p>
                <p className="text-lg font-bold text-cyan-600 mb-2">{property.price}</p>
                <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                  <span className="flex items-center gap-1">
                    <FaBed /> {property.bedrooms}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaBath /> {property.bathrooms}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
                    property.status === 'published' ? 'bg-emerald-100 text-emerald-700' :
                    property.status === 'draft' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-slate-100 text-slate-700'
                  }`}>
                    <FaCheckCircle />
                    {property.status || 'draft'}
                  </span>
                  <button
                    onClick={() => handleCardClick(property)}
                    className="text-cyan-600 hover:text-cyan-700 text-sm font-medium flex items-center gap-1"
                  >
                    <FaEye /> View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {properties.length === 0 && (
          <div className="text-center py-12">
            <FaBuilding className="mx-auto text-4xl text-slate-300 mb-4" />
            <h3 className="text-lg font-semibold text-slate-900 mb-2">No properties found</h3>
            <p className="text-slate-600 mb-6">Get started by adding your first property listing.</p>
            <button
              onClick={handleAddProperty}
              className="inline-flex items-center gap-2 bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition font-medium"
            >
              <FaPlus /> Add Your First Property
            </button>
          </div>
        )}
      </div>
    </DashboardSectionPage>
  );
}
