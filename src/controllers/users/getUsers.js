import fs from 'fs';

const usersFile = 'data/users.json';

function getUsers(req, res) {
    fs.readFile(usersFile, 'utf8', (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');

            res.end(JSON.stringify({
                error: 'Failed to read users file.'
            }));
            return;
        }

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(data || '[]');
    });
}

export default getUsers;