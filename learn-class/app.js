class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} eat some food`
  }
}

class Dog extends Animal {
  constructor(name, age, species) {
    super(name, age);
    this.species = species;
  }
  arrr() {
    return `${this.name}: arrr`
  }
}

class Cat extends Animal {
  constructor(name, age, color) {
    super(name, age);
    this.color = color;
  }
  meow() {
    return `${this.name}: meow`
  }
}