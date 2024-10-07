function RNA(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "C":
        result += "G";
        break;
      case "G":
        result += "C";
        break;
      case "T":
        result += "A";
        break;
      case "A":
        result += "U";
        break;
    }
  }
  return result;
}

function DNA(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      switch (str[i]) {
        case "C":
          result += "G";
          break;
        case "G":
          result += "C";
          break;
        case "U":
          result += "A";
          break;
        case "A":
          result += "T";
          break;
      }
    }
    return result;
}
