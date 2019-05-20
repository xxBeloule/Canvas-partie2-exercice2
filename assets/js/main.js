var c = document.getElementById('monCanvas');
var ctx = c.getContext("2d");


// Le fond
ctx.beginPath();
ctx.rect(0, 0, 400, 400);
ctx.fillStyle = "blue";
ctx.fill();
ctx.stroke();


// Tete du vaisseau
ctx.beginPath();
ctx.moveTo(250,200);
ctx.quadraticCurveTo(200,100,140,200);
ctx.fillStyle = "white";
ctx.fill();
ctx.stroke();

// vaisseau
ctx.beginPath();
ctx.moveTo(0,240);
ctx.quadraticCurveTo(200,150,400,240);
ctx.fillStyle = "white";
ctx.fill();
ctx.stroke();
// Vaisseau partie bas
ctx.beginPath();
ctx.moveTo(0,240);
ctx.quadraticCurveTo(200,320,400,240);
ctx.fillStyle = "white";
ctx.fill();
ctx.stroke();
