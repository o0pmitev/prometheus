# Browser default actions

> Returning false from a handler is an exeption!!! The value returned from an event handler is usually ignored. The only exeption is returning `false` from a handler assigned using `on<event>`.



> Menu items are implemented as HTML links `<a>`, **NOT** `<button>`. Some of the reasons are that many people are using *"right click"* - *"open in a new window"*. If we use `<button>` or `<span>` that **DOESN'T** work. The other more big reason is that **Search engines follow `<a href="...">` links while indexing**. 
```html
  <ul>
    <li><a href="/html">HTML</a></li>
    <li><a href="/javascript">JavaScript</a></li>
    <li><a href="/css">CSS</a></li>
  </ul>
```

> An another example. For instance, `mousedown` on an `<input>` field leads to focusing in it, and the `focus` event. If we prevent the `mousedown` event there is **NO** focus.
```html
  <input type="text" value="Focus works" onfocus="this.value=''">
  <input type="text" onmousedown="return false" onfocus="this.value=''" value="Click me">
```

> The _optionmal_ `passive: true` option of `addEventListener` signals the browser that the handler will **NOT** going to call `preventDefault()`. This is usefull because there are events like `touchmove` on mobile devices _(when user moves their finger across the screen)_, that cause scrolling by default, but that scrolling can be prevented using `preventDefault()` in the handler. So when the browser detects such event it has first to process all handlers, and then if `preventDefault()` is not called anywhere, it can proceed with scrolling. That may cause unnecessary delays and "_jitters_" in the UI. The `passive: true` _option_ tells the browser that the handler is not going to cancel scrolling. Then browser scrolls immediately providing a maximally fluent experience, and the event is handled by the way.

>For some browsers (_Firefox, Chrome_), `passive` is `true` by _default_ for `touchstart` and `touchmove` events.

> There are many default browser actions:
>- `mousedown` - starts the selection (_move mouse to select_).
>- `click` on `<input type="checkbox">` - check/uncheck the `input`.
>- `submit` - clicking an `<input type="submit">` or hitting <input type="submit" value="Enter" onclick="return false"> inside a _form_ field cause this event to happen, and the browser submits the form.
>- `keydown` - pressing a key may lead to adding a character to a field, or other action.
>- `contextmenu` - the event happens on a _right-click_, the action is to show the browser context menu
>- and many more ....

> Stay semantic **DONT ABUSE !!!** 
> We should always keep the semantic meaning of the HTML.
>- `<a>` should be a link and not pretend to be a `<button>` and vice versa. etc


<small>Resources:</small>
[JSINFO/default-browser-action](https://javascript.info/default-browser-action)
