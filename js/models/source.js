// adapter model?
app.source = {
  all: [],
  new: (function() {
    var counter = 0;
    return function Source(title,extract) {
      this.title = title;
      this.extract = extract;
      var self = this;
      (function init(){
        self.id = ++counter;
        app.source.all.push(self);
      }());
    }
  }())
}