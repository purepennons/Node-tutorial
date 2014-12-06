var fs = require('fs');

console.log('start to read file1');
var file1 = fs.readFile('File1.txt', {encoding: 'utf8'}, function(err, data) {
	console.log(data);
});

console.log('start to read file2');
var file2 = fs.readFile('File2.txt', {encoding: 'utf8'}, function(err, data) {
	console.log(data);
});

console.log('start to read file3');
var file3 = fs.readFile('File3.txt', {encoding: 'utf8'}, function(err, data) {
	console.log(data);
});