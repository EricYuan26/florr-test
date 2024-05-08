function renderMobs() {
    for (let i=0; i<mobData.length; i++) {
        if (mobData[i].type == 1 || mobData[i].type == 2) {
            ctx.beginPath();
            ctx.arc(mobData[i].x + flowerX, mobData[i].y + flowerY, mobData[i].rarity*25, 0, 2 * Math.PI);
            ctx.stroke();
        }
    }
}