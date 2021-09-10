function countPrimes(number) {
    //Implementación
    const arr = []
    number <= 0 &&  0;
    for(let candidato = 2; candidato <= number; candidato++) {
        let primo = true;
        for(let divisor=2; divisor < candidato; divisor++) {
            if(candidato%divisor === 0) {
               primo = !primo
                break;
            }
        }
        if(primo) arr.push(candidato);
    }
    return arr.length;
}


module.exports = countPrimes;