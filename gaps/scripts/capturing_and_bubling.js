let sections = document.querySelectorAll("section");

function logText(e) {
  // e.stopPropagation() // --> stops the bubling when click on element
  /**
   * if the stopPropagation method is used it stops the bubling effect and only the event that is attached to the element which is clicked is fired
   * if the events are setup to fire during capturing phase only the outhe most event is triggered 
   */
  console.log(this.classList.value);
}

console.log(sections);

sections.forEach( section => section.addEventListener("click", logText));
/**
 * the above line logs because by default the last parameter is set to faulse and the events are fired during the bubling phase
 * > three 
 * > two 
 * > one
 */
// sections.forEach( section => section.addEventListener("click", logText, true)); // when true parameter is given the event is fired on the capturing phase

/**
 * the above line logs because it fires on capturing phase
 * > one  
 * > two
 * > three
 */