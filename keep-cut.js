function cutFirst(str) {
  return str.slice(2);
}

function cutLast(str) {
  return str.slice(0, -2);
}
function cutFirstLast(str) {
  return str.slice(2, -2);
}
function keepFirst(str) {
  return str.slice(0, 2);
}
function keepLast(str) {
  return str.slice(-2);
}
function keepFirstLast(str) {
  if (str.length > 3) {
    let res = "";
    res += str.slice(0, 2);
    res += str.slice(-2);
    return res;
  } else {
    return str;
  }
}
