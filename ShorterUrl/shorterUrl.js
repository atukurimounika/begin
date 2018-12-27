var uriArr = require('./imageUri');
var shortUrl = require('node-url-shortener');
var async =require('async');
var csv = require('node-csv').createParser();


function shortenUrl(){
  var arr=[], k=0;
  uriArr.imageUri(function(err,imgLog){
    async.series(async.forEachOf(imgLog, function(value,key,callback){
      shortUrl.short(value, function(err, url){
        var str = imgLog[k]+","+url+"\n"
        k++;
        csv.parse(str,function(err,data){
          console.log(data);
        })
      });
      callback();
    }))
  })
}
shortenUrl();
