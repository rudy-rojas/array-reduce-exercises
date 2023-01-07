/*
  5) Given an array of arrays, flatten them into a single array.
  Note: Take a look at Array.concat() to help with this one

function flatten(arr) {
   // your code here    
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];
*/

// function flatten(arr) {
//   // your code here
// }

const flatten = (arr) => arr.reduce((acc,el)=> acc.concat(el) )

var arrays = [["1", "2", "3"], [true], [4, 5, 6]];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];
