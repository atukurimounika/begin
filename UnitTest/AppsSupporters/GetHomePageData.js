const fs = require('fs');
const path = '../Data/GoogleHomePage.js'

function getData(){
    return 'success';
}

function dataGet(callback){
    fs.readFile(path,'utf8',function(err,data){
       return callback(data);
    })
}
getData();
module.exports.getData=dataGet;