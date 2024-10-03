// Create a script that will do the following:
/*
Remove Log Files
- remove all the files from the Logs directory, if exists
- output the file names to delete
- remove the Logs directory, if exists
*/
// Hint: use the fs module and path module, and the process current working directory to build directory path. It is acceptable, to have a remove.js script and separate add.js script.

const fs = require('fs');
const path = require('path');
const os = require('os');

const dir = path.join(os.homedir(), 'Logs');

// Check if the Logs directory exists
if (fs.existsSync(dir)) {
    // Read all the files in the Logs directory
    const files = fs.readdirSync(dir);
    // Loop through all the files and delete them
    files.forEach(file => {
        fs.unlinkSync(path.join(dir, file));
        // Log the file name to the console
        console.log(`Deleted ${file}`);
    });
    // Remove the Logs directory
    fs.rmdirSync(dir);
    console.log('Removed Logs directory');
} 
else {
    console.log('Logs directory does not exist');
}
