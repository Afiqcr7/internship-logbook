const express = require('express');
const router = express.Router();
const Log = require('../models/Log');
// Add a simple authentication middleware here in real production
router.post('/', async (req, res) => {
  try {
    const newLog = await Log.create(req.body);
    res.status(201).json(newLog);
  } catch (err) { res.status(400).json({ error: err.message }); }
});

router.get('/:studentId', async (req, res) => {
  try {
    const logs = await Log.find({ studentId: req.params.studentId });
    res.json(logs);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

module.exports = router;