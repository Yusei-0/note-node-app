const express = require('express');
const path = require('path'); // Keep path for robust views path
const expressLayouts = require('express-ejs-layouts');
const indexRouter = require('./routes/index'); // Keep router for the single route

const app = express();

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Express EJS Layouts setup
app.use(expressLayouts);
app.set('layout', 'layouts/main'); // Keep default layout setting

// Minimal route
app.use('/', indexRouter);

// Basic error handler (optional, but good for debugging)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server (keep this)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Minimal server running on port ${PORT}`);
});
