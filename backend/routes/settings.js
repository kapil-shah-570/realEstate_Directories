const express = require('express');
const Setting = require('../models/Setting');

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const setting = await Setting.findOne().sort({ updatedAt: -1 });
    if (!setting) {
      return res.json(await Setting.create({}));
    }
    res.json(setting);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.put('/', async (req, res) => {
  try {
    const payload = {
      profileName: req.body.profileName,
      username: req.body.username,
      email: req.body.email,
      phone: req.body.phone,
      passwordHint: req.body.passwordHint,
      avatarUrl: req.body.avatarUrl,
      siteName: req.body.siteName,
      dashboardName: req.body.dashboardName,
      supportEmail: req.body.supportEmail,
      supportPhone: req.body.supportPhone,
      notificationsEnabled: req.body.notificationsEnabled === true || req.body.notificationsEnabled === 'true',
      emailAlertsEnabled: req.body.emailAlertsEnabled === true || req.body.emailAlertsEnabled === 'true',
      darkSidebarEnabled: req.body.darkSidebarEnabled === true || req.body.darkSidebarEnabled === 'true',
      searchIndexingEnabled: req.body.searchIndexingEnabled === true || req.body.searchIndexingEnabled === 'true',
      profilePublic: req.body.profilePublic === true || req.body.profilePublic === 'true',
      twoFactorEnabled: req.body.twoFactorEnabled === true || req.body.twoFactorEnabled === 'true',
      emailVisibility: req.body.emailVisibility === true || req.body.emailVisibility === 'true',
      phoneVisibility: req.body.phoneVisibility === true || req.body.phoneVisibility === 'true',
      allowMarketingEmails: req.body.allowMarketingEmails === true || req.body.allowMarketingEmails === 'true',
      allowContactMessages: req.body.allowContactMessages === true || req.body.allowContactMessages === 'true',
      updatedAt: new Date(),
    };

    const setting = await Setting.findOneAndUpdate({}, payload, {
      new: true,
      upsert: true,
      setDefaultsOnInsert: true,
    });

    res.json({ message: 'Settings saved', setting });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
