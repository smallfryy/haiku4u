app.source.adapter = {
  findBy : function(topic){
    $.ajax({
      url: 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=Billie Holiday',
      type:'GET',
      dataType : "JSONP"}).done(
      function(data){
        debugger
        console.log(data)
        
      })

  }
}