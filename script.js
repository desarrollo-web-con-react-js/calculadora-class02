// calculadora script.js

function calcular(operacion) {
    const operand1 = parseFloat(document.getElementById('operand1').value);
    const operand2 = parseFloat(document.getElementById('operand2').value);
    let result = 0;

    switch (operacion) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            if (operand2 !== 0) {
                result = operand1 / operand2;
            } else {
                alert("No se puede dividir por cero.");
            }
            break;
    }

    document.getElementById('result').textContent = result;
}
