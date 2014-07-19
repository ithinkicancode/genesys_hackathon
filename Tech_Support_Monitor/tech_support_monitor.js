
Trends = new Meteor.Collection("trends");

if (Meteor.isClient) {
  Template.monitor.terms = function () {
    return Trends.find({}, {sort: {count: -1, term: 1}});
  };
  Template.top.top = function () {
    return Trends.findOne({}, {sort: {score: -1, name: 1}});
  };
  Template.monitor.selected_name = function () {
    var term = Trends.findOne(Session.get("selected_term"));
    return term && term.name;
  };

  Template.term.selected = function () {
    return Session.equals("selected_term", this._id) ? "selected" : '';
  };

  Template.term.events({
    'click': function () {
      Session.set("selected_term", this._id);
    }
  });
}
if (Meteor.isServer) {
  Meteor.startup(function () {
/*
    if (Trends.find().count() === 0) {
      var terms = ["You",
                   "Are",
                   "Not",
                   "Prepared"];
      for (var i = 0; i < terms.length; i++)
        Trends.insert({terms: terms[i], score: Math.floor(Random.fraction()*10)*5});
    }
*/
  });

}
