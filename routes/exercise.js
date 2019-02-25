const express = require('express'),
      router = express.Router(),
      bodyParser = require('body-parser'),
      { User } = require('./../models/User'),
      { Exercise } = require('./../models/Exercise');

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

router.post('/new-user', (req, res) => {
  const user = new User({ username: req.body.username });
  User.find()
  user.save().then(() => res.status(200).json(user), (e) => res.status(400).json({ error: e }));
});

router.get('/users', (req, res) => {
  User.find().then((users) => res.json(users), (e) => res.status(400).json({ error: e }));
});

router.post('/add', (req, res) => res.send('add exercise'));

module.exports = router;