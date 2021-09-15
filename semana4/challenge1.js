function keysAndValues(objInput = {}) {
    const keys = Object.keys(objInput).sort();
    const values = keys.map(k => objInput[k]);
    return [keys, values];
   
}

module.exports = keysAndValues;