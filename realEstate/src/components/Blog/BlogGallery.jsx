import React from 'react';

const BlogGallery = ({ images = [], title }) => {
  if (!images.length) return null;

  return (
    <div className="mb-10 grid gap-4 md:grid-cols-3">
      {images.map((image, index) => (
        <div key={image} className="rounded-2xl overflow-hidden aspect-[4/3] border border-slate-200">
          <img src={`http://localhost:8000${image}`} alt={`${title} ${index + 1}`} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );
};

export default BlogGallery;
