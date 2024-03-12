import { LinkedList } from "./linked_list.js";

const ll = new LinkedList();

ll.addFirst(1);
ll.addFirst(4);
ll.addFirst(6);
ll.addFirst(8);
ll.print();
reverseList(ll);
ll.print();

function reverseList(ll) {
  // la variable current contient l'élément courant, on y place la tête de la liste
  let current = ll.head;
  // On vérifie si la liste n'est pas vide et qu'elle ne contient pas qu'un élément
  if (!current || !current.next) {
    // Si c'est le cas, on sort de la fonction
    return;
  } else {
    // la liste contient au moins deux élements
    // On déclare une variable prev qui va contenir l'element précédent de chaque élément
    // Initialisé à null, carl l'élement courrant qui est la tête de le liste n'a pas d'élément avant
    let prev = null;
    // Itération sur la liste
    while (current) {
      // on récupère l'élément suivant de l'element courant qu'on stock dans une variable
      const next = current.next;
      // on réassigne la valeur suivante avec sa nouvelle valeur, qui est prev
      // Par exemple pour la head de notre liste, en inversant, la valeur suivant deviens null
      current.next = prev;
      // On peux maintenant réssigner le prev maintenant
      // avec la valeur actuelle
      prev = current;
      // On modifie ensuite next, l'element suivant avec next
      current = next;
    }
    // la nouvelle tête devient le dernier element de la liste
    ll.head = prev;
  }
}

// 8 -> 6 -> 4 -> 1 -> null
// 8 <- 6 <- 4 <- 1
// 1 -> 4 -> 6 -> 8 -> null

// Pour cette technique, on cree une nouvelle liste
function reverseList2(ll) {
  // la variable current contient l'élément courant, on y place la tête de la liste
  let current = ll.head;
  // On vérifie si la liste n'est pas vide et qu'elle ne contient pas qu'un élément
  if (!current || !current.next) {
    // Si c'est le cas, on sort de la fonction
    return;
  } else {
    // on déclare une nouvelle liste
    const reversedList = new LinkedList();
    while (current) {
      reversedList.addFirst(current.value);
      current.next;
    }
    ll.head = reversedList.head;
  }
}
