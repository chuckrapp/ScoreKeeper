// var connection = require("../config/connection.js");
// var routes = require('../../server.js');

// //main page just to know its connected
// router.get('/', function(req, res) {
//   res.json({ message: 'hooray it worked' });
// })

// //route to test to make sure I can get results from the database
// router.get('/test', function(req, res) {
//   var dbQuery = 'SELECT * FROM users WHERE username = "Chuck"';
//   connection.query(dbQuery, function(err, result) {
//     res.json(result);
//   });
// });

// //
// router.get('/userGameInfo', function(req, res) {
//   var dbQuery = 'SELECT * FROM users WHERE username = "Chuck"';
//   connection.query(dbQuery, function(err, result) {
//     res.json(result);
//   });
// });