// Funções matemáticas
function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        return "Erro: divisão por zero!";
    }
    return a / b;
}

// Loop principal da calculadora
let continuar = true;

while (continuar) {
    let operacao = prompt("Escolha uma operação: soma, subtração, multiplicação, divisão ou sair").toLowerCase();

    if (operacao === "sair") {
        continuar = false;
        alert("Até a próxima!");
        break;
    }

    let num1 = parseFloat(prompt("Digite o primeiro número:"));
    let num2 = parseFloat(prompt("Digite o segundo número:"));

    let resultado;

    switch (operacao) {
        case "soma":
            resultado = soma(num1, num2);
            break;
        case "subtração":
        case "subtracao":
            resultado = subtracao(num1, num2);
            break;
        case "multiplicação":
        case "multiplicacao":
            resultado = multiplicacao(num1, num2);
            break;
        case "divisão":
        case "divisao":
            resultado = divisao(num1, num2);
            break;
        default:
            alert("Operação inválida. Tente novamente.");
            continue;
    }

    alert(`O resultado da operação ${operacao} é: ${resultado}`);
}
