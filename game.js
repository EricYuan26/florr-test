tick();

function tick() {
    calculatePetals();
    drawPetals();
    petalLive = [];
    drawFlower();
    setTimeout(tick, 0);
}
//d
