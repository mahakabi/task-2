import fs from 'fs';

const usersFile = 'data/users.json';

function deleteUser(req, res) {
    const id = parseInt(req.url.split('/')[2]);

    fs.readFile(usersFile, 'utf8', (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');

            res.end(JSON.stringify({
                error: 'Failed to read users file.'
            }));
            return;
        }

        const users = JSON.parse(data || '[]');

        const userExists = users.some(u => u.id === id);

        if (!userExists) {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'application/json');

            res.end(JSON.stringify({
                error: 'User not found'
            }));
            return;
        }

        const updatedUsers = users.filter(u => u.id !== id);

        fs.writeFile(usersFile, JSON.stringify(updatedUsers, null, 2), (err) => {
            if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');

                res.end(JSON.stringify({
                    error: 'Failed to delete user'
                }));
                return;
            }

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');

            res.end(JSON.stringify({
                message: 'User deleted successfully'
            }));
        });
    });
}

export default deleteUser;