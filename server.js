var connect = require('connect');
var bodyParser = require('body-parser');
var express = require('express');
var Sequelize = require('sequelize');
var mysql = require("mysql");
var multer  = require('multer')
// var connection = require('./src/config/connection.js');
var app = express();

var score;
var adv;

//set the port#
var PORT = process.env.PORT || 1337;

var router = express.Router();

//set the main intro to the api call
app.use('/api', router);

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
app.use(bodyParser.json());
// app.use(bodyParser.json({ type: "application/*+json" }));

app.use(express.static("src"));

//--------------------
//----   ROUTES   ----
//--------------------

// const Users = connection.define('users', {
//   username: Sequelize.STRING,
//   password: Sequelize.STRING
// });
// connection.sync();

const connection = new Sequelize('scoreKeeper_DB', 'root', 'password');

//defining the tables
const Users = connection.define(
  'Users', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: Sequelize.STRING,
    password: Sequelize.STRING
  });

const Rounds334 = connection.define(
  'Rounds334', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    round: Sequelize.STRING
  });

const Games = connection.define(
  'Games', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: Sequelize.INTEGER,
    table_number: Sequelize.INTEGER,
    game_date: Sequelize.DATE,
    game_name: Sequelize.STRING,
    game_won: Sequelize.BOOLEAN,
    game_open: Sequelize.BOOLEAN,
    user_score: Sequelize.INTEGER,
    user_round: Sequelize.INTEGER,
    user_standing: Sequelize.INTEGER
  }
  // , {
  //   freezeTableName: true
  // }
);

const Games_list = connection.define(
  'Games_list', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    game: Sequelize.STRING,
    description: Sequelize.STRING
  });

//defining the joins
Games.hasOne(Users);
Rounds334.belongsTo(Games);
// Games.hasMany(Rounds334);



//test to make sure I can receive different data from the database
router.get('/test', function (req, res) {
  connection.sync().then(function () {
    Users.findById(1).then(function (users) {
      res.json(users.username);
    });
  });
});

//Standings to return Username of the current leader
//TO DO -- update WHERE to take in a table number (currently hard coded)
router.get('/currentLeader', function (req, res) {
  connection.query("SELECT users.username, 334Rounds.round, games.user_score FROM games INNER JOIN users ON games.user_id=users.id INNER JOIN 334Rounds ON games.user_round=334Rounds.id WHERE table_number = 1 AND game_open = 1 ORDER BY user_round DESC, user_score")
    .spread((results, metadata) => {
      res.json(results)
    })
});

//Standings to return Username, score and round --Sorted by winner
//TO DO -- update WHERE to take in a table number (currently hard coded)
router.get('/standings', function (req, res) {
  connection.query("SELECT users.username, 334Rounds.round, games.user_score FROM games INNER JOIN users ON games.user_id=users.id INNER JOIN 334Rounds ON games.user_round=334Rounds.id WHERE table_number = 1 AND game_open = 1 ORDER BY user_round DESC, user_score")
    .spread((results, metadata) => {
      res.json(results)
    })
});

//UserStats to return the score, and round name for the player specified
//TO DO - get ID from login and tie to player name
router.get('/userStats', function (req, res) {
  connection.query('SELECT users.username, games.user_score, 334Rounds.round FROM games INNER JOIN users ON games.user_id=users.id INNER JOIN 334Rounds ON games.user_round=334Rounds.id WHERE username = "Chuck" AND table_number = 1 AND game_open = 1 ORDER BY user_round DESC, user_score')
    .spread((results, metadata) => {
      res.json(results)
    });
});

//POST to update player score after round
router.put('/updateScore', function (req, res) {
  console.dir(req.body)
  score = req.params.score;
  adv = req.params.adv;
  Games.update({
    user_score: score,
    user_round: adv
  },
    {
      where: {
        user_id: 1,
        table_number: 1,
        game_open: 1
      }
    });

});


//   var userData = req.body;
//   connection.query('UPDATE games SET ? WHERE user_id=1 AND table_number=1 AND game_open=1', userData, function (error, results, fields) {
//     if (error) throw error;
//     res.end(JSON.stringify(results));
//   });
// });

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

//-----------------------
//------ SOCKET.IO ------
//-----------------------

