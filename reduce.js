//array.reduce(callback(accumulator, currentValue[, currentIndex[, array]])[, initialValue])
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15




//Finding Maximum Value:
const number = [4, 2, 7, 1, 9];
const max = number.reduce((acc, currentValue) => Math.max(acc, currentValue), -Infinity);
// max is now 9




//Counting Occurrences:
const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const wordCount = words.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});
// wordCount is now { apple: 3, banana: 2, orange: 1 }



//Flatten an Array of Arrays:
const arrays = [[1, 2], [3, 4], [5, 6]];
const flattened = arrays.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
// flattened is now [1, 2, 3, 4, 5, 6]

