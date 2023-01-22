let sections = document.querySelectorAll("section");

function logText(e) {
  this.classList.value;
}

console.log(sections);

sections.forEach( section => section.addEventListener("click", logText));