var fs = require('fs');

//Reading Asynchronously
fs.readFile('cytonn.txt', 'utf8', function(err, contents) {
    console.log(contents);
});
 
console.log('File is being read');


//Reading Synchronously
var contents = fs.readFileSync('cytonn.txt', 'utf8');
console.log(contents);