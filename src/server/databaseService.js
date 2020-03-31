const Pool = require('pg').Pool;
const DBConfig = require('./configuration/databaseConfiguration');
const Promise = require('promise');

const Connection = new Pool(DBConfig.DATABASE_CONFIG);

var methods = {
  putUsers: function(items) {
    let values = [items.Countries[1].Country, items.Countries[2].Country];
    console.log("QUERY: " + DBConfig.INSERT_USER_QUERY(values));
    Connection.query(DBConfig.INSERT_USER_QUERY(values), function (error, results, fields) {
      if (error) throw error;
      console.log("User has been inserted");
    });
  },

  getUsers: function() {
    return new Promise((resolve, reject) => {
      Connection.query(DBConfig.GET_USERS_QUERY, (error, result) => {
        if(error) return reject(error);
        resolve(result.rows);
      });
    });
  }
}

exports.data = methods;
