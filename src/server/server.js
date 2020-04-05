const express = require('express');
const ApiService = require('./apiService');
const schedule = require('node-schedule');
const PORT = 8080;

const app = express();

schedule.scheduleJob('* */1 * * *', function() {
  ApiService.data.postUsers();
})

require('./routes')(app);

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
})
