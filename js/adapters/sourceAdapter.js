app.source.adapter = {
  findBy : function(topic){
    return $.ajax({
      url: 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=' + topic,
      type:'GET',
      dataType : "JSONP"})
    .then(
      function(data){
        var id = Object.keys(data.query.pages).toString();
        var extract = data.query.pages[id].extract;
        var title = data.query.pages[id].title;
        var object = new app.source.new(title,extract);
        return object;  
    })
    // .promise(function(source){
    //   var sourceId = source.id;
    //   var allWords = source.extract.replace(/[0-9&\/\\#,+()↵$^~%.'":*?<>{}-]/g,'').split(' ').slice(1,10);
    //   // create function toLowerCase();
    //   var words = _.uniq(allWords);
    //   var shuffle = _.shuffle(words);
    //   //loop over each word!
    //   _.each(words,function(word){
    //     var url = 'http://rhymebrain.com/talk?function=getWordInfo&word=' + word;
    //     $.ajax({
    //     url: url,
    //     type:'GET',
    //     dataType : "JSON"
    //     })
    //   .promise(function(data){
    //     var word = data.word;
    //     var syllables = data.syllables;
    //     var obj = new app.word.new(word,syllables,sourceId);
    //     debugger
    //     })
    //   });
    // })
  }
}