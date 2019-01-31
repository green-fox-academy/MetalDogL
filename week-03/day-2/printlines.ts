// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"

'use strict';
export {}

let fs = require('fs');


function openFile (fileName: string) {
    try {
        let fileContent = fs.readFileSync('my-file.txt', 'utf-8');
        if(fileContent) {
            console.log(fileContent);
        } else {
            throw new Error('Unable to read file: my-file.txt');
        } 
    }
            catch(error) {
            console.log(error.message);
            
        }
    }

openFile('my-file.txt');