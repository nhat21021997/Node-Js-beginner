const express = require('express');
let app = express();
const port = process.env.PORT || 9999;

app.get('/posts/:port_id/category/:category_id', (req, res)=>{
    res.send(`
        <b> this is a page ${req.params.port_id}</b>
        <b> this is a page ${req.params.category_id}</b>
    
    `);
});

app.listen(port);
console.log('ok');