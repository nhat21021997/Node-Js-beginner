const express = require('express');
let app = express();
const port = process.env.PORT || 9999;

app.get('/', (req, res)=>{
    res.send('<i>Hello</i>');
});

app.get('/api', (req, res)=>{
    // res.send('<h1>api</h1>');
    res.json(
        {name: 'Nhat'},
        );
});
app.listen(port);

console.log('thanh cong');