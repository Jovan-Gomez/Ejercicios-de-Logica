function arrayOfMultiples (num, length) {
    const arr = [];
    for(let i = 1; i < length + 1; i++){
        arr.push(num * i);
    }
    return arr;
}
module.exports = arrayOfMultiples;