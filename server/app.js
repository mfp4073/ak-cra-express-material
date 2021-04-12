let express = require('express');
let bodyParser = require('body-parser');
let fs = require('fs');
let path = require('path');

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) { setTimeout(next, 400) });

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

let activeCartFilePath = path.join(__dirname, 'api/data.json');
let activeCartFile = fs.readFileSync(activeCartFilePath);
let activeCart = JSON.parse(activeCartFile);

app.get('/', function (req, res, next) {
  res.status(200).send('AK Express API loaded');
});

app.get('/users', function (req, res) {
  res.json(activeCart);
})

var server = app.listen(8080, function () {
  console.log("app running on port.", server.address().port);
});