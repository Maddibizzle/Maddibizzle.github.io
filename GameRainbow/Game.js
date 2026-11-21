var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var gameState = "L1";

var stars = [];

function setup() {
  createCanvas(600, 600);

  for (var i = 0; i < 50; i++) {
    stars.push({
      x: random(width),
      y: random(height),
      speed: random(1, 3)
    });
  }
}

function draw() {
  background(25, 5, 60);

  // Moving stars
  for (var i = 0; i < stars.length; i++) {
    fill(255, 220, 100);
    noStroke();
    ellipse(stars[i].x, stars[i].y, 4, 4);

    stars[i].y += stars[i].speed;

    if (stars[i].y > height) {
      stars[i].y = 0;
      stars[i].x = random(width);
    }
  }

  if (gameState == "L1") {
    levelOne();
  }

  if (gameState == "L2") {
    levelTwo();
  }

  if (gameState == "L3") {
    levelThree();
  }

  if (gameState == "youWin") {
    youWin();
  }

  if (gameState != "youWin") {
    fill(255);
    textAlign(CENTER);
    textSize(25);
    text("SCORE: " + score, width/2, 45);

    // Mouse crosshair
    noFill();
    stroke(255, 100, 255);
    strokeWeight(3);
    ellipse(mouseX, mouseY, 35, 35);
    line(mouseX-20, mouseY, mouseX+20, mouseY);
    line(mouseX, mouseY-20, mouseX, mouseY+20);
  }
}

// LEVEL ONE
function levelOne() {
  fill(255, 150, 255);
  noStroke();
  textSize(30);
  text("LEVEL 1", width/2, height-30);

  if (dist(ballx, bally, mouseX, mouseY) < ballSize/2) {
    hitBall();
  }

  fill(255, 50, 200, 60);
  ellipse(ballx, bally, ballSize+30, ballSize+30);

  fill(255, 50, 200);
  ellipse(ballx, bally, ballSize, ballSize);

  if (score > 5) {
    gameState = "L2";
  }
}

// LEVEL TWO
function levelTwo() {
  fill(100, 220, 255);
  noStroke();
  textSize(30);
  text("LEVEL 2", width/2, height-30);

  if (dist(ballx, bally, mouseX, mouseY) < ballSize/2) {
    hitBall();
  }

  fill(0, 200, 255, 60);
  ellipse(ballx, bally, ballSize+30, ballSize+30);

  fill(0, 200, 255);
  ellipse(ballx, bally, ballSize, ballSize);

  if (score > 10) {
    gameState = "L3";
  }
}

// LEVEL THREE
function levelThree() {
  fill(255, 100, 255);
  noStroke();
  textSize(30);
  text("FINAL LEVEL!", width/2, height-30);

  if (dist(ballx, bally, mouseX, mouseY) < ballSize/2) {
    hitBall();
    ballSize = max(12, ballSize-1);
  }

  // Rainbow target
  fill(255, 0, 100);
  ellipse(ballx, bally, ballSize+20, ballSize+20);

  fill(255, 200, 0);
  ellipse(ballx, bally, ballSize+10, ballSize+10);

  fill(0, 220, 255);
  ellipse(ballx, bally, ballSize, ballSize);

  if (score > 49) {
    gameState = "youWin";
  }
}

// HIT THE TARGET
function hitBall() {
  ballx = random(50, width-50);
  bally = random(100, height-70);
  score++;
}

// WIN SCREEN
function youWin() {
  background(40, 0, 80);

  fill(255, 220, 50);
  textAlign(CENTER);
  textSize(50);
  text("YOU WIN!!!", width/2, 200);

  fill(255);
  textSize(25);
  text("RAINBOW MASTER!", width/2, 270);

  text("Final Score: " + score, width/2, 330);

  fill(255, 150, 255);
  text("Winner Winner Chicken Dinner!", width/2, 390);
}