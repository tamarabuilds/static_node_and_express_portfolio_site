// Variables to access necessary dependencies
const express = require('express');
const data = require('./data.json');
const path = require('path');
const app = express();                              // Assume i need this?
const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
const projectRouter = require('./routes/project');

/**
 * Middleware to set up:
 * (1) the pug view engine and 
 * (2) the express static method to serve the static files in the 'public' folder
 */
app.set('view engine', 'pug');2
app.use('/static', express.static('public'));

/**
 * Routes:
 * (1) Index route to render the 'Home' page with the locals set to data.projects
 * (2) About route to render the 'About' page
 * (3) Dynamic 'project' route based on the id of the project to render
 */
app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/project', projectRouter);

app.use('/', (req, res, next) => {
    console.log('one')
});


/**
 * Starting up the server, listening on port 3000
 */
app.listen(3000, () => {
    console.log(`The application is running on localhost:3000`)
});