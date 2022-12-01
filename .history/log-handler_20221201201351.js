fs = require('fs')

function append(content){
  fs.writeFile('/etc/doesntexist', content, function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
  });
  avr fileName = 'abc.log'
  checkForFile("file.dat",function()
  {
     //It is now safe to write/read to file.dat
     fs.readFile("file.dat", function (err,data) 
     {
        //do stuff
     });
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
