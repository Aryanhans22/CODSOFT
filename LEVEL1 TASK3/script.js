const display = document.getElementById('calc-display');

function appendNumber(number) {
    if (display.value === '0') {
        display.value = number;
    } else {
        display.value += number;
    }
}

function appendOperator(operator) {
    display.value += ' ' + operator + ' ';
}

function deleteNumber() {
    display.value = display.value.toString().slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value.replace('x', '*').replace(',', ''));
    } catch (e) {
        display.value = 'Error';
    }
}

function resetCalculator() {
    display.value = '0';
}
resetCalculator();