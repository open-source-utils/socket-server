fs = require('fs')

function ReadAppend(content){
  fs.writeFile('/etc/doesntexist', content, function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
  });
  
}