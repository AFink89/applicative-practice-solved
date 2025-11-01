/**
 * Make sure to read the e16.md file!
 * For this exercise we want you to make a custom `find` method. 
 * In order to do this it is ok to use any type of FOR loops.
 * REQUIREMENT: A find function should
 * * Take an array of things
 * * Return a the first thing where the applied callback is truthey
 * The function MUST NOT use the find() method.
 */

const people = [
  { name: "Scobee", id: 1 },
  { name: "Bri", id: 2 },
  { name: "Carly", id: 3 },
  { name: "John", id: 4 },
  { name: "Bryce", id: 5 },
  { name: "Dawn", id: 6 }
];

export function find(array, callback, index = 0) {
  if (index >= array.length) return undefined;
  if (callback(array[index])) return array[index];
  return find(array, callback, index + 1);
}

const personName = find(people, person => person.name === "Scobee")?.name;
console.log(personName);

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function