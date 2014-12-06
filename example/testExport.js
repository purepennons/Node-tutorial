var fromExports = require('./export');
var FromMoudleExports = require('./moduleExport');

var fromMoudleExports = new FromMoudleExports();

console.log(fromExports.foo());
console.log(fromExports.bar());

console.log(fromMoudleExports.foo());
console.log(fromMoudleExports.bar());