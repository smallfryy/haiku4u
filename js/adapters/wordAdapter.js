app.word.adapter = {
  queryWords : function(source){
    var sourceId = source.id;
    var allWords = source.extract.replace(/[0-9&\/\\#,+()↵$^~%.'":*?<>{}-]/g,'').split(' ').slice(1,10);
    // create function toLowerCase();
    var words = _.uniq(allWords);
    var shuffle = _.shuffle(words);
    //loop over each word!
    _.each(words,function(word){
      var url = 'http://rhymebrain.com/talk?function=getWordInfo&word=' + word;
      $.ajax({
      url: url,
      type:'GET',
      dataType : "JSON"
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