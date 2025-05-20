let produtos = ["Carrinho", "Boneca", "Bola"];

// .push() // ADICIONA um item no final da lista; É possível adicionar o tipo NUMBER também e também adicionar mais de um, basta colocar uma virgula
produtos.push("Navio"); 

// .unshift() // ADICIONA No inicio da lista o item é adicionado;
produtos.unshift("Video Game");

console.log(produtos);

// .pop // Remove o ÚLTIMO elemento
produtos.pop() // Aqui não precisa nem citar pois já remove automático

// .shift // Remove o PRIMEIRO elemento da lista
produtos.shift() // Não é necessário citar pois a remoção é automática

// Tipos de Métodos

let letras = ["d", "a", "i", "o", "m", 'p', 'n', 'd'];
let numeros = ['1', '6', '8', '9', '6', '3'];

// .sort(); // Irá organizar a NOSSA LISTA ALFABETICA EM ORDEM
letras.sort();
console.log(letras);

// Se usarmos o SORT para números ele vai organizar com todos os números que começam com 1, depois 2, e assim por diante, exemplo: 1, 10, 2, 3, 4, 44, 5...

// .reverse(); // Vai transformar a lista na ordem contrária.
letras.reverse();
console.log(letras);

let mesclaArray = letras.concat(numeros); // O exemplo usando o CONCAT é para concatenar uma informação, ou seja, aqui ele vai unir a lista de LETRAS e a lista de NÚMEROS com a última alteração que fizemos.( Já na ordem );
console.log(mesclaArray); 