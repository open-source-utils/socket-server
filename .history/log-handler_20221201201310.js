fs = require('fs')

function append(content){
  fs.writeFile('/etc/doesntexist', content, function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
  });
  
}

function checkForFile(fileName,callback)
{
    fs.exists(fileName, function (exists) {
        if(exists)
        {
            callback();
        }else
        {
            fs.writeFile(fileName, {flag: 'wx'}, function (err, data) 
            { 
                callback();
            })
        }
    });
}

module.exports = { append};
