function my_fun(dir_name, extension, callback){
	fs = require('fs');
	fs.readdir(dir_name, 'utf-8', function (err, data){
		if (err) return callback(err, null);
		filtered_data = data.filter(function(file){ return file.match(RegExp("." + extension + "$"))});
		callback(null, filtered_data);
		})
}
module.exports = my_fun;
