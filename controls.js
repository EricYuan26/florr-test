var expand = 0;
document.body.onmousedown = function() { 
    expand = 1;
}
document.body.onmouseup = function() {
    expand = 0;
}
let petalDistance = 1;
document.addEventListener('keydown', function(event) {
    if (event.key === ' ') {
        expand = 1;
    }
});
document.addEventListener('keyup', function(event) {
    if (event.key === ' ') {
        expand = 0;
    }
});

function regulatePetalDist() {
    /* 
    Overview: 
        default: 0
        expand: 100
        retract: -30
    */
    if (expand == 1) {
        if (petalDistance <= 70) {
            if (petalDistance < 7) {
                petalDistance = 1.6*petalDistance;
            } else {
                petalDistance = petalDistance + 0.18*petalDistance/1.4;
            }
        }
    }
    if (expand == 0) {
        if (petalDistance > 1) {
            if (petalDistance > 7) {
                petalDistance = petalDistance - 0.18*petalDistance/1.4;
            } else {
                petalDistance = 0.6*petalDistance;
            }
        }
    }
}