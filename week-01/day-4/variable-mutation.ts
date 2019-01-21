'use strict';
export {}

let a: number = 3;
a += 10; // make it bigger by 10
console.log(a);

let b: number = 100;
b -= 7; // make it smaller by 7
console.log(b);

let c: number = 44;
c *= 2; // double c's value
console.log(c);

let d: number = 125;
d /= 5; // divide d's value by 5
console.log(d);

let e: number = 8;
// what's the cube of e's value?
console.log(Math.pow(8,3));


let f1: number = 123;
let f2: number = 345;
// tell if f1 is bigger than f2 (as a boolean)
if (f1 < f2) {
    console.log("Yay it is true!");
}


let g1: number = 350;
let g2: number = 200;
// tell if the double of g2 is bigger than g1 (pras a boolean)
if (g2 * 2 > g1) {
    console.log("Yes, double g2 is bigger than g1!");
}

let h: number = 1357988018575474;
// tell if 11 is a divisor of h (as a boolean)
if (h % 11 === 0) {
    console.log("Yes, 11 is a divisor of h");
}


let i1: number = 10;
let i2: number = 3;
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)
if (i1 > i2 * i2 && i1 < i2 * i2 * i2) {
    console.log("Yes, it is true");
}

let j: number = 1521;
// tell if j is divisible by 3 or 5 (as a boolean) WRONG
if (j % 3 === 0 || j % 5 === 0){
    console.log('Yeah, number j divisible with 3 or 5!');
}


let k: string = 'Apple';
// fill the k variable with its content 4 times    WRONG
k = k + " " + k + " " + k + " " + k;
console.log(k);

