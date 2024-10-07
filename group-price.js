function groupPrice(str) {
  let res = [];
  let ress = [];
  let prex = /(\$|USD)(\d+).(\d+)/g;
  let matches = str.matchAll(prex);

  for (const match of matches) {
    res.push(match[0]); // Full matched price
    res.push(match[2]); // Integer part of the price
    res.push(match[3]); // Decimal part of the price
    if (str.match(prex)) {
      ress.push(res);
      res = [];
    }
  }
  return ress;
}
