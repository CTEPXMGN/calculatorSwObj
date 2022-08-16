let operations = {
    add: '+',
    multi: '*',
    sub: '-',
};

function calc(operator, a, b) {

    switch (operator) {
        case '+':
            return Number(a) + Number(b);
        case '*':
            return a * b;
        case '-':
            return a - b;
        default:
            break;
    }
}

console.log(calc(operations.add, 2, 5));
console.log(calc(operations.multi, 3, 15));
console.log(calc(operations.sub, 7, 11));