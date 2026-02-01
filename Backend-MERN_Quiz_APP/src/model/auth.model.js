const mongoose = require('mongoose');

// Sub-schema for attempted quizzes
const quizAttemptedSchema = new mongoose.Schema({
  quizId: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz" }, // Ref should likely be "Quiz", not "User"
  score: { type: Number, default: 0 },
  quizResult: { type: Array, default: [] },
  date: { type: Date, default: Date.now },
});

// Main User schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  Points: { type: Number, default: 0 },
  quizAttempted: [quizAttemptedSchema],
});

// Create and export User model
const User = mongoose.model('User', userSchema);

module.exports = User;
