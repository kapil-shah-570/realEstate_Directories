const mongoose = require('mongoose');

const settingSchema = new mongoose.Schema({
  profileName: { type: String, default: 'Admin User' },
  username: { type: String, default: 'admin' },
  email: { type: String, default: 'admin@estatepro.com' },
  phone: { type: String, default: '+1 (555) 123-4567' },
  passwordHint: { type: String, default: 'Update from the admin panel' },
  avatarUrl: { type: String, default: '' },
  siteName: { type: String, default: 'EstatePro' },
  dashboardName: { type: String, default: 'EstatePro Dashboard' },
  supportEmail: { type: String, default: 'support@estatepro.com' },
  supportPhone: { type: String, default: '+1 (555) 123-4567' },
  notificationsEnabled: { type: Boolean, default: true },
  emailAlertsEnabled: { type: Boolean, default: true },
  darkSidebarEnabled: { type: Boolean, default: true },
  searchIndexingEnabled: { type: Boolean, default: true },
  profilePublic: { type: Boolean, default: false },
  twoFactorEnabled: { type: Boolean, default: true },
  emailVisibility: { type: Boolean, default: true },
  phoneVisibility: { type: Boolean, default: false },
  allowMarketingEmails: { type: Boolean, default: true },
  allowContactMessages: { type: Boolean, default: true },
  updatedAt: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Setting', settingSchema);
