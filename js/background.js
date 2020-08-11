class Background {
  constructor() {
    this.imgs;
  }

  drawBackground() {
    this.imgs.forEach((picture) => {
      // use this as the first version so they all move at the same time
      // picture.x -= 5;
      // then...

      picture.x -= picture.speed;

      image(picture.src, picture.x, 0, width, height);
      image(picture.src, picture.x - width, 0, width, height);
      if (picture.x < 0) {
        picture.x = width;
      }
    });
    // explain manually first:
    // image(this.imgs[1].src, 0, 0, width, height);
    // image(this.imgs[2].src, 0, 0, width, height);
    // image(this.imgs[3].src, 0, 0, width, height);
    // image(this.imgs[4].src, 0, 0, width, height);
  }
}
