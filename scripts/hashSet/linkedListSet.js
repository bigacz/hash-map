class LinkedList {
  constructor() {
    this.head = null;
  }

  append(key) {
    const node = new Node(key);
    let currentNode = this.head;

    if (currentNode === null) {
      this.head = node;
      return;
    }

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
  }

  prepend(key) {
    const temp = this.head;

    const node = new Node(key, this.head);
    this.head = node;
  }

  getSize() {
    let currentNode = this.head;

    let size = 0;
    while (currentNode !== null) {
      currentNode = currentNode.next;
      size += 1;
    }
    return size;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    let currentNode = this.head;
    if (currentNode === null) {
      return null;
    }

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  getAt(indexSearched) {
    let currentNode = this.head;
    if (currentNode === null) {
      return undefined;
    }

    let currentIndex = 0;
    while (currentNode !== null) {
      if (currentIndex === indexSearched) {
        return currentNode;
      }

      currentIndex += 1;
      currentNode = currentNode.next;
    }
  }

  pop() {
    let previousNode;
    let currentNode = this.head;
    if (currentNode === null) {
      return;
    }
    if (currentNode.next === null) {
      this.head = null;
      return;
    }

    while (currentNode.next !== null) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    previousNode.next = null;
  }

  contains(searched) {
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.key === searched) {
        return true;
      }
      currentNode = currentNode.next;
    }

    return false;
  }

  find(searched) {
    let currentNode = this.head;

    let index = 0;
    while (currentNode !== null) {
      if (currentNode.key === searched) {
        return index;
      }

      index += 1;
      currentNode = currentNode.next;
    }
  }

  toString() {
    let nodeString = '';
    let currentNode = this.head;
    while (currentNode !== null) {
      nodeString += `( ${currentNode.key} ) -> `;

      currentNode = currentNode.next;
    }

    nodeString += null;

    return nodeString;
  }

  insertAt(key, insertIndex) {
    if (insertIndex === 0) {
      this.prepend(key);
      return;
    }

    let listSize = this.getSize();

    if (insertIndex === listSize) {
      this.append(key);
      return;
    }
    if (insertIndex > listSize || insertIndex < 0) {
      throw new Error('Wrong index');
    }

    let previousNode;

    let index = 0;
    let currentNode = this.head;
    while (currentNode !== null) {
      if (index === insertIndex) {
        const node = new Node(key, currentNode);
        previousNode.next = node;
      }

      index += 1;
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  removeAt(removeIndex) {
    if (removeIndex === 0) {
      this.head = this.head.next;
      return;
    }

    let listSize = this.getSize();

    if (removeIndex > listSize - 1 || removeIndex < 0) {
      console.log('elo');
      throw new Error('Wrong index');
    }

    let previousNode;

    let index = 0;
    let currentNode = this.head;
    while (currentNode !== null) {
      if (index === removeIndex) {
        previousNode.next = currentNode.next;
      }

      index += 1;
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  clear() {
    this.head = null;
  }

  getKeys() {
    let currentNode = this.head;
    let returnArray = [];

    while (currentNode !== null) {
      returnArray.push(currentNode.key);
      currentNode = currentNode.next;
    }

    return returnArray;
  }
}

class Node {
  constructor(key = null, next = null) {
    this.key = key;
    this.next = next;
  }
}

export default LinkedList;
