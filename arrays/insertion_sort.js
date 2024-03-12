import arrayGenerator from "../utils/arrayGenerator.js";

function insertionSort(tableau) {
  // on part de l'index 1
  for (let i = 1; i < tableau.length; i++) {
    let currentValue = tableau[i];
    let j;
    // ici j est égle donc à la valeur d'avant par rapport à i
    // j doit être supérieur ou égale à 0 pour être sur de bien être dans le tableau
    // la valeur de J doit être supérieur à la valeur de I
    for (j = i - 1; j >= 0 && tableau[j] > currentValue; j--) {
      // on réinjecte la valeur de J dans j + 1
      tableau[j + 1] = tableau[j];
    }
    // j + 1 (qui est égale à -1 car on est sortis de la condition de la boucle) est égale à value
    tableau[j + 1] = currentValue;
  }
}

const tableau = arrayGenerator(20, 200);
console.log(tableau);
insertionSort(tableau);
console.log(tableau);
