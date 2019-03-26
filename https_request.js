const https = require('https');
const fs = require('fs');

const url = 'https://jsonplaceholder.typicode.com/posts';

https.get(url, res =>{

    res.setEncoding('UTF-8');

    let body ='';

    res.on('data', data =>{
        body +=data;
    });

    res.on('end', ()=>{

        /* fs.writeFile('data.json', body, 'UTF-8', err =>{
            if(err) return err;

            console.log('just pullet all the posts and the create file')
        }); */

        body = JSON.parse(body);

        console.log(`${body[0].title}`)
    });
});