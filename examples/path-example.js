import path from 'path';

//
// Using path
//

// Creating filePath
const filePath = path.join('documents', 'test.txt');
console.log(filePath);

// Usage
console.log('File Name: ', path.basename(filePath));

console.log('Extension: ', path.extname(filePath));

console.log('Directory: ', path.dirname(filePath));