let fs = require("fs");

const filename = "./data/appendFile.txt";

fs.appendFile(filename, "Hello World!", function (err) {
  if (err) throw err;
  console.log("File savd: " + filename);
});
