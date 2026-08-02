import fs from 'fs';

const usersFile = 'data/users.json';

function createUser(req, res) {
    let body = '';

    req.on('data', chunk => {
        body += chunk.toString();
    });

    req.on('end', () => {
        try {
            const newUser = JSON.parse(body);

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

                const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;

                const userAdd = {
                    id: newId,
                    ...newUser
                };

                users.push(userAdd);

                fs.writeFile(usersFile, JSON.stringify(users, null, 2), (err) => {
                    if (err) {
                        res.statusCode = 500;
                        res.setHeader('Content-Type', 'application/json');

                        res.end(JSON.stringify({
                            error: 'Failed to save user.'
                        }));
                        return;
                    }

                    res.statusCode = 201;
                    res.setHeader('Content-Type', 'application/json');

                    res.end(JSON.stringify(userAdd));
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

export default createUser;