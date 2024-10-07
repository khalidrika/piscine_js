function pyramid(str, num) {
  let res = "";
  for (let i = 1; i <= num; i++) {
    let spaces = " ".repeat((num - i) * str.length);
    res += spaces + str.repeat(2 * i - 1);
    if (i != num) {
      res += "\n";
    }
  }
  return res;
}