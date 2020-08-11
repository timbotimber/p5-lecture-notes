class Obstacle {
  constructor(imgs) {
    this.imgs = imgs;
    this.height = 50;
    this.width = 50;
    this.x = width;
    this.y = (Math.random() * height) / 1.5;
  }

  collision(obj) {
    let obstacleX = this.x + this.width / 2;
    let obstacle = this.y + this.height / 2;
    let objX = obj.x + obj.width / 2;
    let objY = obj.y + obj.height / 2;
    // console.log(dist(obstacleX, obstacle, objX, objY));

    if (dist(obstacleX, obstacle, objX, objY) > 50) {
      return false;
    } else {
      return true;
    }
  }

  drawObstacle() {
    this.x--;
    // add this in to check the collisions are coming through
    // this.collision(game.player);
    image(this.imgs[0].src, this.x, this.y, this.width, this.height);
  }
}
