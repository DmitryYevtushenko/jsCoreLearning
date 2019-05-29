'use strict';

// Task: Filter range

const filterRange = (arr, minRange, maxRange) => {
  let arrInRange = arr.map(
    (arg) => {
      if (arg >= minRange || arg <= maxRange) return arg
    }
  );

  return arrInRange
};

let array = [5, 3, 8, 1];
console.log(
  filterRange(array, 1, 3)
);
