console.log(`start about.js file`)
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log(`inside about.js`);
    res.render('about');
});


router.get('/', (req, res, next) => {
    console.log(`inside about.js`);
    res.render('about');
});


router.get('/error', (req, res, next) => {
    console.log(`Custom error route called`);

    const err = new Error();
    err.message = 'Custom 500 error thrown here';
    err.status = 500;
    throw err;
});


module.exports = router;