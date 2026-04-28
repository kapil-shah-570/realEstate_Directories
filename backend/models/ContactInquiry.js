const mongoose = require('mongoose');

const contactInquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  subject: { type: String },
  message: { type: String, required: true },
  preferredTime: { type: String },
  department: { type: String, required: true },
  attachmentUrl: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ContactInquiry', contactInquirySchema);
