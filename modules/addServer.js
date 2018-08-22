const fs = require('fs');
let wrote = [];
module.exports = (servername) => {
    if(!wrote.includes(servername)){
        wrote.push(servername);
        fs.readFile('servers.json', (err, data) => {
        let json = JSON.parse(data)
        json.push(servername);
        
        fs.writeFile("servers.json", JSON.stringify(json))
        console.log("Wrote to file servers.json that new servers were added!");
        return;
    }

)}
    else {
        return;
    }

}
