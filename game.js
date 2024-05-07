tick();

function tick() {
    calculatePetals();
    drawFlower();
    setTimeout(tick, 0);
}