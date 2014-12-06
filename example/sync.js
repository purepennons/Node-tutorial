var fs = require('fs');

console.log('start to read file1');
var file1 = fs.readFileSync('File1.txt', {encoding: 'utf8'});
console.log(file1);

console.log('start to read file2');
var file2 = fs.readFileSync('File2.txt', {encoding: 'utf8'});
console.log(file2);

console.log('start to read file3');
var file3 = fs.readFileSync('File3.txt', {encoding: 'utf8'});
console.log(file3);