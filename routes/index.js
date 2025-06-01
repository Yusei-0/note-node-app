const express = require('express');
const router = express.Router();

// Define a GET route for /
router.get('/', (req, res) => {
  res.render('home', { title: 'Minimal Home' }); // Pass a title
});

/*
// Comment out other routes for now
router.get('/login', (req, res) => {
  res.render('login', { title: 'Login' });
});

router.get('/notes/new', (req, res) => {
  res.render('create-note', { title: 'Create New Note' });
});
*/

module.exports = router;
