const http = require('http');
const querystring = require('querystring');
const serverList = require('./servers.json');

let server = http.createServer().listen(3000);

let online = [];
server.on('request', function (req, res) {
    if (req.method == 'POST') {
        var body = '';
    }

    req.on('data', function (data) {
        body += data;
    });

    req.on('end', function () {
        let post = querystring.parse(body);
        console.log(post);
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(serverList));
    });
});

console.log('Listening on port 3000');