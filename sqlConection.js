var sql = require('mssql');

var sqlConfig = {
  user: 'eliss',
  password: 'pa55w0rd',
  server: 'localhost',
  database: 'siac'
};

const connection = new sql.ConnectionPool(sqlConfig, function (err) {
  if (err) {
    console.log("Error" + err);
  }
}
)
console.log('Estoy conectado a Sql Server 2016');
module.exports = connection;