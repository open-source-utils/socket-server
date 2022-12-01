fs = require('fs')

function append(content, remoteAddress){
  var fileName = getFileName();
  createFile(fileName);

  var writableContent={
    timestamp: new Date().toISOString(),
    payload: content,
    remoteAddress: remoteAddress
  }

  fs.appendFileSync(fileName, JSON.stringify(writableContent)+'\r\n', function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
  });
  
}


function getFileName(){
   var datetime = new Date().toISOString().slice(0,10);
  console.log(datetime);
  return datetime;

}

function createFile(filename) {
  fs.open(filename,'r',function(err, fd){
    if (err) {
      fs.writeFile(filename, '', function(err) {
          if(err) {
              console.log(err);
          }
          console.log("The file was saved!");
      });
    } else {
      console.log("The file exists!");
    }
  });
}
module.exports = { append};
