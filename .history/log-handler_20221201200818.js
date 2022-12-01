fs = require('fs')

function ReadAppend(content){
  fs.writeFile('/etc/doesntexist', content, function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
  });
  
}
// edit this with your file names
file = 'name_of_main_file.csv';
appendFile = 'name_of_second_file_to_combine.csv';