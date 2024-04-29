function drawPetals(x,y) {
    for (i=0; i<=petalLive.length; i++) {
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, 2 * Math.PI);
        ctx.stroke();
        console.log(x + "," + y);
    }
}