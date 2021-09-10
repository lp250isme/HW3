const http = require("http"); // 1 - 載入 Node.js 原生模組 http
const path = require("path");
const fs = require("fs"); // 3 - Node.js filesystem
const port = "5001";
http
  .createServer(function (request, response) {
    var filePath = "." + request.url;
    if (filePath == "./") filePath = "index.html";
    var extname = path.extname(filePath); //取得副檔名
    var contentType = "text/html";
    switch (extname) {
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
      case ".wav":
        contentType = "audio/wav";
        break;
    }

    fs.readFile(filePath, function (err, content) {
      if (err) {
        response.writeHead(404);
        response.write("This page does not exist");
        response.end();
        console.log("err:", err);
      } else {
        response.writeHead(200, {
          "Content-Type": contentType,
        });
        response.write(content, "utf-8");
        response.end();
      }
    });
  })
  .listen(port);

console.log(`Node.js web server at port ${port} is running..`);
