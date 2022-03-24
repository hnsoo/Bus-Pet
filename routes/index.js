const express = require('express'); 
const path = require('path');
const router = express.Router(); 

router.get('/', (req, res) => { 
    res.sendFile(path.join(__dirname, '../src/html', 'index.html'));
}); 

router.get('/:route', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/html', 'bus.html'))
});

module.exports = router;