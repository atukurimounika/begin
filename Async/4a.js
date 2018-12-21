var fs = require('fs');
var imgUri = require('./Imageuri.js');
var request = require('request');
var async = require('async');
var pathFront = './Images';
var pathExtention ='.jpg';

async.parallel(imgUri.imageUri(function(err,imglog){
  async.forEachOf(imglog,function(uri,key,callback){
    k=1;
    console.log(imglog.indexOf(uri));
    request({uri,encoding: 'binary'},function(error,response,body){
      fs.writeFile(pathFront+k+pathExtention,body,'binary',function(err){
        if (err) console.log("err");
        k++;
      })
    })
    callback();
  });
}));
