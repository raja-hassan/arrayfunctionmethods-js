//map() transforms each element of an array and returns a new array of the same length

//function to each element in an array and create a new array with the results.
const numbers = [1, 2, 3];
const squaredNumbers = numbers.map(num => num * num);






//The Map object in JavaScript is a collection of key-value pairs where both the keys and values can be of any type.
// Create a new Map
const myMap = new Map();

// Set key-value pairs in the Map
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');

// Access values using keys
const valueForKey1 = myMap.get('key1');
const valueForKey2 = myMap.get('key2');

console.log('Value for key1:', valueForKey1); 
console.log('Value for key2:', valueForKey2); 

// Check if a key exists in the Map
const hasKey3 = myMap.has('key3');
console.log('Does key3 exist?', hasKey3);

// Get all keys and values from the Map
const allKeys = Array.from(myMap.keys());
const allValues = Array.from(myMap.values());

console.log('All keys:', allKeys); 
console.log('All values:', allValues);





//When you're working with arrays, the term "map" in the context of a callback function passed to array method.
// Define an array of numbers
const number = [1, 2, 3];

// Use the map() method to create a new array with doubled numbers
const doubledNumbers = number.map(num => num * 2);

console.log('Original numbers:', number);           
console.log('Doubled numbers:', doubledNumbers);