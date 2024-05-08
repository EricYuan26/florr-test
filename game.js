tick();

function tick() {
    calculatePetals();
    drawPetals();
    petalLive = [];
    drawFlower();
    renderMobs();
    updateMobs();
    setTimeout(tick, 0);
}
//d
