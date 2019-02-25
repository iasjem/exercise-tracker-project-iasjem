const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      cors = require('cors');

require('./db/db');

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'));
app.use('/api/exercise', require('./exercise.js'));

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
});
