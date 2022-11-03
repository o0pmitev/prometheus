// function Logger(constructor: Function) {
//   console.log("Logging....")
//   console.log(constructor);
  
// }
function Logger(logString: string) {
  console.log("LOGGER. DECORATOR");
  return function(constructor: Function) {
    console.log('runs second --> LOGGER');
    console.log(logString);
    console.log(constructor);
  }
}
/**
 * the _ passed as function argument in the returned
 * function is telling typescript 
 * " I know  I get this argument, but I don't need it"
 * So with the underscore, I tell you that I'm aware of * it, but that I won't use it because all I want to do 
 * for now is to render the template
 * @param template 
 * @param hookId 
 * @returns 
 */
function WithTemplate(template: string, hookId: string) {
  return function(_: Function) {
    const hookEl = document.getElementById(hookId);
    if(hookEl) {
      hookEl.innerHTML = template;
    }
  }
}

function WithTemplateUsesConstructor(template: string, hookId: string) {
  console.log("WithTempl. DECORATOR");
  return function(constructor: any) {
    console.log("Render template -> run first")
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if(hookEl) {
      hookEl.innerHTML = template;
      // we knwo that there will be h1 thats why we put the !
      hookEl.querySelector('h1')!.textContent = p.name;
    }
  }
}
@Logger('LOGGING-PERSON')
@WithTemplateUsesConstructor('<h1>My Person Object</h1>','app')
class Person {
  name = "Plamen"

  constructor() {
    console.log('Creating the person object')
  }
}

const pers = new Person();
console.log(pers);
