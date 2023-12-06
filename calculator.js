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



function calculateResult() {
    const inputField = document.getElementById("inputField");
    const expression = inputField.value;
    try {
        const result = parseExpression(expression);
        inputField.value = result.toString();
    } catch (error) {
        inputField.value = "Error";
    }
}

function parseExpression(expr) {
    const tokens = expr.match(/(\d+\.?\d*|\+|\-|\*|\/)/g);
    if (!tokens) {
        throw new Error("Invalid Expression");
    }

    let total = parseFloat(tokens[0]);

    for (let i = 1; i < tokens.length; i += 2) {
        const operator = tokens[i];
        const nextNumber = parseFloat(tokens[i + 1]);

        switch (operator) {
            case '+':
                total += nextNumber;
                break;
            case '-':
                total -= nextNumber;
                break;
            case '*':
                total *= nextNumber;
                break;
            case '/':
                total /= nextNumber;
                break;
            default:
                throw new Error("Invalid Operator");
        }
    }
    return total;
}


