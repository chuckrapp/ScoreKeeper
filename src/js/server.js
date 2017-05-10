var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '90Manoonie',
  database: 'scoreKeeper_DB'
})

connection.connect(function (err) {
  if (err) throw err
  console.log('You are now connected...')
})

connection.query("SELECT users.username FROM users INNER JOIN games ON users.id = games.user_id WHERE users.id = '1'", function (err, results) {
  if (err) throw err;
  console.log(results[0].username)
})