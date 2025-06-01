const express = require('express');
const path = require('path');
const hbs = require('hbs'); // Using hbs
const indexRouter = require('./routes/index');

const app = express();

// View engine setup
app.set('view engine', 'hbs'); // Set view engine to hbs
app.set('views', path.join(__dirname, 'views')); // Standard views directory

// Register partials directory (can be used for layouts with hbs)
hbs.registerPartials(path.join(__dirname, 'views/layouts'));
// If you have other partials (like headers, footers not as full layouts)
// hbs.registerPartials(path.join(__dirname, 'views/partials'));


// Minimal route
app.use('/', indexRouter);

// Basic error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke! (hbs setup)');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Minimal server (hbs) running on port ${PORT}`);
});
