function map(arr, func) {
    const res = []
    for (let i = 0; i < arr.length; i++) {
        res.push(func(arr[i], i, arr))
    }
    return res
}
function flatMap(arr, func) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        const aa = func(arr[i], i, arr);
        res = res.concat(aa);
    }
    return res;
}