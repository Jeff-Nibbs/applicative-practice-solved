export function minBy(array, cb) {
  if (!array || array.length === 0) {
    return undefined;
  } else {
    let minNumber = array
      .map(cb)
      .reduce((prev, current, index) =>
        current < prev ? [current, index] : prev
      );
    return array[minNumber[1]];
  }
}

export function maxBy(array, cb) {
  if (!array || array.length === 0) {
    return undefined;
  } else {
    let maxNumber = array
      .map(cb)
      .reduce((prev, current, index) =>
        current > prev ? [current, index] : prev
      );
    return array[maxNumber[1]];
  }
}
