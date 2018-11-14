class Slider {
  constructor(x, y, width, height, r, g, b, alpha) {
    this.position = createVector(x, y);
    this.width = width;
    this.heigth = height;
    this.r = r;
    this.g = g;
    this.b = b;
    this.alpha = alpha;
    this.value = 50;
  }

  isClicked() {
    return (
      mouseX > this.position.x &&
      mouseX < this.position.x + this.width &&
      mouseY > this.position.y &&
      mouseY < this.position.y + this.heigth
    );
  }

  show() {
    noStroke();
    fill(255, 100);
    rect(this.position.x, this.position.y, this.width, this.heigth);
    let width = map(this.value, 0, this.width, 0, this.width);
    if (mouseIsPressed && this.isClicked()) {
      let newValue = map(
        mouseX,
        this.position.x,
        this.position.x + this.width,
        0,
        this.width,
        true
      );
      this.value = newValue;
    }
    fill(this.r, this.g, this.b, this.alpha, 150);
    rect(this.position.x, this.position.y, width, this.heigth);
  }

  getRGBValue() {
    return map(this.value, 0, this.width, 0, 255);
  }
}