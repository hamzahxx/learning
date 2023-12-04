var arr = [5, 23, 50, 8, 14];

var twoXArr = arr.map((x) => x * 2);

var filteredArr = arr.filter((x) => x > 10);

var reduced = arr.reduce((total, current) => (total += current));

console.log(twoXArr);
console.log(filteredArr);
console.log(reduced);
