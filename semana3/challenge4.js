function toArray(obj = {}) {
    //Implementación
    const arr = []
    for (const key in obj) {
        arr.push([key, obj[key]])
    }
    return arr;
}
module.exports = toArray;