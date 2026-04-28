import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaEnvelope, FaArrowLeft, FaCheckCircle } from 'react-icons/fa';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8000/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccess('Password reset link sent! Check your email.');
      } else {
        setError(data.message || 'Something went wrong.');
      }
    } catch {
      setError('Server error. Please try again.');
    }
    setLoading(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div className="w-full max-w-md" initial="hidden" animate="visible" variants={containerVariants}>
        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10 border border-gray-100">
          <div className="text-center mb-8">
            <motion.div
              className="mx-auto h-14 w-14 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg"
              variants={itemVariants}
            >
              <FaEnvelope className="h-6 w-6 text-white" />
            </motion.div>
            <motion.h2 className="mt-6 text-3xl font-extrabold text-gray-900" variants={itemVariants}>
              Forgot Password?
            </motion.h2>
            <motion.p className="mt-2 text-sm text-gray-600" variants={itemVariants}>
              Enter your email and we’ll send you a reset link.
            </motion.p>
          </div>

          <motion.form className="space-y-5" onSubmit={handleSubmit} variants={containerVariants}>
            {error && (
              <motion.div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                {error}
              </motion.div>
            )}
            {success && (
              <motion.div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm flex items-center gap-2" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                <FaCheckCircle className="text-green-500" /> {success}
              </motion.div>
            )}

            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="you@example.com"
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-lg text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 font-semibold text-lg transition-all"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {loading ? (
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                ) : (
                  'Send Reset Link'
                )}
              </motion.button>
            </motion.div>

            <motion.div className="text-center" variants={itemVariants}>
              <Link to="/login" className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium">
                <FaArrowLeft /> Back to Login
              </Link>
            </motion.div>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
};

export default ForgotPasswordPage;