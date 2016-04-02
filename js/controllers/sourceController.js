app.source.controller = {
  init : function(){
    $('#submit').on('click',function(event){
      event.preventDefault();
      var topic = $('#haiku_topic').val();
      
      app.source.adapter.getBy(topic)
      .then(function(sourceObj){
        return app.word.adapter.queryWords(sourceObj)
      })
      .then(function(data){
        var sourceId = data;
        return app.haiku.generate(sourceId);
      })
      .then(function(data){
        debugger
        //data = haiku instance
        //need to call render function
      })
    })
  },
  render : function(){
    
  }
}
