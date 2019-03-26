const fs = require('fs');

if(!fs.exists("view", (err)=>{if(err) return err;})){
    fs.mkdir("view",  (err)=>{
        if(err) return err;

        fs.writeFile("./view/new.html", 'Du lieu trong html', (err)=>{
            if(err) return err;
            console.log('thu muc va tap tin duoc tao');
        });
    });
}