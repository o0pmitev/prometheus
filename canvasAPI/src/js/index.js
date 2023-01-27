const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let mouseX = 0;
let mouseY = 0;

canvas.addEventListener("mousemove", setMousePosition, false);

function setMousePosition(event) {
  mouseX = event.offsetX;
  mouseY = event.offsetY;
}

function update() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
  context.arc(mouseX, mouseY, 50, 0, 2 * Math.PI,true);
  context.fillStyle = "#333";
  context.fill();
  requestAnimationFrame(update);
}

update();