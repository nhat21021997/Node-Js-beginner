const  WebSocketServer = require('ws').Server;
const WSS = new WebSocketServer({port: 3232});
WSS.on('connection', (ws)=>{
    ws.on('message', (message)=>{
        console.log(message);
        if(message === 'close'){
            ws.close();
        }else{
            WSS.clients.forEach((client)=>{
                client.send(message);
            });//broadcasting
        }//communition with all client
        
    });//sendFormData
    console.log('you are connected');
});
