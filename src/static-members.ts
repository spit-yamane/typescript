export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Tomonori';
  static lastName: string = 'Yamane';
  static work() {
    // return "Hey, guys! Are you interested in Typescript? Let's dive into TypeScript!";
    return `Hey, guys! This is ${this.firstName}! Are you interested in Typescript? Let's dive into TypeScript!`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());
