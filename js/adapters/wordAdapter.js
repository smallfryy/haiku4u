app.word.adapter = {
  queryWords : function(source){
    var sourceId = source.id;
    var allWords = source.extract.replace(/\(.*\)|\n|[^a-zA-Z\s]/g,' ').split(' ');
    var shuffled = _.chain(allWords).uniq().shuffle()._wrapped.slice(0,27);

    _.each(shuffled,function(word){
      var url = 'http://rhymebrain.com/talk?function=getWordInfo&word=' + word;
      $.ajax({
        url: url,
        async: false,
        type: 'GET',
        dataType : 'JSON'
      })
      .then(function(data){
        var word = data.word;
        var syllables = data.syllables;
        var obj = new app.word.new(word,syllables,sourceId);
        })
    })
    return sourceId;
  }
}
