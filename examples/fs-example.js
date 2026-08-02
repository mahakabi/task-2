// Importing using ES Modules
import fs from 'fs';

//
// Using fs
//

// Read
fs.readFile('test.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log(data);
});

// Write
fs.writeFile('output.txt', 'Not me writing!', (err) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('File written to successfully');
})

// Both
fs.writeFile('aboutme.txt', 'I am Hamzah. \nI enjoy coffee. \nLove food and hiking.', (err) => {
    if (err) {
        console.error(err);
        return;
    }

    fs.readFile('aboutme.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log(data);
    });
});