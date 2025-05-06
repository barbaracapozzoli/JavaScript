// String - O String é imutável mas é possível imprimir uma alteração, mas não será executada. É possível manipular utilizando métodos.

// "texto" - string;
// 'Criar uma mensagem' - string simples;
// `Cria mais um texto` - string template;

let mensagem = "Olá, ";
let nome = 'Paulo';
let mensagem3 = 'Bem vindo ao curso!';
let mensagem2 = `Olá, ${nome}. ${mensagem3}`;

console.log(mensagem + nome + ". Bem vindo ao curso!");
console.log(mensagem2);

// Numbers - Inteiro positivo, inteiro negativo, número decimal (sempre utilizando .), infinity e NaN (Não é um número)

let numero = 30;
let numero1 = -56;
let decimal = 6.78;
let numero10 = 10;
let string = "10"; // ATENÇÃO - STRING É ENTRE "" OU SEJA, NÃO É CONSIDERADO NÚMERO

console.log(numero, numero1, decimal);
console.log(numero10);
console.log(string)
// OU
console.log(string + numero10);
