import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGoogle } from 'react-icons/fa';

const GoogleAuth = () => {
  useEffect(() => {
    window.location.href = 'http://localhost:8000/api/auth/google';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-blue-50">
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <FaGoogle className="text-6xl text-red-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900">Redirecting to Google...</h2>
        <p className="text-gray-600 mt-2">Please wait a moment.</p>
      </motion.div>
    </div>
  );
};

export default GoogleAuth;