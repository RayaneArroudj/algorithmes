import { LinkedList, Node } from "./linked_list.js";

const ll = new LinkedList();

function sortLinkedList(ll) {
  let current = ll.head;
  // Vérifier si la liste a au moins deux éléments à trier, sinon pas besoin de le faire
  if (!current || !current.next) {
    return;
  } else {
    // on crée une nouvelle liste chainée
    const sortedList = new LinkedList();
    // On commence par ajouté un element à liste quis ervira de point de comparaison pour l'insertion suivante
    sortedList.addFirst(current.value);
    // On selectionne le second element de la liste à trier comme element courant
    current = current.next;
    // On itère sur les élements de la liste non triée avec une boucle
    while (current) {
      // On déclare une variable avec pour valeur le premier element de la nouvelle liste
      let sortedHead = sortedList.head;
      // pour chaque itération sur la liste non triée
      // on considère avec une boucle imbriqué les elements de la liste triée
      // on décale le point d'insertion vers la droite
      // si l'element à insérer est supérieur à l'element considéré dans la liste triée
      while (sortedHead.next && sortedHead.next.value < current.value) {
        // si c'est le cas on continue d'avance dans notre liste
        sortedHead = sortedHead.next;
      }
      // Dans le cas ou dans la liste on a qu'une valeur et qu'elle est supérieur à la valeur
      // que l'on considere, il faut donc les echanger
      if (sortedHead.value > current.value) {
        sortedList.head = new Node(current.value, sortedHead);
      } else {
        // Sinon nous l'insérons au point d'insertion qui est le dernier element
        // qui est inférieur à l'element considéré
        sortedHead.next = new Node(current.value, sortedHead.next);
      }
      // on parcours notre liste à chaque itération
      current = current.next;
    }
    // On modifie la propriét" head de la liste actuelle et on passe la reference de la nouvelle liste
    ll.head = sortedList.head;
  }
}

ll.addFirst(1);
ll.addFirst(4);
ll.addFirst(6);
ll.addFirst(8);
ll.print();
sortLinkedList(ll);
ll.print();
