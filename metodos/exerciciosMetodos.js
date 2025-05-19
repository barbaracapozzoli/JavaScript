// Exercícios - Métodos nativos String - Lembre-se de que os exercícios podem ser resolvidos com diferentes abordagens, e nosso gabarito é apenas uma forma de implementação.

// Exercício 1: Dada a string 'javascript é divertido', converta a palavra 'javascript' para letras maiúsculas.
// Exemplo de Saída: // “JAVASCRIPT é divertido”

const frase = 'Javascript é divertido';
const palavra = 'Javascript'; // Aqui eu defini a palavra que quero fazer o Uppercase
console.log(frase.replace(palavra, palavra.toUpperCase())); // Comando replace para localizar e substituir: 1° "frase.replace" porque o que queremos substituir está dentro de frase, 2° Definimos o "search" para procurar o que queremos substituir, "palavra". 3° Definimos o "replaceWith" que é o substituir por, e é para substituir por "palavra.toUpperCase"

// Exercício 2: Dada a string "Aprendendo Javascript", extraia a palavra "Aprendendo" e, em seguida, converta essa palavra para letras minúsculas.
// Exemplo de Saída: // “ aprendendo”

const string = 'APRENDENDO Javascript';
const conversor = string.slice(0, 10);
console.log(conversor);
console.log(conversor.replace(conversor, conversor.toLowerCase()));

// Exercício 3: Dada a string "Aprendendo Python", extraia a palavra "Python" e substitua por “Javascript”.
// Exemplo de Saída: // “Aprendendo Javascript”

const atividade = 'Aprendendo Python';
const linguagem = atividade.slice(11);
console.log(linguagem);
console.log(atividade.replace(linguagem, 'JavaScript'));

// Exercício 4: Dada a string 'cadeira, mesa, sofá, armário', divida essa string em um array de produtos e remova o item 'sofá' da lista.
// Exemplo de Saída: “["cadeira", "mesa", "armário"]”

let loja = 'cadeira, mesa, sofá, armário';
let moveis = loja.split(', ');
console.log(moveis);
moveis.splice(2, 1);
console.log(moveis);

moveis.splice(moveis.indexOf('armário'), 1); // Aqui é uma outra forma de retirarmos um elemento da lista, usando o indexOF(o elemento que queremos retirar), 1(Simbolizando que é um elemento)
console.log(moveis);
