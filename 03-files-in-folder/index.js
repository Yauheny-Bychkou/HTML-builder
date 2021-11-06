// const fs = require("fs");
// const path = require("path");
// const filePath = path.join(__dirname, "secret-folder");
// const arr = [];

// fs.readdir(filePath, { withFileTypes: true }, (err, files) => {
//   if (err) {
//     throw err;
//   }
//   files.forEach((item) => {
//     if (item.isFile()) {
//       arr.push(item);
//     }
//   });
//   arr.forEach((elem) => {
//     const pathh = path.join(__dirname, "secret-folder", elem.name);
//     fs.stat(pathh, (err, stats) => {
//       if (err) {
//         throw err;
//       }

//       console.log(`${elem.name.split(".")[0]} - ${path.extname(elem.name).split(".")[1]} - ${stats.size / 1024}kb`);
//     });
//   });
// });
