var templatePath = ('./HandleBarModelTemple.xml');
var fs = require('fs');

fs.readFile(path, function(err,data){
    var template = Handlebars.coomplie(data);
});
