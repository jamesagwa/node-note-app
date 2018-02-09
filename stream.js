const fs = require('fs');

const file = fs.createReadStream('greetings.txt');

file.pipe(process.stdout);
