// adapter model?
app.source = {
  all: [],
  new: (function() {
    var counter = 0;
    return function Source(response) {
      this.response = response;
      var self = this;
      (function init(){
        self.id = ++counter;
        app.source.all.push(self);
      }());
    }
  }())
}