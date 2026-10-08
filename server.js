const http = require("http");
const fs = require("fs");
const path = require("path");

require("./build");

const PORT = 3000;
const TYPES = { ".html": "text/html", ".json": "application/json" };

http.createServer((req, res) => {
  const file = req.url === "/snippets.json" ? "snippets.json" : "index.html";
  res.writeHead(200, { "Content-Type": TYPES[path.extname(file)] });
  res.end(fs.readFileSync(path.join(__dirname, "docs", file)));
}).listen(PORT, () => console.log(`Open http://localhost:${PORT}`));
