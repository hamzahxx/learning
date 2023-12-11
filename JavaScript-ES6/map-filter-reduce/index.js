//Map - Filter - Reduce Starts here
var arr = [3, 56, 2, 48, 5];

var twoXArr = arr.map(function (x) {
  return x * 2;
});

var filteredArr = arr.filter(function (x) {
  return x > 10;
});

var reduced = arr.reduce(function (total, current) {
  return (total += current);
});

console.log(arr);
console.log(twoXArr);
console.log(filteredArr);
console.log(reduced);

//Arrow function starts here

var squareArrow = arr.map((x) => x * x);

console.log(squareArrow);
