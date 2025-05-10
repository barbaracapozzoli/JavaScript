// Como executar funções: Exemplo com concatenação e não crases

function exibirDetalhes(nome, curso) {
  console.log('Professor: ' + nome + ' Curso: ' + curso);
}
exibirDetalhes('Thiago', 'Análise de Desenvolvimento de Sistemas');

function mensagem() {
  console.log('Imprimindo uma mensagem!');
}
mensagem();

// Na hora de chamar a função "function nomeFuncao(dados(PARÂMETRO)) {instrução}" - ESSES DADOS SÃO CHAMAOS DE PARÂMETRO. Ex:

function soma(numero1, numero2) {
  console.log(numero1 + numero2);
}

// Na hora de executar a função no terminal: nomeFunction(dados(ARGUMENTO)) - Chamada da função (executa o bloco de instruções;) - ESSE (DADOS) É CHAMADO DE ARGUMENTO. Ex:

soma(41, 85);

// Outro exemplo:

function calcularPrecoTotal(precoUnitario, quantidade){
    let total = precoUnitario * quantidade;
    console.log(`O total da sua compra é: ${total}`);
};

let camiseta = 30;
let quantidadeItem = 3;
calcularPrecoTotal(camiseta, quantidadeItem);
// OU
calcularPrecoTotal(30, 3);

// Quando falamos de dados nós falamos de parâmetros e argumentos, primeiro sendo referenciado quando construímos nossa função e outro é a referência do valor real que vamos chamar para executar nossa função.