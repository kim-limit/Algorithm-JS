class Hashtable {
  constructor() {
    this.data = [];
    this.size = 0;
  }

  hash(key) {
    const chars = key.split("");
    const charCodes = chars.map((char) => char.charCodeAt());
    const charCodeSum = charCodes.reduce((acc, cur) => acc + cur);

    return charCodeSum;
  }

  set(key, value) {
    const hash = this.hash(key);

    if (!this.data[hash]) {
      this.data[hash] = [];
    }

    this.data[hash].push([key, value]);
    this.size++;
  }

  get(key) {
    const hash = this.hash(key);

    if (this.data[hash]) {
      for (const item of this.data[hash]) {
        if (item[0] === key) {
          return item;
        }
      }
    }
  }

  keys() {
    const keys = [];

    for (let bucket of this.data) {
      if (bucket) {
        for (let item of bucket) {
          keys.push(item[0]);
        }
      }
    }

    return keys;
  }

  values() {
    const values = [];

    for (let bucket of this.data) {
      if (bucket) {
        for (let item of bucket) {
          values.push(item[1]);
        }
      }
    }

    return values;
  }

  entries() {
    const entries = [];

    for (let bucket of this.data) {
      if (bucket) {
        for (let item of bucket) {
          entries.push(item);
        }
      }
    }

    return entries;
  }
}

const hashTable = new Hashtable();

hashTable.set("kim", 100);
console.log(hashTable.get("kim"));
console.log(hashTable);
