module.exports = function() {
    process.stdout.write(process.cwd());
    process.stdout.write('\nprompt > ');
}

// process.stdin.on('data', (data) => {
//     const cmd = data.toString().trim();

//     if(cmd === 'pwd') {
       
//     }

//     // process.stdout.write('You typed: ' + cmd);
   
// })