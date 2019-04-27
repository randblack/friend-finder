var friends = require('../data/friends');

module.exports = function (app) {

  app.post('/api/friends', function (req, res) {
    console.log(req.body);
    // friends.push();
    res.send(req.body);
  });

  app.get('/api/friends', function (req, res) {
    res.send(friends);
  });
}