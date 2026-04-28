// import React, { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import './navbar_section_module.css';

// const menuItems = [
//   { name: 'Home', path: '/' },
//   { name: 'About', path: '/about' },
//   { name: 'Services', path: '/services' },
//   { name: 'Products', path: '/products' },
//   { name: 'Clients', path: '/clients' },
//   { name: 'Contact', path: '/contact' },
// ];

// const NavbarSection = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileOpen, setIsMobileOpen] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const onScroll = () => setIsScrolled(window.scrollY > 16);
//     onScroll();
//     window.addEventListener('scroll', onScroll);
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   useEffect(() => {
//     setIsMobileOpen(false);
//   }, [location.pathname]);

//   return (
//     <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMobileOpen ? 'menu-open' : ''}`}>
//       <div className="nav-container">
//         <Link to="/" className="logo-link" aria-label="Estate Pro home">
//           <div className="logo-text">
//             <span className="logo-main">Estate</span>
//             <span className="logo-accent">Pro</span>
//           </div>
//         </Link>

//         <div className="desktop-menu">
//           <div className="menu-items">
//             {menuItems.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>
//         </div>

//         <Link to="/contact" className="nav-cta">
//           <span className="cta-button">Get Started</span>
//         </Link>

//         <button
//           type="button"
//           className="mobile-toggle"
//           aria-label="Toggle navigation"
//           onClick={() => setIsMobileOpen((value) => !value)}
//         >
//           <span className="line line1" />
//           <span className="line line2" />
//           <span className="line line3" />
//         </button>
//       </div>

//       {isMobileOpen && (
//         <div className="mobile-menu-overlay">
//           <div className="mobile-menu-container">
//             {menuItems.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default NavbarSection;














// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Link, useLocation } from 'react-router-dom';

// const NavbarSection = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [activeHover, setActiveHover] = useState(null);
//   const location = useLocation();
//   const navbarRef = useRef(null);

//   const menuItems = [
//     { name: 'Home', path: '/' },
//     { name: 'About', path: '/about' },
//     { name: 'Services', path: '/services' },
//     { name: 'Products', path: '/products' },
//     { name: 'Clients', path: '/clients' },
//     { name: 'Contact', path: '/contact' }
//   ];

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 20);
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 1000);
//       if (window.innerWidth >= 1000) setIsMobileMenuOpen(false);
//     };
//     handleResize();
//     window.addEventListener('scroll', handleScroll);
//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (navbarRef.current && !navbarRef.current.contains(event.target))
//         setIsMobileMenuOpen(false);
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   useEffect(() => {
//     setIsMobileMenuOpen(false);
//   }, [location]);

//   return (
//     <>
//       <motion.nav
//         ref={navbarRef}
//         className={`
//           fixed top-0 left-0 right-0 z-[1000]
//           w-full
//           transition-all duration-300 ease
//           bg-[#0a192f] border-b border-[rgba(57,151,246,0.2)]
//           shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)]
//           h-[70px] md:h-20
//           ${isScrolled ? 'md:h-[70px] shadow-lg' : ''}
//         `}
//         initial={{ y: -100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5, ease: 'easeOut' }}
//       >
//         <div className="max-w-[1400px] h-full mx-auto px-4 md:px-8 flex items-center justify-between relative">
          
//           {/* Logo */}
//           <motion.div
//             className="z-[1001]"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Link to="/" className="flex items-center no-underline">
//               <div className="flex flex-col leading-none">
//                 <span className="text-white text-[1.8rem] md:text-[1.8rem] font-bold tracking-wide">
//                   Estate
//                 </span>
//                 <span className="text-[#3a86ff] text-[1.4rem] md:text-[1.4rem] font-semibold tracking-wider">
//                   Pro
//                 </span>
//               </div>
//             </Link>
//           </motion.div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center gap-8">
//             <div className="flex gap-10">
//               {menuItems.map((item, index) => (
//                 <div
//                   key={item.name}
//                   className="relative flex items-center h-full"
//                   onMouseEnter={() => setActiveHover(index)}
//                   onMouseLeave={() => setActiveHover(null)}
//                 >
//                   <Link
//                     to={item.path}
//                     className={`
//                       relative py-2 no-underline font-medium text-sm tracking-wide
//                       transition-colors duration-300 overflow-hidden
//                       ${location.pathname === item.path
//                         ? 'text-[#3a86ff] font-semibold'
//                         : 'text-[#8892b0] hover:text-white'
//                       }
//                     `}
//                   >
//                     <div className="flex flex-col items-center gap-2">
//                       <span className="relative z-[2]">{item.name}</span>
//                       <div
//                         className="absolute top-full left-1/2 -translate-x-1/2 pointer-events-none transition-opacity duration-300"
//                         style={{
//                           opacity: activeHover === index || location.pathname === item.path ? 1 : 0,
//                         }}
//                       >
//                         <div className="w-1.5 h-1.5 bg-[#3a86ff] rounded-full shadow-[0_0_10px_#3a86ff]" />
//                       </div>
//                     </div>
//                   </Link>
//                   <div
//                     className="absolute top-full left-1/2 -translate-x-1/2 pointer-events-none z-[999] transition-opacity duration-300 whitespace-nowrap"
//                     style={{ opacity: activeHover === index ? 0.3 : 0 }}
//                   >
//                     <div className="text-[#3a86ff] text-sm opacity-70">{item.name}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* CTA Button */}
//           <motion.div
//             className="hidden md:block"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <button className="
//               group relative px-[1.8rem] py-3 rounded-[12px] text-white font-semibold text-sm tracking-wide
//               bg-gradient-to-r from-[#3a86ff] to-[#4cc9f0]
//               overflow-hidden transition-all duration-300
//               hover:translate-y-[-2px] hover:shadow-[0_10px_25px_rgba(58,134,255,0.4)]
//             ">
//               <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
//               <span className="relative z-[1] flex items-center gap-2">
//                 <span>Get Started</span>
//                 <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">→</span>
//               </span>
//             </button>
//           </motion.div>

//           {/* Mobile Toggle */}
//           <motion.button
//             className="md:hidden bg-transparent border-none cursor-pointer p-2 z-[1002]"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             whileTap={{ scale: 0.9 }}
//             aria-label="Toggle menu"
//           >
//             <div className="flex flex-col justify-between w-[30px] h-[21px]">
//               <motion.span
//                 className="block h-[3px] w-full rounded-[3px] bg-white"
//                 animate={isMobileMenuOpen ? { rotate: 45, y: 6, backgroundColor: "#3a86ff" } : { rotate: 0, y: 0, backgroundColor: "#ffffff" }}
//               />
//               <motion.span
//                 className="block h-[3px] w-full rounded-[3px] bg-white"
//                 animate={isMobileMenuOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
//               />
//               <motion.span
//                 className="block h-[3px] w-full rounded-[3px] bg-white"
//                 animate={isMobileMenuOpen ? { rotate: -45, y: -6, backgroundColor: "#3a86ff" } : { rotate: 0, y: 0, backgroundColor: "#ffffff" }}
//               />
//             </div>
//           </motion.button>
//         </div>

//         {/* Mobile Menu Overlay */}
//         <AnimatePresence>
//           {isMobileMenuOpen && isMobile && (
//             <motion.div
//               className="fixed top-[70px] md:top-20 left-0 right-0 bottom-0 bg-[#0a192f] z-[999] overflow-hidden"
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.3 }}
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               <div className="relative h-full p-6 flex flex-col justify-center items-center">
//                 <div className="flex flex-col gap-8 w-full max-w-[300px] z-[1]">
//                   {menuItems.map((item, index) => (
//                     <motion.div
//                       key={item.name}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.1 }}
//                     >
//                       <Link
//                         to={item.path}
//                         className={`
//                           block relative py-4 px-6 text-[1.4rem] font-medium
//                           rounded-[12px] transition-all duration-300 overflow-hidden
//                           ${location.pathname === item.path
//                             ? 'text-white translate-x-[10px]'
//                             : 'text-[#8892b0] hover:text-white hover:translate-x-[10px]'
//                           }
//                         `}
//                         onClick={() => setIsMobileMenuOpen(false)}
//                       >
//                         <span className="absolute inset-0 bg-gradient-to-br from-[rgba(58,134,255,0.1)] to-[rgba(100,255,218,0.1)] opacity-0 hover:opacity-100 transition-opacity duration-300" />
//                         <span className="relative z-[1]">{item.name}</span>
//                         <motion.div
//                           className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-[60%] bg-[#3a86ff] rounded-r-md origin-left"
//                           initial={{ scaleX: 0 }}
//                           animate={{ scaleX: location.pathname === item.path ? 1 : 0 }}
//                           transition={{ duration: 0.3 }}
//                         />
//                       </Link>
//                     </motion.div>
//                   ))}
//                 </div>

