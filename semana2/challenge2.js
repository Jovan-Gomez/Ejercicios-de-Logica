'use strict'
function divisibleByLeft(n) {
  return [...String(n)].map((num, i, arr)=>num % arr[i - 1] === 0);
}

module.exports = divisibleByLeft;