/**
 * Make sure to read the e17.md file!
 * For this exercise we want you to make custom `maxBy` and `minBy` methods. 
 * In order to do this it is ok to use any type of FOR loops. 
 * REQUIREMENTS: functions should:
 * * Take an array of things
 * * minBy(): Return the element where the callback function on that element yields the lowest value
 * * maxBy(): Return the element where the callback function on that element yields the highest value
 */

export function minBy(array, cb, index = 1, minElement = array[0]) {
  if (!array || array.length === 0) return undefined;
  if (index >= array.length) return minElement;

  const current = array[index];
  const newMin = cb(current) < cb(minElement) ? current : minElement;

  return minBy(array, cb, index + 1, newMin);
}

export function maxBy(array, cb, index = 1, maxElement = array[0]) {
  if (!array || array.length === 0) return undefined;
  if (index >= array.length) return maxElement;

  const current = array[index];
  const newMax = cb(current) > cb(maxElement) ? current : maxElement;

  return maxBy(array, cb, index + 1, newMax);
}

const people = [
  { name: "jon", age: 29 },
  { name: "peter", age: 30 },
  { name: "andrey", age: 22 },
];

const youngestPerson = minBy(people, p => p.age);
const oldestPerson = maxBy(people, p => p.age);

console.log("Youngest person:", youngestPerson);
console.log("Oldest person:", oldestPerson);

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-17"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function