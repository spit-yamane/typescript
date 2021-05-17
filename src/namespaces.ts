export {};

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person('山根');
console.log(me.name);
const meOsaka = new Japanese.Osaka.Person('山やん');
console.log(meOsaka.name);
const michael = new English.Person('Michael', 'Joseph', 'Jackson');
console.log(michael);
