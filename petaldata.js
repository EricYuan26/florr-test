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
        rarity: 4
    },
    {
        type: 1,
        rarity: 5
    }
];
let petalLive = [];
//-----------------------------------------------------------------------------------------------------------------------------------------
let increment;
function calculatePetals() {
    ctx.clearRect(-0.5*c.width, 0.5*c.height, c.width, -c.height);
    if (petalAngle <= 2*Math.PI) {
        petalAngle = petalAngle + rotSpeed/100;
    } else {
        petalAngle = 0;
    }
    setupLivePetalList();
    increment = 2*Math.PI/petalLive.length;/* 
    console.log(petalAngle);
    console.log(petalLive); */
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
    for (let i=0; i< petalData.length; i++) {
        let petal = lookupPetal(petalData[i].type, petalData[i].rarity);
        for (let j=0; j<petal.amt; j++) {
            tempAngle = increment * (i+j) + petalAngle;
            //console.log(tempAngle);
            petalLive.push(
                {
                    angle: tempAngle, 
                    distMult: petal.distMult, 
                    x: petal.distMult * Math.cos(tempAngle), 
                    y: petal.distMult * Math.sin(tempAngle),
                    hb: petal.hb
                }
            );
        }
    }
}