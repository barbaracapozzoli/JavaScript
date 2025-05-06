let mensagem = "Olá impressionador!";
let preco = 50.0;
let logado = true;

// Undefined - Quando nosso programa não está conseguindo fazer a leitura de algum valor na nossa variável

// É o valor padrão atribuido pelo JavaScript para variáveis que não atribuímos valor a elas e também para funções que elas não retornam nenhum valor. É como se o Java estivesse falando que não tem o valor definido de forma correta. É um "Erro"

let produto;
let carrinho = undefined;
console.log(typeof produto);
console.log(typeof carrinho);

// Null - É uma ausência de valor porém nós utilizamos ele a um valor atribuido a uma variável que está vazia ou não possui um valor. Ex: uma variável "Lista" com valor "Null", quando uma lista está vazia mas podemos utilizar o programa para ir adicionando valores a essa lista.

// O IMPORTANTE É QUE TEM VALOR, tem como fazer uma verificação 

let lista = null;
console.log(lista);
console.log(typeof lista);