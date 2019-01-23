'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

/* let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function makingMatches(a: string[], b: string[]) {
    let newArray: string[] = [];
    for (let i = 0; i < b.length; i++) {
        if (boys[i] !== undefined && girls !== undefined) {

            newArray[i] = boys[i] + ',' + girls[i];
        } else {
            newArray[i] = boys[i];
        }
      
    }
    return newArray;
}

console.log(makingMatches(boys, girls)); */

export = makingMatches;

var girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
var boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function makingMatches(bojok: string[], lyanyok: string[]) {
   let newarray: string[] = [];
   for (let i = 0; i < bojok.length; i++) {
       if (lyanyok[i] !== undefined && bojok[i] !== undefined) {

           newarray[i] = bojok[i] + ', ' + lyanyok[i];
       }

       else {
           newarray[i] = bojok[i];
       }
   }
   return newarray;
}

console.log(makingMatches(boys, girls));