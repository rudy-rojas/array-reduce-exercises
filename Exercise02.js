/*
2) Turn an array of numbers into a long string of all those numbers.
function stringConcat(arr) {
   // your code here 
}

console.log(stringConcat([1,2,3])); // "123"
*/

function stringConcat(arr) {
  // your code here 
  return arr.reduce((acc,el)=>`${acc}${el}`,'');
}

console.log(stringConcat([1,2,3])); // "123"