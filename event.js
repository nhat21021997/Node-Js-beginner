const events = require('events');

var emitter = new events.EventEmitter();

emitter.on('newEvent', (messages)=>{
    console.log(`The messages: ${messages}`);
});

emitter.emit('newEvent', 'Xin chao anh Nhat');