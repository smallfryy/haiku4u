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
    var words = app.word.findBy({'sourceId':sourceId})
    var topic = app.source.findBy({'id':sourceId}).topic;
    //1. call logic function to return haiku lines
    //2. create/return new haiku instance
    return new app.haiku.new(topic,["1","2"])
  },
  logic : function(wordObjects){
    //NEED TO WRITE HAIKU LOGIC FUNCTION
  }
}