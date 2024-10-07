function ionOut(str) {
  let res = /\w*t(?=ion)/g;

  return str.match(res) || [];
}
