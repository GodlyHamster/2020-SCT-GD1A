// maak een variabele voor de canvas
const canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
const context = canvas.getContext('2d');

//maak de canvas schermvullend
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

let CircleObject = {};
let CircleArray = [];

function getRandomInt(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random(min) * max);
}

for (let i = 0;i<10;i++){
  let CircleObject = {x:getRandomInt(0,width),y:getRandomInt(0,height),radius:30,color:"rgb(0,0,0)",velocity_x:6,velocity_y:4}
  CircleArray.push(CircleObject);
  console.log(CircleArray[i]);
}

CircleObject.draw = function(){
  context.beginPath();
  context.arc(this.x,this.y,this.radius,0,2*Math.PI);
  context.closePath();
  context.stroke();
  context.fillStyle = this.color;
  context.fill();
}

CircleObject.update = function(){
  CircleObject.x += CircleObject.velocity_x;
  CircleObject.y += CircleObject.velocity_y;
  if (CircleObject.x > width - CircleObject.radius || CircleObject.x < CircleObject.radius){
    CircleObject.velocity_x = - CircleObject.velocity_x;
  }
  if (CircleObject.y > width - CircleObject.radius || CircleObject.y < CircleObject.radius){
    CircleObject.velocity_y = - CircleObject.velocity_y;
  }
}

function loop(){
  context.clearRect(0,0,width,height);
  for (let i = 0;i<CircleArray.length;i++){
    CircleObject[i].update();
    CircleObject[i].draw();
  }
}

setInterval(loop, 10);
