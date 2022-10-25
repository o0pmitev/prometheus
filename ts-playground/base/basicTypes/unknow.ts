let userInput: unknown;
let userName: string;


// userInput = 5;
// userInput = "Plamen";

/**
 * unknown needs a type guard in order to be used 
 */
if(typeof userInput === "string") {
    userName = userInput;
}

/**
 * a function that throws an error NEVER returns anything
 * @param message 
 * @param code 
 */
function generateError(message:string, code:number):never {
    throw({ message: message, errorCode: code });
}

generateError('An error occurred!', 500);