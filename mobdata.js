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
                y: Math.random() * 35,
                hp: 1000
            }
        );
    }
    setTimeout(spawnMob, 100000);
}