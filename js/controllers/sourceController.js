app.source.controller = {
  init : function(){
    $('#submit').on('click',function(event){
      event.preventDefault();
      var topic = $('#haiku_topic').val();
      var whatever = app.source.adapter.findBy(topic);
      debugger
    })
  }
}