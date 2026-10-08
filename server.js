const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

// button label -> snippet file
const BUTTONS = [
  ["BANK ", "BANK"],
  ["MOD IN NOD", "MOD_IN_NOD"],
  ["MUL RT WEB N", "MUL_RT_WEB_N"],
  ["CLI SVR CON", "CLI_SVR_CON"],
  ["MUL RT EXP", "MUL_RT_EXP"],
  ["REQ HAN", "REQ_HAN"],
  ["SQ", "SQ"],
  ["SO", "SO"],
  ["C", "C"],
  ["GQ", "GQ"],
];

http.createServer((req, res) => {
  if (req.url === "/api/snippets") {
    const data = BUTTONS.map(([label, file]) => ({
      label,
      code: fs.readFileSync(path.join(__dirname, "snippets", file + ".txt"), "utf8"),
    }));
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(data));
  }
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(fs.readFileSync(path.join(__dirname, "public", "index.html")));
}).listen(PORT, () => console.log(`Open http://localhost:${PORT}`));
