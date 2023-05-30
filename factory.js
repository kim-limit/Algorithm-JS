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
