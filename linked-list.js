'use strict';

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      throw new Error('index error');
    }
    const newNode = {
      value
    };
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      const node = this._find(index - 1);
      newNode.next = node.next;
      node.next = newNode;
    }
    this.length++;
  }

  _find(index) {
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return node;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('index error');
    }
    return this._find(index).value;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('index error');
    }
    if (index === 0) {
      this.head = this.head.next;
    } else {
      const node = this._find(index - 1);
      node.next = node.next.next;
    }
    this.length--;
  }
}

const display = list => {
  let node = list.head;
  if (node === null) {
    console.log('list is empty');
  } else {
    while (node.next !== null) {
      console.log(node.value);
      node = node.next;
    }
    console.log(node.value);
  }
};

const size = list => {
  let node = list.head;
  let counter = 1;
  if (node === null) {
    console.log('size is 0');
  } else {
    while (node.next !== null) {
      counter++;
      node = node.next;
    }
    console.log('size is ' + counter);
    return counter;
  }
};

const isEmpty = list => {
  let node = list.head;
  console.log(node === null);
};

const findPrevious = (list, targetVal) => {
  let node = list.head;
  if (node === null) {
    console.log('List is empty, no previous item');
  }
  while (node.next !== null && targetVal !== node.next.value) {
    node = node.next;
  }
  return node;
};

const findLast = list => {
  let node = list.head;
  if (node === null) {
    console.log("there's nothing in here!");
  }
  while (node.next !== null) {
    node = node.next;
  }
  console.log(node.value);
};

// const findMiddle = list => {
//   let middle = Math.floor(size(list)/2);
//   if (size(list) % 2 !== 0) {
//     middle += 1;
//     return list.get(middle-1);
//   } else {
//     return list.get(middle-1), list.get(middle);
//   }
// };

const findMiddle = list => {
  let middleNode = list.head;
  let endNode = list.head;
  while(endNode !== null && endNode.next !== null) {
    middleNode= middleNode.next;
    endNode = endNode.next.next;
  }
  return middleNode;
};

const newList = new LinkedList();
console.log('before insert', newList);

newList.insert(0, 'heidi');
newList.insert(1, 'lewi');
newList.insert(2, 'tauhida');
newList.insert(3, 'tau');
// newList.insert(4, 'ta');
//console.log(newList);
// newList.remove(0);
// console.log(newList.get(1))
// display(newList);
// size(newList);
// isEmpty(newList);
// console.log(findPrevious(newList, 'tau'))
// findLast(newList);
console.log(findMiddle(newList));
