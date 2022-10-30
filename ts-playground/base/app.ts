// const userInput = <HTMLInputElement>document.getElementById('inputElement');
// const userInput = document.getElementById('inputElement')! as HTMLInputElement;

const userInput = document.getElementById('inputElement') as HTMLInputElement;

userInput.value = "Hi there."

console.log(userInput.value);


//** VERSION 2 */
// const userInput = document.getElementById('inputElement');
// if(userInput) {
//   (userInput as HTMLInputElement).value = "Hi there."
//   console.log((userInput as HTMLInputElement).value);
// }

//** Index Properties */
/**
 * I dont know the property[key] name
 * I also dont know the property[key] count
 * I just know that every property which is added to this object
 * which is based on error container must have a property name
 * which can be interpreted as a string, and value for that 
 * property also must be a string
 * [key: string]: string;
 * ********************** 
 * With that we also still can add predefined properties
 * however, jonly if they're of the same 
 * type as [key: string]: string;
 * se we could add and id which is of type string.
 * and then any object we build that adheres to this interface
 * must have an ID property and can add as many other properties
 * as it wants. 
 * !But we can NOT set ID to a number for example,
 * !because we have an index type here.
 * 
 */
// interface ErrorContainer {
//   id: string;

//   [key: string]: string;
// }
interface ErrorContainer {
  [key: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email!",
  username: "Must start with a capital character!"
}


//** Function overload */
 type Combined = string | number;

 function add(a:number, b:number): number
 function add(a:string, b:string): string
 function add(a:string, b:number): string
 function add(a:number, b:string): string
 function add(a: Combined, b: Combined) {
  if(typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
    return a + b;
  }

  /** 
   * Nullish coalescong 
   * ?? chech if the vlaue is null or undefind
   * if it is empty string it is not returning the "DEFAULT" string
  */
  const userInputs = "";
  const storeData = userInput ?? "DEFAULT";
  console.log(storeData);