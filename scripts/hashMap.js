import LinkedList from './linkedList.js';

const multiplicationConst = (Math.sqrt(5) - 1) / 2;

class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.buckets = [];
    this.maxSize = 16;
    this.capacity = 1;

    this.#populateBuckets();
  }

  // TODO: improve for longer strings (converts to 0 after certain threshold).
  hash(value) {
    let valueArray = value.split('');
    let hashCode = 1;

    let primeNumber = 31;
    valueArray.forEach((character) => {
      hashCode = primeNumber * hashCode + character.charCodeAt(0);
    });

    let index = Math.floor(
      this.maxSize * ((hashCode * multiplicationConst) % 1)
    );

    return index;
  }

  set(key, value) {
    if (this.#needsExpanding()) {
      this.#expand();
    }

    const bucketIndex = this.hash(key);
    const nodeIndex = this.buckets[bucketIndex].find(key);

    const bucket = this.buckets[bucketIndex];

    if (nodeIndex !== undefined) {
      const node = bucket.getAt(nodeIndex);
      node.value = value;
    } else {
      bucket.append(key, value);
    }
  }

  get(key) {
    const hash = this.hash(key);
    const bucket = this.buckets[hash];

    const nodeIndex = bucket.find(key);
    if (nodeIndex !== undefined) {
      const node = bucket.getAt(nodeIndex);

      return node.value;
    }

    return null;
  }

  has(key) {
    const hash = this.hash(key);
    const bucket = this.buckets[hash];

    const nodeIndex = bucket.find(key);
    if (nodeIndex !== undefined) {
      return true;
    }

    return false;
  }

  remove(key) {
    const hash = this.hash(key);
    const bucket = this.buckets[hash];

    const nodeIndex = bucket.find(key);
    if (nodeIndex !== undefined) {
      bucket.removeAt(nodeIndex);
    }
  }

  getLength() {
    const length = this.buckets.reduce((accumulator, currentBucket) => {
      const currentSize = currentBucket.getSize();

      return accumulator + currentSize;
    }, 0);

    return length;
  }

  #populateBuckets() {
    for (let i = 0; i < this.maxSize; i += 1) {
      this.buckets[i] = new LinkedList();
    }
  }

  #expand() {
    //
    // TODO
    //
    this.#populateBuckets();
  }

  #needsExpanding() {
    const bucketsNeeded = Math.floor(this.maxSize * this.loadFactor);
    return this.capacity >= bucketsNeeded;
  }
}

export default HashMap;
