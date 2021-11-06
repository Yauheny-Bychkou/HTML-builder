// const fs = require("fs");
// const path = require("path");
// const dir = path.join(__dirname, "project-dist");
// const html = path.join(__dirname, "template.html");
// const newHtml = path.join(__dirname, "project-dist", "index.html");
// const assetsDir = path.join(__dirname, "project-dist", "assets");
// const assets = path.join(__dirname, "assets");
// const components = path.join(__dirname, "components");
// const styles = path.join(__dirname, "styles");
// const newStyles = path.join(__dirname, "project-dist", "style.css");

// fs.mkdir(dir, { recursive: true }, (err) => {
//   if (err) throw err;
// });
// fs.mkdir(assetsDir, { recursive: true }, (err) => {
//   if (err) throw err;
// });
// fs.writeFile(newStyles, "", "utf-8", (err) => {
//   if (err) throw err;
// });
// fs.writeFile(newHtml, "", "utf-8", (err) => {
//   if (err) throw err;
// });

// fs.readFile(html, "utf-8", (err, content) => {
//   if (err) throw err;
//   fs.readdir(components, { withFileTypes: true }, (err, files) => {
//     if (err) throw err;
//     files.forEach((item) => {
//       fs.readFile(path.join(components, item.name), "utf-8", (err, contentOne) => {
//         if (err) throw err;
//         content = content.replace(`{{${item.name.split(".")[0]}}}`, contentOne);
//         fs.writeFile(newHtml, content, "utf-8", (err) => {});
//       });
//     });
//   });
// });

// fs.readdir(styles, (err, files) => {
//   if (err) {
//     throw err;
//   }
//   files.forEach((item) => {
//     if (item.split(".")[1] === "css") {
//       const readableStream = fs.createReadStream(path.join(styles, item));
//       readableStream.on("data", (data) => {
//         fs.appendFile(newStyles, data, (err) => {
//           if (err) {
//             throw err;
//           }
//         });
//       });
//     }
//   });
// });
// fs.readdir(assets, (err, files) => {
//   if (err) {
//     throw err;
//   }
//   files.forEach((item) => {
//     fs.mkdir(path.join(assetsDir, item), { recursive: true }, (err) => {
//       if (err) throw err;
//     });
//     fs.readdir(path.join(assets, item), (err, file) => {
//       file.forEach((elem) => {
//         fs.copyFile(path.join(assets, item, elem), path.join(assetsDir, item, elem), (err) => {
//           if (err) throw err;
//         });
//       });
//     });
//   });
// });
