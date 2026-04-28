// import React from 'react';
// import { motion } from 'framer-motion';
// import './BlogPreview.css';

// const BlogPreview = () => {
//   const blogPosts = [
//     {
//       id: 1,
//       image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//       category: 'Market Trends',
//       title: 'Top 5 Real Estate Markets to Watch in 2025',
//       excerpt: 'Discover the emerging markets that are set to boom in the coming year.',
//       link: '/blog/1'
//     },
//     {
//       id: 2,
//       image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//       category: 'Home Improvement',
//       title: '10 Affordable Ways to Increase Your Home Value',
//       excerpt: 'Simple upgrades that can significantly boost your property’s market price.',
//       link: '/blog/2'
//     },
//     {
//       id: 3,
//       image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//       category: 'Investment',
//       title: 'The Ultimate Guide to Real Estate Investment Trusts (REITs)',
//       excerpt: 'Learn how to diversify your portfolio with real estate without buying property.',
//       link: '/blog/3'
//     }
//   ];

//   const cardVariants = {
//     offscreen: {
//       y: 100,
//       opacity: 0
//     },
//     onscreen: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: 'spring',
//         bounce: 0.4,
//         duration: 0.8
//       }
//     }
//   };

//   return (
//     <section className="blog-preview-section">
//       <div className="container">
//         <motion.div 
//           className="section-header"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true, amount: 0.5 }}
//         >
//           <h2 className="section-title">Latest From Our Blog</h2>
//           <p className="section-subtitle">Stay updated with the latest trends, tips, and insights in real estate.</p>
//         </motion.div>

//         <div className="blog-posts-grid">
//           {blogPosts.map((post, index) => (
//             <motion.article 
//               key={post.id}
//               className="blog-post-card"
//               initial="offscreen"
//               whileInView="onscreen"
//               viewport={{ once: true, amount: 0.5 }}
//               variants={cardVariants}
//             >
//               <div className="blog-post-image">
//                 <img src={post.image} alt={post.title} />
//                 <span className="blog-post-category">{post.category}</span>
//               </div>
//               <div className="blog-post-content">
//                 <h3 className="blog-post-title">{post.title}</h3>
//                 <p className="blog-post-excerpt">{post.excerpt}</p>
//                 <a href={post.link} className="blog-post-link">Read More →</a>
//               </div>
//             </motion.article>
//           ))}
//         </div>

//         <motion.div 
//           className="section-cta"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           <a href="/blog" className="view-all-btn">View All Articles</a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default BlogPreview;














// import React from 'react';
// import { motion } from 'framer-motion';

// const BlogPreview = () => {
//   const blogPosts = [
//     {
//       id: 1,
//       image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//       category: 'Market Trends',
//       title: 'Top 5 Real Estate Markets to Watch in 2025',
//       excerpt: 'Discover the emerging markets that are set to boom in the coming year.',
//       link: '/blog/1'
//     },
//     {
//       id: 2,
//       image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//       category: 'Home Improvement',
//       title: '10 Affordable Ways to Increase Your Home Value',
//       excerpt: 'Discover the emerging markets that are set to boom in the coming year.',
//       link: '/blog/2'
//     },
//     {
//       id: 3,
//       image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//       category: 'Investment',
//       title: 'The Ultimate Guide to Real Estate Investment Trusts (REITs)',
//       excerpt: 'Learn how to diversify your portfolio with real estate without buying property.',
//       link: '/blog/3'
//     }
//   ];

//   const cardVariants = {
//     offscreen: {
//       y: 100,
//       opacity: 0
//     },
//     onscreen: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: 'spring',
//         bounce: 0.4,
//         duration: 0.8
//       }
//     }
//   };

//   return (
//     <section className="py-20 px-4 bg-[#f8f9fa]">
//       <div className="max-w-6xl mx-auto">
//         {/* Section Header */}
//         <motion.div 
//           className="text-center mb-12"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true, amount: 0.5 }}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-2 text-[#2c3e50]">
//             Latest From Our Blog
//           </h2>
//           <p className="text-lg text-[#7f8c8d] max-w-2xl mx-auto">
//             Stay updated with the latest trends, tips, and insights in real estate.
//           </p>
//         </motion.div>

