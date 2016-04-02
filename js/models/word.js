app.word = {
  all: [],
  new: (function() {
    var counter = 0;
    return function Word(word,syllables,sourceId) {
      this.word = word;
      this.syllables = parseInt(syllables);
      this.sourceId = sourceId;
      var self = this;
      (function init(){
        self.id = ++counter;
        app.word.all.push(self);
      }());
    }
  }()),
  findBy : function(attrHash){ // format: {'sourceId':2}
    return _.where(app.word.all,attrHash);
  }
}
