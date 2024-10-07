function multiply(a, b) {
    if (b<0){
        return -multiply(a,-b)
    }
    let res = 0;
    for (let i = 0; i < b; i++) {
        res += a;
    }
    return res;
}

function divide(a, b) {
    let res = 0;
    if (b === 0) {
        throw new Error("can't divide by zero");
    }
    let aa = Math.abs(a);
    let bb = Math.abs(b);

    while (aa>=bb) {
        aa -=bb;
        res++;
    };
    return (a < 0 && b > 0 || a >0 && b < 0 ? -res : res);
}

function modulo(a, b) {
    if (b === 0) {
        throw new Error("can't divide by zero");
    }
    let aa = Math.abs(a);
    let bb = Math.abs(b);

    while (aa>=bb) {
        aa -=bb;
    };
    return a < 0 ? -aa : aa;
}
console.log(modulo(34, 78));