// Haiku {topic: "sports", lines: Array[3], id: 1}
// lines: [
// "homoerotic", 
// "football endline sucks, hard knocks", 
// "I am gay for you"
// ]
// topic: "sports"


app.haiku = {
  all: [],
  new: (function() {
    var counter = 0;
    return function Haiku(topic, line_array) {
      this.topic = topic;
      this.lines = line_array;
      var self = this;
      (function init(){
        self.id = ++counter;
        app.haiku.all.push(self);
      }());
    }
  }()), 
  generate : function(sourceId){
    // debugger
  }
}