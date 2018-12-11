var mysql = require("mysql");
var dbConnectionInfo = {
    connectionLimit : 10,
    host: 'localhost',
    user: 'root',
    password: 'capstone2018',
    database: 'buyabox'
  }

  //create mysql connection pool
  var dbconnection = mysql.createPool(
    dbConnectionInfo
  );

  // Attempt to catch disconnects
  dbconnection.on('connection', function (connection) {
    console.log('DB Connection established');

    connection.on('error', function (err) {
      console.error(new Date(), 'MySQL error', err.code);
    });
    connection.on('close', function (err) {
      console.error(new Date(), 'MySQL close', err);
    });

  });


  module.exports = dbconnection;
