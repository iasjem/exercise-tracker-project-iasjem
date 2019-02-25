const mongoose = require('mongoose');

const Exercise = mongoose.model('Exercise', mongoose.Schema({
  "username": {
    type: String,
    require: true
  },
  "description": {
    type: String,
    require: true
  },
  duration: {
    type: Number,
    require: true
  },
  date: {
    type: Date,
    default: new Date()
  }
}));

module.exports = { Exercise };