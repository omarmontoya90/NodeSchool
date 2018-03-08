var address = process.argv[2];
var http = require('http');
http.get(address, function (response){
	response.setEncoding('utf-8');
	response.on("data", function(data){
		console.log(data);
	})
})
