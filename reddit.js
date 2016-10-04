import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return Ember.$.ajax({
      url: 'https://www.reddit.com/r/emberjs.json'
    }).then(function(json){
      var importantInfo = json.data.children.map(function(eachPost){
        var importantObject = {
          score: eachPost.data.score,
          title: eachPost.data.title,
          url: eachPost.data.url,
          comments: eachPost.data.num_comments,
          archived: eachPost.data.archived ? 'Archived': 'Not Archived'
        };
        return importantObject;

      });
      return importantInfo;
    });

  }
});
