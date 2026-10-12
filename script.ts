                            // 1) Class and object __ example 1
class Student {
  name: string;
  course: string;

  constructor(name: string, course: string) {
    this.name = name;
    this.course = course;
  }
}

const student = new Student("Ali", "Css");
console.log(student.name, "is learning", student.course);

// Example 2

class Car {
  brand: string;
  color: string;

  constructor(brand: string, color: string) {
    this.brand = brand;
    this.color = color;
  }
}

const myCar = new Car("Honda", "black");
console.log(myCar.brand, myCar.color);

                        // 2) Constructor  example 1

class Laptop {
  title: string;
  price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}

const laptop = new Laptop("ThinkPad", 85);
console.log(laptop.title, laptop.price);

// Example 2

class Player {
  name: string;
  game: string;

  constructor(name: string, game: string) {
    this.name = name;
    this.game = game;
  }
}

const player = new Player("Hasan", "Cricket");
console.log(player.name, "plays", player.game);

                                // 3) Readonly  example 1


class Order {
  readonly orderNumber: string;
  item: string;

  constructor(orderNumber: string, item: string) {
    this.orderNumber = orderNumber;
    this.item = item;
  }
}

const order = new Order("ORD1", "Bottle");
console.log(order.orderNumber, order.item);

                  // 4) Access modifiers example 1: public and private

                  class BankAccount {
  public owner: string;
  private pin: number;

  constructor(owner: string, pin: number) {
    this.owner = owner;
    this.pin = pin;
  }

  checkPin(pin: number): boolean {
    return this.pin === pin;
  }
}

const account = new BankAccount("Hamza", 1234);
console.log(account.owner, account.checkPin(1234));

// Example 2: 

class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Dog extends Animal {
  introduce(): string {
    return "This dog's name is " + this.name;
  }
}

const dog = new Dog("Rocky");
console.log(dog.introduce());

  
                      // 6) Parameter properties - example 1

class Teacher {
  constructor(public name: string, public subject: string) {}
}

const teacher = new Teacher("Mariam", "Math");
console.log(teacher.name, teacher.subject);

// Example 2

class Product {
  constructor(
    public name: string,
    private price: number,
  ) {}


  showPrice(): number {
    return this.price;
  }
}

const product = new Product("Keyboard", 4500);
console.log(product.name, product.showPrice());

// 7) Getter and setter example

class Person {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    this._name = newName;
  }
}

const person = new Person("Ayesha");
console.log(person.name);
person.name = "Sara";
console.log(person.name);

// 8) Static member example

class School {
  static name: string = "City School";

  static showName(): string {
    return School.name;
  }
}

console.log(School.showName());

// 9) Abstract class and method example

abstract class Shape {
  abstract area(): number;
}

class Rectangle extends Shape {
  constructor(
    private width: number,
    private height: number,
  ) {
    super();
  }

  area(): number {
    return this.width * this.height;
  }
}

const rectangle = new Rectangle(4, 5);
console.log(rectangle.area());
