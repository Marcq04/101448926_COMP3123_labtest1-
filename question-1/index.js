// Name: Marcus Quitiquit
// ID: 101448926

// Question 1 ES6 Features
// Create a script with a function named lowerCaseWords that takes a mixed array as input.
// The function will do the following: return a promise that is resolved or rejected and filter the non-strings and lower case the remaining words

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        const filteredArray = mixedArray.filter((element) => typeof element === 'string');
        const lowerCaseArray = filteredArray.map((element) => element.toLowerCase());
        resolve(lowerCaseArray);
    });
}

console.log(lowerCaseWords(mixedArray));