const fs = require('fs');

module.exports = function(file){
  fs.readFile(file, (err, data) => {
  if (err) throw err;
  else{
  	process.stdout.write(data);
  }
});
}