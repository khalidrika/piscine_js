function removeFirstZeroIP(ips) {
    for (let i = 0; i < ips.length; i++) {
        if (ips[i] === '0.0.0.0') {
            ips.splice(i, 1); 
            break; 
        }
    }
    return ips;
}

function findIP(str) {
    let matches = /((25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(:(6553[0-5]|655[0-2]\d|65[0-4]\d{2}|6[0-4]\d{3}|[1-5]?\d{1,4}))?\b/g;
    let ips = str.match(matches);
    return removeFirstZeroIP(ips); 
}