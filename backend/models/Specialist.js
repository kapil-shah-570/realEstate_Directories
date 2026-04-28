const mongoose = require('mongoose');

const specialistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  role: { type: String, required: true },
  image: { type: String, required: true },
  images: [{ type: String }],
  email: { type: String, required: true },
  phone: { type: String, required: true },
  specialties: [{ type: String }],
  bio: { type: String, required: true },
  yearsExperience: { type: String },
  totalSales: { type: Number, default: 0 },
  propertiesSold: { type: Number, default: 0 },
  activeListings: { type: Number, default: 0 },
  propertyUploads: { type: Number, default: 0 },
  blogUploads: { type: Number, default: 0 },
  previousProjects: [{ type: String }],
  blogPosts: [{ type: String }],
  recentSales: [{ type: String }],
  languages: [{ type: String }],
  location: { type: String },
  calendarLink: { type: String },
  featured: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Specialist', specialistSchema);
