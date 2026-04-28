// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import {
//   FaHome, FaChartLine, FaBuilding, FaPlusCircle, FaHeart, FaRegListAlt,
//   FaBlog, FaUserTie, FaUserFriends, FaPhoneAlt, FaEnvelope, FaCog, FaSignOutAlt,
//   FaFire, FaTimesCircle
// } from 'react-icons/fa';

// const items = [
//   {
//     heading: 'Main',
//     links: [
//       { label: 'Dashboard', icon: FaHome, to: '/dashboard', badge: null },
//       { label: 'Analytics', icon: FaChartLine, to: '/dashboard/analytics', badge: 'Live' },
//       { label: 'Property Listings', icon: FaBuilding, to: '/dashboard/listings', badge: '128' },
//       { label: 'Add Property', icon: FaPlusCircle, to: '/dashboard/add-property', badge: null },
//     ],
//   },
//   {
//     heading: 'Content & Leads',
//     links: [
//       { label: 'Liked Properties', icon: FaHeart, to: '/dashboard/likes', badge: '248' },
//       { label: 'Reports', icon: FaRegListAlt, to: '/dashboard/reports', badge: '19' },
//       { label: 'Blogs', icon: FaBlog, to: '/dashboard/blogs', badge: '12' },
//       { label: 'Agents', icon: FaUserTie, to: '/dashboard/agents', badge: '34' },
//       { label: 'Contact Persons', icon: FaUserFriends, to: '/dashboard/contacts', badge: '86' },
//       { label: 'Calls', icon: FaPhoneAlt, to: '/dashboard/calls', badge: '24' },
//       { label: 'Messages', icon: FaEnvelope, to: '/dashboard/messages', badge: '11' },
//     ],
//   },
//   {
//     heading: 'System',
//     links: [{ label: 'Settings', icon: FaCog, to: '/dashboard/settings', badge: null }],
//   },
// ];

// const DashboardSidebar = () => {
//   return (
//     <aside className="border-r border-slate-200 bg-white">
//       <div className="sticky top-[73px] flex h-[calc(100vh-73px)] flex-col overflow-y-auto px-4 py-6">
//         <div className="mb-6 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-900 p-5 text-white shadow-xl">
//           <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Overview</p>
//           <h2 className="mt-2 text-2xl font-bold">Manage every part of the real estate flow</h2>
//           <p className="mt-2 text-sm text-slate-300">Listings, content, reporting, and communication in one polished workspace.</p>
//           <div className="mt-4 flex items-center gap-2 text-xs text-cyan-200">
//             <FaFire />
//             <span>Fast actions, clean analytics, strong team visibility</span>
//           </div>
//         </div>

//         <nav className="space-y-5">
//           {items.map((group) => (
//             <div key={group.heading}>
//               <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
//                 {group.heading}
//               </p>
//               <div className="space-y-2">
//                 {group.links.map((item) => {
//                   const Icon = item.icon;
//                   return (
//                     <NavLink
//                       key={item.label}
//                       to={item.to}
//                       end={item.to === '/dashboard'}
//                       className={({ isActive }) =>
//                         `group flex w-full items-center justify-between gap-3 rounded-2xl px-4 py-3 text-left transition ${
//                           isActive
//                             ? 'bg-slate-950 text-white shadow-lg'
//                             : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
//                         }`
//                       }
//                     >
//                       <span className="flex items-center gap-3">
//                         <Icon />
//                         <span className="font-medium">{item.label}</span>
//                       </span>
//                       {item.badge && (
//                         <span className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-inherit">
//                           {item.badge}
//                         </span>
//                       )}
//                     </NavLink>
//                   );
//                 })}
//               </div>
//             </div>
//           ))}
//         </nav>

//         <div className="mt-6 rounded-3xl bg-cyan-50 p-4 text-slate-900">
//           <p className="text-sm font-semibold">Quick stats</p>
//           <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
//             <div className="rounded-2xl bg-white p-3 shadow-sm">
//               <p className="text-slate-500">Published</p>
//               <p className="text-xl font-bold">94</p>
//             </div>
//             <div className="rounded-2xl bg-white p-3 shadow-sm">
//               <p className="text-slate-500">Drafts</p>
//               <p className="text-xl font-bold">34</p>
//             </div>
//             <div className="rounded-2xl bg-white p-3 shadow-sm">
//               <p className="text-slate-500">Liked</p>
//               <p className="text-xl font-bold">248</p>
//             </div>
//             <div className="rounded-2xl bg-white p-3 shadow-sm">
//               <p className="text-slate-500">Reports</p>
//               <p className="text-xl font-bold">19</p>
//             </div>
//           </div>
//         </div>

