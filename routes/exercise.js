const express = require('express'),
      router = express.Router(),
      bodyParser = require('body-parser'),
      { User } = require('./../models/User'),
      { Exercise } = require('./../models/Exercise');

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

router.post('/new-user', (req, res) => {
  const user = new User({ username: req.body.username });
  res.send(user);
});
router.post('/add', (req, res) => res.send('add exercise'));

module.exports = router;