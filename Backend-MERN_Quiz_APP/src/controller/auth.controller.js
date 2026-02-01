const express = require('express');
const router = express.Router();
const User = require("../model/auth.model.js");

const ADMIN_EMAIL = "admin@example.com";  
const ADMIN_PASSWORD = "admin123";  

// ----------------- Login route for admin and users -----------------
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if admin
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      return res.json({ message: "Login Successfully", user: { name: "Admin", email } });
    }

    // Check for regular user
    const user = await User.findOne({ email }).lean().exec();
    if (!user) return res.status(404).json({ message: "User Not Registered" });
    if (password !== user.password) return res.status(401).json({ message: "Invalid Password" });

    return res.json({ message: "Login Successfully", user });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server Error" });
  }
});

// ----------------- Register route -----------------
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email }).lean().exec();
    if (existingUser) return res.status(400).json({ message: "User Already Registered" });

    const user = new User({ name, email, password });
    await user.save();
    return res.json({ message: "Successfully Registered" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server Error" });
  }
});

// ----------------- Get all users (admin) -----------------
router.get('/getuser', async (req, res) => {
  try {
    const users = await User.find({}).lean().exec();
    return res.json(users);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server Error" });
  }
});

// ----------------- Delete user by ID (admin) -----------------
router.delete('/:id', async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    return res.json({ message: "User Deleted Successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "An Error Occurred" });
  }
});

module.exports = router;
