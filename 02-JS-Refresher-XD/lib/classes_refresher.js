// making a class
 class Person {
   constructor(name, age) {
     this.name = name;
     this.age = age;
   }

   printDetails() {
     console.log(`name: ${this.name}, age: ${this.age}`);
   }
 }

// we can inherit from other classes to access their instance variables/properties and their instance methods
// we need the extends keyword with the name of the other class
// and we need to call the super(); method in the inheritor class

class Human extends Person {
  constructor(name, age, gender) {
    super();
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  printHumanDetails() {
    console.log(`name:${this.name}, age:${this.age}, gender:${this.gender}`);
  }
}

// as you can see below, we can make a new human, and then call methods from both the person class and the human class on them

const james = new Human("James", 21, "male");
console.log(james);
james.printDetails();
james.printHumanDetails();
