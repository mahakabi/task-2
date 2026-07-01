import path from 'path';

//
// Using path
//

// Creating filepath
const filePath = path.join('documents', 'test.txt');
console.log(filePath);

console.log(path.basename(filePath));

console.log(path.extname(filePath));

console.log(path.dirname(filePath));