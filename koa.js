const http = require('http');
http.createServer((req, res) => {
	res.statusCode = 200;
	res.end('hello world')
}).listen('3000', function (params) {
	console.log('sever');
})