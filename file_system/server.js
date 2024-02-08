let fs = require("fs");

const filename = "./data/newFile_" + Date.now() + ".txt";

fs.open(filename, "w", function (err, files) {
  if (err) throw err;

  console.log("File saved: " + filename);
});
