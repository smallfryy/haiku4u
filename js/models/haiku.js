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
    var words = app.word.findBy({'sourceId':sourceId});
    var topic = app.source.findBy({'id':sourceId}).topic;

    var line1 = [];
    app.haiku.generateLine(words, line1, 0, 5);
    var finalLine1 = line1.join(" ");

    var line2 = [];
    app.haiku.generateLine(words, line2, 0, 7);
    var finalLine2 = line2.join(" ");

    var line3 = [];
    app.haiku.generateLine(words, line3, 0, 5);
    var finalLine3 = line3.join(" ");

    return new app.haiku.new(topic,[finalLine1, finalLine2, finalLine3]);
  },
  generateLine : function(words, line, syllables, desiredSyll) {
    if (syllables === desiredSyll) {
      return line;
    }
    var word = words.shift();
    if (word.syllables + syllables <= desiredSyll) {
      line.push(word.word);
      syllables += word.syllables;
    }
    else {
      words.push(word);
    }
    app.haiku.generateLine(words, line, syllables, desiredSyll);
  }
}
