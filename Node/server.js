//Server listening to port 8080
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Welcome to Cytonn!');
}).listen(8080);
