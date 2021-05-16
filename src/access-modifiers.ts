export {};

class Person {
  public name: string;
  protected age: number;
  protected natonality: string;
  constructor(name: string, age: number, natonality: string) {
    this.name = name;
    this.age = age;
    this.natonality = natonality;
  }

  profile(): string {
    return `${this.name}の年齢は${this.age}歳`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, natonality: string) {
    super(name, age, natonality);
  }

  profile(): string {
    return `${this.name}の年齢は${this.age}歳、国籍は${this.natonality}`;
  }
}

let taro = new Person('Taro', 28, 'Japan');
console.log(taro.name);
// console.log(taro.age);
console.log(taro.profile());

// let hanako = new Person();