//                 <motion.div
//                   className="mt-12 z-[1]"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.6 }}
//                 >
//                   <button className="
//                     w-full max-w-[300px] px-8 py-4
//                     bg-gradient-to-r from-[#3a86ff] to-[#4cc9f0]
//                     rounded-[12px] text-white font-semibold text-lg
//                     transition-all duration-300
//                     hover:translate-y-[-3px] hover:shadow-[0_15px_30px_rgba(58,134,255,0.4)]
//                   ">
//                     Start Your Journey
//                   </button>
//                 </motion.div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.nav>
//     </>
//   );
// };

// export default NavbarSection;





















import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const NavbarSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeHover, setActiveHover] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const navbarRef = useRef(null);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Blogs', path: '/blog' },
    { name: 'Clients', path: '/clients' },
    { name: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
      if (window.innerWidth >= 1000) setIsMobileMenuOpen(false);
    };
    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target))
        setIsMobileMenuOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const value = searchTerm.trim();
    if (!value) return;
    navigate(`/search?q=${encodeURIComponent(value)}`);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        ref={navbarRef}
        className={`
          fixed top-0 left-0 right-0 z-[1000]
          w-full
          transition-all duration-300 ease
          bg-[#0a192f] border-b border-[rgba(57,151,246,0.2)]
          shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)]
          h-[70px] md:h-20
          ${isScrolled ? 'md:h-[70px] shadow-lg' : ''}
        `}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="max-w-[1400px] h-full mx-auto px-4 md:px-8 flex items-center justify-between relative">
          
          {/* Logo */}
          <motion.div
            className="z-[1001]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center no-underline">
              <div className="flex flex-col leading-none">
                <span className="text-white text-[1.8rem] md:text-[1.8rem] font-bold tracking-wide">
                  Estate
                </span>
                <span className="text-[#3a86ff] text-[1.4rem] md:text-[1.4rem] font-semibold tracking-wider">
                  Pro
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <form onSubmit={handleSearchSubmit} className="hidden lg:block">
              <div className="flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">
                <input
                  type="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search blogs or properties..."
                  className="w-64 bg-transparent text-sm text-white placeholder:text-white/55 outline-none"
                />
              </div>
            </form>

            <div className="flex gap-10">
              {menuItems.map((item, index) => (
                <div
                  key={item.name}
                  className="relative flex items-center h-full"
                  onMouseEnter={() => setActiveHover(index)}
                  onMouseLeave={() => setActiveHover(null)}
                >
                  <Link
                    to={item.path}
                    className={`
                      relative py-2 no-underline font-medium text-sm tracking-wide
                      transition-colors duration-300 overflow-hidden
                      ${location.pathname === item.path
                        ? 'text-[#3a86ff] font-semibold'
                        : 'text-[#8892b0] hover:text-white'
                      }
                    `}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <span className="relative z-[2]">{item.name}</span>
                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2 pointer-events-none transition-opacity duration-300"
                        style={{
                          opacity: activeHover === index || location.pathname === item.path ? 1 : 0,
                        }}
                      >
                        <div className="w-1.5 h-1.5 bg-[#3a86ff] rounded-full shadow-[0_0_10px_#3a86ff]" />
                      </div>
                    </div>
                  </Link>
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 pointer-events-none z-[999] transition-opacity duration-300 whitespace-nowrap"
                    style={{ opacity: activeHover === index ? 0.3 : 0 }}
                  >
                    <div className="text-[#3a86ff] text-sm opacity-70">{item.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button – now a Link */}
          <motion.div
            className="hidden md:block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/get-started"
              className="group relative px-[1.8rem] py-3 rounded-[12px] text-white font-semibold text-sm tracking-wide
                bg-gradient-to-r from-[#3a86ff] to-[#4cc9f0]
                overflow-hidden transition-all duration-300
                hover:translate-y-[-2px] hover:shadow-[0_10px_25px_rgba(58,134,255,0.4)]
                inline-flex items-center justify-center"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative z-[1] flex items-center gap-2">
                <span>Get Started</span>
                <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </Link>
          </motion.div>

          {/* Mobile Toggle */}
          <motion.button
            className="md:hidden bg-transparent border-none cursor-pointer p-2 z-[1002]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col justify-between w-[30px] h-[21px]">
              <motion.span
                className="block h-[3px] w-full rounded-[3px] bg-white"
                animate={isMobileMenuOpen ? { rotate: 45, y: 6, backgroundColor: "#3a86ff" } : { rotate: 0, y: 0, backgroundColor: "#ffffff" }}
              />
              <motion.span
                className="block h-[3px] w-full rounded-[3px] bg-white"
                animate={isMobileMenuOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
              />
              <motion.span
                className="block h-[3px] w-full rounded-[3px] bg-white"
                animate={isMobileMenuOpen ? { rotate: -45, y: -6, backgroundColor: "#3a86ff" } : { rotate: 0, y: 0, backgroundColor: "#ffffff" }}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && isMobile && (
            <motion.div
              className="fixed top-[70px] md:top-20 left-0 right-0 bottom-0 bg-[#0a192f] z-[999] overflow-hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="relative h-full p-6 flex flex-col justify-center items-center">
                <form onSubmit={handleSearchSubmit} className="w-full max-w-[300px] z-[1] mb-8">
                  <input
                    type="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search blogs or properties..."
                    className="w-full rounded-[12px] border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 outline-none"
                  />
                </form>

                <div className="flex flex-col gap-8 w-full max-w-[300px] z-[1]">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        className={`
                          block relative py-4 px-6 text-[1.4rem] font-medium
                          rounded-[12px] transition-all duration-300 overflow-hidden
                          ${location.pathname === item.path
                            ? 'text-white translate-x-[10px]'
                            : 'text-[#8892b0] hover:text-white hover:translate-x-[10px]'
                          }
                        `}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="absolute inset-0 bg-gradient-to-br from-[rgba(58,134,255,0.1)] to-[rgba(100,255,218,0.1)] opacity-0 hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative z-[1]">{item.name}</span>
                        <motion.div
                          className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-[60%] bg-[#3a86ff] rounded-r-md origin-left"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: location.pathname === item.path ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="mt-12 z-[1]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  {/* Mobile CTA – also a Link */}
                  <Link
                    to="/get-started"
                    className="w-full max-w-[300px] px-8 py-4
                      bg-gradient-to-r from-[#3a86ff] to-[#4cc9f0]
                      rounded-[12px] text-white font-semibold text-lg
                      transition-all duration-300
                      hover:translate-y-[-3px] hover:shadow-[0_15px_30px_rgba(58,134,255,0.4)]
                      inline-flex items-center justify-center"
                  >
                    Start Your Journey
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default NavbarSection;
