function add_suffix(suffix) {
  return function (arg) {
    return arg + suffix;
  };
}