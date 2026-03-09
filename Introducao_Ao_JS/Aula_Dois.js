const prompt = require('prompt-sync')();

const nota1 = Number(prompt('Digite a sua primeira nota: '));
const nota2 = Number(prompt('Digite a sua segunda nota: '));
const nota3 = Number(prompt('Digite a sua terceira nota: '));

const media = (nota1 + nota2 + nota3) / 3;
console.log(`Sua média foi: ${media.toFixed(2)}`);

let status;
if (media <= 5) {
    status = "reprovado";
} else if (media >= 5.1 && media <= 6.9) {
    status = "recuperacao";
} else {
    status = "aprovado";
}

switch (status) {
    case "reprovado":
        console.log("Você está REPROVADO");
        break;
    case "recuperacao":
        console.log("Você está em RECUPERAÇÃO");
        break;
    case "aprovado":
        console.log("Você está APROVADO");
        break;
    default:
        console.log("Impossível calcular");
}