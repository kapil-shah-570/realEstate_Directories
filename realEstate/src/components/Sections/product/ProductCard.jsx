// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaBed, FaBath, FaRulerCombined, FaHeart, FaMapMarkerAlt } from 'react-icons/fa';

// const ProductCard = ({ product, isFavorite, onToggleFavorite, onSelect }) => {
//   return (
//     <motion.div
//       className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col"
//       variants={{
//         hidden: { opacity: 0, y: 30 },
//         visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
//       }}
//       whileHover={{ y: -5 }}
//     >
//       <div className="relative h-56 w-full overflow-hidden">
//         <img
//           src={product.image}
//           alt={product.title}
//           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//         />
//         <div className="absolute top-3 right-3 flex gap-2">
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               onToggleFavorite(product.id);
//             }}
//             className={`w-8 h-8 rounded-full bg-white/90 flex items-center justify-center ${
//               isFavorite ? 'text-red-500' : 'text-gray-600'
//             } hover:scale-110 transition-transform`}
//           >
//             <FaHeart />
//           </button>
//         </div>
//         <div className="absolute bottom-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
//           {product.status}
//         </div>
//       </div>

//       <div className="p-5 flex-1 flex flex-col" onClick={onSelect}>
//         <h3 className="text-lg font-bold text-gray-900 mb-1">{product.title}</h3>
//         <p className="text-gray-500 text-sm flex items-center gap-1 mb-3">
//           <FaMapMarkerAlt className="text-blue-500" /> {product.location}
//         </p>
//         <p className="text-2xl font-bold text-blue-600 mb-3">{product.price}</p>
//         <div className="flex justify-between text-sm text-gray-600 mb-4">
//           <span className="flex items-center gap-1"><FaBed /> {product.bedrooms}</span>
//           <span className="flex items-center gap-1"><FaBath /> {product.bathrooms}</span>
//           <span className="flex items-center gap-1"><FaRulerCombined /> {product.sqft}</span>
//         </div>
//         <div className="flex flex-wrap gap-2 mt-auto">
//           {product.features.slice(0, 3).map((feat, i) => (
//             <span key={i} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md">
//               {feat}
//             </span>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default ProductCard;





























import React from 'react';
import { motion } from 'framer-motion';
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <Link to={`/products/${product.id}`} className="block h-full">
    <motion.div
      className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200 flex flex-col h-full"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
      }}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-52 w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute bottom-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
          {product.status}
        </span>
        {product.featured && (
          <span className="absolute top-3 right-3 bg-amber-400 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            ⭐ Featured
          </span>
        )}
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{product.title}</h3>
        <p className="text-gray-600 text-sm flex items-center gap-1 mb-2">
          <FaMapMarkerAlt className="text-blue-500" /> {product.location}
        </p>
        <p className="text-2xl font-extrabold text-blue-600 mb-3">{product.price}</p>
        <div className="flex justify-between text-sm text-gray-700 mb-4">
          <span className="flex items-center gap-1"><FaBed /> {product.bedrooms}</span>
          <span className="flex items-center gap-1"><FaBath /> {product.bathrooms}</span>
          <span className="flex items-center gap-1"><FaRulerCombined /> {product.sqft}</span>
        </div>
        <div className="mt-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors">
          View Details →
        </div>
      </div>
    </motion.div>
  </Link>
);

export default ProductCard;