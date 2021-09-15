function isEqual(objInput1, objInput2) {
    if (JSON.stringify(objInput1) === JSON.stringify(objInput2))
        return true;
    else
        return false;
    
}

module.exports = isEqual;