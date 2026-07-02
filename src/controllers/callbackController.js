import fs from 'fs';
import path from 'path';

const aboutMeFile = path.join('data', 'aboutme.txt');

function callbackController(req, res) {
    fs.readFile(aboutMeFile, 'utf8', (err, data) => {
        if (err) {
            res.statusCode = 500;

            res.end(
                JSON.stringify({
                    error: 'Failed to read file.'
                }));

            return;
        }

        res.statusCode = 200;

        res.end(
            JSON.stringify({
                about: data
            }));
    });
}

export default callbackController;