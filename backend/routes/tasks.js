const express = require('express');
const Task = require('../models/Task');
const auth = require('../middleware/auth');
const router = express.Router();

// GET /tasks
router.get('/', auth, async (req, res) => {
  const tasks = await Task.find({ user: req.userId });
  res.json(tasks);
});

// POST /tasks
router.post('/', auth, async (req, res) => {
  const { title } = req.body;
  const task = await Task.create({ user: req.userId, title });
  res.status(201).json(task);
});

// PUT /tasks/:id
router.put('/:id', auth, async (req, res) => {
  const { title, completed } = req.body;
  const task = await Task.findOneAndUpdate(
    { _id: req.params.id, user: req.userId },
    { title, completed },
    { new: true }
  );
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json(task);
});

// DELETE /tasks/:id
router.delete('/:id', auth, async (req, res) => {
  const task = await Task.findOneAndDelete({ _id: req.params.id, user: req.userId });
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json({ success: true });
});

module.exports = router;
