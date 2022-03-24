const express = require('express'); 
const path = require('path');
const router = express.Router(); 

router.get('/', (req, res) => { 
    res.render('index')
}); 

router.get('/:route', (req, res) => {
    res.render('bus')
});

module.exports = router;