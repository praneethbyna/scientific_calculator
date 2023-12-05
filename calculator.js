function appendNumber(number) {
    document.getElementById("inputField").value += number;
}

function appendOperator(operator) {
    const inputField = document.getElementById("inputField");
    const lastChar = inputField.value.slice(-1);
    if (['+', '-', '*', '/'].includes(lastChar)) {
        return; // Prevent consecutive operators
    }
    inputField.value += operator;
}

function clearInput() {
    document.getElementById("inputField").value = "";
}

