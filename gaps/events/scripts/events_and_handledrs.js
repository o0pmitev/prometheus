//************ first approach *************/

// elem.onclick = function(event) {
//   console.log(`${event.type} at ${event.currentTarget}`);
//   console.log(`Coordinates: ${event.clientX} : ${event.clientY}`);
//   console.log(event);
// }

//**************************************/
//************ second approach *************/

// we can assign not just functions but objects as an event handler using addEventListener

// let obj = {
//   handleEvent(event) {
//     console.log(`${event.type} at ${event.currentTarget}`);
//   }
// }

// elem.addEventListener("click", obj)

//**************************************/
//************ third approach *************/
//! we could use objects as custom class, like this

// const elem = document.getElementById('button');
// class Menu {
//   handleEvent(event) {
//     switch(event.type) {
//       case 'mousedown':
//         elem.innerHTML  = "Mouse button pressed";
//         console.log("Mouse button pressed");
//         break;
//       case 'mouseup':
//         elem.innerHTML += "... and relesed";
//         console.log("... and relesed");
//         break;
//     }
//   }
// }

// let menu = new Menu();
// elem.addEventListener('mousedown', menu);
// elem.addEventListener('mouseup', menu);
// console.log(elem);

//**************************************/
//************ fourth approach ************/
const elem = document.getElementById('button');
class Menu {
  
  handleEvent(event) {
    // mousedown -> onMousedown etc.
    let method = `on${event.type[0].toUpperCase()}${event.type.slice(1)}`;
    this[method](event);
  }

  onMousedown() {
    elem.innerHTML = "Mouse button pressed";
  }

  onMouseup() {
    elem.innerHTML += "... and released.";
  }
}


let menu = new Menu();

elem.addEventListener("mousedown", menu);
elem.addEventListener("mouseup", menu);