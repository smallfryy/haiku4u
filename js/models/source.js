// adapter model?
app.source = {
  all: [],
  new: (function() {
    var counter = 0;
    return function Source(title,extract,topic) {
      this.title = title;
      this.extract = extract;
      this.topic = topic;
      var self = this;
      (function init(){
        self.id = ++counter;
        app.source.all.push(self);
      }());
    }
  }()),
  findBy : function(attrHash){ // format: {'id':2}
    return _.findWhere(app.source.all,attrHash);
  }
}