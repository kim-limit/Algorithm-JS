class Latte {
  constructor() {
    this.name = "latte";
  }
}
class Espresso {
  constructor() {
    this.name = "Espresso";
  }
}
class LatteFactory {
  static createCoffe() {
    return new Latte();
  }
}
class ExpressoFactory {
  static createCoffe() {
    return new Espresso();
  }
}

const factoryList = { LatteFactory, ExpressoFactory };

class CoffeFactory {
  // 이 클래스는 어떻게 커피는 만드는지 모름
  // 그냥 type 전달해 줄뿐임
  static createCoffee(type) {
    const factory = factoryList[type];
    return factory.createCoffe();
  }
}

const main = () => {
  // 라떼 주문
  const coffe = CoffeFactory.createCoffee("LatteFactory");
  console.log(coffe.name);
};
main();

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
console.log(target); // { a: 1, b: 4, c: 5 }
console.log(returnedTarget); // { a: 1, b: 4, c: 5 }

const jsSkill = {
  knowJS() {
    return true;
  },
};

const javaSkill = {
  knowJava() {
    return true;
  },
};

const isWorking = {
  isWorking() {
    return true;
  },
};

const frontendEngineer = Object.assign({}, jsSkill, isWorking);
const backendEngineer = Object.assign({}, javaSkill, isWorking);
const fullStackEngineer = Object.assign({}, jsSkill, javaSkill, isWorking);
console.log(frontendEngineer.isWorking());
