let x, speed;

function setup() {
  createCanvas(600, 600);
  x = 300;
  speed = 1;

  background(153, 50, 204);

  fill(232, 345, 138);
  stroke(0, 0, 0);
  strokeWeight(2);
}

function draw() {
  //square that moves laterally and turns background black
  rect(x, 0, 100, 100);
  x = x + speed;

  if (x < 500) {
    speed = -speed;
  }
  if (x > 0) {
    speed = -speed;
  }

  //drew a star
  beginShape();
  vertex(100, 250);
  vertex(114, 280);
  vertex(147, 285);
  vertex(123, 307);
  vertex(129, 340);
  vertex(100, 325);
  vertex(71, 340);
  vertex(78, 307);
  vertex(54, 285);
  vertex(87, 280);

  endShape(CLOSE);

}
