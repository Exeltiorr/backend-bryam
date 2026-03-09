const prompt = require('prompt-sync')();

const nota1 = Number(prompt('Digite a sua primeira nota: '));
const nota2 = Number(prompt('Digite a sua segunda nota: '));
const nota3 = Number(prompt('Digite a sua terceira nota: '));

const media = (nota1 + nota2 + nota3) / 3;
console.log(`Sua média foi: ${media.toFixed(2)}`);

(media < 6) ? console.log('tente melhor da próxima') : (media > 7) ? console.log('parabéns! passou!') : console.log('tente de novo na recuperação!')