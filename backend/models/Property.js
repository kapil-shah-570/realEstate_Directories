const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  // Basic Info
  title: { type: String, required: true },
  price: { type: String, required: true },
  location: { type: String, required: true },
  buildingName: { type: String },
  propertyType: { type: String, enum: ['residential', 'commercial', 'land', 'multi-family'], default: 'residential' },
  status: { type: String, enum: ['draft', 'published'], default: 'draft' },

  // Property Details
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  sqft: { type: String },
  yearBuilt: { type: Number },
  lotSize: { type: String },
  parking: { type: String },
  furnished: { type: String, enum: ['no', 'semi', 'fully'], default: 'no' },
  heating: { type: String, enum: ['central', 'radiant', 'other'], default: 'central' },
  cooling: { type: String, enum: ['central', 'window', 'none'], default: 'central' },
  flooring: { type: String },
  views: { type: String },
  petPolicy: { type: String, enum: ['allowed', 'not allowed', 'conditional'], default: 'allowed' },
  availabilityDate: { type: Date },
  nearbyPlaces: { type: String },
  area: { type: String },
  description: { type: String, required: true },

  // Media
  images: [{ type: String }],
  videoUrl: { type: String },
  virtualTour: { type: String },

  // Location
  latitude: { type: Number },
  longitude: { type: Number },

  // Features
  features: [{ type: String }],
  whyChoose: { type: String },

  // Social
  likesCount: { type: Number, default: 0 },
  comments: [{
    name: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  }],

  // Agent
  agentName: { type: String },
  agentPhone: { type: String },
  agentEmail: { type: String },

  // Creator (if authentication added)
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Property', propertySchema);
