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

let rotationDegree = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(HSB);
  background(0);

  rotateY(rotationDegree);
  stroke(255);
  line(0,0,0,50,0,0);
  line(50,0,0,50,50,0);
  line(50,50,0,0,50,0);
  line(0,50,0,0,0,0);
  line(0,0,0,25,25,50);
  line(50,0,0,25,25,50);
  line(50,50,0,25,25,50);
  line(0,50,0,25,25,50);
}

function draw() {
  let lastPoint = createVector(x,y,z);
  count+=0.05;
  count %= 256;

  let dt = .01;
  let dx = a * (y-x) * dt; //change in x
  let dy = (x * (b-z) - y) * dt; //change in y
  let dz = (x * y - c * z) * dt; //change in z
  x += dx;
  y += dy;
  z += dz;

  rotateY(rotationDegree);
  stroke(count,255,255);
  scale(sc);
  line(lastPoint.x, lastPoint.y, lastPoint.z, x, y, z);
  //lastPoint = createVector(x,y,z);
}
