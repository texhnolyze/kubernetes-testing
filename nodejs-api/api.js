const http = require('http');
const port = 8080;

const requestHandler = (request, response) => {
  console.log(request.url);
  const json = {name: "test", version: "0.0.1" };
  response.end(json);
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
});