//         {/* Blog Posts Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
//           {blogPosts.map((post) => (
//             <motion.article 
//               key={post.id}
//               className="bg-white rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)]"
//               initial="offscreen"
//               whileInView="onscreen"
//               viewport={{ once: true, amount: 0.5 }}
//               variants={cardVariants}
//             >
//               <div className="relative h-56 overflow-hidden">
//                 <img 
//                   src={post.image} 
//                   alt={post.title} 
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//                 <span className="absolute top-4 left-4 bg-[#3498db] text-white px-4 py-1 rounded-full text-xs font-semibold">
//                   {post.category}
//                 </span>
//               </div>
//               <div className="p-6">
//                 <h3 className="text-2xl font-bold mb-3 text-[#2c3e50] leading-tight">
//                   {post.title}
//                 </h3>
//                 <p className="text-gray-600 mb-6 leading-relaxed">
//                   {post.excerpt}
//                 </p>
//                 <a 
//                   href={post.link} 
//                   className="inline-flex items-center gap-2 text-[#3498db] font-semibold no-underline transition-all duration-300 hover:gap-3"
//                 >
//                   Read More <span className="text-xl leading-none">→</span>
//                 </a>
//               </div>
//             </motion.article>
//           ))}
//         </div>

//         {/* CTA Button */}
//         <motion.div 
//           className="text-center"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           <a 
//             href="/blog" 
//             className="inline-block bg-[#2c3e50] text-white px-10 py-4 rounded-full font-semibold no-underline transition-all duration-300 border-2 border-[#2c3e50] hover:bg-transparent hover:text-[#2c3e50]"
//           >
//             View All Articles
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default BlogPreview;













// import React from 'react';
// import { motion } from 'framer-motion';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import { Link } from 'react-router-dom';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const BlogPreview = () => {
//   const blogPosts = [
//     {
//       id: 1,
//       image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//       category: 'Market Trends',
//       title: 'Top 5 Real Estate Markets to Watch in 2025',
//       excerpt: 'Discover the emerging markets that are set to boom in the coming year.',
//       link: '/blog/1'
//     },
//     {
//       id: 2,
//       image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//       category: 'Home Improvement',
//       title: '10 Affordable Ways to Increase Your Home Value',
//       excerpt: 'Simple upgrades that can significantly boost your propertys market price.',
//       link: '/blog/2'
//     },
//     {
//       id: 3,
//       image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//       category: 'Investment',
//       title: 'The Ultimate Guide to Real Estate Investment Trusts (REITs)',
//       excerpt: 'Learn how to diversify your portfolio with real estate without buying property.',
//       link: '/blog/3'
//     },
//     {
//       id: 4,
//       image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//       category: 'Home Buying',
//       title: 'First-Time Home Buyer Mistakes to Avoid',
//       excerpt: 'Navigate the buying process with confidence by steering clear of these common pitfalls.',
//       link: '/blog/4'
//     },
//     {
//       id: 5,
//       image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//       category: 'Design',
//       title: '2025 Interior Design Trends for Modern Homes',
//       excerpt: 'Stay ahead of the curve with these stylish and functional design ideas.',
//       link: '/blog/5'
//     },
//     {
//       id: 6,
//       image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//       category: 'Finance',
//       title: 'Understanding Mortgage Rates: What You Need to Know',
//       excerpt: 'Get the best deal on your home loan by understanding how mortgage rates work.',
//       link: '/blog/6'
//     }
//   ];

//   return (
//     <section className="py-20 px-4 bg-[#f8f9fa]">
//       <div className="max-w-7xl mx-auto">
//         {/* Section Header */}
//         <motion.div 
//           className="text-center mb-12"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true, amount: 0.5 }}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-2 text-[#2c3e50]">
//             Latest From Our Blog
//           </h2>
//           <p className="text-lg text-[#7f8c8d] max-w-2xl mx-auto">
//             Stay updated with the latest trends, tips, and insights in real estate.
//           </p>
//         </motion.div>

