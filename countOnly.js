// countOnly.js
// this function takes an array and an object and returns an object containing the count of the values set to  true in the passed object

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;
  
};

// export function

module.exports = countOnly;