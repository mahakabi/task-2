import http from 'http';

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    
    if (req.url === '/') {
        res.statusCode = 200;
        
        res.end(JSON.stringify({ message: 'Home Page' }));
    } else if (req.url === '/about') {
        res.statusCode = 200;

        res.end(JSON.stringify({ message: 'About Page' }));
    } else {
        res.statusCode = 404;

        res.end(JSON.stringify({ error: 'Not Found' }));
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});