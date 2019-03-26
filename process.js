//console.log(process.argv);
process.stdout.write('Ten cua ban la?');

process.stdin.on('data', function(answer){
    console.log(answer.toString().trim());
    process.exit();
});