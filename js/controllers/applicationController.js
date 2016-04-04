app.controller = {
  init : function(){
    $('#submit').on('click',function(event){
      event.preventDefault();

      var topic = $('#haiku_topic').val();
      app.source.adapter.getBy(topic)
      .then(function(sourceObj){
        if (sourceObj === false) {
          alert("Search returned nothing— \nPerhaps you misspelled something? \nSecond time's the charm.");
          throw new Error("misspelled search");
        }
        return app.word.adapter.queryWords(sourceObj)
      })
      .then(function(sourceId){
        return app.haiku.generate(sourceId);
      })
      .then(function(haiku){
        app.controller.render(haiku);
      })
    })
  },
  render : function(haiku){
    $('#haiku').text("");
    _.each(haiku.lines, function(line) {
      $('#haiku').append("<p>" + line + "\n </p>");
    })
  }
}
