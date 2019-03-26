const http = require('http');

const server = http.createServer((rep,res)=>{

    res.writeHead(200, {'Content-Type': 'text/html'});

    res.end('<strong>Xin chao toi la Nhat</strong>');
});

server.listen(9111);
console.log('server is runing');