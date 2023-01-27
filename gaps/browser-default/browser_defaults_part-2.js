elem.oncontextmenu = function(event) {
  event.preventDefault();
  alert('Button context menu');
}

bubbling_section.oncontextmenu = function(event) {
  event.preventDefault();
  alert('bubbling_section context menu');
}

//------ stopPropagation -------

elem_1.oncontextmenu = function(event) {
  event.preventDefault();
  event.stopPropagation();
  alert("Button context");
}

stopPropagationSection.oncontextmenu = function(event) {
  event.preventDefault();
  alert("stopPropagationSection context");
}

//------ check if the default action was prevented ---

check_button.oncontextmenu = function(event) {
  event.preventDefault();
  alert("check_button context menu");
}

check_section.oncontextmenu = function(event) {
  if(event.defaultPrevented) return;

  event.preventDefault();
  alert("check_section context menu");
}
