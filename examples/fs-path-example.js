import fs from 'fs';
import path from 'path';

const testFile = path.join('data', 'test.txt');
const outputFile = path.join('data', 'output.txt');
const aboutmeFile = path.join('data', 'aboutme.txt');

// Read
fs.readFile(testFile, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log(data);
});

// Write
fs.writeFile(outputFile, 'Not me writing!', (err) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('File written to successfully');
})

// Both
fs.writeFile(aboutmeFile, 'I am Hamzah. \nI enjoy coffee. \nLove food and hiking.', (err) => {
    if (err) {
        console.error(err);
        return;
    }

    fs.readFile(aboutmeFile, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log(data);
    });
});