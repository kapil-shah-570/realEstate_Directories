// import React from 'react';
// import DashboardSectionPage from '../../components/Dashboard/DashboardSectionPage';

// export default function DashboardAddPropertyPage() {
//   return (
//     <DashboardSectionPage
//       title="Add Property"
//       subtitle="Create a polished listing with photos, amenities, price, and agent details."
//       actionLabel="Save Draft"
//     >
//       <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
//         <div className="grid gap-4 md:grid-cols-2">
//           <input className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none" placeholder="Property title" />
//           <input className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none" placeholder="Price" />
//           <input className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none" placeholder="Location" />
//           <input className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none" placeholder="Type" />
//           <input className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none" placeholder="Bedrooms" />
//           <input className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none" placeholder="Bathrooms" />
//           <textarea className="min-h-32 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none md:col-span-2" placeholder="Description" />
//           <button className="rounded-2xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 md:col-span-2">
//             Publish Listing
//           </button>
//         </div>
//       </div>
//     </DashboardSectionPage>
//   );
// }
































// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import DashboardSectionPage from '../../components/Dashboard/DashboardSectionPage';
// import {
//   FaBuilding,
//   FaMapMarkerAlt,
//   FaDollarSign,
//   FaBed,
//   FaBath,
//   FaRulerCombined,
//   FaVideo,
//   FaImage,
//   FaUpload,
//   FaCheckCircle,
//   FaTrash,
//   FaPlus,
//   FaUser, // ✅ FIXED
// } from 'react-icons/fa';

// const DashboardAddPropertyPage = () => {
//   const [form, setForm] = useState({
//     title: '',
//     price: '',
//     location: '',
//     buildingName: '',
//     area: '',
//     description: '',
//     bedrooms: '',
//     bathrooms: '',
//     sqft: '',
//     features: [],
//     whyChoose: '',
//     agentName: '',
//     agentPhone: '',
//     agentEmail: '',
//     videoUrl: '',
//   });
//   const [images, setImages] = useState([]);
//   const [newFeature, setNewFeature] = useState('');
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const addFeature = () => {
//     if (newFeature.trim()) {
//       setForm({ ...form, features: [...form.features, newFeature.trim()] });
//       setNewFeature('');
//     }
//   };

//   const removeFeature = (index) => {
//     setForm({ ...form, features: form.features.filter((_, i) => i !== index) });
//   };

//   const handleImageUpload = (e) => {
//     const files = Array.from(e.target.files);
//     const newImages = files.map((file) => URL.createObjectURL(file));
//     setImages([...images, ...newImages]);
//   };

//   const removeImage = (index) => {
//     setImages(images.filter((_, i) => i !== index));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Simulate submission
//     setSubmitted(true);
//   };

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 10 },
//     visible: { opacity: 1, y: 0 },
//   };

//   if (submitted) {
//     return (
//       <DashboardSectionPage
//         title="Property Added"
//         subtitle="Your listing has been successfully submitted for review."
//         actionLabel="Add Another"
//       >
//         <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
//           <FaCheckCircle className="mx-auto text-6xl text-emerald-500 mb-4" />
//           <h3 className="text-2xl font-bold text-slate-900 mb-2">Property Submitted</h3>
//           <p className="text-slate-600">Our team will review your listing within 24 hours.</p>
//           <button
//             onClick={() => setSubmitted(false)}
//             className="mt-6 rounded-2xl bg-cyan-500 px-6 py-3 font-semibold text-white hover:bg-cyan-600 transition"
//           >
//             Add Another Property
//           </button>
//         </div>
//       </DashboardSectionPage>
//     );
//   }

//   return (
//     <DashboardSectionPage
//       title="Add Property"
//       subtitle="Create a polished listing with photos, amenities, price, and agent details."
//       actionLabel="Save Draft"
//     >
//       <motion.form
//         className="space-y-8"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         onSubmit={handleSubmit}
//       >
//         {/* Basic Information */}
//         <motion.div variants={itemVariants} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
//           <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
//             <FaBuilding className="text-cyan-600" /> Basic Information
//           </h3>
//           <div className="grid gap-4 md:grid-cols-2">
//             <input
//               name="title"
//               value={form.title}
//               onChange={handleChange}
//               placeholder="Property Title"
//               className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
//               required
//             />
//             <input
//               name="price"
//               value={form.price}
//               onChange={handleChange}
//               placeholder="Price (e.g., $500,000)"
//               className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
//               required
//             />
//             <input
//               name="location"
//               value={form.location}
//               onChange={handleChange}
//               placeholder="Location (Address/City)"
//               className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
//               required
//             />
//             <input
//               name="buildingName"
//               value={form.buildingName}
//               onChange={handleChange}
//               placeholder="Building/Community Name"
//               className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
//             />
//           </div>
//         </motion.div>

//         {/* Property Details */}
//         <motion.div variants={itemVariants} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
//           <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
//             <FaRulerCombined className="text-cyan-600" /> Property Details
//           </h3>
//           <div className="grid gap-4 md:grid-cols-3">
//             <input
//               name="bedrooms"
//               value={form.bedrooms}
//               onChange={handleChange}
//               placeholder="Bedrooms"
//               type="number"
//               className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
//             />
//             <input
//               name="bathrooms"
//               value={form.bathrooms}
//               onChange={handleChange}
//               placeholder="Bathrooms"
//               type="number"
//               className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
//             />
//             <input
//               name="sqft"
//               value={form.sqft}
//               onChange={handleChange}
//               placeholder="Square Footage"
//               className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
//             />
//             <textarea
//               name="area"
//               value={form.area}
//               onChange={handleChange}
//               placeholder="Area Description (e.g., 0.5 acres, near park…)"
//               className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500 md:col-span-3 h-24"
//             />
//             <textarea
//               name="description"
//               value={form.description}
//               onChange={handleChange}
//               placeholder="Full Property Description"
//               className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500 md:col-span-3 h-32"
//             />
//           </div>
//         </motion.div>

