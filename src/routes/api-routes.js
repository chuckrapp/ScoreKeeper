var connection = require("../config/connection.js");
var routes = require('../../server.js');

router.get('/', function(req, res) {
  res.json({ message: 'hooray it worked' });
})

router.get('/currentLeader', function(req, res) {
  var dbQuery = 'SELECT * FROM users WHERE username = "Chuck"';


  connection.query(dbQuery, function(err, result) {
    res.json(result);
  });
});
