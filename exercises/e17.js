/**
 * Make sure to read the e17.md file!
 * For this exercise we want you to make custom `maxBy` and `minBy` methods. 
 * In order to do this it is ok to use any type of FOR loops. 
 * REQUIREMENTS: functions should:
 * * Take an array of things
 * * minBy(): Return the element where the callback function on that element yields the lowest value
 * * maxBy(): Return the element where the callback function on that element yields the highest value
 */

export function minBy(array, cb) {
  if (!array || array.length === 0) return undefined;

  let minElement = array[0];
  for (let element of array) {
    if (cb(element) < cb(minElement)) {
      minElement = element;
    }
  }
  return minElement;
}

export function maxBy(array, cb) {
  if (!array || array.length === 0) return undefined;

  let maxElement = array[0];
  for (let element of array) {
    if (cb(element) > cb(maxElement)) {
      maxElement = element;
    }
  }
  return maxElement;
}

const people = [
  { name: "jon", age: 29 },
  { name: "peter", age: 30 },
  { name: "andrey", age: 22 },
];

const youngestPerson = minBy(people, (person) => person.age);
const oldestPerson = maxBy(people, (person) => person.age);

console.log("Youngest person:", youngestPerson);
console.log("Oldest person:", oldestPerson);

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-17"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function