var c = document.getElementById("ctx");
var ctx = c.getContext("2d");
c.height = screen.height;
c.width = screen.width;
ctx.translate(window.innerWidth/2, window.innerHeight/2)
drawFlower();
drawPetals(/* add some kinda angle argument in here or smth */);
//draw petals