// ==================== JS Promises ==================== \\
/**
 * In JavaScript a promise is an OBJECT that represents the eventual COMPLETION or FAILURE of an 
 * ASYNCHRONOUSE operation and its resulting value. 
 */

function getData() { 
  return new Promise((resolve, reject) => {
    // Simulates an asyncronous operation that resolves after 1 second
    setTimeout(() => {
      const data = { id: 1, name: "Gandalf"};
      resolve(data);
    }, 1000);
  });
}

// Call the getData function and handle the result with a promise chain
getData()
  .then( data => {
    console.log(`${data.id}: It's wonderful to see you ${data.name}! :)`);
  })
  .catch(error => {
    console.error(`Error getting data: ${error}`);
  });

/**
 *  The empty promise function just logs and emtpy promise :D So you can see the Promise ojbect in pending state
 * Comment and uncoment the `resolve` and `reject` inside the `promiseTest` body and inspect the console in the browser 
 * to get the better understanding how it works.
 */
const emptyPromise = new Promise( (resolve, reject) => {});
const promiseTest = new Promise((resolve, reject) => {
  resolve( 'I am resolving the promise manualy!');
  // reject('I am rejecting the promise manualy!');
});

promiseTest.then((data) => console.log(data)).catch(err => console.error(err));

console.log(emptyPromise);
console.log(promiseTest);


/**
 * Real world example
 *  TODO: finish the descrition
 * TODO: fix the cors issue or use a new API 
 */

const apiEndpoint = "https://anime-facts-rest-api.herokuapp.com/api/v1";
function getAnimeFacts(url){
  return new Promise((resolve, reject) => {
    fetch(url)
      .then( response => {
        if( !response.ok) {
          throw new Error('Failed to get data from API');
        }
        return response.json();
      })
      .then(data => {
        resolve(data)
      })
      .catch(error => {
        reject(error);
      })
  })
}


getAnimeFacts(apiEndpoint)
  .then( data => {
    console.log(data)
  })
