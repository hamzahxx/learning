// FIRST CASE
console.log("\nFIRST CASE");

const num = 5;
const word = "hello";
try {
  console.log(num.toUpperCase());
} catch (e) {
  console.log("Nahi ho raha run kyuki " + e);
}

// SECOND CASE
console.log("\nSECOND CASE");

let meraNaam = "Hamzah";

try {
  meraNaam();
} catch (e) {
  console.log("waow " + e + "\n");
}
