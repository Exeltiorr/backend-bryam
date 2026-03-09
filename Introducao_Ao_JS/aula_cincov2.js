const prompt = require("prompt-sync")();

let saldo = 0;

function depositar(valor) {
    saldo += valor;
    console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${saldo}`);
}

function sacar(valor) {
    if (valor > saldo) {
        console.log("Saldo insuficiente!");
    } else {
        saldo -= valor;
        console.log(`Saque de R$${valor} realizado. Saldo atual: R$${saldo}`);
    }
}

function verSaldo() {
    console.log(`Saldo atual: R$${saldo}`);
}

function menuBanco() {
    let ativo = true;
    while (ativo) {
        console.log("\n=== Menu Banco ===");
        console.log("1 - Depositar");
        console.log("2 - Sacar");
        console.log("3 - Ver saldo");
        console.log("4 - Sair");

        let opcao = prompt("Escolha uma opção: ");
        switch(opcao) {
            case "1":
                let valorDeposito = parseFloat(prompt("Digite o valor do depósito: "));
                depositar(valorDeposito);
                break;
            case "2":
                let valorSaque = parseFloat(prompt("Digite o valor do saque: "));
                sacar(valorSaque);
                break;
            case "3":
                verSaldo();
                break;
            case "4":
                ativo = false;
                console.log("Encerrando sistema bancário...");
                break;
            default:
                console.log("Opção inválida!");
        }
    }
}

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

function menuCalculadora() {
    let ativo = true;
    while (ativo) {
        console.log("\n=== Menu Calculadora ===");
        console.log("1 - Soma");
        console.log("2 - Subtração");
        console.log("3 - Multiplicação");
        console.log("4 - Divisão");
        console.log("5 - Sair");

        let opcao = prompt("Escolha uma opção: ");
        switch(opcao) {
            case "1":
                let a1 = parseFloat(prompt("Digite o primeiro número: "));
                let b1 = parseFloat(prompt("Digite o segundo número: "));
                console.log(`Resultado: ${soma(a1, b1)}`);
                break;
            case "2":
                let a2 = parseFloat(prompt("Digite o primeiro número: "));
                let b2 = parseFloat(prompt("Digite o segundo número: "));
                console.log(`Resultado: ${subtracao(a2, b2)}`);
                break;
            case "3":
                let a3 = parseFloat(prompt("Digite o primeiro número: "));
                let b3 = parseFloat(prompt("Digite o segundo número: "));
                console.log(`Resultado: ${multiplicacao(a3, b3)}`);
                break;
            case "4":
                let a4 = parseFloat(prompt("Digite o primeiro número: "));
                let b4 = parseFloat(prompt("Digite o segundo número: "));
                console.log(`Resultado: ${divisao(a4, b4)}`);
                break;
            case "5":
                ativo = false;
                console.log("Encerrando calculadora...");
                break;
            default:
                console.log("Opção inválida!");
        }
    }
}

function menuPrincipal() {
    let ativo = true;
    while (ativo) {
        console.log("\n=== Menu Principal ===");
        console.log("1 - Sistema Bancário");
        console.log("2 - Calculadora");
        console.log("3 - Sair");

        let opcao = prompt("Escolha uma opção: ");
        switch(opcao) {
            case "1":
                menuBanco();
                break;
            case "2":
                menuCalculadora();
                break;
            case "3":
                ativo = false;
                console.log("Encerrando programa...");
                break;
            default:
                console.log("Opção inválida!");
        }
    }
}

menuPrincipal();
