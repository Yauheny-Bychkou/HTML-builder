const fs = require("fs");
const path = require("path");
const { copyFile, readdir } = require("fs/promises");
const copyDirPath = path.resolve(__dirname, "files-copy");
const pathDir = path.resolve(__dirname, "files");

fs.mkdir(copyDirPath, { recursive: true }, (err) => {
  if (err) throw err;
});

async function copyFiles() {
  const copyfiles = await readdir(copyDirPath);
  for (const file of copyfiles) {
    let fileCopy = path.resolve(copyDirPath, file);
    fs.unlink(fileCopy, (err) => {
      if (err) throw err;
    });
  }
  const files = await readdir(pathDir);
  for (const file of files) {
    let fileCopy = path.resolve(copyDirPath, file);
    let originalFile = path.resolve(pathDir, file);
    await copyFile(originalFile, fileCopy);
  }
}

copyFiles();
