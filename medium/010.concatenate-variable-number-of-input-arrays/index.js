function concat(...args) {
  let arr = [];
  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < args[i].length; j++) {
      arr.push(args[i][j]);
    }
  }
  return arr;
}