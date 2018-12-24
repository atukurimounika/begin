var fs = require('fs');
var imgUri = require('./Imageuri.js');
var request = require('request');
var async = require('async');
var dir= './Images';
var pathFront;
var pathExtention ='.jpg';

function newDir(int=0){
  if(!fs.existsSync(dir+int)){
    fs.mkdirSync(dir+int);
    pathFront = dir+int+'/Image';

  }
  else pathFront = dir+int+'/Image';  
}

function pathset(key){
  console.log(key)
  var path= parseInt(key/5);
  newDir(path);
  console.log(pathFront+key+pathExtention);
  return pathFront+key+pathExtention;
}

async.series(imgUri.imageUri(function(err,imglog){
  async.forEachOf(imglog,function(uri,key,callback){
        request({uri,encoding: 'binary'},function(error,response,body){
            //console.log(pathset(key));
          fs.writeFile(pathset(key),body,'binary',function(err){
        if (err) console.log("err");
      })
    })
    callback();
  });
}));
