function filter(arr, func) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            res.push(arr[i]);
        }
    }
    return res;
}

function reject(arr, func) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        if (!func(arr[i], i, arr)) {
            res.push(arr[i]);
        }
    }
    return res;
}
function partition(arr, func) {
    const istrue = [];
    const isfalse = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            istrue.push(arr[i]);
        } else {
            isfalse.push(arr[i]);
        }
    }
    return [istrue, isfalse];
}