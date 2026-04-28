import React from 'react';
import { FaBuilding, FaHeart, FaUsers, FaRegListAlt, FaBlog, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const stats = [
  { label: 'Active Listings', value: '128', icon: FaBuilding },
  { label: 'Saved Likes', value: '248', icon: FaHeart },
  { label: 'Agents', value: '34', icon: FaUsers },
  { label: 'Reports', value: '19', icon: FaRegListAlt },
];

const dashboardCards = [
  {
    title: 'Property Listings',
    description: 'Create, edit, publish, and manage featured homes.',
    items: ['Add property', 'Upload gallery', 'Set price', 'Mark featured'],
  },
  {
    title: 'Agents',
    description: 'Keep track of every team member and assigned leads.',
    items: ['Profiles', 'Availability', 'Assigned listings', 'Performance'],
  },
  {
    title: 'Reports',
    description: 'Monitor leads, bookings, click-throughs, and activity.',
    items: ['Lead reports', 'Sales reports', 'Traffic reports', 'Performance'],
  },
  {
    title: 'Blogs',
    description: 'Publish market updates, guides, and featured stories.',
    items: ['Drafts', 'Published posts', 'SEO metadata', 'Categories'],
  },
  {
    title: 'Contacts',
    description: 'Store contact persons, buyers, renters, and callbacks.',
    items: ['Call requests', 'Email leads', 'Visitor notes', 'Follow-ups'],
  },
];

const recentListings = [
  { name: 'Modern Luxury Villa', status: 'Live', price: '$2.5M' },
  { name: 'Downtown Penthouse', status: 'Review', price: '$3.8M' },
  { name: 'Waterfront Mansion', status: 'Draft', price: '$5.2M' },
];

const DashboardPage = () => {
  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-900 p-6 text-white shadow-2xl sm:p-8">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.4em] text-cyan-300">Property control center</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-5xl">Design-first real estate dashboard for teams</h2>
          <p className="mt-4 text-sm leading-6 text-slate-300 sm:text-base">
            Manage property listings, agents, likes, blog content, reports, and contact persons from one elegant workspace.
          </p>
        </div>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-500">{stat.label}</p>
                <Icon className="text-cyan-600" />
              </div>
              <p className="mt-3 text-3xl font-bold text-slate-950">{stat.value}</p>
            </div>
          );
        })}
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-950">Property Listings</h3>
              <p className="text-sm text-slate-500">Add and manage all listed properties.</p>
            </div>
            <button className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white">Add New</button>
          </div>
          <div className="space-y-4">
            {recentListings.map((item) => (
              <div key={item.name} className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                <div>
                  <p className="font-semibold text-slate-900">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.price}</p>
                </div>
                <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-800">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-950">Dashboard sections</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {dashboardCards.map((card) => (
              <div key={card.title} className="rounded-2xl bg-slate-50 p-4">
                <div className="mb-2 flex items-center gap-2 text-slate-900">
                  {card.title === 'Blogs' && <FaBlog />}
                  {card.title === 'Contacts' && <FaEnvelope />}
                  {card.title === 'Agents' && <FaUsers />}
                  {card.title === 'Reports' && <FaRegListAlt />}
                  {card.title === 'Property Listings' && <FaBuilding />}
                  <p className="font-semibold">{card.title}</p>
                </div>
                <p className="text-sm text-slate-500">{card.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {card.items.map((item) => (
                    <span key={item} className="rounded-full bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">
          <h3 className="text-xl font-bold text-slate-950">List a property</h3>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <input className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none" placeholder="Property title" />
            <input className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none" placeholder="Price" />
            <input className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none" placeholder="Location" />
            <input className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none" placeholder="Property type" />
            <textarea className="min-h-32 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none md:col-span-2" placeholder="Description" />
            <div className="grid gap-4 md:grid-cols-2 md:col-span-2">
              <input className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none" placeholder="Agent name" />
              <input className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none" placeholder="Contact person" />
            </div>
            <button className="rounded-2xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 md:col-span-2">
              Publish Listing
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-950">Quick contacts</h3>
          <div className="mt-5 space-y-4">
            {[
              { name: 'Sophia Miller', role: 'Lead Agent', phone: '+1 555 101 2020' },
              { name: 'Daniel Brown', role: 'Sales Contact', phone: '+1 555 303 4040' },
              { name: 'Priya Patel', role: 'Blog Editor', phone: '+1 555 505 6060' },
            ].map((person) => (
              <div key={person.name} className="rounded-2xl bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">{person.name}</p>
                <p className="text-sm text-slate-500">{person.role}</p>
                <p className="mt-2 text-sm text-slate-700">{person.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;
