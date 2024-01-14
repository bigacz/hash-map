import LinkedList from './linkedListSet.js';

class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.buckets = [];
    this.maxSize = 16;
    this.capacity = 0;

    this.#populateBuckets();
  }

  hash(value) {
    let valueArray = value.split('');
    let hashCode = BigInt(1);

    let primeNumber = BigInt(31);
    valueArray.forEach((character) => {
      hashCode =
        primeNumber * BigInt(hashCode) + BigInt(character.charCodeAt(0));
    });

    let index = Number(hashCode % BigInt(this.maxSize));

    return index;
  }

  set(key) {
    if (this.#needsExpanding()) {
      this.#expand();
    }

    const bucketIndex = this.hash(key);
    const nodeIndex = this.buckets[bucketIndex].find(key);

    const bucket = this.buckets[bucketIndex];

    if (bucket.getSize() === 0) {
      this.capacity += 1;
    }
    bucket.append(key);
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

      if (bucket.getSize() === 0) {
        this.capacity -= 1;
      }
    }
  }

  getLength() {
    const length = this.buckets.reduce((accumulator, currentBucket) => {
      const currentSize = currentBucket.getSize();

      return accumulator + currentSize;
    }, 0);

    return length;
  }

  clear() {
    this.buckets.forEach((bucket) => {
      bucket.clear();
    });
  }

  getKeys() {
    const keys = this.buckets.reduce((accumulator, currentBucket) => {
      const currentKeys = currentBucket.getKeys();
      return accumulator.concat(currentKeys);
    }, []);

    return keys;
  }

  #populateBuckets() {
    for (let i = 0; i < this.maxSize; i += 1) {
      this.buckets[i] = new LinkedList();
    }
  }

  #expand() {
    this.maxSize *= 2;
    const entries = this.getKeys();
    this.capacity = 0;

    this.#populateBuckets();
    this.#addEntries(entries);
  }

  #addEntries(array = []) {
    array.forEach((element) => {
      this.set(element);
    });
  }

  #needsExpanding() {
    const bucketsNeeded = Math.floor(this.maxSize * this.loadFactor);
    return this.capacity >= bucketsNeeded;
  }
}

export default HashMap;
