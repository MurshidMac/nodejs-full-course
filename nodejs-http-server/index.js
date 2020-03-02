const http = require('http');
const port = 3000;

const requestHandler = (request, response) =>{
    console.log(request.url);
    response.end('Hello from nodejs server');
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if(err){
        return console.log('somethings not right', err)
    }
    console.log('a simple http server is running in port 3000');
});

