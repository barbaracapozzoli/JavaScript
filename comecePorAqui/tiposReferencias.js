// Tipos Referências - Objetos, Arrays e Funções; Diferentes tipos primitivos, como numbers, strings e booleans são armazenados e manipulados de forma diferente. Quando são esses 3 tipos diferentes, a variável terá uma referência ao local na memória onde os dados estarão armazenados.

// Os tipos primitivos serão imutáveis, ou seja, os valores não podem ser alterados uma vez que foram criados. 

// Os tipos referências serão mutáveis. Apontam um "endereço" que aponta onde o valor está

// Exemplos GPT:

// Parte 1: Tipo primitivo (valor simples)

let a = 5;
let b = a;
b = 10;

console.log(a); // 5
console.log(b); // 10

// 🧠 O que aconteceu: a é um número (um tipo primitivo) Quando você faz let b = a, o JavaScript copia o valor Depois, mudar b não muda a, porque são valores separados

// 📦 Parte 2: Tipo de referência (array ou objeto)

let a = [1, 2, 3];
let b = a;
b.push(4);

console.log(a); // [1, 2, 3, 4]
console.log(b); // [1, 2, 3, 4]

// 🧠 O que aconteceu aqui: a é um array (um tipo de referência). Quando você faz let b = a, o JavaScript não copia o array, só copia o endereço da memória. Ou seja: a e b estão apontando para o mesmo lugar. Quando você faz b.push(4), você está mexendo no mesmo lugar que a também usa


