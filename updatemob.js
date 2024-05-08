function updateMobs() {
    for (let i=0; i<mobData.length; i++) {
        if (mobData[i].x >= 300) {
            mobData.splice(i, 1);
            
        }
        if (mobData[i].type == 1) {
            null;
        }
        if (mobData[i].type == 2) {
            mobData[i].x += 1;
        }
    }
}