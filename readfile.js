const fs = require('fs');

fs.readdir('./', (err, data)=>{
    if(err) return err;
    console.log(data);
});
fs.readFile('global.html', 'UTF-8', (err, data)=>{
    console.log(data);
});