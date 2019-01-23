'use strict';
export {}
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected output:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let myTodo: string = "My todo:\n"; 
let Buy: string = '- Buy milk\n';
let Download: string = "- Download games\n";
let Diablo: string = "\t- Diablo\n";

let todoText = myTodo.concat(Buy, Download, Diablo);


console.log(todoText);