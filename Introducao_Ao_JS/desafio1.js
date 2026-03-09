// primeiro eu vo importar o prompt-sync pra ler o que o usuário digita
const prompt = require('prompt-sync')();

// depois eu vo criar o objeto principal da instituição (tipo o coração do sistema)
const instituicao = {
    // isso daq é um array de alunos com suas informações
    alunos: [
        {
            nome: "Brayam",
            notas: [8.5, 7.0, 9.0, 8.0]
        },
        {
            nome: "B. Assolini",
            notas: [6.0, 5.5, 7.0, 6.5]
        },
        {
            nome: "Brayamnaldo",
            notas: [9.0, 8.5, 9.5, 10.0]
        },
        {
            nome: "Meu nome é brayam",
            notas: [4.5, 5.0, 6.0, 5.5]
        },
        {
            nome: "Eduardo",
            notas: [7.5, 8.0, 7.0, 8.5]
        }
    ],

    // essa função aq é pra calcular a média de um aluno (recebe um array de notas)
    calcularMedia: function(notas) {
        // usei map pra criar um array novo (mesmo sendo igual) e reduce pra somar
        const soma = notas.map(nota => nota).reduce((acc, nota) => acc + nota, 0);
        return soma / notas.length;
    },

    // função principal que busca o aluno e mostra os resultados
    buscarAluno: function(nomeBusca) {
        // usei map pra criar array de nomes em minusculo
        const nomesMinusculos = this.alunos.map(aluno => aluno.nome.toLowerCase());
        const nomeBuscaMinusculo = nomeBusca.toLowerCase();
        
        // findIndex pra achar a posição
        const indice = nomesMinusculos.findIndex(nome => nome === nomeBuscaMinusculo);
        
        // TERNÁRIO: se achou (indice diferente de -1) pega o aluno, senao null
        const alunoEncontrado = indice !== -1 ? this.alunos[indice] : null;

        // ver se achou o aluno
        if(alunoEncontrado === null) {
            console.log("\n Aluno não encontrado na base de dados.");
            console.log("Verifica se você digitou o nome direito");
            return;
        }

        // média
        const media = this.calcularMedia(alunoEncontrado.notas);
        
        // mostrar info
        console.log("\n" + "=".repeat(50));
        console.log(" DADOS DO ALUNO ENCONTRADO");
        console.log("=".repeat(50));
        console.log(` Nome: ${alunoEncontrado.nome}`);
        console.log(` Média final: ${media.toFixed(1)}`); // toFixed(1) mostra 1 casa decimal
        
        // TERNÁRIO no lugar do if/else
        console.log(media >= 7.0 ? " passou " : " reprovou ");
        
        console.log("=".repeat(50));
    },

    // função pra mostrar todos os alunos (tipo um extra)
    listarAlunos: function() {
        console.log("\n" + "=".repeat(50));
        console.log(" ALUNOS CADASTRADOS");
        console.log("=".repeat(50));
        
        // usei map pra criar a lista e forEach pra mostrar
        this.alunos.map((aluno, i) => `${i+1}. ${aluno.nome}`).forEach(aluno => console.log(aluno));
        
        console.log("=".repeat(50));
    }
};

// função 
function iniciarSistema() {
    console.log("\n" + "ronaldo".repeat(15));
    console.log(" PLATAFORMA ACADÊMICA");
    console.log("ronaldo".repeat(15));
    
    while(true) {
        console.log("\n--- MENU PRINCIPAL ---");
        console.log("1 - Consultar aluno");
        console.log("2 - Listar todos os alunos");
        console.log("3 - Sair do sistema");
        
        const opcao = prompt("\nDigite sua opção: ");
        
        switch(opcao) {
            case "1":
                console.log("\n--- CONSULTAR ALUNO ---");
                // troço de busca
                const nomeBusca = prompt("Digite o nome do aluno: ");
                instituicao.buscarAluno(nomeBusca);
                break;
                
            case "2":
                instituicao.listarAlunos();
                break;
                
            case "3":
                console.log("\n ciao ");
                return; // Sai da função
                
            default:
                console.log("\n inválido ");
        }
    }
}

//iniciar sistema
iniciarSistema();