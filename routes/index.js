console.log(`start index.js file`)
const express = require('express');
const router = express.Router();
const { data } = require('../data.json');

router.get('/', (req, res, next) => {
    console.log(`inside index.js`);
    res.render('index');
});



module.exports = router;