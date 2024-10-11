function citiesOnly(arr) {
  return arr.map((aa) => aa.city);
}

function upperCasingStates(arr) {
  return arr.map((word) =>
    word
      .split(" ")
      .map((aa) => aa.charAt(0).toUpperCase() + aa.slice(1))
      .join(" ")
  ); //arr.map((aa) => aa.charAt(0).toUpperCase() + aa.slice(1))
}

function fahrenheitToCelsius(arr) {
  return arr.map(
    (aa) => Math.floor(((Number(aa.slice(0, -2)) - 32) * 5) / 9) + "°C"
  );
}

function trimTemp(arr) {
  return arr.map((a) => ({
    ...a,
    temperature: a.temperature.replace(/\s+/g, ""),
  }));
}

function tempForecasts(arr) {
  return arr.map(
    (aa) =>
      Math.floor(
        ((Number(aa.temperature.replace(/\s+/g, "").slice(0, -2)) - 32) * 5) / 9
      ) +
      "°Celsius in " +
      aa.city +
      ", " +
      (aa.state.split(" ").map(par => par.charAt(0).toUpperCase() + par.slice(1))).join(" ")
  );
}

