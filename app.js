// Import Express and set up the app
const express = require('express');
const data = require('./data.json');
const app = express();
const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
const projectRouter = require('./routes/project');

/**
 * Middleware to set up:
 * (1) the pug view engine and 
 * (2) the express static method to serve the static files in the 'public' folder
 */
app.set('view engine', 'pug');
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



/**
 * If user navigates to a non-existening route, the app will catch the 404 error and display nice message
 */
app.use((req, res, next) => {
    console.log(`404 error handler called`);
    const err = new Error('err');
    err.status = 404;
    err.message = `Hey there! This page isn't available but at least this friendly message is :)`;
    // res.status = 404; NOT WORKING WITH RES
    // res.status(404)
    console.log(err);
    res.render('page-not-found', { err })
});

/**
 * Gloabl error handler to manage any server errors
 */
app.use((err, req, res, next) => {
    // confirm there's an error
    if (err){
        console.log(`Global error handler called`);
        res.locals.message = err.message;               /// need?
    }
    // check for 404 error, if so, render page-not-found
    // WHY DO WE NEED THIS EXTRA IF?????
    if (err.status === 404) {
        res.status(404);
        res.render('page-not-found', { err })
    } else {
        err.message = err.message || `Err, sorry something happened`;
        err.status = err.status || 500;
        console.log(err);
        res.render('error', { err });
    };
});


/**
 * Starting up the server, listening on port 3000
 */
app.listen(3000, () => {
    console.log(`The application is running on localhost:3000`)
});