const capitalizeLetters = (str='') => {
    //Implementación
    return str.split(" ").map(w => w[0].toUpperCase() + w.slice(1)).join(" ");
}

module.exports = {
    capitalizeLetters
}