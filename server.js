
const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // if (req.url === '/') {
  //   fs.readFile(
  //     path.join(__dirname, 'public', 'home.html'),
  //     (err, content) => {
  //       if (err) throw err;
  //       res.writeHead(200, { 'ContentType': 'text/html' });
  //       res.end(content);
  //     }
  //   )
  // }

  // if (req.url === '/api/users') {
  //   const users = [
  //     { name: 'John Doe', age: 54 },
  //     { name: 'Sarah Groom', age: 33 }
  //   ];
  //   res.writeHead(200, { 'ContentType': 'application/json' });
  //   res.end(JSON.stringify(users));
  // }

  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "home.html" : req.url
  );

  let ext = path.extname(filePath);

  let contentType = "text/html";

  switch (ext) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  if (contentType == "text/html" && ext == "") filePath += ".html";
  console.log(filePath);

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(404, { ContentType: "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        res.writeHead(500);
        res.end(`Server error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { ContentType: contentType });
      res.end(content, "utf8");
    }
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is started on port ${PORT}`));
