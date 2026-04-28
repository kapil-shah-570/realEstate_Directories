const express = require('express');
const multer = require('multer');
const path = require('path');
const Blog = require('../models/Blog');

const router = express.Router();

const makeSlug = (value) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/blogs');
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
    payload.tags = typeof payload.tags === 'string'
      ? payload.tags.split(',').map((tag) => tag.trim()).filter(Boolean)
      : [];
    payload.highlights = typeof payload.highlights === 'string'
      ? payload.highlights.split(',').map((item) => item.trim()).filter(Boolean)
      : [];
    payload.sections = typeof payload.sections === 'string' ? JSON.parse(payload.sections || '[]') : [];
    payload.stats = typeof payload.stats === 'string' ? JSON.parse(payload.stats || '[]') : [];
    payload.slug = payload.slug ? makeSlug(payload.slug) : makeSlug(payload.title);
    payload.images = Array.isArray(req.files)
      ? req.files.map((file) => `/uploads/blogs/${file.filename}`)
      : [];
    payload.coverImage = payload.images[0] || payload.coverImage;

    const exists = await Blog.findOne({ slug: payload.slug });
    if (exists) {
      return res.status(409).json({ message: 'A blog with this slug already exists' });
    }

    const blog = await Blog.create(payload);
    res.status(201).json({ message: 'Blog created successfully', blog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/:slug', async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
