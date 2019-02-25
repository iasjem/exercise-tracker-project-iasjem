const mongo = require('mongodb'),
      mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }, (err, db) => {
  if(err) console.log('Error', err);
  else console.log('Now connected to MongoDB');
});