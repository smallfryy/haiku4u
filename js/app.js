// Initialize
var app = {};

$(function() { // on document ready
  app.controller.init();

  $("#footer").click(function(){
    $('#about').animate({
      height:'52%'
    });
  });
    
});