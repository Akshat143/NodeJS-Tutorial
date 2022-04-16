const http = require("http");
const fs = require("fs");

const PORT = process.env.PORT;
const home = fs.readFileSync("./index.html", "utf-8");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end(home);
  }
  if (req.url === "/about") {
    return res.end("<h1>About Page");
  }
  if (req.url === "/contact") {
    return res.end("<h1>Contact Page");
  }
  if (req.url === "/service") {
    return res.end("<h1>Service Page");
  } else {
    return res.end("<h1>404 Page not found!");
  }
});

server.listen(PORT, () => {
  console.log(`Server is working`);
});
