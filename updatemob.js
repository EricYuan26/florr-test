let mobsToDelete = []; //list of mobs to delete in the next tick, in their indicies of i. 
function updateMobs() {
    for (let i=0; i<mobData.length; i++) {
        if (mobData[i].x >= 300) {
            mobsToDelete.push(i);
        }
        if (mobData[i].type == 1) {
            null;
        }
        if (mobData[i].type == 2) {
            mobData[i].x += 1;
        }
    }
    for (let j=0; j<mobsToDelete.length; j++) {
        mobData.splice(mobsToDelete[j], 1);
    }
    mobsToDelete = [];
}
function checkForCollisions() {
    
}