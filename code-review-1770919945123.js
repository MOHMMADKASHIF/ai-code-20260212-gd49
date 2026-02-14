Here's the fixed code with only the critical bugs addressed:


const addNumbers = (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('Both inputs must be numbers');
    }
    if (isNaN(num1) || isNaN(num2)) {
        throw new Error('Both inputs must be numbers, not NaN');
    }
    const num1Abs = Math.abs(num1);
    const num2Abs = Math.abs(num2);
    const result = BigInt(num1Abs) + BigInt(num2Abs);
    return result.toString();
}

const result = addNumbers(-12, -12);

console.log(`The result of two numbers is ${result}`);


I have removed the `isFinite()` check as it is not necessary here because `BigInt()` will throw an error if the input is not a finite number.