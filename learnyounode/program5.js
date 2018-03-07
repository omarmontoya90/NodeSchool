var fs = require('fs');
var directory = process.argv[2];
var extension = process.argv[3];
function callback(err, list){
	if (err) return console.log(err);
	list.forEach(function(file){ 
		if(file.match("." + extension)){
			console.log(file);
		}	
	})
}
function ans(){
	fs.readdir(directory, callback);
}
ans();
