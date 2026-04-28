// import React from 'react';
// import { FaBell, FaSearch, FaPlusCircle, FaUserCircle } from 'react-icons/fa';

// const DashboardNavbar = () => {
//   return (
//     <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/95 backdrop-blur-xl text-white">
//       <div className="flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 py-4">
//         <div>
//           <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">EstatePro Dashboard</p>
//           <h1 className="text-xl sm:text-2xl font-semibold">Property management center</h1>
//         </div>

//         <div className="hidden md:flex items-center gap-3 flex-1 max-w-xl mx-6">
//           <div className="flex items-center gap-3 w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-slate-300">
//             <FaSearch className="shrink-0" />
//             <input
//               type="text"
//               placeholder="Search listings, agents, reports..."
//               className="w-full bg-transparent outline-none placeholder:text-slate-400"
//             />
//           </div>
//         </div>

//         <div className="flex items-center gap-3">
//           <button className="hidden sm:inline-flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-300 transition">
//             <FaPlusCircle />
//             Add Property
//           </button>
//           <button className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white">
//             <FaBell />
//           </button>
//           <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2">
//             <FaUserCircle className="text-2xl text-cyan-300" />
//             <div className="hidden sm:block leading-tight">
//               <p className="text-sm font-medium">Aarav Shah</p>
//               <p className="text-xs text-slate-400">Admin</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default DashboardNavbar;


















import React from 'react';
import { FaBell, FaSearch, FaPlusCircle } from 'react-icons/fa';

const DashboardNavbar = () => {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-700/60 bg-gradient-to-r from-slate-900 to-slate-800 backdrop-blur-xl text-white">
      <div className="flex items-center justify-between gap-6 px-4 sm:px-6 lg:px-8 py-3">
        {/* Brand & Title */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-400">Estate</p>
            <h1 className="text-xl font-bold">Pro</h1>
          </div>
          {/* Mobile logo */}
          <div className="sm:hidden flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">EP</span>
            <h1 className="text-lg font-semibold">Dashboard</h1>
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center flex-1 max-w-xl mx-auto">
          <div className="flex items-center w-full rounded-full border border-slate-600/50 bg-slate-800/50 hover:border-cyan-500/50 focus-within:border-cyan-400 px-4 py-2.5 transition-all duration-300">
            <FaSearch className="shrink-0 text-slate-400" />
            <input
              type="text"
              placeholder="Search properties, agents…"
              className="w-full ml-3 bg-transparent outline-none placeholder-slate-400 text-sm"
            />
          </div>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-200">
            <FaPlusCircle className="text-base" />
            <span className="hidden sm:inline">Add Property</span>
          </button>
          
          <button className="relative grid h-10 w-10 place-items-center rounded-full border border-slate-600/50 bg-slate-800/50 text-slate-300 hover:text-white hover:border-cyan-500/50 transition-colors">
            <FaBell />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold">3</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;