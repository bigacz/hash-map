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
    const index = this.hash(key);

    this.buckets[index].append([key, value]);
  }

  #populateBuckets() {
    for (let i = 0; i < this.maxSize; i++) {
      this.buckets[i] = new LinkedList();
    }
  }

  #expand() {
    this.#populateBuckets();
  }

  #needsExpanding() {
    const bucketsNeeded = Math.floor(this.maxSize * this.loadFactor);
    return this.capacity >= bucketsNeeded;
  }
}

export default HashMap;
