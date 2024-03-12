import unsortedArrayGenerator from "../utils/unsortedArrayGenerator.js";

const arr = unsortedArrayGenerator(10, 10);
console.log(arr);

function swap(arr, i, j) {
  if (j !== i) {
    const tmp = arr[j];
    arr[j] = arr[i];
    arr[i] = tmp;
  }
}

function partition(arr, left, right) {
  //le pivot est choisit aléatoirement
  let randomIndex = Math.floor(Math.random() * (right - left + 1) + left);
  // on swap le pivot avec la derniere valeur du tableau
  swap(arr, randomIndex, right);
  const pivot = arr[right];
  // index qui va servir à  la permutation des elements inférieurs au pivot et la permutation du pivot en fin de partitionnement
  let i = left - 1;
  // index j qui va itérer sur tous les elements du tableau / sous tableau
  // commence à la position i + 1
  for (let j = left; j < right; j++) {
    // on compare l'element à la position j, si il est inferieur au pivot
    if (arr[j] < pivot) {
      // on permute la position i et incremente index i
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, right);
  return i + 1;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivot = partition(arr, left, right);
    // on appel recursivement la fonction sur la partie gauche du pivot et sur la partie droite
    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);
  }
}

quickSort(arr);
console.log(arr);
