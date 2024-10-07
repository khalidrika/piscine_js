let vowels = /[aeiouAEIOU]/g;
function vowelDots(str) {
  let res = [];
  for (let i = 0; i < str.length; i++) {
    if (vowels.test(str[i])) {
      res.push(str[i] + ".");
    } else {
      res.push(str[i]);
    }
  }
  return res.join("");
}