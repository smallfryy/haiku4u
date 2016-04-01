app.source.adapter = {
  findBy : function(topic){
    $.get('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=Billie Holiday').done(
      function(data){
        console.log(data)
        debugger
      })

  }
}