app.source.controller = {
  init : function(){
    $('#submit').on('click',function(event){
      event.preventDefault();
      var topic = $('#haiku_topic').val();
      app.source.adapter.findBy(topic);
    })
  }
}