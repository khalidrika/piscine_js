const tawanilard = 31557600
function dogYears(kawkab, l3marbtawani) {

    const kawakib = {
        earth : 1.0,
        mercury : 0.2408467,
        venus : 0.61519726,
        mars :1.8808158,
        jupiter : 11.862615,
        saturn : 29.447498,
        uranus : 84.016846,
        neptune : 164.79132,
    };

    const dog = (l3marbtawani / tawanilard) / kawakib[kawkab];

    const dogyour = dog * 7;

    return parseFloat(dogyour.toFixed(2));
};