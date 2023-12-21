// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

// Animation variables
let sunRadius = 20;
let cloudX = 0;

// BLUE BACKGROUND
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, cnv.width, cnv.height);

//Draw solid circle
ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(200, 300, 30, 20, 0, 1 * Math.PI);
ctx.fill();

// GREEN GROUND
ctx.fillStyle = "green";
ctx.fillRect(0, cnv.height - 100, cnv.width, 100);

// Cloud image
let cloudImg = document.getElementById("cloth-cloud.png");
ctx.drawImage(cloudImg, 130, 120);
ctx.drawImage(cloudImg, 200, 100);
