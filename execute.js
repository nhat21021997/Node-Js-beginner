const execute = require('child_process').exec;

//child_process la bat buoc
execute("ls", (err, stdout)=>{
    if(err){
        return err;
    }
    console.log(stdout);
});