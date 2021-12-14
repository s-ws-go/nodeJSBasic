const fs = require('fs');

const read = fs.createReadStream('./fs/readme2.txt');
const create = fs.createWriteStream('text4.txt');

read.pipe(create);

console.log(process);
