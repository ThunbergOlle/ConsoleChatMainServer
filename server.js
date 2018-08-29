const http = require('http');
const querystring = require('querystring');
const serverList = require('./servers.json');
const addServer = require('./modules/addServer');

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
        if(post.emitStatus){
            let serverID = post.serverID;
            let serverIP = post.serverIP;
            if(post.emitStatus === 'true'){
                online.push(serverIP);
            }else {
                online.splice(online.indexOf(serverID), 1);
                console.log(online)
            }
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify("success")); 
        }else {
        var servername = post.newserver
            // if(post.newserver){     
            //     if(serverList.includes(servername)){
            //     console.log("Someone tried to add a server that was already included...");
            //     }else {
            //         addServer(servername);
            //     }
            //     res.writeHead(200, {'Content-Type': 'application/json'});
            //     res.end(JSON.stringify("success"));
            // }
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(online));
        }


    });
});

console.log('Listening on port 3000');