const multiplicationConst = (Math.sqrt(5) - 1) / 2;

class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.buckets = [];
    this.maxSize = 16;
    this.capacity = 0;
  }

  // TODO: improve for longer strings (converts to 0 after threshold)
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

  // #expand() {}
  //
  // #needsExpanding() {
  //   if (key.size) {
  //   }
  // }
}

export default HashMap;
