let entities = [];
function setup() {
  for (let i = 0; i < 15; i++) {
    entities.push(
      new Entity(random(innerWidth), random(innerHeight), random(15, 21))
    );
  }
  createCanvas(innerWidth, innerHeight);
}
function draw() {
  background(0, 145);
  // for (let i = 0; i < entities.length; i++) {
  //   entities[i].show();
  //   entities[i].move();
  //   if (i > 0) {
  //     for (let j = 0; j < entities.length; j++) {
  //       if (entities[i] !== entities[j]) entities[i].isColliding(entities[j]);
  //     }
  //   }
  // }
  for (let entity of entities) {
    entity.show();
    entity.move();
    // entity.applyForce(createVector	(random(-0.01, 0.01), random(-0.01, 0.01)));
  }
}
