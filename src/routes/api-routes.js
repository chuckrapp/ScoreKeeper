var connection = require("../config/connection.js");

module.exports = function(app) {
  app.get("./api/currentLeader", function(req, res) {
    var dbQuery = 'SELECT * FROM users WHERE username = "Chuck"';
    

    connection.query(dbQuery, function(err, result) {
      res.json(result);
    });
  });
};