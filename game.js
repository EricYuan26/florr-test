setTimeout(function (){
    document.getElementById("center").style.display = "none";
    document.getElementById("ctx").style.display = "block";
    document.body.style.backgroundColor = "white";
    /* for (let sus=0; sus<=100; sus++) {
        document.body.style.backgroundColor = `rgb(${2.55 * sus}, ${2.55 * sus}, ${2.55 * sus})`;
    } */
}, 100);

tick();
function tick() {
    ctx.clearRect(-0.5*c.width, 0.5*c.height, c.width, -c.height);

    //checkWASD();
    updateFlowerPos();
    calculatePetals();
    drawPetals();
    drawFlower();
    renderMobs();
    checkForCollisions();
    updateMobs();

    
    petalLive = [];
    if (disconnected == 0) {
        setTimeout(tick, 0);
    } else {
        document.getElementById("disconnect").style.display = "block";
        document.body.style.backgroundColor = "black";
    }
}
//d