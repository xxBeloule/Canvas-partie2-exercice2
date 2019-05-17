var c = document.getElementById('monCanvas');
var ctx = c.getContext("2d");

// Le cornet
ctx.beginPath();
ctx.moveTo(250,200);
ctx.lineTo(210,250);
ctx.lineTo(180,200);
ctx.lineTo(250,200);
ctx.fillStyle = "red";
ctx.fill();
ctx.stroke();

// La boule de glace
ctx.beginPath();
ctx.moveTo(250,200);
// ctx.quadraticCurveTo(Courbe,courbe, position x, position y)
ctx.quadraticCurveTo(210,140,180,200);
ctx.fillStyle = "orange";
ctx.fill();
ctx.strokeStyle = "red";
ctx.stroke();