//         {/* Blog Posts Carousel */}
//         <div className="mb-12">
//           <Swiper
//             modules={[Navigation, Pagination, Autoplay]}
//             spaceBetween={30}
//             slidesPerView={1}
//             navigation
//             pagination={{ clickable: true }}
//             autoplay={{ delay: 4000, disableOnInteraction: false }}
//             breakpoints={{
//               640: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 }
//             }}
//             className="py-4 px-1"
//           >
//             {blogPosts.map((post) => (
//               <SwiperSlide key={post.id}>
//                 <motion.article 
//                   className="bg-white rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] h-full flex flex-col"
//                   whileHover={{ y: -5 }}
//                 >
//                   <div className="relative h-56 overflow-hidden">
//                     <img 
//                       src={post.image} 
//                       alt={post.title} 
//                       className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
//                     />
//                     <span className="absolute top-4 left-4 bg-[#3498db] text-white px-4 py-1 rounded-full text-xs font-semibold">
//                       {post.category}
//                     </span>
//                   </div>
//                   <div className="p-6 flex-1 flex flex-col">
//                     <h3 className="text-xl font-bold mb-3 text-[#2c3e50] leading-tight">
//                       {post.title}
//                     </h3>
//                     <p className="text-gray-600 mb-6 leading-relaxed flex-1">
//                       {post.excerpt}
//                     </p>
//                     <Link 
//                       to={post.link} 
//                       className="inline-flex items-center gap-2 text-[#3498db] font-semibold no-underline transition-all duration-300 hover:gap-3 mt-auto"
//                     >
//                       Read More <span className="text-xl leading-none">→</span>
//                     </Link>
//                   </div>
//                 </motion.article>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         {/* CTA Button */}
//         <motion.div 
//           className="text-center"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           <Link 
//             to="/blog" 
//             className="inline-block bg-[#2c3e50] text-white px-10 py-4 rounded-full font-semibold no-underline transition-all duration-300 border-2 border-[#2c3e50] hover:bg-transparent hover:text-[#2c3e50]"
//           >
//             View All Articles
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default BlogPreview;












import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const BlogPreview = () => {
  const blogPosts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'Market Trends',
      title: 'Top 5 Real Estate Markets to Watch in 2025',
      excerpt: 'Discover the emerging markets that are set to boom in the coming year.',
      link: '/blog/1'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'Home Improvement',
      title: '10 Affordable Ways to Increase Your Home Value',
      excerpt: 'Simple upgrades that can significantly boost your propertys market price.',
      link: '/blog/2'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'Investment',
      title: 'The Ultimate Guide to Real Estate Investment Trusts (REITs)',
      excerpt: 'Learn how to diversify your portfolio with real estate without buying property.',
      link: '/blog/3'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'Home Buying',
      title: 'First-Time Home Buyer Mistakes to Avoid',
      excerpt: 'Navigate the buying process with confidence by steering clear of these common pitfalls.',
      link: '/blog/4'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'Design',
      title: '2025 Interior Design Trends for Modern Homes',
      excerpt: 'Stay ahead of the curve with these stylish and functional design ideas.',
      link: '/blog/5'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'Finance',
      title: 'Understanding Mortgage Rates: What You Need to Know',
      excerpt: 'Get the best deal on your home loan by understanding how mortgage rates work.',
      link: '/blog/6'
    }
  ];

  return (
    <section className="py-20 px-4 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-[#2c3e50]">
            Latest From Our Blog
          </h2>
          <p className="text-lg text-[#7f8c8d] max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and insights in real estate.
          </p>
        </motion.div>

        {/* Blog Posts Carousel */}
        <div className="mb-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="py-4 px-1"
          >
            {blogPosts.map((post) => (
              <SwiperSlide key={post.id}>
                <motion.article 
                  className="bg-white rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] h-full flex flex-col"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 bg-[#3498db] text-white px-4 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-3 text-[#2c3e50] leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                      {post.excerpt}
                    </p>
                    <Link 
                      to={post.link} 
                      className="inline-flex items-center gap-2 text-[#3498db] font-semibold no-underline transition-all duration-300 hover:gap-3 mt-auto"
                    >
                      Read More <span className="text-xl leading-none">→</span>
                    </Link>
                  </div>
                </motion.article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CTA Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link 
            to="/blog" 
            className="inline-block bg-[#2c3e50] text-white px-10 py-4 rounded-full font-semibold no-underline transition-all duration-300 border-2 border-[#2c3e50] hover:bg-transparent hover:text-[#2c3e50]"
          >
            View All Articles
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPreview;