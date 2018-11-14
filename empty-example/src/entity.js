class Entity {
  constructor(x, y, radius) {
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.variable = 0;
    this.acceleration = createVector(0, random(this.variable));
    this.radius = radius;
    this.pressed = false;
  }
  isPressed() {
    if (!this.pressed && mouseIsPressed && this.isMouseOnTheObject()) {
      this.pressed = !this.pressed;
    } else if (this.pressed && !mouseIsPressed) {
      this.pressed = !this.pressed;
      let mousePosition = createVector(mouseX, mouseY);
      let movement = this.position.copy();
      movement.sub(mousePosition);
      movement.mult(0.05425);
      this.velocity.sub(movement);
    }
  }
  show() {
    noStroke();
    fill(255, 255, 255, 151);
    ellipse(this.position.x, this.position.y, this.radius * 2);
    this.velocity.add(this.acceleration);
    this.position.sub(this.velocity);
    this.applyFrictionForce();
    this.isPressed();
    this.isOffScreen();
    this.velocity.limit(50);
    this.acceleration.mult(0);
  }
  isMouseOnTheObject() {
    return (
      dist(mouseX, mouseY, this.position.x, this.position.y) <= this.radius
    );
  }
  move() {
    if (this.pressed) {
      stroke(55, 221, 177, 222);
      strokeWeight(5);
      line(mouseX, mouseY, this.position.x, this.position.y);
    }
  }
  isOffScreen() {
    if (this.position.x > width) {
      this.position.x = width;
      this.velocity.x *= -1;
    } else if (this.position.x < 0) {
      this.velocity.x *= -1;
      this.position.x = 0;
    } else if (this.position.y < 0) {
      this.velocity.y *= -1;
    }
    if (this.position.y > height) {
      this.velocity.y *= -1;
      this.velocity.y *= 0.7;
      this.position.y = height;
    }
    if (this.position.y > height) {
      this.position.y = 0;
    }
  }
  applyForce(vector) {
    // let mass = map(this.radius, 15, 20, 0.2, 1);
    // this.acceleration.add(vector.mult(mass));
    vector.limit(5);
    this.acceleration.add(vector);
  }
  applyFrictionForce() {
    let friction = this.velocity.copy();
    friction.normalize();
    friction.mult(-1);
    friction.mult(0.091);
    this.velocity.add(friction);
  }
  isColliding(entity) {
    let distance = dist(
      entity.position.x,
      entity.position.y,
      this.position.x,
      this.position.y
    );
    if (distance < entity.radius + entity.radius / 2) {
      fill(245, 0, 0, 200);

      ellipse(entity.position.x, entity.position.y, 25);
    }
  }
}
