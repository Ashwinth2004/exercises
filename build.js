// Bundles snippets/*.txt into docs/snippets.json (button label -> code)
const fs = require("fs");
const path = require("path");

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

const data = BUTTONS.map(([label, file]) => ({
  label,
  code: fs.readFileSync(path.join(__dirname, "snippets", file + ".txt"), "utf8"),
}));
fs.writeFileSync(path.join(__dirname, "docs", "snippets.json"), JSON.stringify(data));
