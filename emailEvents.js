
const emitter = require('./Module/sendEmail');

emitter.on('emailEvent', (email)=>{
    console.log(`${email} xin chao ban !`);
});

emitter.emit('emailEvent', 'Gui thong bao');