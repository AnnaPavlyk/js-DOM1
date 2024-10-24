document.getElementById('add').addEventListener('click', () => calculate('+'));
document.getElementById('subtract').addEventListener('click', () => calculate('-'));
document.getElementById('multiply').addEventListener('click', () => calculate('*'));
document.getElementById('divide').addEventListener('click', () => calculate('/'));

function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultElement = document.getElementById('result');
    const errorElement = document.getElementById('error');

    resultElement.textContent = '';
    errorElement.textContent = '';

    if (isNaN(num1) || isNaN(num2)) {
        errorElement.textContent = 'Введіть правильні числа';
        return;
    }

    let result;

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                errorElement.textContent = 'Ділення на нуль неможливе';
                return;
            }
            result = (num1 / num2).toFixed(2); 
            break;
        default:
            return;
    }

    resultElement.textContent = `Результат: ${result}`;
}
