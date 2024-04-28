let petalAngle = 0;
let petalData = [
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
        disuMult: 1,
    },
    {
        type: 1,
        rarity: 1,
        amt: 1,
        disuMult: 1
    },
    {
        type: 1,
        rarity: 1,
        amt: 1,
        disuMult: 1
    },
    {
        type: 1,
        rarity: 1,
        amt: 1,
        disuMult: 1
    },
    {
        type: 1,
        rarity: 1,
        amt: 1,
        disuMult: 1
    }
];
let petalLive = [
    //spacing = numPetals/(2*Math.pi)

];
function tick() {
    petalAngle = petalAngle + rotSpeed/10;


    /* console.log(petalAngle);
    console.log(petalLive[0]); */
    setTimeout(tick, 0);
}