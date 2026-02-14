const addNumbers = (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('Both inputs must be numbers');
    }
    if (isNaN(num1) || isNaN(num2)) {
        throw new Error('Both inputs must be numbers, not NaN');
    }
    if (isFinite(num1) === false || isFinite(num2) === false) {
        throw new Error('Both inputs must be finite numbers, not Infinity or NaN');
    }
    const result = Number.isSafeInteger(num1 + num2) ? num1 + num2 : 'overflow';
    return result;
}

const result = addNumbers(12, 12);

console.log(`The result of two numbers is ${result}`);