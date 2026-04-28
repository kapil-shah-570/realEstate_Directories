const express = require('express');
const ContactInquiry = require('../models/ContactInquiry');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const inquiry = await ContactInquiry.create(req.body);
    res.status(201).json({ message: 'Inquiry saved successfully', inquiry });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const inquiries = await ContactInquiry.find().sort({ createdAt: -1 });
    res.json(inquiries);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
