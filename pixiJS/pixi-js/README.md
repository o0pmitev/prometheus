# PIXI.JS

## Code snippets

```js
// creates a new pixi application with the helper method Application
let app = new PIXI.Application({ width: 640, heigh: 360 });

// takes the view created by the application and add it to the body of the page
document.body.appendChild(app.view);

// creates a sprite object from a source image
let sprite = PIXI.Sprite.from(
  'https://pm-storage.github.io/image_container/day-5-1000.png'
);

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

## Display Object

**Display object is the core class for anything that can be rendered in the engine.**
_Be aware that you wont use the **DisplayObject** directly you'll use its functions and attributes in derived classes._

### Commonly Used Attributes

| Property   | Description                                                                                                                                        |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| position   | X- and Y-position are given in pixels and change the position of the object relative to its parent, also available directly as object.x / object.y |
| rotation   | Rotation is specified in radians, and turns an object clockwise (0.0 - 2 \* Math.PI)                                                               |
| angle      | Angle is an alias for rotation that is specified in degrees instead of radians (0.0 - 360.0)                                                       |
| pivot      | Point the object rotates around, in pixels - also sets origin for child objects                                                                    |
| alpha      | Opacity from 0.0 (fully transparent) to 1.0 (fully opaque), inherited by children                                                                  |
| scale      | Scale is specified as a percent with 1.0 being 100% or actual-size, and can be set independently for the x and y axis                              |
| skew       | Skew transforms the object in x and y similar to the CSS skew() function, and is specified in radians                                              |
| visible    | Whether the object is visible or not, as a boolean value - prevents updating and rendering object and children                                     |
| renderable | Whether the object should be rendered - when false, object will still be updated, but won't be rendered, doesn't affect children                   |

---

## Loading Textures

Link: [Texture](https://pixijs.io/guides/basics/textures.html).

- Show a loading image
- Create a [Loader](https://pixijs.download/release/docs/PIXI.Loader.html)
- Run all texture-based objects, add their textures to the loader
- Start the loader, and optionally update your loading image based on progress callbacks
- On loader completion, run all objects and use `PIXI.Texture.from()` to pull the loaded textures out of the texture cache
- Prepare your textures (optional - see below)
- Hide your loading image, start rendering your scene graph

Using this workflow ensures that your textures are pre-loaded, to prevent pop-in, and is relatively easy to code.

Regarding preparing textures: Even after you've loaded your textures, the images still need to be pushed to the GPU and decoded. Doing this for a large number of source images can be slow and cause lag spikes when your project first loads. To solve this, you can use the [Prepare](https://pixijs.download/release/docs/PIXI.Prepare.html) plugin, which allows you to pre-load textures in a final step before displaying your project.

## Unloading Textures

Once you're done with a Texture, you may wish to free up the memory (both WebGL-managed buffers and browser-based) that it uses. To do so, you should call destroy() on the BaseTexture that owns the data. Remember that Textures don't manage pixel data!

This is a particularly good idea for short-lived imagery like cut-scenes that are large and will only be used once. If you want to remove all textures and wipe the slate clean, you can use the PIXI.utils.destroyTextureCache() function.
