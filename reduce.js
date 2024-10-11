function fold(arr, func, altor = 0) {

    for (let i = 0; i < arr.length; i++) {
        altor = func(altor, arr[i])
    }
    return altor
}
function foldRight(arr, func, altor = 0) {

    for (let i = arr.length - 1; i >= 0; i--) {
        altor = func(altor, arr[i])
    }
    return altor
}
function reduce(arr, func) {
    let altor = arr[0]
    for (let i = 1; i < arr.length; i++) {
        altor = func(altor, arr[i], i, arr)
    }
    return altor
}
function reduceRight(arr, func) {
    let altor = arr[arr.length -1]
    for (let i = arr.length - 2; i >= 0; i--) {
        altor = func(altor, arr[i], i, arr)
    }
    return altor
}