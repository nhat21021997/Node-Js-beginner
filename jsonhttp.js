const https = require('https');
const http = require('http');
const fs = require('fs');

const url = 'https://jsonplaceholder.typicode.com/posts';
http.createServer((req, resServer)=>{

    if(req.method === 'GET' && req.url === '/posts'){

        https.get(url, (httpRes)=>{
            httpRes.on('data', data=>{
                httpRes.setEncoding('utf8');
                console.log(data);
                resServer.write(data);
            });
            httpRes.on('end', ()=>{
                resServer.end();
                console.log('Now is server');
            });
        });
    }else{
        resServer.writeHead(404, {'Content-Tyep': 'text/plain'});
        resServer.end('404 Err')
    }
}).listen(4444);
console.log('xong');