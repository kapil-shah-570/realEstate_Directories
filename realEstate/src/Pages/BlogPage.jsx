import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaSearch, FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const allPosts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Market Trends',
      title: 'Top 5 Real Estate Markets to Watch in 2025',
      excerpt: 'Discover the emerging markets that are set to boom in the coming year. We analyze key indicators and growth potential.',
      content: 'Full article content here...',
      author: 'Sarah Johnson',
      date: 'March 15, 2024',
      readTime: '5 min read'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Home Improvement',
      title: '10 Affordable Ways to Increase Your Home Value',
      excerpt: 'Simple upgrades that can significantly boost your propertys market price without breaking the bank.',
      content: 'Full article content here...',
      author: 'Michael Chen',
      date: 'March 10, 2024',
      readTime: '7 min read'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Investment',
      title: 'The Ultimate Guide to Real Estate Investment Trusts (REITs)',
      excerpt: 'Learn how to diversify your portfolio with real estate without buying property directly.',
      content: 'Full article content here...',
      author: 'David Rodriguez',
      date: 'March 5, 2024',
      readTime: '8 min read'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Home Buying',
      title: 'First-Time Home Buyer Mistakes to Avoid',
      excerpt: 'Navigate the buying process with confidence by steering clear of these common pitfalls.',
      content: 'Full article content here...',
      author: 'Emma Wilson',
      date: 'February 28, 2024',
      readTime: '6 min read'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Design',
      title: '2025 Interior Design Trends for Modern Homes',
      excerpt: 'Stay ahead of the curve with these stylish and functional design ideas for every room.',
      content: 'Full article content here...',
      author: 'Lisa Thompson',
      date: 'February 20, 2024',
      readTime: '5 min read'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Finance',
      title: 'Understanding Mortgage Rates: What You Need to Know',
      excerpt: 'Get the best deal on your home loan by understanding how mortgage rates work and when to lock in.',
      content: 'Full article content here...',
      author: 'James Miller',
      date: 'February 15, 2024',
      readTime: '6 min read'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Market Trends',
      title: 'Suburban vs Urban: Where Should You Invest?',
      excerpt: 'Compare the pros and cons of suburban and urban real estate investments in today',
      content: 'Full article content here...',
      author: 'Sarah Johnson',
      date: 'February 8, 2024',
      readTime: '7 min read'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Home Improvement',
      title: 'Energy-Efficient Upgrades That Pay for Themselves',
      excerpt: 'Reduce your carbon footprint and save money with these smart home improvements.',
      content: 'Full article content here...',
      author: 'Michael Chen',
      date: 'February 1, 2024',
      readTime: '5 min read'
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1494522358652-c549345d2c9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Investment',
      title: 'Short-Term Rentals: A Complete Investor',
      excerpt: 'Everything you need to know about investing in vacation rental properties.',
      content: 'Full article content here...',
      author: 'David Rodriguez',
      date: 'January 25, 2024',
      readTime: '9 min read'
    }
  ];

  const categories = ['all', 'Market Trends', 'Home Improvement', 'Investment', 'Home Buying', 'Design', 'Finance'];

  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = allPosts[0];

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2c3e50] to-[#3498db] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Real Estate Insights & Tips
          </motion.h1>
          <motion.p 
            className="text-xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Expert advice, market trends, and property guides to help you make informed decisions.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Featured Post */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-[#2c3e50] mb-6">Featured Article</h2>
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="h-64 md:h-full">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="text-[#3498db] font-semibold text-sm uppercase tracking-wider mb-2">
                  {featuredPost.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-[#2c3e50] mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                  <span className="flex items-center gap-2"><FaUser /> {featuredPost.author}</span>
                  <span className="flex items-center gap-2"><FaCalendarAlt /> {featuredPost.date}</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <Link 
                  to={`/blog/${featuredPost.id}`}
                  className="inline-flex items-center gap-2 bg-[#3498db] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2980b9] transition-colors duration-300 w-fit"
                >
                  Read Full Article <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
          <h2 className="text-2xl font-bold text-[#2c3e50]">All Articles</h2>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            {/* Search */}
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3498db] focus:border-transparent w-full"
              />
            </div>
            
            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3498db] focus:border-transparent"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat === 'all' ? 'All Categories' : cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Articles Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <motion.article 
                key={post.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 bg-[#3498db] text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#2c3e50] mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1"><FaUser /> {post.author}</span>
                    <span className="flex items-center gap-1"><FaCalendarAlt /> {post.date}</span>
                  </div>
                  <Link 
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-[#3498db] font-semibold hover:gap-3 transition-all duration-300"
                  >
                    Read More <FaArrowRight />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600">No articles found matching your criteria.</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="mt-4 text-[#3498db] font-semibold hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Newsletter CTA */}
        <motion.div 
          className="mt-20 bg-gradient-to-r from-[#2c3e50] to-[#34495e] rounded-2xl p-10 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to Our Newsletter</h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Get the latest real estate insights, market updates, and expert tips delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#3498db]"
              required
            />
            <button 
              type="submit"
              className="bg-[#3498db] hover:bg-[#2980b9] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPage;