app.source.controller = {
  init : function(){
    $('#submit').on('click',function(event){
      event.preventDefault();
      var topic = $('#haiku_topic').val();

      app.source.adapter.getBy(topic)
      .then(function(sourceObj){
        // sourceObj = { extract: "Eleanor Kagan....", id: 1, topic: "Billie Holiday" }
        return app.word.adapter.queryWords(sourceObj)
      })
      .then(function(sourceId){
        return app.haiku.generate(sourceId);
      })
      .then(function(haiku){
        debugger
        _.each(haiku.lines, function(line) {
          $('.haikus').append("<li>" + line + "</li>")
        });
      })
    })
  },
  render : function(){

  }
}
