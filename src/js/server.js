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
 module.exports=connection;


