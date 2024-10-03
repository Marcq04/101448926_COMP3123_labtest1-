// Create a script that will do the following:
/*
Create Log Files
- create a Logs directory, if it does not exist
- change the current process to the new Logs directory
- create 10 log files and write some text into the file
- output the files names to console
*/
// Hint: use the fs module and path module, and the process current working directory to build directory path. It is acceptable, to have a remove.js script and separate add.js script.

const fs = require('fs');
const path = require('path');
const os = require('os');

const dir = path.join(os.homedir(), 'Logs');

// Check if Logs directory exist
if (!fs.existsSync(dir)) {
    // Create Logs directory
    fs.mkdirSync(dir);
    console.log('Created Logs directory');
}

// Change current process to Logs directory
process.chdir(dir);

// Create 10 log files and write 'Hello World' to it
for (let i = 0; i < 10; i++) {
    fs.writeFileSync(`log-${i}.txt`, 'Hello World');
}

// Read all the files in Logs directory and join them in a string
console.log(fs.readdirSync('.').join(', '));

// Change current process back to original working directory
process.chdir('..');
