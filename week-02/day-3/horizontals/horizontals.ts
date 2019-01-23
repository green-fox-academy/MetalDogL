'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// draw 3 lines with that function. Use loop for that.

function lines(x: number, y: number) {
    for (let y = 0; y <= 400; y = y + 140) {
        ctx.beginPath();
        ctx.strokeStyle = "red";
        ctx.moveTo(0, y);
        ctx.lineTo(100, y);
        ctx.stroke();
    }
}
 lines(0,1);

