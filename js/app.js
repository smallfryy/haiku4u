// Initialize
var app = {};

$(function() { // on document ready
  app.controller.init();

  $("#footer").click(function(){
    var available_space = $('html').height() - $('.jumbotron').outerHeight();
    $('#about').css({
      height: available_space,
    });
  });

  $('#about').click(function(){
    $('#about').css({
      height: '0px'
    });
  });

});