//         {/* Media Upload */}
//         <motion.div variants={itemVariants} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
//           <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
//             <FaImage className="text-cyan-600" /> Media
//           </h3>
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-2">Images</label>
//               <div className="flex flex-wrap gap-4">
//                 {images.map((img, index) => (
//                   <div key={index} className="relative">
//                     <img src={img} alt="upload" className="h-24 w-24 rounded-xl object-cover" />
//                     <button
//                       onClick={() => removeImage(index)}
//                       className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
//                     >
//                       <FaTrash />
//                     </button>
//                   </div>
//                 ))}
//                 <label className="h-24 w-24 rounded-xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center cursor-pointer hover:border-cyan-500 transition">
//                   <FaUpload className="text-slate-400" />
//                   <span className="text-xs text-slate-500 mt-1">Upload</span>
//                   <input type="file" multiple accept="image/*" onChange={handleImageUpload} className="hidden" />
//                 </label>
//               </div>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-2">Video URL (YouTube/Vimeo)</label>
//               <div className="flex items-center gap-3">
//                 <FaVideo className="text-slate-400" />
//                 <input
//                   name="videoUrl"
//                   value={form.videoUrl}
//                   onChange={handleChange}
//                   placeholder="https://youtube.com/..."
//                   className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
//                 />
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Features & Why Choose */}
//         <motion.div variants={itemVariants} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
//           <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
//             <FaCheckCircle className="text-cyan-600" /> Features & Why Choose
//           </h3>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-slate-700 mb-2">Features (e.g., Pool, Gym)</label>
//             <div className="flex gap-2 mb-3">
//               <input
//                 value={newFeature}
//                 onChange={(e) => setNewFeature(e.target.value)}
//                 placeholder="Add a feature"
//                 className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
//               />
//               <button
//                 type="button"
//                 onClick={addFeature}
//                 className="rounded-2xl bg-cyan-500 px-4 py-2 text-white font-semibold hover:bg-cyan-600 transition"
//               >
//                 <FaPlus />
//               </button>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {form.features.map((feat, index) => (
//                 <span key={index} className="inline-flex items-center gap-2 rounded-full bg-cyan-100 px-3 py-1 text-sm text-cyan-700">
//                   {feat}
//                   <button
//                     onClick={() => removeFeature(index)}
//                     className="text-red-500 hover:text-red-700"
//                   >
//                     <FaTrash size={12} />
//                   </button>
//                 </span>
//               ))}
//             </div>
//           </div>
//           <textarea
//             name="whyChoose"
//             value={form.whyChoose}
//             onChange={handleChange}
//             placeholder="Why Choose This Property? (USP)"
//             className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500 h-24"
//           />
//         </motion.div>

//         {/* Agent / Contact */}
//         <motion.div variants={itemVariants} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
//           <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
//             <FaUser className="text-cyan-600" /> Agent / Contact Information
//           </h3>
//           <div className="grid gap-4 md:grid-cols-3">
//             <input
//               name="agentName"
//               value={form.agentName}
//               onChange={handleChange}
//               placeholder="Agent Name"
//               className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
//             />
//             <input
//               name="agentPhone"
//               value={form.agentPhone}
//               onChange={handleChange}
//               placeholder="Phone Number"
//               className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
//             />
//             <input
//               name="agentEmail"
//               value={form.agentEmail}
//               onChange={handleChange}
//               placeholder="Email Address"
//               type="email"
//               className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
//             />
//           </div>
//         </motion.div>

//         {/* Submit */}
//         <motion.div variants={itemVariants}>
//           <button
//             type="submit"
//             className="w-full rounded-2xl bg-cyan-500 px-6 py-4 font-bold text-white shadow-lg hover:bg-cyan-600 transition"
//           >
//             Publish Listing
//           </button>
//         </motion.div>
//       </motion.form>
//     </DashboardSectionPage>
//   );
// };

// export default DashboardAddPropertyPage;


















// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import DashboardSectionPage from '../../components/Dashboard/DashboardSectionPage';
// import {
//   FaBuilding,
//   FaDollarSign,
//   FaBed,
//   FaBath,
//   FaRulerCombined,
//   FaVideo,
//   FaImage,
//   FaUpload,
//   FaCheckCircle,
//   FaTrash,
//   FaPlus,
//   FaUser,
//   FaCalendarAlt,
//   FaCar,
//   FaHome,
//   FaMapPin,
//   FaClipboardList,
//   FaStar,
// } from 'react-icons/fa';

// const DashboardAddPropertyPage = () => {
//   const [form, setForm] = useState({
//     title: '',
//     price: '',
//     location: '',
//     buildingName: '',
//     propertyType: 'residential',
//     area: '',
//     description: '',
//     bedrooms: '',
//     bathrooms: '',
//     sqft: '',
//     yearBuilt: '',
//     lotSize: '',
//     parking: '',
//     furnished: 'no',
//     features: [],
//     whyChoose: '',
//     agentName: '',
//     agentPhone: '',
//     agentEmail: '',
//     videoUrl: '',
//     latitude: '',
//     longitude: '',
//     status: 'draft', // draft / published
//   });
//   const [images, setImages] = useState([]);
//   const [newFeature, setNewFeature] = useState('');
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const addFeature = () => {
//     if (newFeature.trim()) {
//       setForm({ ...form, features: [...form.features, newFeature.trim()] });
//       setNewFeature('');
//     }
//   };

//   const removeFeature = (index) => {
//     setForm({ ...form, features: form.features.filter((_, i) => i !== index) });
//   };

//   const handleImageUpload = (e) => {
//     const files = Array.from(e.target.files);
//     const newImages = files.map((file) => URL.createObjectURL(file));
//     setImages([...images, ...newImages]);
//   };

//   const removeImage = (index) => {
//     setImages(images.filter((_, i) => i !== index));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Simulate submission
//     setSubmitted(true);
//   };

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 10 },
//     visible: { opacity: 1, y: 0 },
//   };

