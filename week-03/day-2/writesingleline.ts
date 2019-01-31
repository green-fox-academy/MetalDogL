// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"
'use strict';
export {}

let fs = require('fs');

function writeTo(newContent: string) {
   try {
       fs.readFileSync('my-file.txt');   // first I read the file if there is an error, the file that I want to write to
       fs.writeFileSync('my-file.txt', newContent);
   }  catch (error) {               // then I catch the error if there is any
       console.log('Unable to write file: my-file.txt');   }
};


writeTo('Lili Ivany');