const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User, Volunteer, Organization } = require('../models');
require('dotenv').config();

exports.register = async (req, res) => {
  const { name, email, phone, password, role } = req.body;
  console.log('Registering user:', { name, email, phone, role });
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword, role });

    if (role === 'volunteer') {
      await Volunteer.create({ userId: user.id, phone });
    } else if (role === 'organization') {
      await Organization.create({ userId: user.id });
    }

    res.status(201).json({ success: true, message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error.message);
    res.status(400).json({ success: false, error: error.message });
  }
};


exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(401).json({ message: 'Invalid password' });

    const token = jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ success: true, token, role: user.role });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  
};