//   if (submitted) {
//     return (
//       <DashboardSectionPage
//         title="Property Added"
//         subtitle="Your listing has been successfully submitted for review."
//         actionLabel="Add Another"
//       >
//         <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
//           <FaCheckCircle className="mx-auto text-6xl text-emerald-500 mb-4" />
//           <h3 className="text-2xl font-bold text-slate-900 mb-2">Property Submitted</h3>
//           <p className="text-slate-600">Our team will review your listing within 24 hours.</p>
//           <button
//             onClick={() => setSubmitted(false)}
//             className="mt-6 rounded-2xl bg-cyan-500 px-6 py-3 font-semibold text-white hover:bg-cyan-600 transition"
//           >
//             Add Another Property
//           </button>
//         </div>
//       </DashboardSectionPage>
//     );
//   }

//   return (
//     <DashboardSectionPage
//       title="Add Property"
//       subtitle="Create a polished listing with photos, amenities, price, and agent details."
//       actionLabel="Save Draft"
//     >
//       <motion.form
//         className="space-y-8"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         onSubmit={handleSubmit}
//       >
//         {/* Basic Information */}
//         <motion.div variants={itemVariants} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
//           <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
//             <FaBuilding className="text-cyan-600" /> Basic Information
//           </h3>
//           <div className="grid gap-4 md:grid-cols-2">
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-1">Property Title *</label>
//               <input
//                 name="title"
//                 value={form.title}
//                 onChange={handleChange}
//                 placeholder="e.g., Modern Luxury Villa"
//                 className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-1">Price *</label>
//               <input
//                 name="price"
//                 value={form.price}
//                 onChange={handleChange}
//                 placeholder="$500,000"
//                 className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-1">Location *</label>
//               <input
//                 name="location"
//                 value={form.location}
//                 onChange={handleChange}
//                 placeholder="Address/City, State"
//                 className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-1">Building/Community Name</label>
//               <input
//                 name="buildingName"
//                 value={form.buildingName}
//                 onChange={handleChange}
//                 placeholder="Sunset Towers"
//                 className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-1">Property Type *</label>
//               <select
//                 name="propertyType"
//                 value={form.propertyType}
//                 onChange={handleChange}
//                 className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
//               >
//                 <option value="residential">Residential</option>
//                 <option value="commercial">Commercial</option>
//                 <option value="land">Land</option>
//                 <option value="multi-family">Multi-Family</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-1">Status</label>
//               <select
//                 name="status"
//                 value={form.status}
//                 onChange={handleChange}
//                 className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
//               >
//                 <option value="draft">Draft</option>
//                 <option value="published">Published</option>
//               </select>
//             </div>
//           </div>
//         </motion.div>

//         {/* Property Details */}
//         <motion.div variants={itemVariants} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
//           <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
//             <FaHome className="text-cyan-600" /> Property Details
//           </h3>
//           <div className="grid gap-4 md:grid-cols-3">
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-1">Bedrooms *</label>
//               <input
//                 name="bedrooms"
//                 value={form.bedrooms}
//                 onChange={handleChange}
//                 type="number"
//                 placeholder="3"
//                 className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-1">Bathrooms *</label>
//               <input
//                 name="bathrooms"
//                 value={form.bathrooms}
//                 onChange={handleChange}
//                 type="number"
//                 placeholder="2"
//                 className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-1">Square Footage</label>
//               <input
//                 name="sqft"
//                 value={form.sqft}
//                 onChange={handleChange}
//                 placeholder="2000"
//                 className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-1">Year Built</label>
//               <input
//                 name="yearBuilt"
//                 value={form.yearBuilt}
//                 onChange={handleChange}
//                 placeholder="2020"
//                 className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-1">Lot Size</label>
//               <input
//                 name="lotSize"
//                 value={form.lotSize}
//                 onChange={handleChange}
//                 placeholder="0.5 acres"
//                 className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-1">Parking</label>
//               <input
//                 name="parking"
//                 value={form.parking}
//                 onChange={handleChange}
//                 placeholder="2-car garage"
//                 className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-1">Furnished</label>
//               <select
//                 name="furnished"
//                 value={form.furnished}
//                 onChange={handleChange}
//                 className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
//               >
//                 <option value="no">No</option>
//                 <option value="semi">Semi-Furnished</option>
//                 <option value="fully">Fully Furnished</option>
//               </select>
//             </div>
//             <div className="md:col-span-3">
//               <label className="block text-sm font-medium text-slate-700 mb-1">Area Description</label>
//               <textarea
//                 name="area"
//                 value={form.area}
//                 onChange={handleChange}
//                 placeholder="0.5 acres, near Central Park, quiet neighborhood…"
//                 className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500 h-24"
//               />
//             </div>
//             <div className="md:col-span-3">
//               <label className="block text-sm font-medium text-slate-700 mb-1">Full Description *</label>
//               <textarea
//                 name="description"
//                 value={form.description}
//                 onChange={handleChange}
//                 placeholder="Describe the property in detail…"
//                 className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500 h-32"
//                 required
//               />
//             </div>
//           </div>
//         </motion.div>

