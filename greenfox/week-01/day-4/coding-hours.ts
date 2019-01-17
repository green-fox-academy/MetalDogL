'use strict';

var a = 6; // An average Green Fox attendee codes 6 hours daily
var b = 17; // The semester is 17 weeks long

var c = 5; // Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.

var f = a*b*c;  

console.log(f);

// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

var t = 52;
var r = t*b; //total working hours in 17 weeks
var p = f/r*100;  //percentage result

console.log(p);
