const os = require('node:os');
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const sourcPath= path.resolve(__dirname,'./data.txt');
const filedata=fs.readFileSync(sourcPath,'utf-8');
console.log(filedata)

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(filedata+os.userInfo().username);
    res.end();
}).listen(3000,()=>{
    console.log('Server is running on port 3000');
});      

