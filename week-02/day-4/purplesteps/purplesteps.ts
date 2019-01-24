const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

function purplesteps (a) {
    for (let p = 0; p < 20; p++) {
        let x = 3;
        let y = 3;
        ctx.beginPath();
        ctx.fillStyle = "purple";
        ctx.fillRect(p*15, p*15, 15, 15);
    }
}

purplesteps(5);