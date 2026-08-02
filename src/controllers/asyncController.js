import { readFile } from 'fs/promises';
import path from 'path';

const aboutMeFile = path.join('data', 'aboutme.txt');

async function asyncController(req, res) {
    try {
        const data = await readFile(aboutMeFile, 'utf8');

        res.statusCode = 200;

        res.end(
            JSON.stringify({
                about: data
            }));
    } catch (err) {
        res.statusCode = 500;

        res.end(
            JSON.stringify({
                error: err.message
            }));
    }
}

export default asyncController;