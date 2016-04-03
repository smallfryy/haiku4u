app.source.adapter = {
  getBy : function(topic){
    var topic = topic.split(' ').map(function(word){
      return word[0].toUpperCase() + word.slice(1);
    }).join(' ');
    return $.ajax({
      url: 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=' + topic,
      async: false,
      type: 'GET',
      dataType : 'JSONP'})
    .then(
      function(data){
        var id = Object.keys(data.query.pages);
        var extract = data.query.pages[id].extract;
        var object = new app.source.new(topic,extract);
        return object;
        // source = { extract: "Eleanor Kagan....", id: 1, topic: "Billie Holiday" }
    })
  }
}
