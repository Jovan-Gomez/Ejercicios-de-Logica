function mcm(a, b) {
  return (a * b) / maxcm(a, b);
}

function maxcm(a, b) {
  var resto, aux;
  if (a < b) {
    aux = a;
    a = b;
    b = aux;
  }
  if (a % b == 0) resto = b;
  while (a % b != 0) {
    resto = a % b;
    a = b;
    b = resto;
  }
  return resto;
}

mcm(9,18);

module.exports = mcm;
