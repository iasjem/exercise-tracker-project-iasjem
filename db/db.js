const mongo = require('mongodb'),
      mongoose = require('mongooose');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGO_URI, { 
  useNewUrlParser: true,
  keepAlive: true,
  reconnectT
});