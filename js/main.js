const game = new Game();

function preload() {
  game.preloadGame();
}
function setup() {
  createCanvas(600, 400);
  game.setupGame();
}
function draw() {
  game.drawGame();
}

// show this without the gravity first
function keyPressed() {
  if (keyCode === 32) {
    game.player.jump();
  }
}
