// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

'use strict';
export {}

let fs = require('fs');


function openFile (fileName: string) {
    try {
        let fileContent = fs.readFileSync('my-file.txt', 'utf-8');
        let sentence = fileContent.split("\n");
        if(fileContent) {
            console.log(sentence.length);
        } else {
            console.log('0');
        } 
    }
            catch(e) {
            
        }
    }

openFile('my-file.txt');

