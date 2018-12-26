var uriArr = require('./imageUri');
var shortUrl = require('node-url-shortener');
var csv = require('node-csv').createParser();


function shortenUrl(){
  var arr=[];
  uriArr.imageUri(function(err,imgLog){
    for(var i in imgLog){
      shortUrl.short(imgLog[i], function(err, url){
        var str = imgLog[i]+","+url+"\n"
        csv.parse(str,function(err,data){
          console.log(data);
        })
      });
    }
  })
}

shortenUrl();
