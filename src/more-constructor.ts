export {};

class Person {
  constructor(public name: string, protected age: number) {}
}

const me = new Person('山根', 28);
console.log({ me });
