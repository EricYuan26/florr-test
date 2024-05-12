let numSlots = 5;
let numPetals;
let rotSpeed = 2.5;
let flowerX = 0;
let flowerY= 0;
let vy = 0;
let vx = 0;
function drawFlower() {
    ctx.beginPath();
    ctx.arc(0, 0, 40, 0, 2 * Math.PI);
    ctx.stroke();
}
function updateFlowerPos() {
    flowerY = flowerY - vy;
    flowerX = flowerX + vx;
}