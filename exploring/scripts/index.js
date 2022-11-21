//! TODO find a way to work with lockal version of pixi not CDN
// import * as PIXI from './pixi.js'
let canvas = document.querySelector("#canvas");

let minusWidth = 120;
let minusHeight = 320;

let app = new  PIXI.Application({
  width:window.innerWidth -minusWidth, 
  backgroundAlpha: 0
});




window.addEventListener("resize", () => {
  app.renderer.resize(window.innerWidth -minusWidth, window.innerHeight -minusHeight)
  console.log(app.stage)
})

canvas.appendChild(app.view);

const knight = PIXI.Sprite.from("../assets/knight.svg");
app.stage.addChild(knight);
knight.y = 250;
const timeline = gsap.timeline({
  defaults:{
    opacity: 0,
    ease: "back"
  }
});

timeline.from("#castle > *", {scale: 0, transformOrigin:"50% 50%", stagger: 0.01})

