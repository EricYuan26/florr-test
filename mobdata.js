var mobData = [
    /* DATA STRUCTURE:
    {
        type: //mob extension like a missile, or the mob itself
        rarity:
        x:
        y:
        hp:
    }
    */
];
spawnMob();
function spawnMob() {
    let toSpawn = 2;
    if (toSpawn == 1) {
        mobData.push(
            {
                type: 1, //rock
                rarity: 1,
                x: 60,
                y: 0,
                hp: 1000
            }
        );
    }
    if (toSpawn == 2) { 
        mobData.push(
            {
                type: 2, //ladybug
                rarity: 1,
                x: 10,
                y: 85,
                hp: 100
            }
        );
    }
    setTimeout(spawnMob, 1000);
}