//         {/* Media Upload */}
//         <motion.div variants={itemVariants} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
//           <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
//             <FaImage className="text-cyan-600" /> Media
//           </h3>
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-2">Images</label>
//               <div className="flex flex-wrap gap-4">
//                 {images.map((img, index) => (
//                   <div key={index} className="relative">
//                     <img src={img} alt="upload" className="h-24 w-24 rounded-xl object-cover" />
//                     <button
//                       onClick={() => removeImage(index)}
//                       className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
//                     >
//                       <FaTrash />
//                     </button>
//                   </div>
//                 ))}
//                 <label className="h-24 w-24 rounded-xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center cursor-pointer hover:border-cyan-500 transition">
//                   <FaUpload className="text-slate-400" />
//                   <span className="text-xs text-slate-500 mt-1">Upload</span>
//                   <input type="file" multiple accept="image/*" onChange={handleImageUpload} className="hidden" />
//                 </label>
//               </div>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-2">Video URL (YouTube/Vimeo)</label>
//               <div className="flex items-center gap-3">
//                 <FaVideo className="text-slate-400" />
//                 <input
//                   name="videoUrl"
//                   value={form.videoUrl}
//                   onChange={handleChange}
//                   placeholder="https://youtube.com/..."
//                   className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
//                 />
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Location Coordinates */}
//         <motion.div variants={itemVariants} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
//           <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
//             <FaMapPin className="text-cyan-600" /> Location Coordinates
//           </h3>
//           <div className="grid gap-4 md:grid-cols-2">
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-1">Latitude</label>
//               <input
//                 name="latitude"
//                 value={form.latitude}
//                 onChange={handleChange}
//                 placeholder="34.0736"
//                 className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-1">Longitude</label>
//               <input
//                 name="longitude"
//                 value={form.longitude}
//                 onChange={handleChange}
//                 placeholder="-118.4004"
//                 className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
//               />
//             </div>
//           </div>
//         </motion.div>

//         {/* Features & Why Choose */}
//         <motion.div variants={itemVariants} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
//           <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
//             <FaStar className="text-cyan-600" /> Features & Why Choose
//           </h3>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-slate-700 mb-2">Features (e.g., Pool, Gym)</label>
//             <div className="flex gap-2 mb-3">
//               <input
//                 value={newFeature}
//                 onChange={(e) => setNewFeature(e.target.value)}
//                 placeholder="Add a feature"
//                 className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
//               />
//               <button
//                 type="button"
//                 onClick={addFeature}
//                 className="rounded-2xl bg-cyan-500 px-4 py-2 text-white font-semibold hover:bg-cyan-600 transition"
//               >
//                 <FaPlus />
//               </button>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {form.features.map((feat, index) => (
//                 <span key={index} className="inline-flex items-center gap-2 rounded-full bg-cyan-100 px-3 py-1 text-sm text-cyan-700">
//                   {feat}
//                   <button
//                     onClick={() => removeFeature(index)}
//                     className="text-red-500 hover:text-red-700"
//                   >
//                     <FaTrash size={12} />
//                   </button>
//                 </span>
//               ))}
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-slate-700 mb-2">Why Choose This Property?</label>
//             <textarea
//               name="whyChoose"
//               value={form.whyChoose}
//               onChange={handleChange}
//               placeholder="Unique selling points..."
//               className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500 h-24"
//             />
//           </div>
//         </motion.div>

//         {/* Agent / Contact */}
//         <motion.div variants={itemVariants} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
//           <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
//             <FaUser className="text-cyan-600" /> Agent / Contact Information
//           </h3>
//           <div className="grid gap-4 md:grid-cols-3">
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-1">Agent Name</label>
//               <input
//                 name="agentName"
//                 value={form.agentName}
//                 onChange={handleChange}
//                 placeholder="Sarah Johnson"
//                 className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
//               <input
//                 name="agentPhone"
//                 value={form.agentPhone}
//                 onChange={handleChange}
//                 placeholder="+1 (555) 123-4567"
//                 className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
//               <input
//                 name="agentEmail"
//                 value={form.agentEmail}
//                 onChange={handleChange}
//                 type="email"
//                 placeholder="agent@example.com"
//                 className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
//               />
//             </div>
//           </div>
//         </motion.div>

//         {/* Action Buttons */}
//         <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
//           <button
//             type="submit"
//             className="flex-1 rounded-2xl bg-cyan-500 px-6 py-4 font-bold text-white shadow-lg hover:bg-cyan-600 transition"
//           >
//             Publish Listing
//           </button>
//           <button
//             type="button"
//             className="flex-1 rounded-2xl border border-slate-200 bg-white px-6 py-4 font-bold text-slate-700 hover:bg-slate-50 transition"
//           >
//             Save as Draft
//           </button>
//         </motion.div>
//       </motion.form>
//     </DashboardSectionPage>
//   );
// };

// export default DashboardAddPropertyPage;
























// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import DashboardSectionPage from '../../components/Dashboard/DashboardSectionPage';
// import {
//   FaBuilding,
//   FaDollarSign,
//   FaBed,
//   FaBath,
//   FaRulerCombined,
//   FaVideo,
//   FaImage,
//   FaUpload,
//   FaCheckCircle,
//   FaTrash,
//   FaPlus,
//   FaUser,
//   FaCalendarAlt,
//   FaCar,
//   FaHome,
//   FaMapPin,
//   FaClipboardList,
//   FaStar,
//   FaTemperatureHigh,
//   FaPaw,
//   FaEye,
//   FaLandmark,
//   FaSun,
//   FaSnowflake,
//   FaPaintRoller,
// } from 'react-icons/fa';

