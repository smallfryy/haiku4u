app.source.controller = {
  init : function(){
    $('#submit').on('click',function(event){
      event.preventDefault();
      var topic = $('#haiku_topic').val();
      
      var promise = app.source.adapter.findBy(topic);
      
      promise.then(function(sourceObj){
        return app.word.adapter.queryWords(sourceObj)
      }).then(function(data){
        var sourceId = data;
        var words = app.word.findBy({'sourceId':sourceId})
        debugger
      })

      // app.haiku.generate(sourceId);
    })
  }
}