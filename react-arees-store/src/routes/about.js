const express = require('express');
const router = express.Router();

router.get('/about', (req, res) => {
  res.send('Learn more about our arees store.');
});

module.exports = router;