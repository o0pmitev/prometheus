let app = new PIXI.Application({
  width: 800,
  height: 450
});

document.body.appendChild(app.view);

let background, animatedCapguy;
const capguyFrames = [
  "assets/sprites/capguy/walk_01.png",
  "assets/sprites/capguy/walk_02.png",
  "assets/sprites/capguy/walk_03.png",
  "assets/sprites/capguy/walk_04.png",
  "assets/sprites/capguy/walk_05.png",
  "assets/sprites/capguy/walk_06.png",
  "assets/sprites/capguy/walk_07.png",
  "assets/sprites/capguy/walk_08.png",
]

app.loader
  .add("assets/sprites/background.png")
  .add(capguyFrames)
  .load(setup);


function setup() {
  let resources = app.loader.resources;

  background = new PIXI.Sprite(resources["assets/sprites/background.png"].texture);
  app.stage.addChild(background);

  app.stage.scale.x = app.view.width / background.width;
  app.stage.scale.y = app.view.height / background.height;

  animatedCapguy = new PIXI.AnimatedSprite.fromFrames(capguyFrames);

  animatedCapguy.animationSpeed = 1/6; // 6fps
  animatedCapguy.position.set(0, background.height - 350); // 100
  animatedCapguy.play();

  app.stage.addChild(animatedCapguy);
  app.ticker.add(delta => gameLoop(delta));

  function gameLoop(delta) {
    // TODO: look into how  this is reseting the position of the sprite when exit the view
    animatedCapguy.x = (animatedCapguy.x + 5*delta) % (background.width + 200);
  }
}