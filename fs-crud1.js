const fs = require('fs');
const http = require('http');
const port = 9002;
const server = http.createServer((req, res) => {
    if(req.url == '/'){
        res.end("<h1> Performing FileHandling </h1>");
    }
    else if(req.url == '/createfile'){
        if(fs.existsSync("neosoft.txt")){
            res.end("File is created");
        }
        else {
            fs.writeFile("neosoft.txt", "Welcome to NeoSOFT!", (err) => {
                if (err) throw err;
                res.end('File Created');
            })
        }
    }
    else if(req.url == '/readfile') {
        if(fs.existsSync('neosoft.txt')){
            let data = fs.readFileSync("neosoft.txt");
            res.end(data.toString());
        }
        else {
            res.end("File is not exist");
        }
    }
    else if(req.url == '/addfile'){
        if(fs.existsSync('neosoft.txt')){
            fs.appendFile("neosoft.txt", "Next Text...", (err) => {
                if(err) throw err;
                else res.end("File is appended");
            })
        }
        else {
            res.end("<h1> File is not exist </h1>");
        }
    }
    else if(req.url == '/deletefile'){
        if(fs.existsSync('neosoft.txt')){
            fs.unlink('neosoft.txt', err => {
                if (err) throw err;
                else res.end("File is deleted");
            });
        }
        else {
            res.end("File is not exist");
        }
    }
    else {
        res.end("<h1> Invalid query </h1>");
    }
})

server.listen(port, (err) => {
    if(err) throw err;
    console.log(`Server is work on ${port}`);
})
