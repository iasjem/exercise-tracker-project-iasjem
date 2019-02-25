const mongoose = require('mongoose');

const User = mongoose.model('User', mongoose.Schema({
    username: {
      type: String,
      require: true
    }
}));

module.exports = { User };