var request = require('request');



function getBody(callback){
  request.get('http://www.google.com',function(err,response,body){
    return callback(response,body);
  })
}
module.exports.getBody=getBody;
