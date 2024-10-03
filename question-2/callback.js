// Name: Marcus Quitiquit
// ID: 101448926

// Question 2 Promises
// Given the script file callback.js, write a script that does the following:
// Create a method resolvedPromise that is similiar to delayedSuccess and resolves a message after a timeout of 500ms.
// Create a method rejectedPromise that is similiar to delayedException and rejects an error message after a timeout of 500ms.
// Call both promises separately and handle the resovled and reject results and then output to the console

const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = {'message': 'resolved promise'}
            console.log(success);
            resolve(success);
        }, 500);
    });
}

const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = {'message': 'rejected promise'}
            console.log(error);
            reject(error);
        }, 500);
    });
}

resolvedPromise();
rejectedPromise();