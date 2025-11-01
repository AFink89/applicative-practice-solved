/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */
import { data } from "../data/data.js";

export function getGreatestDiscoveryYear(data) {
  const discoveriesByYear = data.asteroids.reduce((acc, asteroid) => {
    const year = asteroid.discoveryYear;
    acc[year] = (acc[year] || 0) + 1;
    return acc;
  }, {});

  const yearCounts = Object.entries(discoveriesByYear).map(([year, count]) => ({
    year: Number(year),
    count,
  }));

  const greatest = yearCounts.reduce((max, item) => {
    return item.count > max.count ? item : max;
  }, yearCounts[0]);

  return greatest.year;
}

console.log(getGreatestDiscoveryYear(data));

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
