function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (value === '+/-') {
        display.value = display.value.startsWith('-') ? display.value.slice(1) : '-' + display.value;
    } else {
        display.value += value;
    }
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value.replace('×', '*').replace('÷', '/'));
    } catch (error) {
        display.value = 'Error';
    }
}
