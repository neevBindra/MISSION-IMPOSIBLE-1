
var thief,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15;
var pass1,pass2,pass3,pass4,pass5,pass6,pass7,gate,ss1,ss2;



function setup(){
createCanvas(1000,1000);
//thief = createSprite(100,200,20,20)
b1 = createSprite(172,145,5,250)
b2 = createSprite(50,272,250,5)
b3 = createSprite(230,20,120,5)
b4 = createSprite(290,143,5,250)
b5 = createSprite(363,271,150,5)
b6 = createSprite(440,148,5,250)
b7 = createSprite(497,20,120,5)
b8 = createSprite(558,143,5,250)
b9 = createSprite(650,271,190,5)
b10 = createSprite(748,365,5,190)
b11 = createSprite(655,464,190,5)
b12 = createSprite(558,427,5,80)
b13 = createSprite(440,385,240,5)
b14 = createSprite(318,478,5,190)
b15 = createSprite(155,575,320,5)
pass1 = createSprite(500,100,120,5)
pass1.shapeColor = ("green");
gate = createSprite(558,330,5,108)
gate.shapeColor = ("red");
pass2 = createSprite(40,365,90,5)
pass2.shapeColor = ("blue");
pass3 = createSprite(88,400,5,70)
pass3.shapeColor = ("blue");
pass4 = createSprite(40,435,90,5)
pass4.shapeColor = ("blue");
pass5 = createSprite(270,490,90,5)
pass5.shapeColor = ("blue");
pass6 = createSprite(220,525,5,70)
pass6.shapeColor = ("blue");
pass7 = createSprite(265,565,90,5)
pass7.shapeColor = ("blue");
ss1 = createSprite(590,430,10,60);
ss1.shapeColor = ("red");
ss1.velocityY = -3;
ss1.bounceOff(b2)
ss2 = createSprite(665,305,10,60);
ss2.shapeColor = ("red");

}


function draw(){
  background("black");
console.log(mouseX,mouseY);
console.log(b2.y,b14.y);
  drawSprites();
}
