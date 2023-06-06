class Singleton {
  static #instance;
  constructor() {
    if (Singleton.#instance) return Singleton.#instance;
    this.foo = () => console.log("I'm single");
    this.name = "kim";
    Singleton.#instance = this;
  }
}

const a = new Singleton();
const b = new Singleton();

console.log(a === b);
a.foo();

const SingletonF = (function () {
  let instance;
  function init() {
    return {
      foo: () => console.log("I'm single"),
      name: "kim",
    };
  }
  return {
    getInstance: function () {
      if (!instance) instance = init();
      return instance;
    },
  };
})();

const c = SingletonF.getInstance();
c.foo();
console.log(c.name);

class Singleton {
  static #instance;

  constructor() {
    this.foo = () => console.log("I'm single");
    this.name = "kim";
  }

  static getInstance() {
    if (!Only.#instance) Only.#instance = new Only();
    return Only.#instance;
  }
}

const newa = Only.getInstance();
const newb = Only.getInstance();
console.log(newa === newb);
console.log(newa.name);
