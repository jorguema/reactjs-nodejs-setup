var express = require('express');
var app = express();
var path = require('path');
var engines = require('consolidate');

app.use(express.static(path.join(__dirname, '/server/views')));
app.use('/public', express.static((path.join(__dirname, '/public'))));

app.engine('html', engines.mustache);


app.get('/', function (req, res) {
  res.render('index.html');
});



var server = app.listen(3030, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);

});