function add(a, b) {
    return a + b;
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
function operate(op, a, b) {
    if(op === '+') 
    return add(a, b);
    else if(op === '-')
    return subtract(a, b);
    else if(op === '*')
    return multiply(a, b);
    else if(op === '/');
    return divide(a, b);  
}
let numbers = document.querySelectorAll('.num');
let screen = document.querySelector('.screen');
let display = document.createElement('div');
display.classList.add('content');
let operators = document.querySelectorAll('.op');
let proNum = document.querySelector('.content');
let clear = document.querySelector('.clear');
let pool = 0;
let value = 0;
numbers.forEach(buttons => {
    buttons.addEventListener('click', () => {
        display.textContent += buttons.textContent;
        value = buttons.textContent;
        screen.appendChild(display);
       
    });
});
operators.forEach(op => {
    op.addEventListener('click', () => {
        display.textContent += op.textContent;
        let value = buttons.textContent;
        screen.appendChild(display);
        
    });

});
clear.addEventListener('click', () =>{
    display.textContent = '';
});