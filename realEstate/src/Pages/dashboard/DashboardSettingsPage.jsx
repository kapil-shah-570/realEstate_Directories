import React, { useEffect, useState } from 'react';
import { FaCog, FaBell, FaEnvelope, FaSearch, FaPalette, FaSave, FaUserCircle, FaLock, FaEye, FaShieldAlt, FaImage } from 'react-icons/fa';
import DashboardSectionPage from '../../components/Dashboard/DashboardSectionPage';

export default function DashboardSettingsPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [passwordSaving, setPasswordSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [form, setForm] = useState({
    profileName: 'Admin User',
    username: 'admin',
    email: 'admin@estatepro.com',
    phone: '+1 (555) 123-4567',
    passwordHint: '',
    avatarUrl: '',
    siteName: 'EstatePro',
    dashboardName: 'EstatePro Dashboard',
    supportEmail: 'support@estatepro.com',
    supportPhone: '+1 (555) 123-4567',
    notificationsEnabled: true,
    emailAlertsEnabled: true,
    darkSidebarEnabled: true,
    searchIndexingEnabled: true,
    profilePublic: false,
    twoFactorEnabled: true,
    emailVisibility: true,
    phoneVisibility: false,
    allowMarketingEmails: true,
    allowContactMessages: true,
  });
  const [passwordForm, setPasswordForm] = useState({
    email: 'admin@estatepro.com',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/settings');
        const data = await response.json();
        if (data) {
          setForm({
            profileName: data.profileName || 'Admin User',
            username: data.username || 'admin',
            email: data.email || 'admin@estatepro.com',
            phone: data.phone || '+1 (555) 123-4567',
            passwordHint: data.passwordHint || '',
            avatarUrl: data.avatarUrl || '',
            siteName: data.siteName || 'EstatePro',
            dashboardName: data.dashboardName || 'EstatePro Dashboard',
            supportEmail: data.supportEmail || 'support@estatepro.com',
            supportPhone: data.supportPhone || '+1 (555) 123-4567',
            notificationsEnabled: Boolean(data.notificationsEnabled),
            emailAlertsEnabled: Boolean(data.emailAlertsEnabled),
            darkSidebarEnabled: Boolean(data.darkSidebarEnabled),
            searchIndexingEnabled: Boolean(data.searchIndexingEnabled),
            profilePublic: Boolean(data.profilePublic),
            twoFactorEnabled: Boolean(data.twoFactorEnabled),
            emailVisibility: Boolean(data.emailVisibility),
            phoneVisibility: Boolean(data.phoneVisibility),
            allowMarketingEmails: Boolean(data.allowMarketingEmails),
            allowContactMessages: Boolean(data.allowContactMessages),
          });
          setPasswordForm((prev) => ({
            ...prev,
            email: data.email || prev.email,
          }));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSaving(true);
    setMessage('');

    try {
      const response = await fetch('http://localhost:8000/api/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to save settings');
      setMessage('Settings saved successfully.');
    } catch (error) {
      setMessage(error.message);
    } finally {
      setSaving(false);
    }
  };

  const handlePasswordChange = (event) => {
    const { name, value } = event.target;
    setPasswordForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordSubmit = async (event) => {
    event.preventDefault();
    setPasswordSaving(true);
    setPasswordMessage('');

    try {
      const response = await fetch('http://localhost:8000/api/auth/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(passwordForm),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to change password');
      setPasswordMessage('Password changed successfully.');
      setPasswordForm((prev) => ({
        ...prev,
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      }));
    } catch (error) {
      setPasswordMessage(error.message);
    } finally {
      setPasswordSaving(false);
    }
  };

  return (
    <DashboardSectionPage
      title="Settings"
      subtitle="Control branding, alerts, dashboard behavior, and support details from one place."
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <FaCog className="text-cyan-600" />
            <h3 className="text-xl font-bold text-slate-950">General Settings</h3>
          </div>

          {message && <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">{message}</div>}

          {loading ? (
            <p className="text-slate-500">Loading settings...</p>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              <div className="md:col-span-2 rounded-3xl bg-slate-50 p-4">
                <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <FaUserCircle className="text-cyan-600" /> Profile
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <input name="profileName" value={form.profileName} onChange={handleChange} className="rounded-2xl border border-slate-200 px-4 py-3" placeholder="Profile name" />
                  <input name="username" value={form.username} onChange={handleChange} className="rounded-2xl border border-slate-200 px-4 py-3" placeholder="Username" />
                  <input name="email" value={form.email} onChange={handleChange} className="rounded-2xl border border-slate-200 px-4 py-3" placeholder="Email" />
                  <input name="phone" value={form.phone} onChange={handleChange} className="rounded-2xl border border-slate-200 px-4 py-3" placeholder="Phone" />
                  <input name="avatarUrl" value={form.avatarUrl} onChange={handleChange} className="rounded-2xl border border-slate-200 px-4 py-3 md:col-span-2" placeholder="Avatar URL" />
                  <input name="passwordHint" value={form.passwordHint} onChange={handleChange} className="rounded-2xl border border-slate-200 px-4 py-3 md:col-span-2" placeholder="New password / update note" />
                </div>
                <div className="mt-4 flex items-center gap-4 rounded-2xl border border-dashed border-slate-300 bg-white p-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700 overflow-hidden">
                    {form.avatarUrl ? <img src={form.avatarUrl} alt="Avatar preview" className="h-full w-full object-cover" /> : <FaImage />}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Avatar Preview</p>
                    <p className="text-sm text-slate-500">Paste an image URL to update the dashboard profile icon.</p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 rounded-3xl bg-slate-50 p-4">
                <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <FaPalette className="text-cyan-600" /> Site Branding
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <input name="siteName" value={form.siteName} onChange={handleChange} className="rounded-2xl border border-slate-200 px-4 py-3" placeholder="Site name" />
                  <input name="dashboardName" value={form.dashboardName} onChange={handleChange} className="rounded-2xl border border-slate-200 px-4 py-3" placeholder="Dashboard name" />
                  <input name="supportEmail" value={form.supportEmail} onChange={handleChange} className="rounded-2xl border border-slate-200 px-4 py-3" placeholder="Support email" />
                  <input name="supportPhone" value={form.supportPhone} onChange={handleChange} className="rounded-2xl border border-slate-200 px-4 py-3" placeholder="Support phone" />
                </div>
              </div>
            </div>
          )}

          <button type="submit" disabled={saving || loading} className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 font-semibold text-white hover:bg-slate-800 disabled:opacity-60">
            <FaSave />
            {saving ? 'Saving...' : 'Save Settings'}
          </button>
        </form>

        <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <FaShieldAlt className="text-cyan-600" />
            <h3 className="text-xl font-bold text-slate-950">Privacy & Controls</h3>
          </div>

          <label className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
            <span className="flex items-center gap-2 font-medium text-slate-900"><FaBell className="text-cyan-600" /> Notifications</span>
            <input type="checkbox" name="notificationsEnabled" checked={form.notificationsEnabled} onChange={handleChange} />
          </label>
          <label className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
            <span className="flex items-center gap-2 font-medium text-slate-900"><FaEnvelope className="text-cyan-600" /> Email Alerts</span>
            <input type="checkbox" name="emailAlertsEnabled" checked={form.emailAlertsEnabled} onChange={handleChange} />
          </label>
          <label className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
            <span className="flex items-center gap-2 font-medium text-slate-900"><FaPalette className="text-cyan-600" /> Dark Sidebar</span>
            <input type="checkbox" name="darkSidebarEnabled" checked={form.darkSidebarEnabled} onChange={handleChange} />
          </label>
          <label className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
            <span className="flex items-center gap-2 font-medium text-slate-900"><FaSearch className="text-cyan-600" /> Search Indexing</span>
            <input type="checkbox" name="searchIndexingEnabled" checked={form.searchIndexingEnabled} onChange={handleChange} />
          </label>
          <label className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
            <span className="flex items-center gap-2 font-medium text-slate-900"><FaEye className="text-cyan-600" /> Public Profile</span>
            <input type="checkbox" name="profilePublic" checked={form.profilePublic} onChange={handleChange} />
          </label>
          <label className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
            <span className="flex items-center gap-2 font-medium text-slate-900"><FaLock className="text-cyan-600" /> Two-factor Security</span>
            <input type="checkbox" name="twoFactorEnabled" checked={form.twoFactorEnabled} onChange={handleChange} />
          </label>
          <label className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
            <span className="flex items-center gap-2 font-medium text-slate-900"><FaEnvelope className="text-cyan-600" /> Show Email</span>
            <input type="checkbox" name="emailVisibility" checked={form.emailVisibility} onChange={handleChange} />
          </label>
          <label className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
            <span className="flex items-center gap-2 font-medium text-slate-900"><FaUserCircle className="text-cyan-600" /> Show Phone</span>
            <input type="checkbox" name="phoneVisibility" checked={form.phoneVisibility} onChange={handleChange} />
          </label>
          <label className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
            <span className="flex items-center gap-2 font-medium text-slate-900"><FaEnvelope className="text-cyan-600" /> Marketing Emails</span>
            <input type="checkbox" name="allowMarketingEmails" checked={form.allowMarketingEmails} onChange={handleChange} />
          </label>
          <label className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
            <span className="flex items-center gap-2 font-medium text-slate-900"><FaSearch className="text-cyan-600" /> Contact Messages</span>
            <input type="checkbox" name="allowContactMessages" checked={form.allowContactMessages} onChange={handleChange} />
          </label>
        </div>

        <form onSubmit={handlePasswordSubmit} className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
          <div className="flex items-center gap-3">
            <FaLock className="text-cyan-600" />
            <h3 className="text-xl font-bold text-slate-950">Change Password</h3>
          </div>

          {passwordMessage && <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">{passwordMessage}</div>}

          <div className="grid gap-4 md:grid-cols-2">
            <input
              name="email"
              value={passwordForm.email}
              onChange={handlePasswordChange}
              className="rounded-2xl border border-slate-200 px-4 py-3"
              placeholder="Account email"
              required
            />
            <input
              name="currentPassword"
              type="password"
              value={passwordForm.currentPassword}
              onChange={handlePasswordChange}
              className="rounded-2xl border border-slate-200 px-4 py-3"
              placeholder="Current password"
              required
            />
            <input
              name="newPassword"
              type="password"
              value={passwordForm.newPassword}
              onChange={handlePasswordChange}
              className="rounded-2xl border border-slate-200 px-4 py-3"
              placeholder="New password"
              required
            />
            <input
              name="confirmPassword"
              type="password"
              value={passwordForm.confirmPassword}
              onChange={handlePasswordChange}
              className="rounded-2xl border border-slate-200 px-4 py-3"
              placeholder="Confirm new password"
              required
            />
          </div>

          <button type="submit" disabled={passwordSaving} className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 font-semibold text-white hover:bg-slate-800 disabled:opacity-60">
            <FaLock />
            {passwordSaving ? 'Updating...' : 'Update Password'}
          </button>
        </form>
      </div>
    </DashboardSectionPage>
  );
}