//         <button className="mt-6 flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 font-semibold text-white hover:bg-slate-800">
//           <FaSignOutAlt />
//           Sign Out
//         </button>
//       </div>
//     </aside>
//   );
// };

// export default DashboardSidebar;













import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  FaHome, FaChartLine, FaBuilding, FaPlusCircle, FaHeart, FaRegListAlt,
  FaBlog, FaUserTie, FaUserFriends, FaPhoneAlt, FaEnvelope, FaCog, FaSignOutAlt, FaComments, FaBell
} from 'react-icons/fa';
import { auth } from '../../utils/auth';

const items = [
  {
    heading: 'Main',
    links: [
      { label: 'Dashboard', icon: FaHome, to: '/dashboard', badge: null },
      { label: 'Analytics', icon: FaChartLine, to: '/dashboard/analytics', badge: 'Live' },
      { label: 'Property Listings', icon: FaBuilding, to: '/dashboard/listings', badge: '128' },
      { label: 'Add Property', icon: FaPlusCircle, to: '/dashboard/add-property', badge: null },
      { label: 'Add Agents', icon: FaUserTie, to: '/dashboard/agents', badge: null },
    ],
  },
  {
    heading: 'Content & Leads',
      links: [
        { label: 'Liked Properties', icon: FaHeart, to: '/dashboard/likes', badge: '248' },
        { label: 'Property Comments', icon: FaComments, to: '/dashboard/comments', badge: 'New' },
        { label: 'Notifications', icon: FaBell, to: '/dashboard/comments', badge: '3' },
        { label: 'Reports', icon: FaRegListAlt, to: '/dashboard/reports', badge: '19' },
        { label: 'Blogs', icon: FaBlog, to: '/dashboard/blogs', badge: '12' },
        { label: 'Agents', icon: FaUserTie, to: '/dashboard/agents', badge: '34' },
      { label: 'Contact Persons', icon: FaUserFriends, to: '/dashboard/contacts', badge: '86' },
      { label: 'Calls', icon: FaPhoneAlt, to: '/dashboard/calls', badge: '24' },
      { label: 'Messages', icon: FaEnvelope, to: '/dashboard/messages', badge: '11' },
    ],
  },
  {
    heading: 'System',
    links: [
      { label: 'Settings', icon: FaCog, to: '/dashboard/settings', badge: null }
    ],
  },
];

const DashboardSidebar = () => {
  const navigate = useNavigate();
  const user = auth.getUser();
  const displayName =
    user?.name ||
    user?.fullName ||
    user?.username ||
    user?.email?.split?.('@')?.[0] ||
    'Admin';

  const handleLogout = () => {
    // Clear authentication data using auth utility
    auth.logout();
    
    // Redirect to login page
    navigate('/login');
  };

  return (
    <aside className="border-r border-slate-200 bg-white">
      <div className="sticky top-[73px] flex h-[calc(100vh-73px)] flex-col overflow-y-auto px-4 py-6">
        <div className="mb-6 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-900 p-5 text-white shadow-xl">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Welcome back</p>
          <h2 className="mt-2 text-2xl font-bold">{displayName}</h2>
          <p className="mt-2 text-sm text-slate-300">Manage listings, blogs, agents, and notifications in one place.</p>
          <div className="mt-4 flex items-center gap-2 text-xs text-cyan-200">
            <FaBell />
            <span>New activity is synced to the dashboard inbox</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-5">
          {items.map((group) => (
            <div key={group.heading}>
              <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                {group.heading}
              </p>
              <div className="space-y-2">
                {group.links.map((item) => {
                  const Icon = item.icon;
                  return (
                    <NavLink
                      key={item.label}
                      to={item.to}
                      end={item.to === '/dashboard'}
                      className={({ isActive }) =>
                        `group flex w-full items-center justify-between gap-3 rounded-2xl px-4 py-3 transition ${
                          isActive
                            ? 'bg-slate-950 text-white shadow-lg'
                            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
                        }`
                      }
                    >
                      <span className="flex items-center gap-3">
                        <Icon />
                        <span className="font-medium">{item.label}</span>
                      </span>

                      {item.badge && (
                        <span className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold">
                          {item.badge}
                        </span>
                      )}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Sign Out Button */}
        <button 
          onClick={handleLogout}
          className="mt-6 flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 font-semibold text-white hover:bg-slate-800 transition-colors"
        >
          <FaSignOutAlt />
          Sign Out
        </button>

      </div>
    </aside>
  );
};

export default DashboardSidebar;
