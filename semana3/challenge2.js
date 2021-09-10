function minMax(aNumbs = []) {
    //Implementación
  aNumbs.length <=1 && false;
  const max = Math.max(...aNumbs);
  const min = Math.min(...aNumbs);
  return {min, max};
}

//minMax([4,6,2,7,3])
module.exports = minMax;