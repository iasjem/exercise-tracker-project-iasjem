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
  User.findOne({ username: user.username }).then((username) => {
      if(username) return res.json({ error: "Username has already been taken!" });
      return user.save().then(() => res.json(user), (e) => res.status(400).json({ error: e }));
  });
});

router.post('/add', (req, res) => {
  const exercise = new Exercise({ username: req.body.userId, description: req.body.description, duration: req.body.duration, date: new Date(req.body.date)});
  User.findOne({ username: exercise.username }).then((username) => {
    if (!username) return res.json({ error: "Username does not exist!" });
    return exercise.save().then(() => res.json(exercise), (e) => res.status(400).json({ error: e }));
  }, (e) => res.status(400).json({ error: e }));
});

router.get('/log/:username', (req, res) => {
  const username = req.body.username;
  Exercise.find({ username: username }).then((exercise) => {
    res.json(exercise);
  });
});

module.exports = router;