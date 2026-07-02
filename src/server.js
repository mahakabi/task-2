import http from 'http';
import handleRoutes from './routes.js';

const server = http.createServer((req, res) => {
    handleRoutes(req, res);
});

export default server;