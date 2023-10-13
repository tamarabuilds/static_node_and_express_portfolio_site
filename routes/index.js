console.log(`start index.js file`)
const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

// GET home page
router.get('/', (req, res, next) => {
    console.log(`inside index.js`);
    // rendering the index page and passing it all the project data
    res.render('index', { projects });
});


// GET project page
router.get(`/project/:id`, (req, res, next) => {
    const projectID = req.params.id;
    const project = projects.find( ({id}) => id === +projectID );

    if (project){
        // pass project data to project template
        res.render('project', { project });
    } else {
        // set the status code to 404
        res.sendStatus(404);
    }

} )

// Custom error route for testing
router.get('/error', (req, res, next) => {
    // Log that this function has started
    console.log(`Custom error route called`);

    const err = new Error('err');
    err.message = 'Custom 500 error thrown here';
    err.status = 500;
    throw err;
});



module.exports = router;