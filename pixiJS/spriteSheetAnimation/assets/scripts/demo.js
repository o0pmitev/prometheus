let app = new PIXI.Application({
  width: 800,
  height: 450
});
document.body.appendChild(app.view);

let background, animatedCapguy;
const loader = new PIXI.Loader();

loader
  .add("assets/sprites/spritesheet.json")
  .load(setup);


function setup() {
  let sheet = loader.resources["assets/sprites/spritesheet.json"];
  background = new PIXI.Sprite(sheet.textures["background.png"]);
  app.stage.addChild(background);

  app.stage.scale.x = app.view.width / background.width;
  app.stage.scale.y = app.view.height / background.height;

  animatedCapguy = new PIXI.AnimatedSprite(sheet.spritesheet.animations["capguy/walk"]);

  animatedCapguy.animationSpeed = 0.167; // 6fps
  animatedCapguy.position.set(0, background.height - 350); // 100
  animatedCapguy.play();

  app.stage.addChild(animatedCapguy);
  app.ticker.add(delta => gameLoop(delta));

  function gameLoop(delta) {
    // TODO: look into how  this is reseting the position of the sprite when exit the view
    animatedCapguy.x = (animatedCapguy.x + 5*delta) % (background.width + 200);
  }
}