menu.onclick = function(event) {
  if (event.target.nodeName != 'A') return;

  let href = event.target.getAttribute('href');
  alert(href);
  return false; // prevents the default browser behavior (Won't go to the url)
  /**
   * If we ommit the `return false` the browser
   * after our code executes the browser will do
   * its default behaviour to follow the url
   */
}