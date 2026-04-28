const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  coverImage: { type: String, required: true },
  images: [{ type: String }],
  sections: [{
    heading: { type: String },
    subheading: { type: String },
    body: { type: String },
    conclusion: { type: String },
    motto: { type: String },
    note: { type: String },
  }],
  authorName: { type: String, required: true },
  authorBio: { type: String },
  authorAvatar: { type: String },
  authorRole: { type: String },
  highlights: [{ type: String }],
  stats: [{
    label: { type: String },
    value: { type: String },
  }],
  readTime: { type: String },
  status: { type: String, enum: ['draft', 'published'], default: 'draft' },
  tags: [{ type: String }],
  conclusion: { type: String },
  motto: { type: String },
  note: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Blog', blogSchema);
