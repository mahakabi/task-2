import fs from 'fs';
import path from 'path';

const htmlFile = path.join('public', 'index.html');

function htmlController(req, res) {
    fs.readFile(htmlFile, 'utf8', (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');

            res.end(
                JSON.stringify({
                    error: 'Failed to load HTML page.'
                }));

            return;
        }

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');

        res.end(data);
    });
}

export default htmlController;