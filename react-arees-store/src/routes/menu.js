const express = require('express');
const router = express.Router();

router.get('/menu', (req, res) => {
  res.send('View our coffee machines.');
});

module.exports = router;