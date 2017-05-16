var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var connection = require('./src/config/connection.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//set the port#
var PORT = process.env.PORT || 1337;

var router = express.Router();

//set the main intro to the api call
app.use('/api', router);

app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("src"));

// app.use( bodyParser.json() );       // to support JSON-encoded bodies
// app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
//   extended: true
// }));

//--------------------
//----   ROUTES   ----
//--------------------

//main page to make sure its connected
router.get('/', function (req, res) {
  res.json({ message: 'hooray it worked' });
})

//test to make sure I can receive different data from the database
router.get('/test', function (req, res) {
  // var user = ""
  // var dbQuery = '"SELECT * FROM users WHERE id=?", [req.params.id]';
  connection.query("SELECT * FROM users WHERE id=?", [req.params.id], function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

//Standings to return Username of the current leader
  //TO DO -- update WHERE to take in a table number (currently hard coded)
router.get('/currentLeader', function (req, res) {
  // var table_num = "1";
  var dbQuery = 'SELECT users.username, games.user_score, games.user_round FROM games INNER JOIN users ON games.user_id=users.id WHERE table_number = 1 AND game_open = 1 ORDER BY user_round DESC, user_score'; 
  connection.query(dbQuery, function (err, result) {
    if (err) throw err;
    res.json(result[0].username);
  });
});

//Standings to return Username, score and round --Sorted by winner
  //TO DO -- update WHERE to take in a table number (currently hard coded)
router.get('/standings', function (req, res) {
  var dbQuery = 'SELECT users.username, 334Rounds.round, games.user_score FROM games INNER JOIN users ON games.user_id=users.id INNER JOIN 334Rounds ON games.user_round=334Rounds.id WHERE table_number = 1 AND game_open = 1 ORDER BY user_round DESC, user_score';
  connection.query(dbQuery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

//UserStats to return the score, and round name for the player specified
  //TO DO - get ID from login and tie to player name
router.get('/userStats', function (req, res) {
  var dbQuery = 'SELECT users.username, games.user_score, 334Rounds.round FROM games INNER JOIN users ON games.user_id=users.id INNER JOIN 334Rounds ON games.user_round=334Rounds.id WHERE username = "Alex" AND table_number = 1 AND game_open = 1 ORDER BY user_round DESC, user_score';
  connection.query(dbQuery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

//POST to update player score after round
router.put('/updateScore', function (req, res) {
   var userData  = req.body;
   connection.query('UPDATE games SET ? WHERE user_id=1 AND table_number=1 AND game_open=1', userData, function (error, results, fields) {
   if (error) throw error;
   res.end(JSON.stringify(results));
 });
});

//------------------
//------ TODO ------
//------------------

//POST to add a new game to table when created

//POST to change game_open to closed when End game is selected from the menu OR when round 7 is completed by user

//POST to change game_won to TRUE for winning player and to FALSE for remaining players, and MAYBE add standings for history table???

//



//open the port and listen
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
