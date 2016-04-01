app.source.adapter = {
  findBy : function(topic){
    return $.ajax({
      url: 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=' + topic,
      type:'GET',
      dataType : "JSONP"})
    .then( 
      function(data){
      var id = Object.keys(data.query.pages);
      var extract = data.query.pages[id].extract;
      var title = data.query.pages[id].title;
      var obj = new app.source.new(title,extract);
      debugger
      // console.log(obj)
      return obj;
      })

  }
}