function get(src, path) {
  const keys = path.split(".");
  let res = src;
  for (let key of keys) {
    if (res === undefined) {
      return undefined;
      0;
    }
    res = res[key];
  }
  return res;
}