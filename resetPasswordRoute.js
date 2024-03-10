const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/resetpassword', async (req, res) => {
  const { randomString, newPassword } = req.body;

  try {
    const user = await User.findOne({ resetPasswordToken: randomString });

    if (!user) {
      return res.status(404).json({ message: 'Invalid reset password link' });
    }

    user.password = newPassword;
    user.resetPasswordToken = '';
    await user.save();

    res.status(200).json({ message: 'Password reset successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
