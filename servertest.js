'use strict'

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	console.log('req begin' + req.url);
	res.writeHeader(200, {"Content-Type": "text/html"});
	if(req.url === "/index.html"){
		fs.readFile("./index.html", function(err, data){
			console.log("read done");
			if (err){
				console.log("read error");
			}
			else{
				res.write(data, function(err){
					res.end();
					console.log("write done");
				});
			}
		});

	} else if (req.url === "/test.png") {
		res.writeHead(200, {'Content-Type': 'image/png'});
		fs.readFile("./test.png", function(err, data){
			console.log("read done");
			if (err) {
				console.log("read error");
			}else {
				res.write(data, function(err) {
				res.end();
				console.log("write done");
				});
			}

		});
	}

}).listen(80);
