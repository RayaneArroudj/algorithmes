const factorialrecursive = (n) => {
  // cas de base
  // factoriel de 0 retourne 1, c'est une convention d'usage
  if (n === 0) {
    return 1;
  } else {
    // retourne n * factorielle du nombre d'avant
    return n * factorialrecursive(n - 1);
  }
};

console.log(factorialrecursive(5));
console.log(factorialrecursive(10));
