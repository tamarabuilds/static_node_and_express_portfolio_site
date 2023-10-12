console.log(`start project.js file`)
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log(`inside project.js`);
    res.render('project');
});



module.exports = router;