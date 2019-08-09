
var friendList = require('../data/friends.js');

module.exports = function(app){
 
  app.get('/api/friends', function(req,res){
    res.json(friendList);
  });

  app.post('/api/friends', function(req,res){
   
    var totalDifference = 0;
    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    };
    var userData = req.body;
    var userName = userData.name;
    var userScores = userData.scores;

    var b = userScores.map(function(item) {
      return parseInt(item, 10);
    });
    userData = {
      name: req.body.name,
      photo: req.body.photo,
      scores: b
    };

    console.log("Name: "+ userName);
    console.log("User score " + userScores);

    var sum = b.reduce((a ,b) => a + b, 0);
    console.log("Sume of users score " + sum);
    console.log("Best match friends diff " + bestMatch.friendDifference);

    for(var i = 0; i < friends.length; i++) {
      console.log(friends[i].name);
      totalDifference = 0;
      console.log("Total Diff " + totalDifference);
      console.log("Best match friend diff " + bestMatch.friendDifference);

      var bfriendsScore = friends[i].scores.reduce((a, b) => a + b, 0);
      console.log("Total friends score " + bfriendsScore);
      totalDifference += Math.abs(sum - bfriendsScore);
      console.log("----------------> " + totalDifference);

      if(totalDifference <= bestMatch.friendDifference) {
        bestMatch.name = friends[i].name;
        bestMatch.photo = friedns[i].photo;
        bestMatch.friendDifference = totalDifference;
      }
      console.log(totalDifference + " Total Difference");
    }
    console.log(bestMatch);
    friends.push(userData);
    console.log("New User added");
    console.log(userData);
    res.json(bestMatch);
  });
};