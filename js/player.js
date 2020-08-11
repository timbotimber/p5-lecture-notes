class Player {
  constructor() {
    this.height = 80;
    this.width = 80;
    this.x = 0;
    this.y = height - this.height;
    // height is a pre-set value in canvas
    this.gravity = 0.2;
    this.velocity = 0;

    // add the jumpscount later
    this.jumpsCount = 0;

    // show this with just gravity first
  }
  drawPlayer() {
    this.velocity += this.gravity;
    this.y += this.velocity;
    if (this.y >= height - this.height) {
      this.y = height - this.height;
      this.jumpsCount = 0;
    }
    image(this.image, this.x, this.y, this.width, this.height);
  }

  jump() {
    if (this.jumpsCount === 0) {
      this.jumpsCount++;
      this.velocity = -10;
    }
  }
}
