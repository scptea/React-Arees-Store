const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  // Process form data (for now, just logging it)
  const formData = req.body;
  console.log('Form Data:', formData);

  // Redirect to the confirmation page
  res.redirect('/confirmation.html');
});

module.exports = router;
