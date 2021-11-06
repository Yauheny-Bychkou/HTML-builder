// const fs = require("fs");
// const path = require("path");
// const filePath = path.join(__dirname, "text.txt");
// fs.writeFile(filePath, "", (err) => {
//   if (err) {
//     throw err;
//   }
// });
// const { stdin, stdout } = process;
// stdout.write("Введите текст ");
// stdin.on("data", (data) => {
//   const dataStringified = data.toString();
//   if (dataStringified.indexOf("exit") === -1) {
//     fs.appendFile(filePath, data, (err) => {
//       if (err) {
//         throw err;
//       }
//     });
//   } else {
//     stdout.write("Прощай...");
//     process.exit();
//   }
// });
