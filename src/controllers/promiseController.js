import { readFile } from 'fs/promises';
import path from 'path';

const aboutMeFile = path.join('data', 'aboutme.txt');

function promiseController(req, res) {
    readFile(aboutMeFile, 'utf8')
        .then((data) => {
            res.statusCode = 200;

            res.end(
                JSON.stringify({
                    about: data
                }));
        })
        .catch((err) => {
            res.statusCode = 500;

            res.end(
                JSON.stringify({
                    error: err.message
                }));
        });
}

export default promiseController;