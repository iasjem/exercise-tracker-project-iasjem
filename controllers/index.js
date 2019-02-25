const express = require('express'),
      router = express.Router();

module.exports = app => {
  router.use('/api/exercise', require('./exercise.js'));
  router.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'));
};