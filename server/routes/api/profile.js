const express = require('express');
const router = express.Router();

// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
router.get('/test', (req, res) => {
  res.json({ msg: 'PROFILE TEST' })
})

module.exports = router;
