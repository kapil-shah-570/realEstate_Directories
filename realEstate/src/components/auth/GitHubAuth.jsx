import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const GitHubAuth = () => {
  useEffect(() => {
    window.location.href = 'http://localhost:8000/api/auth/github';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-blue-50">
      <motion.div className="text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <FaGithub className="text-6xl text-gray-800 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900">Redirecting to GitHub...</h2>
        <p className="text-gray-600 mt-2">Please wait a moment.</p>
      </motion.div>
    </div>
  );
};

export default GitHubAuth;