/*
  6) Given an array of potential voters, return an object representing the results of the vote
  Include how many of the potential voters where in the ages 18-25, how many
  form 26-35, how many from 36-55, and how many of each of those age
  rages actually voted. The resulting object containing this data should
  have 6 properties. See the example output at the bottom.

  var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
   // your code here
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4 
}
*/

var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

// function voterResults(arr) {
//  // your code here
// }
const voterResults = (arr) => {
  let numYoungVotes = arr.reduce(
    (acc, el) => (el.age >= 18 && el.age <= 25 && el.voted ? acc + 1 : acc),
    0
  );
  let numYoungPeople = arr.reduce(
    (acc, el) => (el.age >= 18 && el.age <= 25 ? acc + 1 : acc),
    0
  );
  let numMidVotesPeople = arr.reduce(
    (acc, el) => (el.age >= 26 && el.age <= 35 && el.voted ? acc + 1 : acc),
    0
  );
  let numMidsPeople = arr.reduce(
    (acc, el) => (el.age >= 26 && el.age <= 35 ? acc + 1 : acc),
    0
  );
  let numOldVotesPeople = arr.reduce(
    (acc, el) => (el.age >= 36 && el.voted ? acc + 1 : acc),
    0
  );
  let numOldsPeople = arr.reduce(
    (acc, el) => (el.age >= 36 ? acc + 1 : acc),
    0
  );
  return {
    numYoungVotes: numYoungVotes,
    numYoungPeople: numYoungPeople,
    numMidVotesPeople: numMidVotesPeople,
    numMidsPeople: numMidsPeople,
    numOldVotesPeople: numOldVotesPeople,
    numOldsPeople: numOldsPeople,
  };
};

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
numYoungPeople: 4,
numMidVotesPeople: 3,
numMidsPeople: 4,
numOldVotesPeople: 3,
numOldsPeople: 4 
}
*/
