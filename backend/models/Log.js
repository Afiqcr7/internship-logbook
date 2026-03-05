const mongoose = require('mongoose');
const logSchema = new mongoose.Schema({
  studentId: { type: String, required: true },
  date: Date,
  company: String,
  taskDescription: String,
  skillsUsed: [String]
});
module.exports = mongoose.model('Log', logSchema);