// const DashboardAddPropertyPage = () => {
//   const [form, setForm] = useState({
//     title: '',
//     price: '',
//     location: '',
//     buildingName: '',
//     propertyType: 'residential',
//     area: '',
//     description: '',
//     bedrooms: '',
//     bathrooms: '',
//     sqft: '',
//     yearBuilt: '',
//     lotSize: '',
//     parking: '',
//     furnished: 'no',
//     features: [],
//     whyChoose: '',
//     agentName: '',
//     agentPhone: '',
//     agentEmail: '',
//     videoUrl: '',
//     latitude: '',
//     longitude: '',
//     status: 'draft',
//     // New fields
//     nearbyPlaces: '',
//     heating: 'central',
//     cooling: 'central',
//     flooring: '',
//     views: '',
//     petPolicy: 'allowed',
//     availabilityDate: '',
//     virtualTour: '',
//   });
//   const [images, setImages] = useState([]);
//   const [newFeature, setNewFeature] = useState('');
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const addFeature = () => {
//     if (newFeature.trim()) {
//       setForm({ ...form, features: [...form.features, newFeature.trim()] });
//       setNewFeature('');
//     }
//   };

//   const removeFeature = (index) => {
//     setForm({ ...form, features: form.features.filter((_, i) => i !== index) });
//   };

//   const handleImageUpload = (e) => {
//     const files = Array.from(e.target.files);
//     const newImages = files.map((file) => URL.createObjectURL(file));
//     setImages([...images, ...newImages]);
//   };

//   const removeImage = (index) => {
//     setImages(images.filter((_, i) => i !== index));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 10 },
//     visible: { opacity: 1, y: 0 },
//   };

//   if (submitted) {
//     return (
//       <DashboardSectionPage
//         title="Property Added"
//         subtitle="Your listing has been successfully submitted for review."
//         actionLabel="Add Another"
//       >
//         <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
//           <FaCheckCircle className="mx-auto text-6xl text-emerald-500 mb-4" />
//           <h3 className="text-2xl font-bold text-slate-900 mb-2">Property Submitted</h3>
//           <p className="text-slate-600">Our team will review your listing within 24 hours.</p>
//           <button
//             onClick={() => setSubmitted(false)}
//             className="mt-6 rounded-2xl bg-cyan-500 px-6 py-3 font-semibold text-white hover:bg-cyan-600 transition"
//           >
//             Add Another Property
//           </button>
//         </div>
//       </DashboardSectionPage>
//     );
//   }

//   return (
//     <DashboardSectionPage
//       title="Add Property"
//       subtitle="Create a polished listing with photos, amenities, price, and agent details."
//       actionLabel="Save Draft"
//     >
//       <motion.form
//         className="space-y-8"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         onSubmit={handleSubmit}
//       >
//         {/* Basic Information */}
//         <motion.div variants={itemVariants} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
//           <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
//             <FaBuilding className="text-cyan-600" /> Basic Information
//           </h3>
//           <div className="grid gap-4 md:grid-cols-2">
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-1">Property Title *</label>
//               <input name="title" value={form.title} onChange={handleChange} placeholder="e.g., Modern Luxury Villa" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500" required />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-1">Price *</label>
//               <input name="price" value={form.price} onChange={handleChange} placeholder="$500,000" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500" required />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-1">Location *</label>
//               <input name="location" value={form.location} onChange={handleChange} placeholder="Address/City, State" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500" required />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-1">Building/Community Name</label>
//               <input name="buildingName" value={form.buildingName} onChange={handleChange} placeholder="Sunset Towers" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500" />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-1">Property Type *</label>
//               <select name="propertyType" value={form.propertyType} onChange={handleChange} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500">
//                 <option value="residential">Residential</option>
//                 <option value="commercial">Commercial</option>
//                 <option value="land">Land</option>
//                 <option value="multi-family">Multi-Family</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-1">Status</label>
//               <select name="status" value={form.status} onChange={handleChange} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500">
//                 <option value="draft">Draft</option>
//                 <option value="published">Published</option>
//               </select>
//             </div>
//           </div>
//         </motion.div>

//         {/* Property Details */}
//         <motion.div variants={itemVariants} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
//           <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2"><FaHome className="text-cyan-600" /> Property Details</h3>
//           <div className="grid gap-4 md:grid-cols-3">
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-1">Bedrooms *</label>
//               <input name="bedrooms" value={form.bedrooms} onChange={handleChange} type="number" placeholder="3" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500" required />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-1">Bathrooms *</label>
//               <input name="bathrooms" value={form.bathrooms} onChange={handleChange} type="number" placeholder="2" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500" required />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-1">Square Footage</label>
//               <input name="sqft" value={form.sqft} onChange={handleChange} placeholder="2000" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500" />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-1">Year Built</label>
//               <input name="yearBuilt" value={form.yearBuilt} onChange={handleChange} placeholder="2020" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500" />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-1">Lot Size</label>
//               <input name="lotSize" value={form.lotSize} onChange={handleChange} placeholder="0.5 acres" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500" />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-1">Parking</label>
//               <input name="parking" value={form.parking} onChange={handleChange} placeholder="2-car garage" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500" />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-1">Furnished</label>
//               <select name="furnished" value={form.furnished} onChange={handleChange} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500">
//                 <option value="no">No</option>
//                 <option value="semi">Semi-Furnished</option>
//                 <option value="fully">Fully Furnished</option>
//               </select>
//             </div>
//             {/* New fields */}
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-1">Heating</label>
//               <select name="heating" value={form.heating} onChange={handleChange} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500">
//                 <option value="central">Central</option>
//                 <option value="radiant">Radiant</option>
//                 <option value="other">Other</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-1">Cooling</label>
//               <select name="cooling" value={form.cooling} onChange={handleChange} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500">
//                 <option value="central">Central</option>
//                 <option value="window">Window Unit</option>
//                 <option value="none">None</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-1">Flooring</label>
//               <input name="flooring" value={form.flooring} onChange={handleChange} placeholder="Hardwood, Tile" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500" />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-1">Views</label>
//               <input name="views" value={form.views} onChange={handleChange} placeholder="City, Garden" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500" />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-1">Pet Policy</label>
//               <select name="petPolicy" value={form.petPolicy} onChange={handleChange} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500">
//                 <option value="allowed">Allowed</option>
//                 <option value="not allowed">Not Allowed</option>
//                 <option value="conditional">Conditional</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-1">Availability Date</label>
//               <input name="availabilityDate" value={form.availabilityDate} onChange={handleChange} type="date" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500" />
//             </div>
//             <div className="md:col-span-3">
//               <label className="block text-sm font-medium text-slate-700 mb-1">Nearby Places</label>
//               <textarea name="nearbyPlaces" value={form.nearbyPlaces} onChange={handleChange} placeholder="Schools, parks, malls..." className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500 h-24" />
//             </div>
//             <div className="md:col-span-3">
//               <label className="block text-sm font-medium text-slate-700 mb-1">Area Description</label>
//               <textarea name="area" value={form.area} onChange={handleChange} placeholder="0.5 acres, near Central Park…" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500 h-24" />
//             </div>
//             <div className="md:col-span-3">
//               <label className="block text-sm font-medium text-slate-700 mb-1">Full Description *</label>
//               <textarea name="description" value={form.description} onChange={handleChange} placeholder="Describe the property in detail…" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500 h-32" required />
//             </div>
//           </div>
//         </motion.div>

//         {/* Media Upload */}
//         <motion.div variants={itemVariants} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
//           <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2"><FaImage className="text-cyan-600" /> Media</h3>
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-2">Images</label>
//               <div className="flex flex-wrap gap-4">
//                 {images.map((img, index) => (
//                   <div key={index} className="relative">
//                     <img src={img} alt="upload" className="h-24 w-24 rounded-xl object-cover" />
//                     <button onClick={() => removeImage(index)} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"><FaTrash /></button>
//                   </div>
//                 ))}
//                 <label className="h-24 w-24 rounded-xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center cursor-pointer hover:border-cyan-500 transition">
//                   <FaUpload className="text-slate-400" />
//                   <span className="text-xs text-slate-500 mt-1">Upload</span>
//                   <input type="file" multiple accept="image/*" onChange={handleImageUpload} className="hidden" />
//                 </label>
//               </div>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-2">Video URL (YouTube/Vimeo)</label>
//               <div className="flex items-center gap-3">
//                 <FaVideo className="text-slate-400" />
//                 <input name="videoUrl" value={form.videoUrl} onChange={handleChange} placeholder="https://youtube.com/..." className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500" />
//               </div>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-2">Virtual Tour URL</label>
//               <input name="virtualTour" value={form.virtualTour} onChange={handleChange} placeholder="https://..." className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500" />
//             </div>
//           </div>
//         </motion.div>

//         {/* Location Coordinates */}
//         <motion.div variants={itemVariants} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
//           <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2"><FaMapPin className="text-cyan-600" /> Location Coordinates</h3>
//           <div className="grid gap-4 md:grid-cols-2">
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-1">Latitude</label>
//               <input name="latitude" value={form.latitude} onChange={handleChange} placeholder="34.0736" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500" />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-1">Longitude</label>
//               <input name="longitude" value={form.longitude} onChange={handleChange} placeholder="-118.4004" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500" />
//             </div>
//           </div>
//         </motion.div>

//         {/* Features & Why Choose */}
//         <motion.div variants={itemVariants} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
//           <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2"><FaStar className="text-cyan-600" /> Features & Why Choose</h3>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-slate-700 mb-2">Features (e.g., Pool, Gym)</label>
//             <div className="flex gap-2 mb-3">
//               <input value={newFeature} onChange={(e) => setNewFeature(e.target.value)} placeholder="Add a feature" className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500" />
//               <button type="button" onClick={addFeature} className="rounded-2xl bg-cyan-500 px-4 py-2 text-white font-semibold hover:bg-cyan-600 transition"><FaPlus /></button>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {form.features.map((feat, index) => (
//                 <span key={index} className="inline-flex items-center gap-2 rounded-full bg-cyan-100 px-3 py-1 text-sm text-cyan-700">
//                   {feat}
//                   <button onClick={() => removeFeature(index)} className="text-red-500 hover:text-red-700"><FaTrash size={12} /></button>
//                 </span>
//               ))}
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-slate-700 mb-2">Why Choose This Property?</label>
//             <textarea name="whyChoose" value={form.whyChoose} onChange={handleChange} placeholder="Unique selling points..." className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500 h-24" />
//           </div>
//         </motion.div>

//         {/* Agent / Contact */}
//         <motion.div variants={itemVariants} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
//           <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2"><FaUser className="text-cyan-600" /> Agent / Contact Information</h3>
//           <div className="grid gap-4 md:grid-cols-3">
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-1">Agent Name</label>
//               <input name="agentName" value={form.agentName} onChange={handleChange} placeholder="Sarah Johnson" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500" />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
//               <input name="agentPhone" value={form.agentPhone} onChange={handleChange} placeholder="+1 (555) 123-4567" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500" />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
//               <input name="agentEmail" value={form.agentEmail} onChange={handleChange} type="email" placeholder="agent@example.com" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500" />
//             </div>
//           </div>
//         </motion.div>

//         {/* Action Buttons */}
//         <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
//           <button type="submit" className="flex-1 rounded-2xl bg-cyan-500 px-6 py-4 font-bold text-white shadow-lg hover:bg-cyan-600 transition">
//             Publish Listing
//           </button>
//           <button type="button" className="flex-1 rounded-2xl border border-slate-200 bg-white px-6 py-4 font-bold text-slate-700 hover:bg-slate-50 transition">
//             Save as Draft
//           </button>
//         </motion.div>
//       </motion.form>
//     </DashboardSectionPage>
//   );
// };

// export default DashboardAddPropertyPage;
































import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DashboardSectionPage from '../../components/Dashboard/DashboardSectionPage';
import {
  FaBuilding,
  FaDollarSign,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaVideo,
  FaImage,
  FaUpload,
  FaCheckCircle,
  FaTrash,
  FaPlus,
  FaUser,
  FaCalendarAlt,
  FaCar,
  FaHome,
  FaMapPin,
  FaClipboardList,
  FaStar,
  FaTemperatureHigh,
  FaPaw,
  FaEye,
  FaLandmark,
  FaSun,
  FaSnowflake,
  FaPaintRoller,
} from 'react-icons/fa';

const DashboardAddPropertyPage = () => {
  const [form, setForm] = useState({
    title: '',
    price: '',
    location: '',
    buildingName: '',
    propertyType: 'residential',
    area: '',
    description: '',
    bedrooms: '',
    bathrooms: '',
    sqft: '',
    yearBuilt: '',
    lotSize: '',
    parking: '',
    furnished: 'no',
    features: [],
    whyChoose: '',
    agentName: '',
    agentPhone: '',
    agentEmail: '',
    videoUrl: '',
    latitude: '',
    longitude: '',
    status: 'draft',
    nearbyPlaces: '',
    heating: 'central',
    cooling: 'central',
    flooring: '',
    views: '',
    petPolicy: 'allowed',
    availabilityDate: '',
    virtualTour: '',
  });
  const [images, setImages] = useState([]);   // now stores File objects
  const [newFeature, setNewFeature] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addFeature = () => {
    if (newFeature.trim()) {
      setForm({ ...form, features: [...form.features, newFeature.trim()] });
      setNewFeature('');
    }
  };

  const removeFeature = (index) => {
    setForm({ ...form, features: form.features.filter((_, i) => i !== index) });
  };

  // Store actual File objects, not blob URLs
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(prev => [...prev, ...files]);
  };

  const removeImage = (index) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitted(false);

    const formData = new FormData();

    // Append all text fields (except features)
    Object.keys(form).forEach(key => {
      if (key === 'features') {
        formData.append(key, JSON.stringify(form[key]));
      } else {
        formData.append(key, form[key]);
      }
    });

    // Append image files
    images.forEach(file => {
      formData.append('images', file);
    });

    try {
      const response = await fetch('http://localhost:8000/api/properties', {
        method: 'POST',
        body: formData,   // no Content-Type header; browser sets it with boundary
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        // optionally reset form
      } else {
        setError(data.message || 'Failed to submit');
      }
    } catch (err) {
      console.error(err);
      setError('Server error. Please try again.');
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  if (submitted) {
    return (
      <DashboardSectionPage
        title="Property Added"
        subtitle="Your listing has been successfully submitted for review."
        actionLabel="Add Another"
      >
        <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <FaCheckCircle className="mx-auto text-6xl text-emerald-500 mb-4" />
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Property Submitted</h3>
          <p className="text-slate-600">Our team will review your listing within 24 hours.</p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-6 rounded-2xl bg-cyan-500 px-6 py-3 font-semibold text-white hover:bg-cyan-600 transition"
          >
            Add Another Property
          </button>
        </div>
      </DashboardSectionPage>
    );
  }

  return (
    <DashboardSectionPage
      title="Add Property"
      subtitle="Create a polished listing with photos, amenities, price, and agent details."
      actionLabel="Save Draft"
    >
      <motion.form
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        onSubmit={handleSubmit}
      >
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        {/* Basic Information */}
        <motion.div variants={itemVariants} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <FaBuilding className="text-cyan-600" /> Basic Information
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Property Title *</label>
              <input name="title" value={form.title} onChange={handleChange} placeholder="e.g., Modern Luxury Villa" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Price *</label>
              <input name="price" value={form.price} onChange={handleChange} placeholder="$500,000" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Location *</label>
              <input name="location" value={form.location} onChange={handleChange} placeholder="Address/City, State" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Building/Community Name</label>
              <input name="buildingName" value={form.buildingName} onChange={handleChange} placeholder="Sunset Towers" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Property Type *</label>
              <select name="propertyType" value={form.propertyType} onChange={handleChange} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500">
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="land">Land</option>
                <option value="multi-family">Multi-Family</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Status</label>
              <select name="status" value={form.status} onChange={handleChange} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500">
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Property Details */}
        <motion.div variants={itemVariants} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2"><FaHome className="text-cyan-600" /> Property Details</h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Bedrooms *</label>
              <input name="bedrooms" value={form.bedrooms} onChange={handleChange} type="number" placeholder="3" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Bathrooms *</label>
              <input name="bathrooms" value={form.bathrooms} onChange={handleChange} type="number" placeholder="2" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Square Footage</label>
              <input name="sqft" value={form.sqft} onChange={handleChange} placeholder="2000" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Year Built</label>
              <input name="yearBuilt" value={form.yearBuilt} onChange={handleChange} placeholder="2020" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Lot Size</label>
              <input name="lotSize" value={form.lotSize} onChange={handleChange} placeholder="0.5 acres" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Parking</label>
              <input name="parking" value={form.parking} onChange={handleChange} placeholder="2-car garage" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Furnished</label>
              <select name="furnished" value={form.furnished} onChange={handleChange} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500">
                <option value="no">No</option>
                <option value="semi">Semi-Furnished</option>
                <option value="fully">Fully Furnished</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Heating</label>
              <select name="heating" value={form.heating} onChange={handleChange} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500">
                <option value="central">Central</option>
                <option value="radiant">Radiant</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Cooling</label>
              <select name="cooling" value={form.cooling} onChange={handleChange} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500">
                <option value="central">Central</option>
                <option value="window">Window Unit</option>
                <option value="none">None</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Flooring</label>
              <input name="flooring" value={form.flooring} onChange={handleChange} placeholder="Hardwood, Tile" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Views</label>
              <input name="views" value={form.views} onChange={handleChange} placeholder="City, Garden" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Pet Policy</label>
              <select name="petPolicy" value={form.petPolicy} onChange={handleChange} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500">
                <option value="allowed">Allowed</option>
                <option value="not allowed">Not Allowed</option>
                <option value="conditional">Conditional</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Availability Date</label>
              <input name="availabilityDate" value={form.availabilityDate} onChange={handleChange} type="date" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
            <div className="md:col-span-3">
              <label className="block text-sm font-medium text-slate-700 mb-1">Nearby Places</label>
              <textarea name="nearbyPlaces" value={form.nearbyPlaces} onChange={handleChange} placeholder="Schools, parks, malls..." className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500 h-24" />
            </div>
            <div className="md:col-span-3">
              <label className="block text-sm font-medium text-slate-700 mb-1">Area Description</label>
              <textarea name="area" value={form.area} onChange={handleChange} placeholder="0.5 acres, near Central Park…" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500 h-24" />
            </div>
            <div className="md:col-span-3">
              <label className="block text-sm font-medium text-slate-700 mb-1">Full Description *</label>
              <textarea name="description" value={form.description} onChange={handleChange} placeholder="Describe the property in detail…" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500 h-32" required />
            </div>
          </div>
        </motion.div>

        {/* Media Upload */}
        <motion.div variants={itemVariants} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2"><FaImage className="text-cyan-600" /> Media</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Images</label>
              <div className="flex flex-wrap gap-4">
                {images.map((file, index) => (
                  <div key={index} className="relative">
                    <img
                      src={URL.createObjectURL(file)}
                      alt="upload"
                      className="h-24 w-24 rounded-xl object-cover"
                    />
                    <button onClick={() => removeImage(index)} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"><FaTrash /></button>
                  </div>
                ))}
                <label className="h-24 w-24 rounded-xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center cursor-pointer hover:border-cyan-500 transition">
                  <FaUpload className="text-slate-400" />
                  <span className="text-xs text-slate-500 mt-1">Upload</span>
                  <input type="file" multiple accept="image/*" onChange={handleImageUpload} className="hidden" />
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Video URL (YouTube/Vimeo)</label>
              <div className="flex items-center gap-3">
                <FaVideo className="text-slate-400" />
                <input name="videoUrl" value={form.videoUrl} onChange={handleChange} placeholder="https://youtube.com/..." className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Virtual Tour URL</label>
              <input name="virtualTour" value={form.virtualTour} onChange={handleChange} placeholder="https://..." className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
          </div>
        </motion.div>

        {/* Location Coordinates */}
        <motion.div variants={itemVariants} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2"><FaMapPin className="text-cyan-600" /> Location Coordinates</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Latitude</label>
              <input name="latitude" value={form.latitude} onChange={handleChange} placeholder="34.0736" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Longitude</label>
              <input name="longitude" value={form.longitude} onChange={handleChange} placeholder="-118.4004" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
          </div>
        </motion.div>

        {/* Features & Why Choose */}
        <motion.div variants={itemVariants} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2"><FaStar className="text-cyan-600" /> Features & Why Choose</h3>
          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-700 mb-2">Features (e.g., Pool, Gym)</label>
            <div className="flex gap-2 mb-3">
              <input value={newFeature} onChange={(e) => setNewFeature(e.target.value)} placeholder="Add a feature" className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500" />
              <button type="button" onClick={addFeature} className="rounded-2xl bg-cyan-500 px-4 py-2 text-white font-semibold hover:bg-cyan-600 transition"><FaPlus /></button>
            </div>
            <div className="flex flex-wrap gap-2">
              {form.features.map((feat, index) => (
                <span key={index} className="inline-flex items-center gap-2 rounded-full bg-cyan-100 px-3 py-1 text-sm text-cyan-700">
                  {feat}
                  <button onClick={() => removeFeature(index)} className="text-red-500 hover:text-red-700"><FaTrash size={12} /></button>
                </span>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Why Choose This Property?</label>
            <textarea name="whyChoose" value={form.whyChoose} onChange={handleChange} placeholder="Unique selling points..." className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500 h-24" />
          </div>
        </motion.div>

        {/* Agent / Contact */}
        <motion.div variants={itemVariants} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2"><FaUser className="text-cyan-600" /> Agent / Contact Information</h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Agent Name</label>
              <input name="agentName" value={form.agentName} onChange={handleChange} placeholder="Sarah Johnson" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
              <input name="agentPhone" value={form.agentPhone} onChange={handleChange} placeholder="+1 (555) 123-4567" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
              <input name="agentEmail" value={form.agentEmail} onChange={handleChange} type="email" placeholder="agent@example.com" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
          <button type="submit" className="flex-1 rounded-2xl bg-cyan-500 px-6 py-4 font-bold text-white shadow-lg hover:bg-cyan-600 transition">
            Publish Listing
          </button>
          <button type="button" className="flex-1 rounded-2xl border border-slate-200 bg-white px-6 py-4 font-bold text-slate-700 hover:bg-slate-50 transition">
            Save as Draft
          </button>
        </motion.div>
      </motion.form>
    </DashboardSectionPage>
  );
};

export default DashboardAddPropertyPage;