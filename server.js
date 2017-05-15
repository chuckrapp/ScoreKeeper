// var mysql = require('mysql');
// var methodOverride = require('method-override');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var PORT = process.env.PORT || 1337;

var router = express.Router();

router.get('/', function(req, res) {
  res.json({ message: 'hooray it worked' });
})

app.use('/api', router);

app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("src"));

// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'password',
//   database: 'scoreKeeper_DB'
// })


// require("./src/routes/api-routes.js")(app);
// require("./src/routes/html-routes.js")(app);

// connection.connect(function (err) {
//   if (err) throw err
//   console.log('You are now connected...')
// });

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
