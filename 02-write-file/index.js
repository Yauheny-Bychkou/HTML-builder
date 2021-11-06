const fs = require("fs");
const path = require("path");
const readline = require("readline");
const { stdin: input, stdout: output } = require("process");
const filePath = path.join(__dirname, "text.txt");
const rl = readline.createInterface({ input, output });
const { stdin, stdout } = process;

fs.writeFile(filePath, "", (err) => {
  if (err) {
    throw err;
  }
});
stdout.write(`Hello! Enter the text: `);

rl.on("line", (input) => {
  if (input.indexOf("exit") === -1) {
    fs.appendFile(filePath, `\n${input}`, (err) => {
      if (err) {
        throw err;
      }
    });
  } else if (input === "exit") {
    stdout.write("Goodbye!");
    process.exit(0);
  }
});
rl.on("close", () => {
  stdout.write("Goodbye!");
  process.exit(0);
});
