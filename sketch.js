/*
all the datas are taken from wikipedia
https://en.wikipedia.org/wiki/Lorenz_system
*/

let x = 0.01;
let y = 0.01;
let z = 0.01;

let a = 10.0;
let b = 28.0;
let c = 8.0/3.0;

let sc = 6;

let count = 0;


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(HSB);
  background(0);
}

function draw() {
  let lastPoint = createVector(x,y,z);
  count+=0.1;
  count %= 256;

  let dt = .01;
  let dx = a * (y-x) * dt; //change in x
  let dy = (x * (b-z) - y) * dt; //change in y
  let dz = (x * y - c * z) * dt; //change in z
  x += dx;
  y += dy;
  z += dz;

  stroke(count,255,255);
  scale(sc);
  line(lastPoint.x, lastPoint.y, lastPoint.z, x, y, z);
  //lastPoint = createVector(x,y,z);
}
