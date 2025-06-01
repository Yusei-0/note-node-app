const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', {
    title: 'Home - Notes App', // Updated title
    layout: 'layouts/main'
  });
});

router.get('/login', (req, res) => {
  res.render('login', { // Will render login.hbs
    title: 'Login - Notes App',
    layout: 'layouts/main'
  });
});

router.get('/notes/new', (req, res) => {
  res.render('create-note', { // Will render create-note.hbs
    title: 'Create New Note - Notes App',
    layout: 'layouts/main'
  });
});

module.exports = router;
