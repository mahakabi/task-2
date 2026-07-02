function greet(name, callback) {
    console.log('Hello', name);

    callback();
}

greet('Hamzah', () => {
    console.log('Welcom to callbacks');
});

function calculate(a, b, callback) {
    const result = callback(a, b);

    console.log(result);
}

calculate(6, 7, (a, b) => a + b);
calculate(6, 7, (a, b) => a * b);