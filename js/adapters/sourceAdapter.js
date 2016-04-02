app.source.adapter = {
  getBy : function(topic){
    return $.ajax({
      url: 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=' + topic,
      type:'GET',
      dataType : "JSONP"})
    .then(
      function(data){
        var id = Object.keys(data.query.pages).toString();
        var extract = data.query.pages[id].extract;
        var title = data.query.pages[id].title;
        var object = new app.source.new(title,extract,topic);
        return object;  
    })
  }
}