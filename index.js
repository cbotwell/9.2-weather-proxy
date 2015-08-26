var express = require('express');
var request = require('request');
var cors = require('cors');
var app = express();

app.use(cors());

app.get('/*', function (req, res) {
  var path = req.originalUrl;
  request('https://api.forecast.io/forecast/e6d432481e70817b3c889d2a2b758cdb' + path).pipe(res);
});

app.listen(process.env.PORT || 3000);
