import { Bird, Mammal, Reptile } from './zoo';

let reptile = new Reptile("Crocodile");
let mammal = new Mammal("Koala");
let bird = new Bird("Parrot");

console.log("How do you breed?");
console.log("A " + reptile.getName() + " is breeding by " + reptile.breed() + ", and poos " + reptile.poo() + " and pees " + reptile.pee());
console.log("A " + mammal.getName() + " is breeding by " + mammal.breed() + ", and poos " + mammal.poo() + " and pees " + mammal.pee());
console.log("A " + bird.getName() + " is breeding by " + bird.breed() + ", and poos " + bird.poo() + " and pees " + bird.pee());