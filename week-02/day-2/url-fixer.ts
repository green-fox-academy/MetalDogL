'use strict';
export {}
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';

//method 1
function fixurl (a: string) {
    let array1: string [] = a.split("");
    array1.splice(5, 0, ":");
    array1.splice(-4, 4, "odds");
    let output: string = array1.join("");
    return output;
}
console.log(fixurl(url));

//method 2

let url: string = 'https//www.reddit.com/r/nevertellmethebots';
url = url.replace('bots', 'odds');
url = url.replace('https', 'https:');

console.log(url);
