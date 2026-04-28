import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';
import ProductCard from '../components/Sections/Product/ProductCard';
import { allProducts } from '../data/productsData';

const propertyTypes = ['all', ...new Set(allProducts.map((product) => product.type))];

const ProductsPage = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const normalizedSearch = searchTerm.trim().toLowerCase();

  const filteredProducts = allProducts.filter((product) => {
    const matchesType = filter === 'all' || product.type === filter;
    const matchesSearch =
      product.title.toLowerCase().includes(normalizedSearch) ||
      product.location.toLowerCase().includes(normalizedSearch) ||
      product.type.toLowerCase().includes(normalizedSearch);

    return matchesType && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <section className="bg-gradient-to-r from-blue-900 to-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <motion.h1
            className="text-3xl md:text-5xl font-extrabold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Explore Our Properties
          </motion.h1>
          <motion.p
            className="text-lg text-blue-100 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Find your perfect home from our curated listings
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-5 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          <div className="relative w-full sm:w-80">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search by name, location, or type..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border-2 border-gray-300 rounded-full focus:outline-none focus:border-blue-500 text-gray-800 bg-white shadow-sm"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {propertyTypes.map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold border-2 transition-colors ${
                  filter === type
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50'
                }`}
              >
                {type === 'all' ? 'All' : type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08 },
              },
            }}
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No properties match your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
