# PIXI.JS

## Code snippets
```js
// creates a new pixi application with the helper method Application
let app = new PIXI.Application({width: 640, heigh: 360});

// takes the view created by the application and add it to the body of the page
document.body.appendChild(app.view);

// creates a sprite object from a source image
let sprite = PIXI.Sprite.from("https://pm-storage.github.io/image_container/day-5-1000.png");   

// adds the sprite to the screen (stage)
app.stage.addChild(sprite);
```
---
## Major Components
**Renderer** : The core of the PixiJS system is the renderer, which displays the scene graph and draws it to the screen. The default renderer for PixiJS is based on WebGL under the hood.

**Container** : Main display object which creates a scene graph: the tree of renderable objects to be displayed, such as sprites, graphics and text. See [Scene Graph](https://pixijs.io/guides/basics/scene-graph.html) for more details. 

**Loader** : The loader system provides tools for asynchronously loading resources such as images and audio files.

**Ticker** : Tickers provide periodic callbacks based on a clock. Your game update logic will generally be run in response to a tick once per frame. You can have multiple tickers in use at one time.

**Application** : The Application is a simple helper that wraps a Loader, Ticker and Renderer into a single, convenient easy-to-use object. Great for getting started quickly, prototyping and building simple projects.

**Interaction** : PixiJS supports both touch and mouse-based interaction - making objects clickable, firing hover events, etc.

**Accessibility** : Woven through our display system is a rich set of tools for enabling keyboard and screen-reader accessibility.

---
