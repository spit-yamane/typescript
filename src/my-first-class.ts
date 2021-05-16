export {};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `${this.name}の年齢は${this.age}歳`;
  }
}
let taro = new Person('Taro', 28);
console.log(taro.profile());
// let hanako = new Person();
