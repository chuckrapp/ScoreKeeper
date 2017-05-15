var Sequelize = require('sequelize');
var connection = new Sequelize("scoreKeeper_DB", "root", "password");

var Game = connection.define('game', {
  user_id: Sequelize.INTEGER,
  table_number: Sequelize.INTEGER,
  game_date: Sequelize.DATE,
  game_name: Sequelize.STRING,
  game_won: Sequelize.BOOLEAN,
  game_open: Sequelize.BOOLEAN,
  user_score: Sequelize.INTEGER,
  user_round: Sequelize.INTEGER,
  user_standing: Sequelize.INTEGER
});

connection
  .sync({
    force: true,
    logging: console.log
  })
  .then(function () {
    var req = {
      
    }
  })
  .catch(function (error) {
    console.log(error)
  });











// var express = require("express");
// var app = express();
// var bodyParser = require("body-parser");
// var path = require("path");
// var mysql = require('mysql')


// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'password',
//   database: 'scoreKeeper_DB'
// })

// connection.connect(function (err) {
//   if (err) throw err
//   console.log('You are now connected...')
// })

  // app.use(bodyParser.json());
  // app.use(bodyParser.urlencoded({ extended: false }))

  // app.use(express.static(path.join(__dirname, "js")));

  // var allGamesList = function() {
  //   return 'SELECT * FROM games_list'
  // }

  // connection.query(allGamesList(), function (err, rows, fields) {
  //   if (err) throw err;

  //   for (var i in rows) {
  //     console.log('Games: ', rows[i].game);
  //   }
  // })

  // // app.engine('html', require('ejs').renderFile);
  // // app.set('view engine', 'html');

  // app.get('/', function (req, res) {
  //   res.send("hello world");
  // });

  // app.get('/api/games', function (req, res) {
  //   res.send("hello world");
  // });

  // app.listen(3000, function () {
  //   console.log('Server started on port 3000...')
  // })

// https://www.terlici.com/2015/08/13/mysql-node-express.html