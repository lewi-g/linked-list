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


//Find length of the list 
//subtract 3
// node.next.next.next
// when finalNode.next = null, then we wanna go back 3 and return that node
// If the node we loop onto has a next.next value of null, that's the node we want. return
const findThirdFromLast = list => {

  let node = list.head
  // console.log(endNode)
  if (node.next.next === null) {
    console.error('this list has less than 3 items');
    return 'this list has less than 3 items';
  }
  let endNode = list.head.next.next.next;
  while (endNode !== null) {
    endNode = endNode.next
    node = node.next
  }
  return node;
}


//list.head.next.next = list.head.next
//how do we step backwards through the list?
//go to the end.
// if node = list.head,
//   node.next = list.head.next
// while node.next != null
//assign list.head.next = null 
//for item =list.head 
//until we get to end


const newList = new LinkedList();
// console.log('before insert', newList);

newList.insert(0, 'heidi');
newList.insert(1, 'lewi');
// newList.insert(2, 'tauhida');
// newList.insert(3, 'tau');
// newList.insert(4, 'ta');
//console.log(newList);
// newList.remove(0);
// console.log(newList.get(1))
// display(newList);
// size(newList);
// isEmpty(newList);
// console.log(findPrevious(newList, 'tau'))
// findLast(newList);
// console.log(findMiddle(newList));
console.log(findThirdFromLast(newList));
