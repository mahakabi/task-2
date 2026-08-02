import fs from 'fs';

const usersFile = 'data/users.json';

function updateUser(req, res) {
    const id = parseInt(req.url.split('/')[2]);

    let body = '';

    req.on('data', chunk => {
        body += chunk.toString();
    });

    req.on('end', () => {
        try {
            const updatedData = JSON.parse(body);

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

                const userIndex = users.findIndex(u => u.id === id);

                if (userIndex === -1) {
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'application/json');

                    res.end(JSON.stringify({
                        error: 'User not found'
                    }));
                    return;
                }

                users[userIndex] = {
                    ...users[userIndex],
                    ...updatedData
                };

                fs.writeFile(usersFile, JSON.stringify(users, null, 2), (err) => {
                    if (err) {
                        res.statusCode = 500;
                        res.setHeader('Content-Type', 'application/json');

                        res.end(JSON.stringify({
                            error: 'Failed to update user'
                        }));
                        return;
                    }

                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');

                    res.end(JSON.stringify(users[userIndex]));
                });
            });
        } catch (err) {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');

            res.end(JSON.stringify({
                error: 'Invalid JSON body'
            }));
        }
    });
}

export default updateUser;