var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

var port = process.env.PORT || 8080;
var router = express.Router();

router.use(function(req, res, next) {
  console.log('There is a requesting.');
  next();
});

router.get('/', function(req, res) {
  const queryName = req.query.name
  const queryAge = req.query.age
  res.send('<h1>Hello ' + queryName + ' 你' + queryAge + '岁了' + '</h1>')
})

router.get('/:name', function(req, res) {
  res.send('<h1>Hello ' + req.params.name + '</h1>');
});

router.post('/', function (req, res) {
  var name = req.body.name;
  res.json({message: 'Hello ' + name});
});

app.use('/home', router);

app.listen(port);
console.log('Magic happens on port ' + port);
