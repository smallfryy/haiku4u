app.source.adapter = {
  findBy : function(topic){
    return $.ajax({
      url: 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=' + topic,
      type:'GET',
      dataType : "JSONP"})
    .then( 
      function(data){
      var id; 
      var extract;
      var title;
      var object;
      id = Object.keys(data.query.pages);
      extract = data.query.pages[id].extract;
      title = data.query.pages[id].title;
      object = new app.source.new(title,extract);
      return object;
    })()
  }
}