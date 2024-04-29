let petalAngle = 0;
let petalData = [
    //list of objects
    /* EXAMPLE:
    {
        id: 1,
        rarity: 1,
        angle: 0, //something something idk
        hb: 10px
    }, */
    {
        type: 1,
        rarity: 1,
        amt: 1,
        distMult: 100,
        angle: 0,
        x: null,
        y: null
    },
    {
        type: 1,
        rarity: 1,
        amt: 1,
        distMult: 100,
        angle: 0,
        x: null,
        y: null
    },
    {
        type: 1,
        rarity: 1,
        amt: 1,
        distMult: 100,
        angle: 0,
        x: null,
        y: null
    },
    {
        type: 1,
        rarity: 1,
        amt: 1,
        distMult: 100,
        angle: 0,
        x: null,
        y: null
    },
    {
        type: 1,
        rarity: 1,
        amt: 1,
        distMult: 100,    
        angle: 0,
        x: null,
        y: null
    }
];
let petalLive = [];
function tick() {
    petalAngle = petalAngle + rotSpeed/10;
    
    let updatePetals = 0;
    if (petalLive.length == 0) {
        console.log("fill empty");
        updateLivePetalList();
    } else {
        for (let i=0; i<petalData.length; i++) {
            if ((petalData[i].type == petalLive[i].type) && (petalData[i].rarity == petalLive[i].rarity)) {
                null;
            } else {
                updatePetals = 1;
            }
        }
        if (updatePetals == 1) {
            console.log("updated");
            updateLivePetalList();
        }   
    }
    updatePetalPos();
/*     console.log(petalLive); */



    setTimeout(tick, 1000);
}
function updatePetalPos() {
    for (let i=0; i<petalLive.length; i++) {
        petalLive[i].x = petalLive[i].distMult * Math.cos(petalLive[i].angle);
        petalLive[i].y = petalLive[i].distMult * Math.sin(petalLive[i].angle);
        
        console.log("x" + petalLive[i].x);
        console.log("y" + petalLive[i].y);
    }
    console.log("------------------------------");
}


function updateLivePetalList() {
    for (i=0; i< petalData.length; i++) {
        petalLive.push(petalData[i]);
        petalLive[i].angle = (2*Math.PI)/(i+1/* getPetalAmt() */ /* <-- crashes the page */);
    }
}
function getPetalAmt() {
    let a;
    for (i=0; i>= petalData.length; i++) {
        //a = a + petalData[i].amt;
        
    }
    return 5;
}