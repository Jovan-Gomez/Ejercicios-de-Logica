const reverseString = (str = '') => {
    //Implementación
    if(Number(str) || str.length > 15 || str.length <= 1)
        throw new Error('Tipo de dato o longitud no admitidos.');
    return str.split("").reverse().join("");
}

module.exports = {
    reverseString
}