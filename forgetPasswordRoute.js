const express = require('express');
const router = express.Router();
const User = require('../models/User');
const nodemailer = require('nodemailer');

router.post('/forgetpassword', async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const randomString = generateRandomString();
    user.resetPasswordToken = randomString;
    await user.save();

    await sendEmail(user.email, randomString);

    res.status(200).json({ message: 'Reset password link sent successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

function generateRandomString() {
}

async function sendEmail(email, randomString) {
}

module.exports = router;
