const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "project-dist", "bundle.css");
const fileStyle = path.join(__dirname, "styles");

fs.readdir(fileStyle, (err, files) => {
  if (err) {
    throw err;
  }
  files.forEach((item) => {
    if (item.split(".")[1] === "css") {
      const readableStream = fs.createReadStream(path.join(fileStyle, item));

      readableStream.on("data", (data) => {
        fs.appendFile(filePath, data, (err) => {
          if (err) {
            throw err;
          }
        });
      });
    }
  });
});
