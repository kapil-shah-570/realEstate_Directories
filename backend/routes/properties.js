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
    const formData = req.body;

    if (typeof formData.features === 'string') {
      formData.features = JSON.parse(formData.features);
    }

    const imagePaths = req.files.map(file => `/uploads/properties/${file.filename}`);

    const property = new Property({
      ...formData,
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

module.exports = router;