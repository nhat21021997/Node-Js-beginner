var readline = require('readline');
var util = require('util');

var rl = readline.createInterface(process.stdin, process.stdout);
rl.question('What is your name?', function(name) {
    rl.setPrompt(`${name} how old are you?`);
    rl.prompt();
    rl.on('line', function(age) {
        if(age<18){
            util.log(`${name.trim()} because  you are ${age} year old `);
            rl.close();
        }else{
            util.log(`${name.trim()} Yes ${age} year old `);
            rl.close();
        }
    });
});

/* const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
}); */