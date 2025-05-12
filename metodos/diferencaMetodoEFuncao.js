// Metodos: Funções associadas a objetos que conseguimos adicionar algumas

console.log('Olá Impressionador'); // Aqui o console é um objeto que é uma ferramenta nativa do javascript, então quando colocamos o .log é porque estamos registrando uma frase para imprimirmos no terminal.

console.error('Apresentou Erro!'); // Aqui irá retornar um registro de um erro

function saudacao(nome) {
  return `Olá, ${nome}`;
}

console.log(saudacao('Bárbara'));

const pessoa = {
    nome: "Ana",
    saudacao: function() {
        return `Olá, ${pessoa.nome}`;
    }
}

console.log(pessoa.saudacao());

// Função - O que é: Bloco de código independente - Exemplo: function somar(a, b) { return a + b; }
// Objeto - O que é: Coleção de dados e métodos	-  Exemplo: const carro = { marca: "Ford" }
// Método - O que é: Função dentro de um objeto	-  Exemplo: carro.ligar = function() { ... }