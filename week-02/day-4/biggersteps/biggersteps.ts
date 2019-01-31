'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]


function biggerSteps (a) {
    let x = 0;
    let w = 10;
    for (let p = 0; p < 8; p++) {
        ctx.beginPath();
        ctx.fillStyle = "purple";
        ctx.fillRect(x, x, w, w);
        x = x + w;
        w = w + 10;  
    }
}

biggerSteps(5);

