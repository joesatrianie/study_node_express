const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  if (req.url === "/") {
    res.write("<h1>welcome to our hdfdome page</h1>");
    res.end("<h2>thi s is the end</h2>");
  }
  if (req.url === "/about") {
    res.write("this is about");
    res.end();
  }
});

server.listen(5000);
