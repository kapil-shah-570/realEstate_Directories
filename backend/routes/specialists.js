const express = require('express');
const multer = require('multer');
const path = require('path');
const Specialist = require('../models/Specialist');

const router = express.Router();

const makeSlug = (value) =>
  value.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/specialists');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: function (req, file, cb) {
    const ext = path.extname(file.originalname).toLowerCase();
    if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png' && ext !== '.webp') {
      return cb(new Error('Only image files are allowed'));
    }
    cb(null, true);
  }
});

router.post('/', upload.array('images', 12), async (req, res) => {
  try {
    const payload = { ...req.body };
    payload.slug = payload.slug ? makeSlug(payload.slug) : makeSlug(payload.name);
    payload.specialties = typeof payload.specialties === 'string'
      ? payload.specialties.split(',').map((item) => item.trim()).filter(Boolean)
      : [];
    payload.languages = typeof payload.languages === 'string'
      ? payload.languages.split(',').map((item) => item.trim()).filter(Boolean)
      : [];
    payload.previousProjects = typeof payload.previousProjects === 'string'
      ? payload.previousProjects.split(',').map((item) => item.trim()).filter(Boolean)
      : [];
    payload.blogPosts = typeof payload.blogPosts === 'string'
      ? payload.blogPosts.split(',').map((item) => item.trim()).filter(Boolean)
      : [];
    payload.recentSales = typeof payload.recentSales === 'string'
      ? payload.recentSales.split(',').map((item) => item.trim()).filter(Boolean)
      : [];
    payload.totalSales = payload.totalSales ? Number(payload.totalSales) : 0;
    payload.propertiesSold = payload.propertiesSold ? Number(payload.propertiesSold) : 0;
    payload.activeListings = payload.activeListings ? Number(payload.activeListings) : 0;
    payload.propertyUploads = payload.propertyUploads ? Number(payload.propertyUploads) : 0;
    payload.blogUploads = payload.blogUploads ? Number(payload.blogUploads) : 0;
    const imagePaths = Array.isArray(req.files)
      ? req.files.map((file) => `/uploads/specialists/${file.filename}`)
      : [];
    payload.images = imagePaths;
    payload.image = imagePaths[0] || payload.image;

    const specialist = await Specialist.create(payload);
    res.status(201).json({ message: 'Specialist saved successfully', specialist });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const specialists = await Specialist.find().sort({ featured: -1, createdAt: -1 });
    res.json(specialists);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/:slug', async (req, res) => {
  try {
    const specialist = await Specialist.findOne({ slug: req.params.slug });
    if (!specialist) return res.status(404).json({ message: 'Specialist not found' });
    res.json(specialist);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.patch('/:slug', async (req, res) => {
  try {
    const specialist = await Specialist.findOne({ slug: req.params.slug });
    if (!specialist) return res.status(404).json({ message: 'Specialist not found' });

    const payload = { ...req.body };
    const appendArray = (existing, incoming) => {
      if (!incoming) return existing;
      const items = typeof incoming === 'string'
        ? incoming.split(',').map((item) => item.trim()).filter(Boolean)
        : Array.isArray(incoming) ? incoming : [];
      return [...existing, ...items];
    };

    specialist.previousProjects = appendArray(specialist.previousProjects || [], payload.previousProjects);
    specialist.blogPosts = appendArray(specialist.blogPosts || [], payload.blogPosts);
    specialist.recentSales = appendArray(specialist.recentSales || [], payload.recentSales);
    specialist.totalSales = payload.totalSales ? Number(payload.totalSales) : specialist.totalSales;
    specialist.propertiesSold = payload.propertiesSold ? Number(payload.propertiesSold) : specialist.propertiesSold;
    specialist.activeListings = payload.activeListings ? Number(payload.activeListings) : specialist.activeListings;
    specialist.propertyUploads = payload.propertyUploads ? Number(payload.propertyUploads) : specialist.propertyUploads;
    specialist.blogUploads = payload.blogUploads ? Number(payload.blogUploads) : specialist.blogUploads;
    if (Array.isArray(payload.images) && payload.images.length > 0) {
      specialist.images = [...(specialist.images || []), ...payload.images];
      specialist.image = specialist.images[0] || specialist.image;
    }
    specialist.featured = typeof payload.featured === 'boolean' ? payload.featured : specialist.featured;
    specialist.updatedAt = new Date();

    await specialist.save();
    res.json({ message: 'Specialist updated successfully', specialist });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
