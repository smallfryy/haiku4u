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

    var line1 = app.haiku.generateLine(words, [], 0, 5).join(" ");
    var line2 = app.haiku.generateLine(words, [], 0, 7).join(" ");
    var line3 = app.haiku.generateLine(words, [], 0, 5).join(" ");

    return new app.haiku.new(topic,[line1, line2, line3]);
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
    return app.haiku.generateLine(words, line, syllables, desiredSyll);
  }
}
