function chunk(arr, num) {
  let res = [];
  let dat = [];
  for (let i = 0; i < arr.length; i += num) {
    res.push(arr.slice(i, i + num));
  }
  return res;
}
