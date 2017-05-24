var mysql = require("mysql");
var Sequelize = require('sequelize');


// const connection = new Sequelize('scoreKeeper_DB', 'root', 'password');

// const Users = connection.define('users', {
//   username: Sequelize.STRING,
//   password: Sequelize.STRING
// });
// connection.sync();

// Users.findById(1).then(function(users) {
//   console.log(users.username)
// })

//**********************************
//**** Non Sequelize connection ****
//**********************************

// Set up our connection information
var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "password",
  database: "scoreKeeper_DB"
});

// // Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connection successful!");
});

// Export connection
module.exports = connection;
