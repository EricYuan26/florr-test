let mobsToDelete = []; //list of mobs to delete in the next tick, in their indicies of i. 
function updateMobs() {
    for (let i=0; i<mobData.length; i++) {
        if (mobData[i].hp <= 0) {
            mobsToDelete.push(i);
        }
        if (mobData[i].type == 1) {
            null;
        }
        if (mobData[i].type == 2) {
            mobData[i].x += Math.random()-0.5;
        }
    }
    for (let j=0; j<mobsToDelete.length; j++) {
        mobData.splice(mobsToDelete[j], 1);
    }
    //console.log(mobData);
    mobsToDelete = [];
}
function checkForCollisions() {
    for (let i=0; i<mobData.length; i++) {
        for (let j=0; j<petalLive.length; j++) {
            if (Math.sqrt(((mobData[i].x - flowerX) - (petalLive[j].x - flowerX))**2 + ((mobData[i].y - flowerY) - (petalLive[j].y - flowerY))**2) <= (mobData[i].hb + petalLive[j].hb)) { // THIS FUNCTION IS VERY STRANGE WITH MOVEMENT HELP AAAAAAAAA
                mobData[i].hp -=petalLive[j].damage;
                //console.log(mobData[i]);
            } else {
                //console.log("nb not touching");
            }
        }
    }
}