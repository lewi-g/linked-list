"use strict";

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
      const node = this._find(index-1);
      newNode.next = node.next;
      node.next = newNode;
    }
    this.length++;
  }

  _find(index) {
    let node = this.head;
    for (let i=0; i<index; i++) {
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
      const node = this._find(index-1);
      node.next = node.next.next;
    }
    this.length--;
  } 
}


const newList = new LinkedList;
console.log('before insert', newList);

newList.insert(0, 'heidi');
newList.insert(1, 'lewi');
newList.insert(2, 'tauhida');
console.log(newList);
newList.remove(0);
console.log(newList.get(1))