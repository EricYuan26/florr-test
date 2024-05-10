tick();

function tick() {
    calculatePetals();
    drawPetals();
    drawFlower();
    renderMobs();
    updateMobs();
    checkForCollisions();
    petalLive = [];
    setTimeout(tick, 0);
}
//d
