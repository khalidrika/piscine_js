function flow(funcs) {
    return (...args) => {
        return funcs.reduce((acc, func, index) => {
            if (index === 0) {
                return func(...acc);
            }
            return func(acc);
        }, args);
    };
}