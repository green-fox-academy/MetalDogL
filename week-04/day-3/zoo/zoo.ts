'use strict'

abstract class Animal {
  name: string;
  age: number;
  hunger: number;

  constructor (animalName: string) {
    this.name = animalName;
  }

  abstract getName();
  abstract breed();
  abstract pee();
  abstract poo();
}

class Bird extends Animal {

  constructor (animalName: string) {
    super(animalName);
    this.age = 15;
    this.hunger = 15;
  }  

  getName() {
    return this.name;
  } 

  breed() {
    return 'laying eggs';
  }

  pee() {
    return 'a tiny little bit.';
  }

  poo() {
    return 'a tiny little bit';
  }
}

class Mammal extends Animal {

  constructor (animalName: string) {
    super(animalName);
    this.age = 100;
    this.hunger = 100;
  }  

  getName() {
    return this.name;
  } 

  breed() {
    return 'sweet and cute fur babies';
  }

  pee() {
    return 'hell-of-a-lot.';
  }

  poo() {
    return 'hell-of-a-lot';
  }
}

class Reptile extends Animal {

  constructor (animalName: string) {
    super(animalName);
    this.age = 50;
    this.hunger = 50;
  }  

  getName() {
    return this.name;
  } 

  breed() {
    return 'big eggs';
  }

  pee() {
    return 'fairly enough.';
  }

  poo() {
    return 'fairly enough';
  }
}

export { Bird, Mammal, Reptile }
