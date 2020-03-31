const Request = require('request');
const DatabaseService = require('./databaseService');
const APIConfiguration = require('./configuration/apiConfiguration');

var methods = {
  postUsers: function() {
    Request.get(APIConfiguration.COVID_URL, (error, response, body) => {
      if (error) throw error;
      DatabaseService.data.putUsers(JSON.parse(body));
    })
  }
}

exports.data = methods;
