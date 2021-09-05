function twoSums(numbs=[], target) {
   for (let i = 0; i < numbs.length; i++) {
       for (let j = 0; j < numbs.length; j+=1) {
           if (i !== j && (numbs[i] + numbs[j]) === target) {
            return [i, j];
           }
       } 
   }
}

module.exports = twoSums;