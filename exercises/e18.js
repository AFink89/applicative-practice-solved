/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */
import { data } from "../data/data.js";

export function getGreatestDiscoveryYear(data) {
  const discoveriesByYear = {};

  for (let asteroid of data.asteroids) {
    const year = asteroid.discoveryYear;
    discoveriesByYear[year] = (discoveriesByYear[year] || 0) + 1;
  }

  const yearCounts = Object.entries(discoveriesByYear).map(([year, count]) => ({
    year: Number(year),
    count,
  }));

  function maxBy(array, cb) {
    if (!array || array.length === 0) return undefined;
    let maxElement = array[0];
    for (let element of array) {
      if (cb(element) > cb(maxElement)) {
        maxElement = element;
      }
    }
    return maxElement;
  }

  const greatest = maxBy(yearCounts, (item) => item.count);

  return greatest.year;

}

console.log(getGreatestDiscoveryYear(data));

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
