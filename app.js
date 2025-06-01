const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.use(expressLayouts);

// Set the views directory
app.set('views', './views');

// Middleware for parsing URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Middleware for parsing JSON data
app.use(express.json());

// Middleware for serving static files
app.use(express.static('public'));

// Routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Start the server (Add a basic listener for now)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
