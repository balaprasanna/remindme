const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// In-memory store (per-session, reminders are also saved in client localStorage)
let reminders = [];

// API Routes
app.get('/api/reminders', (req, res) => {
  res.json(reminders);
});

app.post('/api/reminders', (req, res) => {
  const { id, task, frequencyMinutes, enabled } = req.body;
  const reminder = {
    id: id || Date.now().toString(),
    task,
    frequencyMinutes,
    enabled: enabled !== false,
    createdAt: new Date().toISOString()
  };
  reminders.push(reminder);
  res.status(201).json(reminder);
});

app.put('/api/reminders/:id', (req, res) => {
  const idx = reminders.findIndex(r => r.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  reminders[idx] = { ...reminders[idx], ...req.body };
  res.json(reminders[idx]);
});

app.delete('/api/reminders/:id', (req, res) => {
  reminders = reminders.filter(r => r.id !== req.params.id);
  res.json({ success: true });
});

// Sync endpoint - client sends its full state
app.post('/api/sync', (req, res) => {
  reminders = req.body.reminders || [];
  res.json({ success: true });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🔔 RemindMe running on port ${PORT}`);
});
