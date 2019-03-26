const express = require('express');
let app = express();
const port = process.env.PORT || 9999;

app.use('/css', express.static(__dirname +'/public'));

app.use((req, res, next1)=>{
    console.log('Middlewares');
    next1();
});
// giua 2 app.use phai co next();
app.get('/', (req, res)=>{
    res.send(`
    
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="/css/style.css">
    <title>Document</title>
</head>
<body>
    <h1>Hello</h1>
    <p>Chào bạn đã đến với web của tôi! Trên web có 1 điểm chấm! click vào đó bạn sẽ thấy 1 điều kỳ diệu</p>
</body>
</html>
    
    `);
});

app.listen(port);
console.log('ok');