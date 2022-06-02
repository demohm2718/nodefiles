//add an http package
import http from 'http';
import fs from 'fs';
//define constants
const hostname = 'localhost';
const port = 8000;
//read contents of index.html
fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err;
    }
//create a server to which will be passed a func
const ssServer = http.createServer(function (request, response) {
    //header
    response.writeHead(200, {'Content-Type': 'text/html'});
    //payload
    response.write(html);
    //end response obj
    response.end();
}).listen(port, hostname, () => {
console.log(`Server is up and runnin dude.. Good job! It's at ://${hostname}:${port}`);
});
});
