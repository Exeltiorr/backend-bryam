const prompt = require('prompt-sync')({ sigint: true });

function executarPrograma() {
    console.log("=== MENU DE PROGRAMAS ===");
    console.log("1 - Contar até 20");
    console.log("2 - Mostrar números pares até um número");
    console.log("3 - Simulação de login");
    console.log("4 - Média de 10 notas");
    console.log("0 - Sair");
    
    const opcao = prompt("Escolha uma opção: ");
    
    switch(opcao) {
        case '1':
            programaContarAte20();
            break;
        case '2':
            programaNumerosPares();
            break;
        case '3':
            programaLogin();
            break;
        case '4':
            programaMediaNotas();
            break;
        case '0':
            console.log("Programa encerrado!");
            return;
        default:
            console.log("Opção inválida! Tente novamente.");
    }
    
    const continuar = prompt("\nDeseja executar outro programa? (s/n): ");
    if (continuar.toLowerCase() === 's') {
        executarPrograma();
    } else {
        console.log("Programa encerrado!");
    }
}

function programaContarAte20() {
    console.log("\n=== PROGRAMA 1: CONTAR ATÉ 20 ===");
    
    const numeros = [];
    
    for (let i = 1; i <= 20; i++) {
        numeros.push(i);
    }
    
    console.log("Contando de 1 até 20:");
    
    for (let i = 0; i < numeros.length; i++) {
        console.log(numeros[i]);
    }
}

function programaNumerosPares() {
    console.log("\n=== PROGRAMA 2: NÚMEROS PARES ===");
    
    const numero = parseInt(prompt("Digite um número: "));
    
    if (isNaN(numero) || numero < 0) {
        console.log("Por favor, digite um número válido maior ou igual a 0!");
        return;
    }
    
    const pares = [];
    
    for (let i = 0; i <= numero; i++) {
        if (i % 2 === 0) {
            pares.push(i);
        }
    }
    
    console.log(`Números pares de 0 até ${numero}:`);
    
    for (let i = 0; i < pares.length; i++) {
        console.log(pares[i]);
    }
    
    console.log(`Total de números pares: ${pares.length}`);
}

function programaLogin() {
    console.log("\n=== PROGRAMA 3: SIMULAÇÃO DE LOGIN ===");
    
    const usuarios = [
        { usuario: "admin", senha: "1234" },
        { usuario: "joao", senha: "joao123" },
        { usuario: "maria", senha: "maria456" },
        { usuario: "pedro", senha: "pedro789" }
    ];
    
    const tentativasMaximas = 3;
    let tentativas = 0;
    let loginSucesso = false;
    
    while (tentativas < tentativasMaximas && !loginSucesso) {
        const usuarioInput = prompt("Usuário: ");
        const senhaInput = prompt("Senha: ");
        
        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].usuario === usuarioInput && usuarios[i].senha === senhaInput) {
                loginSucesso = true;
                break;
            }
        }
        
        if (loginSucesso) {
            console.log(`Login realizado com sucesso! Bem-vindo, ${usuarioInput}!`);
        } else {
            tentativas++;
            const tentativasRestantes = tentativasMaximas - tentativas;
            
            if (tentativasRestantes > 0) {
                console.log(`Usuário ou senha incorretos! Tentativas restantes: ${tentativasRestantes}`);
            } else {
                console.log("Número máximo de tentativas excedido! Acesso bloqueado.");
            }
        }
    }
}

function programaMediaNotas() {
    console.log("\n=== PROGRAMA 4: MÉDIA DE 10 NOTAS ===");
    
    const notas = [];
    let soma = 0;
    
    console.log("Digite as 10 notas:");
    
    for (let i = 0; i < 10; i++) {
        let nota;
        let notaValida = false;
        
        while (!notaValida) {
            nota = parseFloat(prompt(`Digite a nota ${i + 1}: `));
            
            if (!isNaN(nota) && nota >= 0 && nota <= 10) {
                notaValida = true;
                notas.push(nota);
            } else {
                console.log("Nota inválida! Digite um número entre 0 e 10.");
            }
        }
    }
    
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    
    const media = soma / notas.length;
    
    console.log("\n=== RESULTADOS ===");
    console.log("Notas digitadas:");
    
    for (let i = 0; i < notas.length; i++) {
        console.log(`Nota ${i + 1}: ${notas[i].toFixed(1)}`);
    }
    
    console.log(`Soma das notas: ${soma.toFixed(1)}`);
    console.log(`Média das notas: ${media.toFixed(2)}`);
    
    if (media >= 6) {
        console.log("Situação: APROVADO!");
    } else {
        console.log("Situação: REPROVADO!");
    }
}

console.log("Para executar este programa, primeiro instale o prompt-sync:");
console.log("npm install prompt-sync\n");

executarPrograma();