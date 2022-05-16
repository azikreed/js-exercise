function amplify(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i % 4 === 0) {
      result.push(i * 10);
    } else {
      result.push(i);
    }
  }
  return result;
}
