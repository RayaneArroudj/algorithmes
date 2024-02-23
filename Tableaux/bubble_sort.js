import arrayGenerator from "../utils/arrayGenerator.js";

function bubblesort(tableau) {
  let len = tableau.length;

  // tant qu'on a pas décrémenter tout le tableau
  while (len > 0) {
    // ici on declare un variable swap égale à false
    let swap = false;
    // on parcours le tableau à partir de l'index 1 pour pouvoir comaprer avec l'index d'avant
    for (let i = 1; i < len; i++) {
      // si la valeur de l'index en cours est inférieur à la valeur de l'index précdent
      if (tableau[i] < tableau[i - 1]) {
        // on swipe les deux, de sorte que la plus grande valeur soit toujours envoyé vers la droite du tableau
        const tmp = tableau[i];
        tableau[i] = tableau[i - 1];
        tableau[i - 1] = tmp;
        // si on swap une valeur, un change notre variable à true
        swap = true;
      }
    }
    // si la variable swap ne passe pas à true en sortant de la boucle for, celà veux dire que notre tableau est dejà trié
    // donc on peux sortir de la fonction de suite, il s'gait d'une optimisation de l'algorithme
    if (!swap) {
      break;
    }
    // ici on décremente de 1 à chaque fois avant de recommencer
    len--;
  }
}

const tableau = arrayGenerator(20, 200);
console.log(tableau);
bubblesort(tableau);
console.log(tableau);
