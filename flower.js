let numSlots = 5;
let numPetals;
let rotSpeed = 2.5;
let flowerX = 0;
let flowerY= 0;
function drawFlower() {
    ctx.beginPath();
    ctx.arc(0, 0, 40, 0, 2 * Math.PI);
    ctx.stroke();
}