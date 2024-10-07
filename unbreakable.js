function join(arr, a) {
  let res = "";
  for (let i = 0; i <= arr.length - 1; i++) {
    res += arr[i];
    if (i !== arr.length - 1) {
      res += a;
    }
  }
  return res;
}
function split(str, a) {
  let res = [];
  let rez = "";
  for (let i = 0; i < str.length; i++) {
    if (a === "") {
      res.push(str[i]);
      if (i === str.length - 1) {
        return res;
      }
      continue;
    }
    if (str.substring(i, i + a.length) === a) {
      i += a.length - 1;
      res.push(rez);
      rez = "";
      continue;
    } else {
      rez += str[i];
    }
  }
  res.push(rez);
  return res;
}
