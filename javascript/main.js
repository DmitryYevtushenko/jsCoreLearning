'use strict';

// Task: Filter range
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filterRange = (arr, minRange, maxRange) => {
  let arrInRange = arr.filter(
    (arg) => (arg >= minRange && arg <= maxRange)
  );

  return arrInRange
};

console.log(
  filterRange(array, 0, 3),
  array
);
