//! TODO find a way to work with lockal version of pixi not CDN
// import * as PIXI from './pixi.js'

let canvas = document.querySelector("#canvas");

let minusWidth = 120;
let minusHeight = 320;



let app = new  PIXI.Application({width:window.innerWidth -minusWidth, height: window.innerHeight-minusWidth});

window.addEventListener("resize", () => {
  app.renderer.resize(window.innerWidth -minusWidth, window.innerHeight -minusHeight)
  console.log(app.renderer)
})



canvas.appendChild(app.view);

let sprite = PIXI.Sprite.from("../assets/knight.svg");
app.stage.addChild(sprite);
