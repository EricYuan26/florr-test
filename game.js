tick();

function tick() {
    ctx.clearRect(-0.5*c.width, 0.5*c.height, c.width, -c.height);
    
    calculatePetals();
    drawPetals();
    drawFlower();
    renderMobs();
    checkForCollisions();
    updateMobs();

    
    petalLive = [];
    setTimeout(tick, 0);
}
//d
