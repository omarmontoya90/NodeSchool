var fs = require('fs');
var fileName = process.argv[2];
var total = 0;
function ans(){
	fs.readFile(fileName, 'utf-8', function add(err, content){
		if (err) {
			console.log(err)
		}
		console.log(content.split('\n').length-1);
	})
}
ans();
