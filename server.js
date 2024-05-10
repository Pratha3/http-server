const http = require("http");
const fs = require("fs");
const port = 8081;
const requestHandler = (request, response) => {
  let filename = "";
  switch (request.url) {
    case "/":
      filename = "./index.html";
      break;
    case "/about":
      filename = "./about.html";
      break;
    default:
      filename = "blog.html";
  }
  console.log(request.url);
  // response.end("Hello Node.js Server!");
  fs.readFile(filename, (err, data) => {
    if (err) {
      response.end("404 Not Found");
    } else {
      response.end(data);
    }
  });
};
const server = http.createServer(requestHandler);
server.listen(port, (err) => {
  if (err) {
    console.log("something bad happened");
    return false;
  }
  console.log(`server is listening on ${port}`);
});
