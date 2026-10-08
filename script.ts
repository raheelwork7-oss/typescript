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

  
}

const product = new Product("Keyboard", 4500);
console.log(product.name, product.showPrice());
