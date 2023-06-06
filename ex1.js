var OnlyOne = /** @class */ (function () {
  function OnlyOne(name) {
    this.name = name;
  }
  OnlyOne.getInstance = function () {
    if (!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne("싱글턴 객체");
    }
    return OnlyOne.instance;
  };
  return OnlyOne;
})();

let only_one = new OnlyOne("오류 발생"); // 정상 작동
let special_one = new OnlyOne("스페셜 원"); // 새로운 인스턴스 생성!
let normal_one = new OnlyOne("노멀 원"); // 새로운 인스턴스 생성!!
console.log(only_one === special_one);
