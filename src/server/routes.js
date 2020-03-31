const DatabaseService = require('./databaseService');

module.exports = function(app) {

  app.get('/', function(req, res) {
    res.send("Server is working");
  });

  app.get('/users', (req, res) => {
    DatabaseService.data.getUsers()
      .then((result) => {
        res.json(result);
      })
  });

}
