const fs = require('fs');

fs.writeFile('./Module/intro.html', 'Chao ban nhe!', 'utf8', (err)=>{
    if(err) return err;
    console.log('tao file thanh cong');
});
fs.appendFile('./Module/intro.html', `\n \nappend file`, 'utf8', (err)=>{
    if(err) return err;
    console.log('append file thanh cong');
});