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


module.exports = router;