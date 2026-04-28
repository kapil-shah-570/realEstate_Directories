const express = require('express');
const multer = require('multer');
const path = require('path');
const Property = require('../models/Property');

const router = express.Router();

// ---------- Multer storage ----------
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/properties');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: function (req, file, cb) {
    const ext = path.extname(file.originalname).toLowerCase();
    if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png' && ext !== '.webp') {
      return cb(new Error('Only image files are allowed'));
    }
    cb(null, true);
  }
});

// ---------- Create Property ----------
router.post('/', upload.array('images', 15), async (req, res) => {
  try {
    const formData = { ...req.body };

    if (typeof formData.features === 'string') {
      try {
        formData.features = JSON.parse(formData.features);
      } catch (parseError) {
        formData.features = [];
      }
    }

    const imagePaths = Array.isArray(req.files)
      ? req.files.map(file => `/uploads/properties/${file.filename}`)
      : [];

    const toNumber = (value) => {
      if (value === '' || value === undefined || value === null) return undefined;
      const number = Number(value);
      return Number.isNaN(number) ? undefined : number;
    };

    const property = new Property({
      ...formData,
      bedrooms: toNumber(formData.bedrooms),
      bathrooms: toNumber(formData.bathrooms),
      yearBuilt: toNumber(formData.yearBuilt),
      latitude: toNumber(formData.latitude),
      longitude: toNumber(formData.longitude),
      images: imagePaths,
    });

    await property.save();
    res.status(201).json({ message: 'Property created successfully', property });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// ---------- Get all properties ----------
router.get('/', async (req, res) => {
  try {
    const properties = await Property.find().sort({ createdAt: -1 });
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// ---------- Get single property ----------
router.get('/:id', async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.json(property);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const property = await Property.findByIdAndDelete(req.params.id);
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.json({ message: 'Property deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/:id/like', async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }

    property.likesCount = (property.likesCount || 0) + 1;
    await property.save();
    res.json({ message: 'Property liked', likesCount: property.likesCount });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/:id/comments', async (req, res) => {
  try {
    const { name, message } = req.body;
    if (!name || !message) {
      return res.status(400).json({ message: 'Name and message are required' });
    }

    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }

    property.comments = property.comments || [];
    property.comments.unshift({ name, message });
    await property.save();

    res.status(201).json({ message: 'Comment added', comments: property.comments });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
