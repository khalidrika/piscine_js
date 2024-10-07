function letterSpaceNumber(str) {
  let res = /(\w\s\d\b)/g;
  if (str.match(res)) {
    return str.match(res);
  } else {
    return [];
  }
}
