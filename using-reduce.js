function adder(arrNum, initVal = 0) {
  return arrNum.reduce((contor, num) => contor + num, initVal);
}
function sumOrMul(arrnum, initval = 0) {
  return arrnum.reduce((contor, num) => num % 2 === 0 ? contor * num : contor + num ,initval);
}
function funcExec(arrNum, ini =0) {
  return arrNum.reduce((acc, num) => num(acc), ini);
}