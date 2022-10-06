function add(a, b) {
    return +a + +b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function factorial(a, b){
    return a % b;
}
function operate(op, a, b) {
    if(op === '+') 
    return add(a, b);
    else if(op === '-')
    return subtract(a, b);
    else if(op === '*')
    return multiply(a, b);
    else if(op === '/')
    return divide(a, b);  
    else if(op === '%')
    return factorial(a, b);
}
let numbers = document.querySelectorAll('.num');
let screen = document.querySelector('.screen');
let display = document.createElement('div');
display.classList.add('content');
let operators = document.querySelectorAll('.op');
let proNum = document.querySelector('.content');
let clear = document.querySelector('.clear');
let equal = document.querySelector('.equal');
let comma = document.querySelector('.comma');
let switchTo = document.querySelector('.change');
let operator = 0;
let value = 0;
let pool = 1;
let value2 = 0;
let valueFinal = 0;
let first = 1;
let commaOp = 1;
numbers.forEach(buttons => {
    buttons.addEventListener('click', () => {
        display.textContent += buttons.textContent;
        if(pool === 1) {
        value += buttons.textContent;
        }
        if(pool === 0){
            value2 += buttons.textContent;
            display.textContent = +value2;
        }
        
        screen.appendChild(display);
        
    });
});
operators.forEach(op => {
    op.addEventListener('click', () => {
        commaOp = 1;
        operator = op.textContent;
        if(first){
            pool = 0;
            first = 0;
        }
    });

});
clear.addEventListener('click', () =>{
    display.textContent = '';
    value = 0;
    operator = 0;
    pool = 1;
    value2 = 0;
    valueFinal = 0;
    first = 1;
});
equal.addEventListener('click', () => {
    value = operate(operator, value, value2);
    value2 = 0;
    display.textContent = value;
});
comma.addEventListener('click', () => {
    if(!value.includes('.')){
        
    display.textContent += '.';
    if(pool === 1){
        value += '.';
    }
    if(pool === 0){
        value2 += '.';
    }
    }
});
switchTo.addEventListener('click', () => {
    value *= -1;
    display.textContent = value;
})