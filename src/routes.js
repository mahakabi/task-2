import fs from 'fs';
import path from 'path';

import htmlController from './controllers/htmlController.js';
import callbackController from './controllers/callbackController.js';
import promiseController from './controllers/promiseController.js';
import asyncController from './controllers/asyncController.js';
import systemController from './controllers/systemController.js';

// CRUD controllers
import getUsers from './controllers/users/getUsers.js';
import createUser from './controllers/users/createUser.js';
import updateUser from './controllers/users/updateUser.js';
import deleteUser from './controllers/users/deleteUser.js';

function handleRoutes(req, res) {
    // HTML page
    if (req.url === '/') {
        return htmlController(req, res);
    }

    // About routes
    if (req.url === '/about/callback') {
        return callbackController(req, res);
    }

    if (req.url === '/about/promise') {
        return promiseController(req, res);
    }

    if (req.url === '/about/async') {
        return asyncController(req, res);
    }

    if (req.url === '/os') {
        return systemController(req, res);
    }

    // USERS ROUTES
    if (req.url === '/users' && req.method === 'GET') {
        return getUsers(req, res);
    }

    if (req.url === '/users' && req.method === 'POST') {
        return createUser(req, res);
    }

    if (req.url.startsWith('/users/') && req.method === 'PUT') {
        return updateUser(req, res);
    }

    if (req.url.startsWith('/users/') && req.method === 'DELETE') {
        return deleteUser(req, res);
    }

    // serve app.js
    if (req.url === '/app.js') {
        const filePath = path.join('public', 'app.js');

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error loading script');
                return;
            }

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/javascript');
            res.end(data);
        });

        return;
    }

        if (req.url === '/style.css') {
        const filePath = path.join('public', 'style.css');

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error loading CSS');
                return;
            }

            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/css');
            res.end(data);
        });

        return;
    }

    // fallback
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');

    res.end(JSON.stringify({
        error: 'Not Found'
    }));
}

export default handleRoutes;