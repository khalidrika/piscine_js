function slice(arr, start = 0, end = arr.length) {
  if (start < 0) {
    start = arr.length + start;
  }
  if (end < 0) {
    end = arr.length + end;
  }

  let rez = [];
  for (let i = start; i < end; i++) {
    rez.push(arr[i]);
    //push (append slice)
  }
  return typeof arr === "string" ? rez.join("") : rez;
}