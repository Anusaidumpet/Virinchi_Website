const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
// console.log(ctx);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particlesArray = [];

window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const mouse = {
    x: null,
    y: null,
}
// on click dots appear function
canvas.addEventListener('click', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    drawCircle();
    // by removing drawcircle dots and mover  it should be worked thoriugh animation also
    // console.log(event);
});
// on mouse mover drawns the required manner by operating
canvas.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    // drawCircle();
})


// function drawCircle(){
//     ctx.fillStyle = 'blue';
// ctx.strokeStyle = 'red';
// ctx.lineWidth = 15;
// ctx.beginPath();
// ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
// ctx.stroke();
//     ctx.fill();
// }
// drawCircle();
class Particle {
    constructor() {
        // this.x = mouse.x;
        // this.y = mouse.y;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedy = Math.random() * 3 - 1.5;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedy;
    }
    draw() {
        ctx.fillStyle = 'blue';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        // ctx.stroke();
        ctx.fill();
    }
}
function init() {
    for (let i = 0; i < 100; i++) {
        particlesArray.push(new Particle());
    }
}
init();
// console.log(particlesArray)
function handleParticles() {
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw()
    };
}


//  animation the circle moves over the mouse 
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    // commentong it with draw circle
    // drawCircle();
    requestAnimationFrame(animate);
}
animate();

// console.log(ctx);