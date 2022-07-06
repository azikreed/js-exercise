function countTrue(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      result += 1;
    } else if (!arr[i]) {
      result += 0;
    }
  }

  return result;
}
