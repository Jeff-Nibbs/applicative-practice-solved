// see e16.md

export function find(array, callback) {
  let answer = [];
  for (let element of array) {
    if (callback(element) && answer.length === 0) {
      answer.push(element);
    }
  }
  if (answer.length < 1) {
    return undefined;
  } else {
    return answer[0];
  }
}
