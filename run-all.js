// =====================================================================
// run-all.js
// Runs all five solutions one after another so you can see every answer
// with a single command:   node run-all.js     (or: npm start)
//
// require("...") loads another JavaScript file and runs it. Each
// solution file prints its own results with console.log, so simply
// loading them is enough.
// =====================================================================

require("./solutions/01-fizzbuzz.js");
console.log(""); // prints an empty line to separate the sections

require("./solutions/02-count-occurrences.js");
console.log("");

require("./solutions/03-reverse-number.js");
console.log("");

require("./solutions/04-temperature-classifier.js");
console.log("");

require("./solutions/05-find-largest.js");
