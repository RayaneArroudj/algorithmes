class StaticArr {
  constructor() {
    this.value = new Array(0);
  }

  // AJOUTER UN ELEMENT //
  insertItemAtBegening(item) {
    const newArray = new Array(this.value.length + 1);
    newArray[0] = item;

    for (let i = 0; i < this.value.length; i++) {
      newArray[i + 1] = this.value[i];
    }
    this.value = newArray;
  }

  insertItemAtEnd(item) {
    const newArray = new Array(this.value.length + 1);
    let i = 0;
    while (i < this.value.length) {
      newArray[i] = this.value[i];
      i++;
    }
    newArray[i] = item;
    this.value = newArray;
  }

  insertItemAtPosition(item, position) {
    if (position < 0 || position > this.value.length) {
      throw new Error("bad input");
    } else {
      const newArray = new Array(this.value.length + 1);
      for (let i = 0; i < this.value.length + 1; i++) {
        if (i === position) {
          newArray[i] = item;
        } else if (i < position) {
          newArray[i] = this.value[i];
        } else {
          newArray[i] = this.value[i - 1];
        }
      }
      this.value = newArray;
    }
  }

  // SUPPRIMER UN ELEMENT //
  removeFirstitem() {
    if (this.value.length === 0) {
      return;
    } else {
      const newArr = new Array(this.value.length - 1);
      for (let i = 1; i < this.value.length; i++) {
        newArr[i - 1] = this.value[i];
      }
      this.value = newArr;
    }
  }

  removeLastitem() {
    if (this.value.length === 0) {
      return;
    } else {
      const newArr = new Array(this.value.length - 1);
      for (let i = 0; i < this.value.length - 1; i++) {
        newArr[i] = this.value[i];
      }
      this.value = newArr;
    }
  }

  removeIyemAt(position) {
    if (!this.value[position]) {
      return;
    } else {
      const newArr = new Array(this.value.length - 1);
      for (let i = 0; i < this.value.length - 1; i++) {
        if (i < position) {
          newArr[i] = this.value[i];
        } else if (i > position) {
          newArr[item - 1] = this.value[i];
        }
      }
      this.value = newArr;
    }
  }
}

const newArr = new StaticArr();

newArr.insertItemAtBegening("a");
newArr.insertItemAtEnd("c");
newArr.insertItemAtEnd("b");
newArr.insertItemAtPosition("F", 1);
newArr.removeFirstitem();
newArr.removeLastitem();
newArr.removeIyemAt(1);

console.log(newArr);
