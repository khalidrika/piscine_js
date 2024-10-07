function sign(a) {
    if (a < 0) {
        return -1;
    } else if (a > 0) {
        return 1;
    } else {
        return 0;
    };
};

function sameSign(a, b) {
    return a * b > 0 || a == b;
};