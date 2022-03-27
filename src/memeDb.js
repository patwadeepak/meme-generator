import memeFileNames from "./memeFileNames.json";

// const memeFileNameObject = memeFileNames.match(/^([.][jpg | png]{3})/);
// console.log(memeFileNameObject);

// const countFiles = memeFileNames
//   .replaceAll("\n", " ")
//   .split(" ")
//   .filter((item) => item !== "")
//   .sort();
// const countFilesNamesString = JSON.stringify(countFiles);

// const fs = require("fs");
// fs.writeFile("./memeFileNames.json", countFilesNamesString, "utf8", (err) => {
//   if (err) {
//     console.log(`Error writing file: ${err}`);
//   } else {
//     console.log(`File is written successfully!`);
//   }
// });

console.log(memeFileNames);
