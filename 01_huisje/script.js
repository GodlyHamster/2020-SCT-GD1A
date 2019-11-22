// maak een variabele voor de canvas
const canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
const context = canvas.getContext('2d');

//maak de canvas schermvullend
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

// hier kun je op de canvas tekenen
context.beginPath();
context.lineWidth = 10;
context.strokeStyle = "rgb(130,130,0)";
context.fillStyle = "rgb(255,0,255)";
context.arc(300,300,20,0,1*Math.PI);
context.closePath();
context.stroke();
context.fill()
