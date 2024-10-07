function indexOf(arr, a, b = 0) {
    for (let i = b; i < arr.length; i++) {
       if (arr[i] == a) {
           return i;
       }
    }
    return -1;
}

function lastIndexOf(arr, a, b = arr.length-1) {
    for (let i = b; i >= 0 ; i--) {
       if (arr[i] == a) {
           return i;
       }
    }
    return -1;
}

function includes(arr, a) {
    for (let i = 0; i < arr.length; i++) {
       if (arr[i] == a) {
           return true;
       }
    }
    return false;
}