function isSpecialArray (specialArr = []) {
  let counter = 0;
  specialArr.forEach((v, i)=>{
    if (v % 2 === 0 && i % 2 === 0) counter += 1;
    if (v % 2 === 1 && i % 2 === 1) counter += 1;
  });

  return counter === specialArr.length ? true : false; 
  
}

module.exports = isSpecialArray;