let petalAngle = 0;
let petalData = [
    {
        type: 1,
        rarity: 1
    },
    {
        type: 1,
        rarity: 1
    },
    {
        type: 1,
        rarity: 2
    },
    {
        type: 1,
        rarity: 5
    },
    {
        type: 1,
        rarity: 7
    }
];
let petalLive = [];
//-----------------------------------------------------------------------------------------------------------------------------------------
let increment;
function calculatePetals() {
    ctx.clearRect(-0.5*c.width, 0.5*c.height, c.width, -c.height);
    petalAngle = petalAngle + rotSpeed/1000;
    setupLivePetalList();
    increment = 2*Math.PI/petalLive.length;
    console.log(petalLive);
    petalLive = [];
}

function lookupPetal(petalType, petalRarity) {
    for (let i = 0; i < rarityData.length; i++) {
        if (rarityData[i].type === petalType && rarityData[i].rarity === petalRarity) {
            return rarityData[i];
        }
    }
    return null; // If no match found
}
function setupLivePetalList() {
    for (let i=0; i< petalData.length; i++) {
        let petal = lookupPetal(petalData[i].type, petalData[i].rarity);
        let tempAngle = increment + i;
        for (let j=0; j<petal.amt; j++) {
            petalLive.push(
                {
                    angle: tempAngle, 
                    distMult: petal.distMult, 
                    x: null, 
                    y: null,
                    hb: petal.hb
                }
            );
        }
    }
}