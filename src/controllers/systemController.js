import os from 'os';

function systemController(req, res) {
    res.statusCode = 200;

    res.end(
        JSON.stringify({
            platform: os.platform(),
            architecture: os.arch(),
            hostname: os.hostname(),
            cpus: os.cpus().length,
            uptime: os.uptime()
        })
    );
}

export default systemController;