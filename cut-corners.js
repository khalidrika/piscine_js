function modulo(a, b) {
  if (a >= 0xfffffffff) {
    a = a - 0xfffffffff;
  }
  if (b === 0) {
    return;
  }
  let aa = Math.abs(a);
  let bb = Math.abs(b);

  while (aa >= bb) {
    aa -= bb;
  }
  return a < 0 ? -aa : aa;
}

function round(num) {
  if (num > 0) {
    return num + 0.5 - modulo(num + 0.5, 1);
  } else if (num < 0) {
    return num - 0.5 - modulo(num - 0.5, 1);
  }
  return num;
  //return num >= 0 ? (num + 0.5) | 0 : (num - 0.5) | 0;
}
function trunc(num) {
  return num - modulo(num, 1);
  //   return num | 0;
}
function ceil(num) {
  if (num > 0) {
    return num + 1 - modulo(num + 1, 1);
  } else if (num < 0) {
    return num - modulo(num, 1);
  }
  return num;
  //   return num > (num | 0) ? (num | 0) + 1 : num | 0;
}
function floor(num) {
  if (num > 0) {
    return num - modulo(num, 1);
  } else if (num < 0) {
    return num - 1 - modulo(num - 1, 1);
  }
  return num;

  //   return num < (num | 0) ? (num | 0) - 1 : num | 0;
}


console.log(11.54687%1);