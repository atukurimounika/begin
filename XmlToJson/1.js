fs = require('fs');
var parserString = require('xml2js').parseString;
var path ='./xmlDocument.xml';

function xmlParserHelper(path){
  fs.readFile( path,'utf8', function(err, data) {
      if(!err){
        parserString(data,function(err,result){
            console.log(result);
        });
      }
      else console.log(err);
   });
}

xmlParserHelper(path);
