var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello Team013! You can do it!');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});