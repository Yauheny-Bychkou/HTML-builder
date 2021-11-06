const fs = require("fs");
const path = require("path");
const fsPromises = fs.promises;
const fileFiles = path.join(__dirname, "files");
const fileCopy = path.join(__dirname, "files-copy");

const copyFolder = async () => {
  await fsPromises.mkdir(fileCopy, { recursive: true });
};
const copyFiles = async () => {
  await fs.readdir(fileFiles, (err, items) => {
    items.forEach((item) => {
      fs.copyFile(path.join(fileFiles, item), path.join(fileCopy, item), (err) => {
        if (err) {
          throw err;
        }
      });
    });
  });
};
console.log("test");
copyFolder();
copyFiles();
