const prompt = require("prompt-sync")();

let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    cor: "Prata"
};

console.log("=== Dados do Carro ===");
for (let chave in carro) {
    console.log(`${chave}: ${carro[chave]}`);
}

function criarPessoa(nome, idade, cidade) {
    return {
        nome: nome,
        idade: idade,
        cidade: cidade
    };
}

let nomePessoa = prompt("Digite o nome da pessoa: ");
let idadePessoa = prompt("Digite a idade: ");
let cidadePessoa = prompt("Digite a cidade: ");

let pessoa = criarPessoa(nomePessoa, idadePessoa, cidadePessoa);

console.log("\n=== Dados da Pessoa ===");
for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}

let jogo = {
    jogador1: { nome: prompt("Nome do Jogador 1: "), cor: prompt("Cor do time do Jogador 1: "), pontos: 0 },
    jogador2: { nome: prompt("Nome do Jogador 2: "), cor: prompt("Cor do time do Jogador 2: "), pontos: 0 },
    ativo: true
};

function mostrarPlacar() {
    console.log(`\n${jogo.jogador1.nome} (${jogo.jogador1.cor}) - ${jogo.jogador1.pontos}`);
    console.log(`${jogo.jogador2.nome} (${jogo.jogador2.cor}) - ${jogo.jogador2.pontos}`);
}

function menu() {
    while (jogo.ativo) {
        let opcao = prompt("\nEscolha uma opção:\n1 - Ponto Jogador 1\n2 - Ponto Jogador 2\n3 - Encerrar Jogo\n");
        switch(opcao) {
            case "1":
                jogo.jogador1.pontos++;
                mostrarPlacar();
                break;
            case "2":
                jogo.jogador2.pontos++;
                mostrarPlacar();
                break;
            case "3":
                jogo.ativo = false;
                console.log("Jogo encerrado");
                mostrarPlacar();
                break;
            default:
                console.log("Opção inválida");
        }
    }
}

console.log("\n=== Jogo de Ping Pong ===");
mostrarPlacar();
menu();