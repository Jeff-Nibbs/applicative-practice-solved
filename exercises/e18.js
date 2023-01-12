import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  let answer = [];
  let counter = {};
  let highScore = 0;

  let yearArray = data.asteroids.map(
    (asteroidYear) => asteroidYear.discoveryYear
  );

  yearArray.forEach((year) => {
    counter[year] = (counter[year] || 0) + 1;
    if (counter[year] > highScore) {
      highScore = counter[year];
      answer = [year];
    }
    if (counter[year] === highScore) {
      answer.push(year);
    }
  });
  return answer[0];
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
