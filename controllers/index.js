const express = require('express'),
      router = express.Router();

router.use('/api/exercise', require('./exercise.js'));
router.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'));

module.exports = router;