const { readFile, writeFile } = require("fs");
console.log("start");
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  console.log("get first file");

  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    console.log("get second file");

    writeFile(
      "./content/result-async.txt",
      `hello there the result is : ${first}, ${second}.`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
        console.log("write result file");
      }
    );
  });
});

setTimeout(() => console.log("next"), 5);
