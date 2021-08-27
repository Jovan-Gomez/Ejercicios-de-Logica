const reverseInt = (number=0) => {
    //Implementación
    if(number.length)
        throw new Error('Tipo de dato no admitido.');
    if(number.toString().split("")[0] === '-')
        return parseInt('-'+number.toString().split("").reverse().join(""));
    else
        return Number(number.toString().split("").reverse().join(""));
}
module.exports = {
    reverseInt
}