process.stdout.write('prompt >');
const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');

process.stdin.on('data', (data) => {
    const input = data.toString().trim();
    const cmd = input.slice(0,input.indexOf(' '));
    const arg = input.slice(input.indexOf(' ')+1);

    if(cmd === 'pwd') {
        pwd();
    }

    if(cmd === 'ls') {
        ls();
    }

    if(cmd === 'cat'){
    	cat(arg);
    }

	if(cmd === 'curl'){
		curl(arg);
	}   
    process.stdout.write('\nprompt > ');
})