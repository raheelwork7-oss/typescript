"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1) Class and object - example 1
class Student {
    name;
    course;
    constructor(name, course) {
        this.name = name;
        this.course = course;
    }
}
const student = new Student("Ali", "TypeScript");
console.log(student.name, "is learning", student.course);
// Example 2
class Car {
    brand;
    color;
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
}
const myCar = new Car("Honda", "black");
console.log(myCar.brand, myCar.color);
// 2) Constructor - example 1
class Laptop {
    title;
    price;
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
const laptop = new Laptop("ThinkPad", 85000);
console.log(laptop.title, laptop.price);
// Example 2
class Player {
    name;
    game;
    constructor(name, game) {
        this.name = name;
        this.game = game;
    }
}
const player = new Player("Ali", "Cricket");
console.log(player.name, "plays", player.game);
// 3) Readonly - example 1
class SchoolCard {
    cardNumber;
    studentName;
    constructor(cardNumber, studentName) {
        this.cardNumber = cardNumber;
        this.studentName = studentName;
    }
}
const card = new SchoolCard(104, "Sara");
console.log(card.cardNumber, card.studentName);
// Example 2
class Order {
    orderNumber;
    item;
    constructor(orderNumber, item) {
        this.orderNumber = orderNumber;
        this.item = item;
    }
}
const order = new Order("ORD-21", "Headphones");
console.log(order.orderNumber, order.item);
// 4) Access modifiers - example 1: public and private
class BankAccount {
    owner;
    pin;
    constructor(owner, pin) {
        this.owner = owner;
        this.pin = pin;
    }
    checkPin(pin) {
        return this.pin === pin;
    }
}
const account = new BankAccount("Hamza", 1234);
console.log(account.owner, account.checkPin(1234));
// Example 2: protected can be used in a child class
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {
    introduce() {
        return "This dog's name is " + this.name;
    }
}
const dog = new Dog("Rocky");
console.log(dog.introduce());
// 5) Optional properties - example 1
class Member {
    name;
    phone;
    constructor(name, phone) {
        this.name = name;
        if (phone !== undefined) {
            this.phone = phone;
        }
    }
}
const member = new Member("Noor");
console.log(member.name, member.phone);
// Example 2
class Meetup {
    title;
    location;
    constructor(title, location) {
        this.title = title;
        if (location !== undefined) {
            this.location = location;
        }
    }
}
const meetup = new Meetup("Study group", "Library");
console.log(meetup.title, meetup.location);
// 6) Parameter properties - example 1
class Teacher {
    name;
    subject;
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }
}
const teacher = new Teacher("Mariam", "Math");
console.log(teacher.name, teacher.subject);
// Example 2
class Product {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    showPrice() {
        return this.price;
    }
}
const product = new Product("Keyboard", 4500);
console.log(product.name, product.showPrice());
