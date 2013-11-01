Bets = new Meteor.Collection('bets');

Meteor.startup(function () {
    // code to run on server at startup
    //var ObjectId = require('mongodb').ObjectID;
    
});

Meteor.publish("userData", function () {
  return Meteor.users.find({_id: this.userId},
                           {fields: {'other': 1, 'things': 1}});
});