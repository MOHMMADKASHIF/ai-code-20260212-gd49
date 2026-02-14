const addNumbers = (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('Both inputs must be numbers');
    }
    const result = num1 + num2;
    return result;
}

const result = addNumbers(12, 12);

console.log(`The result of two numbers is ${result}`);