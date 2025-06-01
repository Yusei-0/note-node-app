const express = require('express');
const router = express.Router();

// Define a GET route for /
router.get('/', (req, res) => {
  res.render('home', { title: 'Home' }); // New, if layout uses title
});

router.get('/login', (req, res) => {
  res.render('login', { title: 'Login' }); // Pass title if your layout uses it
});

router.get('/notes/new', (req, res) => {
  res.render('create-note', { title: 'Create New Note' }); // Pass title
});

module.exports = router;
