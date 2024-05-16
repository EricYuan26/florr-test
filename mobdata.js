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
    let toSpawn = 1;
    if (toSpawn == 1) {
        mobData.push(
            {
                type: 1, //rock
                rarity: 1,
                x: 0,
                y: 0,
                hp: 10,
                hb: 30,
            }
        );
    }
    if (toSpawn == 2) { 
        mobData.push(
            {
                type: 2, //ladybug
                rarity: 1,
                x: 100,
                y: 130,
                hp: 10,
                hb: 70,
            }
        );
    }
    setTimeout(spawnMob, 1000);
}