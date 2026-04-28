// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { FaSignInAlt, FaEye, FaEyeSlash } from 'react-icons/fa';

// const LoginPage = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     try {
//       const response = await fetch('http://localhost:8000/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email: formData.email,
//           password: formData.password,
//         }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         localStorage.setItem('token', data.token);
//         localStorage.setItem('user', JSON.stringify(data.user));
//         navigate('/dashboard');
//       } else {
//         setError(data.message);
//       }
//     } catch (error) {
//       setError('Server error');
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="max-w-md w-full space-y-8"
//       >
//         <div>
//           <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-blue-100">
//             <FaSignInAlt className="h-6 w-6 text-blue-600" />
//           </div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//             Sign in to your account
//           </h2>
//           <p className="mt-2 text-center text-sm text-gray-600">
//             Don't have an account?{' '}
//             <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500">
//               Sign up
//             </Link>
//           </p>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           {error && (
//             <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
//               {error}
//             </div>
//           )}
//           <div className="space-y-4">
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email address
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="Enter your email"
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <div className="relative">
//                 <input
//                   id="password"
//                   name="password"
//                   type={showPassword ? 'text' : 'password'}
//                   required
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="mt-1 block w-full px-3 py-2 pr-10 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="Enter your password"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                 >
//                   {showPassword ? (
//                     <FaEyeSlash className="h-4 w-4 text-gray-400" />
//                   ) : (
//                     <FaEye className="h-4 w-4 text-gray-400" />
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div>
//             <button
//               type="submit"
//               disabled={loading}
//               className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
//             >
//               {loading ? 'Signing in...' : 'Sign in'}
//             </button>
//           </div>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default LoginPage;

































// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import {
//   FaSignInAlt,
//   FaEye,
//   FaEyeSlash,
//   FaEnvelope,
//   FaLock,
// } from 'react-icons/fa';

// const LoginPage = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     try {
//       const response = await fetch('http://localhost:8000/api/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           email: formData.email,
//           password: formData.password,
//         }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         localStorage.setItem('token', data.token);
//         localStorage.setItem('user', JSON.stringify(data.user));
//         navigate('/dashboard');
//       } else {
//         setError(data.message);
//       }
//     } catch (error) {
//       setError('Server error');
//     }
//     setLoading(false);
//   };

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1, delayChildren: 0.2 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
//       <motion.div
//         className="w-full max-w-md"
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//       >
//         {/* Card */}
//         <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10 border border-gray-100">
//           {/* Header */}
//           <div className="text-center mb-8">
//             <motion.div
//               className="mx-auto h-14 w-14 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg"
//               variants={itemVariants}
//             >
//               <FaSignInAlt className="h-6 w-6 text-white" />
//             </motion.div>
//             <motion.h2
//               className="mt-6 text-3xl font-extrabold text-gray-900"
//               variants={itemVariants}
//             >
//               Sign in to your account
//             </motion.h2>
//             <motion.p className="mt-2 text-sm text-gray-600" variants={itemVariants}>
//               Don't have an account?{' '}
//               <Link
//                 to="/signup"
//                 className="font-semibold text-blue-600 hover:text-blue-700"
//               >
//                 Sign up
//               </Link>
//             </motion.p>
//           </div>

//           <motion.form
//             className="space-y-5"
//             onSubmit={handleSubmit}
//             variants={containerVariants}
//           >
//             {/* Error message */}
//             {error && (
//               <motion.div
//                 className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm"
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: 'auto' }}
//               >
//                 {error}
//               </motion.div>
//             )}

//             {/* Email */}
//             <motion.div variants={itemVariants}>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Email address
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaEnvelope className="h-4 w-4 text-gray-400" />
//                 </div>
//                 <input
//                   name="email"
//                   type="email"
//                   required
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
//                   placeholder="you@example.com"
//                 />
//               </div>
//             </motion.div>

//             {/* Password */}
//             <motion.div variants={itemVariants}>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Password
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaLock className="h-4 w-4 text-gray-400" />
//                 </div>
//                 <input
//                   name="password"
//                   type={showPassword ? 'text' : 'password'}
//                   required
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
//                   placeholder="Enter your password"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                 >
//                   {showPassword ? (
//                     <FaEyeSlash className="h-4 w-4 text-gray-400 hover:text-gray-600" />
//                   ) : (
//                     <FaEye className="h-4 w-4 text-gray-400 hover:text-gray-600" />
//                   )}
//                 </button>
//               </div>
//             </motion.div>

//             {/* Submit */}
//             <motion.div variants={itemVariants}>
//               <motion.button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-lg text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 font-semibold text-lg transition-all"
//                 whileHover={{ scale: 1.01 }}
//                 whileTap={{ scale: 0.99 }}
//               >
//                 {loading ? (
//                   <svg
//                     className="animate-spin h-5 w-5 text-white"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                   >
//                     <circle
//                       className="opacity-25"
//                       cx="12"
//                       cy="12"
//                       r="10"
//                       stroke="currentColor"
//                       strokeWidth="4"
//                     />
//                     <path
//                       className="opacity-75"
//                       fill="currentColor"
//                       d="M4 12a8 8 0 018-8v8z"
//                     />
//                   </svg>
//                 ) : (
//                   'Sign In'
//                 )}
//               </motion.button>
//             </motion.div>
//           </motion.form>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default LoginPage;














import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaSignInAlt,
  FaEye,
  FaEyeSlash,
  FaEnvelope,
  FaLock,
} from 'react-icons/fa';
import SocialAuthButtons from '../components/SocialAuthButtons'; // adjust path as needed
import { auth } from '../utils/auth';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        auth.login(data.token, data.user);
        navigate('/dashboard');
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Server error');
    }
    setLoading(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="w-full max-w-md"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10 border border-gray-100">
          <div className="text-center mb-8">
            <motion.div
              className="mx-auto h-14 w-14 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg"
              variants={itemVariants}
            >
              <FaSignInAlt className="h-6 w-6 text-white" />
            </motion.div>
            <motion.h2
              className="mt-6 text-3xl font-extrabold text-gray-900"
              variants={itemVariants}
            >
              Sign in to your account
            </motion.h2>
            <motion.p className="mt-2 text-sm text-gray-600" variants={itemVariants}>
              Don't have an account?{' '}
              <Link
                to="/signup"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                Sign up
              </Link>
            </motion.p>

             {/* Social login buttons */}
            <motion.div variants={itemVariants}>
              <SocialAuthButtons action="Sign in" />
            </motion.div>
          </div>

          <motion.form
            className="space-y-5"
            onSubmit={handleSubmit}
            variants={containerVariants}
          >
            {error && (
              <motion.div
                className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
              >
                {error}
              </motion.div>
            )}

            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="you@example.com"
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <FaEyeSlash className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <FaEye className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </motion.div>

            <div className="flex items-center justify-between">
              <Link
                to="/forgot-password"
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                Forgot password?
              </Link>
            </div>

            <motion.div variants={itemVariants}>
              <motion.button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-lg text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 font-semibold text-lg transition-all"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {loading ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    />
                  </svg>
                ) : (
                  'Sign In'
                )}
              </motion.button>
            </motion.div>

           
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;