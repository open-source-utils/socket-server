fs = require('fs')

function append(content){
  var fileName = "abc.txt";
  createFile(fileName);
  fs.appendFileSync(fileName, content+'\r\n', function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
  });
  
}


function getFileName(){
   var datetime = new Date();
  console.log(datetime.toISOString().slice(0,10));
  return datetime.toISOString().slice(0,10);

})

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
