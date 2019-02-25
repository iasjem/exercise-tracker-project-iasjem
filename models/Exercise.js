const mongoose = require('mongoose');

const Exercise = mongoose.model('Exercise', mongoose.Schema({
  "_id": {
    type: String,
    require: true
  },
  "description": String,
  duration: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: new Date()
  }
}));

module.exports = { Exercise };