const express = require('express'),
      router = express.Router(),
      bodyParser = require('body-parser'),
      { User } = require('./../models/User'),
      { Exercise } = require('./../models/Exercise');

// const middleware = (req, res, next) => {
//   const user = new User({ username: req.body.username });
//   const doUserExist = User.findOne({ username: user.username }).then((userID) => {
//     if(userID.username === user.username) {
    
//     }
//       return res.json({ error: "Username has already been taken!" });
//     return user;
//   });
// };

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

router.get('/users', (req, res) => {
  User.find().then((users) => res.json(users), (e) => res.status(400).json({ error: e }));
});

router.post('/new-user', (req, res) => {
  const user = new User({ username: req.body.username });
  User.findOne({ username: user.username }).then((userID) => {
      if(userID.username === user.username) {
        res.json({ error: "Username has already been taken!" });
      }
  });
});

router.post('/add', (req, res) => res.send('add exercise'));

module.exports = router;