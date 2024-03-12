import sortedArrayGenerator from "../utils/sortedArrayGenerator.js";

const array = sortedArrayGenerator(100);
const numberToGuess = Math.floor(Math.random() * 100);
console.log(numberToGuess);

function binarySearch(array, numberToGuess, start, end) {
  // cas de base car on fonctionne en recursif
  // si l'index de début se retrouve à être supérieur à l'index de fin c'est qu'on a pas trouver le
  // numberto guss donc on retourne null
  if (start > end) {
    return null;
  } else {
    // le mid correspond à la moitié de notre tableau
    const mid = Math.floor((start + end) / 2);
    // si la valeur du mid est égal à numbertoguess alors on peux sortir de la fonction
    if (array[mid] === numberToGuess) {
      return mid;
      // si la valeur de mid est supérieur à numbertoguess on cherche coté gauche du tableau
    } else if (array[mid] > numberToGuess) {
      // on rappel la fonction en recursif en adaptant les valeurs de recherche
      return binarySearch(array, numberToGuess, start, mid - 1);
      // si la valeur de mid est inférieur à numbertoguess on cherche coté droit du tableau
    } else {
      // on rappel la fonction en recursif en adaptant les valeurs de recherche
      return binarySearch(array, numberToGuess, mid + 1, end);
    }
  }
}

const result = binarySearch(array, numberToGuess, 0, array.length - 1);
console.log("resultat : ", result);
