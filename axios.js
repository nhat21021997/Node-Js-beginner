const axios = require('axios');
let username = 'technoweenie'
axios.get('https://api.github.com/users/' + username).then((res)=>{

    console.log(res.data.followers);// ben trong res.data

}).catch((err)=>{
    console.log(err);
});