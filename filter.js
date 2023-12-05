//filter() basic syntax
//const newArray = array.filter(callback(element[, index[, array]])[, thisArg]);

//filtering the numbers:
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);



//Filtering Strings Longer Than a Certain Length:
const words = ['apple', 'banana', 'kiwi', 'orange'];
const longWords = words.filter(word => word.length > 5);



//Filtering Objects Based on a Property:
const people = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 }
  ];
  const adults = people.filter(person => person.age >= 30);
  // adults is now [{ name: 'John', age: 30 }, { name: 'Bob', age: 35 }]

  

//Filtering Falsy Values:
const values = [0, false, '', null, undefined, NaN, 42];
const truthyValues = values.filter(Boolean);
// truthyValues is now [42]