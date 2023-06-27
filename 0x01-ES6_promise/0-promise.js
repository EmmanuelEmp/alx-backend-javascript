export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Make API request or perform necessary asynchronous operations
    // Once the operations are completed, call either resolve or reject

    // Example: Simulating an API response after a timeout of 1 second
    setTimeout(() => {
      const data = {
        status: 200,
        body: 'Success',
      };
      resolve(data);
    }, 1000);
  });
}

