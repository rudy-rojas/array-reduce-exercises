/*
1) Turn an array of numbers into a total of all the numbers.
function total(arr) {
   // your code here
}

console.log(total([1,2,3])); // 6
*/

function total(arr) {
  let ans = arr.reduce((acc,el)=>acc + el,0);
  return ans;
}
console.log(total([1, 2, 3]));
