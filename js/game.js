class Game {
  constructor() {
    this.obstacles = [];
  }
  preloadGame() {
    // 1. load in one image then 4. add the extra images
    this.backgroundImgs = [
      { src: loadImage("../assets/background/plx-1.png"), x: 0, speed: 1 },
      { src: loadImage("../assets/background/plx-2.png"), x: 0, speed: 2 },
      { src: loadImage("../assets/background/plx-3.png"), x: 0, speed: 3 },
      { src: loadImage("../assets/background/plx-4.png"), x: 0, speed: 4 },
      { src: loadImage("../assets/background/plx-5.png"), x: 0, speed: 5 },
    ];

    this.playerImg = loadImage("../assets/player/run.gif");
    this.coinImg = [
      { src: loadImage("../assets/coins/tile000.png") },
      { src: loadImage("../assets/coins/tile001.png") },
      { src: loadImage("../assets/coins/tile002.png") },
      { src: loadImage("../assets/coins/tile003.png") },
      { src: loadImage("../assets/coins/tile004.png") },
    ];
  }
  setupGame() {
    // 2. initialize background
    this.background = new Background();
    this.background.imgs = this.backgroundImgs;
    this.player = new Player();
    this.player.image = this.playerImg;
  }
  drawGame() {
    //   3.draw it
    clear();
    if (frameCount % 30 === 0) {
      this.obstacles.push(new Obstacle(this.coinImg));
    }
    this.background.drawBackground();
    this.player.drawPlayer();
    this.obstacles.forEach((Obstacle) => {
      Obstacle.drawObstacle();
    });
    this.obstacles = this.obstacles.filter((obstacle) => {
      if (obstacle.collision(this.player)) {
        return false;
      } else {
        return true;
      }
    });
  }
}
