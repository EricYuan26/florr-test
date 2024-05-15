/* function drawPetals() {
    for (let i=0; i<a; i++) {
        for (let f=0; f<petalData[i].amt; f++) {
            if (f==0) {
                ctx.beginPath();
                ctx.arc(petalLive[i].x, petalLive[i].y, 10, 0, 2 * Math.PI);
                ctx.stroke();
            } else {
                
            }
        }
    }
} */
function drawPetals() {
    for (let i=0; i<petalLive.length; i++) {
        ctx.beginPath();
        ctx.arc(petalLive[i].x, petalLive[i].y, petalLive[i].hb, 0, 2 * Math.PI);
        ctx.stroke();
        /* let img = new Image();
        img.src = "m28.png";
        ctx.drawImage(img, petalLive[i].x - 0.5*img.width/petalLive[i].hb, petalLive[i].y - 0.5*img.height/petalLive[i].hb, petalLive[i].hb, petalLive[i].hb); */
        //ctx.drawImage(img, null, null, null, null, petalLive[i].x, petalLive[i].y, petalLive[i].hb, petalLive[i].hb);
    }
}