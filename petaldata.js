let petalAngle = 0;
let petalData = [
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
        rarity: 3
    },
    {
        type: 1,
        rarity: 7  
    },
    {
        type: 1,
        rarity: 8
    }
];
let petalLive = [];
let petalHealth = [];
//-----------------------------------------------------------------------------------------------------------------------------------------
let increment;
function calculatePetals() {
    if (petalAngle <= 2*Math.PI) {
        petalAngle = petalAngle + rotSpeed/1000;
    } else {
        petalAngle = 0;
    }
    setupLivePetalList();
    increment = (2*Math.PI)/petalLive.length;
    regulatePetalDist();
    //the delete line is in game.js
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
    let rec = 0;
    for (let i=0; i< petalData.length; i++) {
        let petal = lookupPetal(petalData[i].type, petalData[i].rarity);
        for (let j=0; j<petal.amt; j++) {
            tempAngle = increment * (rec) + petalAngle;
            petalLive.push(
                {
                    angle: tempAngle, 
                    distMult: petal.distMult, 
                    x: (petal.distMult + petalDistance) * Math.cos(tempAngle), 
                    y: (petal.distMult + petalDistance) * Math.sin(tempAngle),
                    hb: petal.hb,
                    health: petal.health,
                    damage: petal.damage
                }
            );
            rec++;
        }
    }
}
function getNumPetals() {
    let sum = 0;
    for (let i = 0; i < petalLive.length; i++) {
        sum += petalLive[i].amt;
    }
    return sum;
}