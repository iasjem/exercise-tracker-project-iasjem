const express = require('express'),
      router = express.Router();

router.post('/new-user', (req, res) => res.send('new user'));
router.post('/add', (req, res) => res.send('add exercise'));

module.exports = router;