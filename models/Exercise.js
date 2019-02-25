const mongoose = require('mongoose');

mongoose.model('Exercise', mongoose.Schema({
  "_id": String,
  "description": String,
  duration: {
    type: 
  },
  date: {
    type: Date,
    default: new Date()
  }
}));