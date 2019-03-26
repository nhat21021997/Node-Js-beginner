const fs = require('fs');

try{
    fs.rmdirSync("./view");
    //fs.rmdirSync("./Module/intro.html");
}catch (err){
    console.log(err + 'this is err');
}