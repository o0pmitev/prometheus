const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
canvas.addEventListener("mousemove", onMouseMove, false);

function onMouseMove(e) {
  console.log(e.offsetX + " " + e.offsetY);
}

canvas.addEventListener("mousedown", buttonPressed, false);

function buttonPressed(event) {
  switch(event.button) {
    case 0:
      console.log("Left mouse button pressed!");
      break;
    case 1:
      console.log("Middle mouse button pressed!");
      break;
    case 2: 
      console.log("Right mouse button pressed!");
      break;
    default:
      console.log("Nothing to do here!");
      break;
  }
}

