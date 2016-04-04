app.source.adapter = {
  getBy : function(topic){
    var topic = topic.split(' ').map(function(word){
      return word[0].toUpperCase() + word.slice(1);
    }).join(' ');
    return $.ajax({
      url: 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&explaintext=&titles=' + topic,
      async: false,
      type: 'GET',
      dataType : 'JSONP'})
    .then(
      function(data){
        var id = Object.keys(data.query.pages);
        var extract = data.query.pages[id].extract;
        if (extract) {
          var sourceObject = new app.source.new(topic,extract);
          return sourceObject;
          // sourceObject = { extract: "Eleanor Kagan....(~500 wds)", id: 1, topic: "Billie Holiday" }
        }
        else {
          return false;
        }
    })
  }
}
