var fs = require('fs');
text = fs.readFileSync(process.argv[2]);
console.log(text.toString().split('\n').length - 1);
