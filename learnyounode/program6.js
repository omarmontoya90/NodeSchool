var dir_name = process.argv[2];
var extension = process.argv[3];
var my_fun = require('./my_module.js');
function cb(err, array){
	if (err) return console.log(err);
	array.forEach(function (file){
		console.log(file)
	});
}
my_fun(dir_name,extension,cb);
