const express = require('express');
const router = express.Router();

// Define a GET route for /
router.get('/', (req, res) => {
  res.render('home');
});

module.exports = router;
