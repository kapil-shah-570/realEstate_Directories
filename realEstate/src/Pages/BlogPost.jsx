import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { 
  FaCalendarAlt, 
  FaUser, 
  FaClock, 
  FaTag, 
  FaArrowLeft,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaEnvelope,
  FaLink
} from 'react-icons/fa';

// Complete mock database of all blog posts
const allPosts = [
  {

      id: 1,
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      category: 'Market Trends',
      title: 'Top 5 Real Estate Markets to Watch in 2025',
      excerpt: 'Discover the emerging markets that are set to boom in the coming year.',
      content: `
        <p>The real estate landscape is constantly evolving, and 2025 promises to be a transformative year for property markets across the United States. As remote work continues to reshape where people choose to live, several metropolitan areas are emerging as hotspots for both residential and commercial investment.</p>
        
        <h2>1. Austin, Texas</h2>
        <p>Austin continues its meteoric rise as a tech hub, attracting major companies and talent from across the country. With a 15% projected population growth by 2026, the demand for housing remains strong. Median home prices have increased 45% over the past three years, yet still remain competitive compared to coastal cities.</p>
        
        <h2>2. Raleigh-Durham, North Carolina</h2>
        <p>The Research Triangle's combination of top-tier universities, thriving biotech sector, and affordable living makes it a compelling market. Job growth in the region is projected at 12% annually, driving consistent demand for both single-family homes and rental properties.</p>
        
        <h2>3. Nashville, Tennessee</h2>
        <p>Beyond its musical heritage, Nashville has diversified into healthcare, technology, and manufacturing. The city's business-friendly environment and no state income tax continue to attract both companies and individuals, fueling a robust real estate market.</p>
        
        <h2>4. Boise, Idaho</h2>
        <p>Boise offers a unique blend of outdoor recreation, affordable living, and a growing tech scene. While price appreciation has moderated from its pandemic peak, the market remains healthy with strong fundamentals and continued in-migration from higher-cost states.</p>
        
        <h2>5. Tampa, Florida</h2>
        <p>Tampa's revitalized downtown, expanding port, and favorable climate make it a magnet for both retirees and young professionals. The metro area added over 50,000 new residents in 2024, and inventory remains tight, supporting continued price growth.</p>
        
        <p><strong>Conclusion:</strong> While each market has unique characteristics, common threads include strong job growth, relative affordability, and quality of life factors. Investors should conduct thorough due diligence and consider working with local experts before making decisions.</p>
      `,
      author: {
        name: 'Sarah Johnson',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
        bio: 'Senior Real Estate Analyst with over 12 years of experience in market research and investment strategy.'
      },
      date: 'March 15, 2024',
      readTime: '5 min read',
      tags: ['Market Analysis', 'Investment', '2025 Trends']
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      category: 'Home Improvement',
      title: '10 Affordable Ways to Increase Your Home Value',
      excerpt: 'Simple upgrades that can significantly boost your property\'s market price without breaking the bank.',
      content: `
        <p>Increasing your home's value doesn't always require a major renovation. Strategic, cost-effective improvements can deliver impressive returns when it's time to sell. Here are ten affordable upgrades that can boost your property's market price.</p>
        
        <h2>1. Fresh Paint</h2>
        <p>A new coat of paint is one of the most cost-effective improvements you can make. Stick to neutral colors like warm grays, soft beiges, or crisp whites to appeal to the broadest range of buyers. Expect to spend $200-$500 per room for professional results.</p>
        
        <h2>2. Update Light Fixtures</h2>
        <p>Outdated light fixtures date your home instantly. Modern, energy-efficient LED fixtures in key areas like the entryway, kitchen, and bathrooms can transform the feel of your space for under $500 total.</p>
        
        <h2>3. Enhance Curb Appeal</h2>
        <p>First impressions matter. Simple landscaping—fresh mulch, trimmed shrubs, and seasonal flowers—costs under $300 but can add thousands to your home's perceived value. Power washing the exterior and walkways is another low-cost, high-impact task.</p>
        
        <h2>4. Kitchen Cabinet Refresh</h2>
        <p>Instead of a full kitchen remodel, consider painting or refacing cabinets. New hardware (pulls and knobs) is an inexpensive update that modernizes the entire kitchen. Budget: $200-$800.</p>
        
        <h2>5. Bathroom Updates</h2>
        <p>Replace dated faucets, showerheads, and toilet seats. Re-caulk around the tub and sink for a clean, well-maintained appearance. These small changes cost under $300 and make bathrooms feel fresh.</p>
        
        <p><em>...and five more proven improvements to maximize your ROI.</em></p>
      `,
      author: {
        name: 'Michael Chen',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
        bio: 'Licensed contractor and home renovation expert, specializing in cost-effective improvements that maximize resale value.'
      },
      date: 'March 10, 2024',
      readTime: '7 min read',
      tags: ['DIY', 'Home Value', 'Renovation']
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      category: 'Investment',
      title: 'The Ultimate Guide to Real Estate Investment Trusts (REITs)',
      excerpt: 'Learn how to diversify your portfolio with real estate without buying property directly.',
      content: `
        <p>Real Estate Investment Trusts (REITs) offer a way to invest in income-producing real estate without the hassles of being a landlord. This guide covers everything you need to know to get started.</p>
        
        <h2>What is a REIT?</h2>
        <p>A REIT is a company that owns, operates, or finances income-generating real estate. By law, REITs must distribute at least 90% of their taxable income to shareholders as dividends, making them attractive for income-focused investors.</p>
        
        <h2>Types of REITs</h2>
        <p><strong>Equity REITs:</strong> Own and operate properties, generating income primarily through rent. They may specialize in specific sectors like retail, office, residential, or healthcare.</p>
        <p><strong>Mortgage REITs (mREITs):</strong> Provide financing for real estate by purchasing or originating mortgages and mortgage-backed securities. They earn income from interest payments.</p>
        <p><strong>Hybrid REITs:</strong> Combine the strategies of both equity and mortgage REITs.</p>
        
        <h2>Benefits of Investing in REITs</h2>
        <ul>
          <li>Liquidity – Publicly traded REITs can be bought and sold like stocks</li>
          <li>Diversification – Add real estate exposure without large capital outlay</li>
          <li>Steady Income – High dividend yields mandated by law</li>
          <li>Professional Management – Experienced teams handle property operations</li>
        </ul>
      `,
      author: {
        name: 'David Rodriguez',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
        bio: 'CFA charterholder and real estate investment advisor with expertise in REIT analysis and portfolio construction.'
      },
      date: 'March 5, 2024',
      readTime: '8 min read',
      tags: ['REITs', 'Investing', 'Passive Income']
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      category: 'Home Buying',
      title: 'First-Time Home Buyer Mistakes to Avoid',
      excerpt: 'Navigate the buying process with confidence by steering clear of these common pitfalls.',
      content: `<p>Buying your first home is exciting but can be overwhelming. Avoid these common mistakes to ensure a smooth experience.</p><p>Content coming soon...</p>`,
      author: {
        name: 'Emma Wilson',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
        bio: 'First-time buyer specialist with a passion for educating new homeowners.'
      },
      date: 'February 28, 2024',
      readTime: '6 min read',
      tags: ['First-Time Buyer', 'Tips', 'Mortgage']
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      category: 'Design',
      title: '2025 Interior Design Trends for Modern Homes',
      excerpt: 'Stay ahead of the curve with these stylish and functional design ideas for every room.',
      content: `<p>Discover the hottest interior design trends for 2025 that blend aesthetics with practicality.</p><p>Content coming soon...</p>`,
      author: {
        name: 'Lisa Thompson',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
        bio: 'Interior designer and home staging expert with 8+ years of experience.'
      },
      date: 'February 20, 2024',
      readTime: '5 min read',
      tags: ['Design', 'Trends', 'Interior']
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      category: 'Finance',
      title: 'Understanding Mortgage Rates: What You Need to Know',
      excerpt: 'Get the best deal on your home loan by understanding how mortgage rates work and when to lock in.',
      content: `<p>Mortgage rates can be confusing. Learn the factors that influence rates and strategies to secure the best one.</p><p>Content coming soon...</p>`,
      author: {
        name: 'James Miller',
        avatar: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
        bio: 'Mortgage broker and financial advisor specializing in residential lending.'
      },
      date: 'February 15, 2024',
      readTime: '6 min read',
      tags: ['Finance', 'Mortgage', 'Interest Rates']
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      category: 'Market Trends',
      title: 'Suburban vs Urban: Where Should You Invest?',
      excerpt: 'Compare the pros and cons of suburban and urban real estate investments in today\'s market.',
      content: `<p>The great debate: suburbs or city center? We analyze the current market to help you decide.</p><p>Content coming soon...</p>`,
      author: {
        name: 'Sarah Johnson',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
        bio: 'Senior Real Estate Analyst with over 12 years of experience.'
      },
      date: 'February 8, 2024',
      readTime: '7 min read',
      tags: ['Market Analysis', 'Investment', 'Urban', 'Suburban']
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      category: 'Home Improvement',
      title: 'Energy-Efficient Upgrades That Pay for Themselves',
      excerpt: 'Reduce your carbon footprint and save money with these smart home improvements.',
      content: `<p>Go green and save green. These energy-efficient upgrades offer excellent ROI and lower utility bills.</p><p>Content coming soon...</p>`,
      author: {
        name: 'Michael Chen',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
        bio: 'Licensed contractor and home renovation expert.'
      },
      date: 'February 1, 2024',
      readTime: '5 min read',
      tags: ['Energy Efficiency', 'DIY', 'Savings']
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1494522358652-c549345d2c9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      category: 'Investment',
      title: 'Short-Term Rentals: A Complete Investor\'s Guide',
      excerpt: 'Everything you need to know about investing in vacation rental properties.',
      content: `<p>Considering Airbnb or VRBO? Learn the ins and outs of short-term rental investments, from regulations to revenue potential.</p><p>Content coming soon...</p>`,
      author: {
        name: 'David Rodriguez',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
        bio: 'CFA charterholder and real estate investment advisor.'
      },
      date: 'January 25, 2024',
      readTime: '9 min read',
      tags: ['Short-Term Rentals', 'Airbnb', 'Investment']
    }
  ];

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(undefined);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    const currentPost = allPosts.find(p => p.id === parseInt(id));
    setPost(currentPost);

    if (currentPost) {
      const related = allPosts
        .filter(p => p.category === currentPost.category && p.id !== currentPost.id)
        .slice(0, 3);
      setRelatedPosts(related);
    }

    window.scrollTo(0, 0);
  }, [id]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = `Check out this article: ${post?.title}`;
    
    let shareUrl = '';
    switch(platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=${encodeURIComponent(post?.title)}&body=${encodeURIComponent(text + '\n\n' + url)}`;
        break;
      default:
        return;
    }
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  if (post === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f9fa]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#2c3e50] mb-4">Loading article...</h2>
          <Link to="/blog" className="text-[#3498db] hover:underline">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f9fa]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#2c3e50] mb-4">Article not found</h2>
          <p className="text-gray-600 mb-4">We couldn't find that article. Please check the link or return to the blog list.</p>
          <Link to="/blog" className="text-[#3498db] hover:underline">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Hero Section with Image */}
      <section className="relative h-[50vh] min-h-[400px] bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-4 pb-12 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors duration-300"
              >
                <FaArrowLeft /> Back to Blog
              </Link>
              <span className="inline-block bg-[#3498db] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-white/90 text-sm">
                <span className="flex items-center gap-2"><FaUser /> {post.author.name}</span>
                <span className="flex items-center gap-2"><FaCalendarAlt /> {post.date}</span>
                <span className="flex items-center gap-2"><FaClock /> {post.readTime}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <motion.article 
              className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div 
                className="prose prose-lg max-w-none prose-headings:text-[#2c3e50] prose-p:text-gray-700 prose-strong:text-[#2c3e50] prose-a:text-[#3498db]"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              {/* Tags */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap items-center gap-3">
                  <FaTag className="text-gray-400" />
                  {post.tags.map((tag, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share Section */}
              <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
                <span className="text-gray-600 font-medium">Share this article:</span>
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleShare('twitter')}
                    className="w-10 h-10 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center hover:opacity-80 transition-opacity"
                    aria-label="Share on Twitter"
                  >
                    <FaTwitter />
                  </button>
                  <button 
                    onClick={() => handleShare('facebook')}
                    className="w-10 h-10 rounded-full bg-[#4267B2] text-white flex items-center justify-center hover:opacity-80 transition-opacity"
                    aria-label="Share on Facebook"
                  >
                    <FaFacebookF />
                  </button>
                  <button 
                    onClick={() => handleShare('linkedin')}
                    className="w-10 h-10 rounded-full bg-[#0077B5] text-white flex items-center justify-center hover:opacity-80 transition-opacity"
                    aria-label="Share on LinkedIn"
                  >
                    <FaLinkedinIn />
                  </button>
                  <button 
                    onClick={() => handleShare('email')}
                    className="w-10 h-10 rounded-full bg-[#EA4335] text-white flex items-center justify-center hover:opacity-80 transition-opacity"
                    aria-label="Share via Email"
                  >
                    <FaEnvelope />
                  </button>
                  <button 
                    onClick={handleCopyLink}
                    className="w-10 h-10 rounded-full bg-gray-600 text-white flex items-center justify-center hover:bg-gray-700 transition-colors relative"
                    aria-label="Copy link"
                  >
                    <FaLink />
                    {copySuccess && (
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        Copied!
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </motion.article>

            {/* Sidebar */}
            <motion.aside 
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Author Card */}
              <div className="bg-white rounded-2xl p-6 shadow-md mb-8">
                <h3 className="text-lg font-bold text-[#2c3e50] mb-4">About the Author</h3>
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-[#2c3e50]">{post.author.name}</h4>
                    <p className="text-sm text-gray-500">Real Estate Expert</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{post.author.bio}</p>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <h3 className="text-lg font-bold text-[#2c3e50] mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.map(related => (
                      <Link 
                        key={related.id}
                        to={`/blog/${related.id}`}
                        className="flex gap-3 group"
                      >
                        <img 
                          src={related.image} 
                          alt={related.title}
                          className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                        />
                        <div>
                          <h4 className="font-semibold text-[#2c3e50] group-hover:text-[#3498db] transition-colors line-clamp-2 text-sm">
                            {related.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">{related.date}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-[#2c3e50] to-[#3498db] rounded-2xl p-10 text-white"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Enjoyed this article?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for more expert insights, market updates, and exclusive content.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button 
                type="submit"
                className="bg-white text-[#2c3e50] hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;